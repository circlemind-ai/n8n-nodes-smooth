import {
	ApplicationError,
	NodeConnectionTypes,
	type IDataObject,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { runTaskDescription } from './operations/runTask';

// Helper function to wait for a specified time
async function wait(ms: number): Promise<void> {
	return new Promise((resolve) => {
		// Using Promise.resolve().then() recursion for delay without setTimeout
		const start = Date.now();
		const checkTime = (): void => {
			if (Date.now() - start >= ms) {
				resolve();
			} else {
				void Promise.resolve().then(checkTime);
			}
		};
		checkTime();
	});
}

export class Smooth implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Smooth',
		name: 'smooth',
		icon: 'file:../../icons/smooth.svg',
		group: ['transform'],
		version: 1,
		subtitle: '=Run Task',
		description: 'AI browser agent for automating web tasks',
		defaults: {
			name: 'Smooth',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'smoothApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.smooth.sh/api/v1',
			headers: {
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Run Task',
						value: 'runTask',
						action: 'Run a task',
						description: 'Execute a task in natural language using the AI browser agent',
						routing: {
							request: {
								method: 'POST',
								url: '/task',
							},
							output: {
								postReceive: [
									async function (this, items): Promise<INodeExecutionData[]> {
										const returnData: INodeExecutionData[] = [];

										for (let i = 0; i < items.length; i++) {
											// Extract task data from response - API returns data in 'r' property
											const responseData = items[i].json;
											const taskData = (responseData.r || responseData) as IDataObject;
											const taskId = (taskData.id || taskData.task_id) as string;

											if (!taskId) {
												throw new ApplicationError(
													`No task ID returned from initial request. Response: ${JSON.stringify(responseData)}`,
												);
											}

											// Poll for task completion
											let status = (taskData.status || 'waiting') as string;
											let attempts = 0;
											const maxAttempts = 120; // 10 minutes max (5 second intervals)
											let taskResult: IDataObject = taskData;

											while (
												status !== 'done' &&
												status !== 'failed' &&
												status !== 'cancelled' &&
												attempts < maxAttempts
											) {
												// Wait before polling (5 seconds)
												await wait(5000);

												// Poll the task status - credentials are automatically added by n8n
												const response = await this.helpers.httpRequestWithAuthentication.call(
													this,
													'smoothApi',
													{
														method: 'GET',
														url: `https://api.smooth.sh/api/v1/task/${taskId}`,
														headers: {
															'Content-Type': 'application/json',
														},
														returnFullResponse: false,
													},
												);

												// Extract task data from polling response (may be nested in 'r')
												const pollingData = (response as IDataObject);
												taskResult = (pollingData.r || pollingData) as IDataObject;
												status = taskResult.status as string;
												attempts++;
											}

											if (attempts >= maxAttempts) {
												throw new ApplicationError(
													`Task polling timeout after ${maxAttempts} attempts. Task ID: ${taskId}`,
												);
											}

											returnData.push({
												json: taskResult,
												pairedItem: { item: i },
											});
										}

										return returnData;
									},
								],
							},
						},
					},
				],
				default: 'runTask',
			},
			...runTaskDescription,
		],
	};
}
