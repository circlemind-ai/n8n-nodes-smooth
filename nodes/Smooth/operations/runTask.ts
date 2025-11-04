import type { INodeProperties } from 'n8n-workflow';

export const runTaskDescription: INodeProperties[] = [
	{
		displayName: 'Task',
		name: 'task',
		type: 'string',
		typeOptions: {
			rows: 3,
		},
		default: '',
		required: true,
		description: 'The task to run in natural language',
		routing: {
			send: {
				type: 'body',
				property: 'task',
			},
		},
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		options: [
			{
				displayName: 'Allowed URLs',
				name: 'allowed_urls',
				type: 'string',
				typeOptions: {
					multipleValues: true,
				},
				default: [],
				description: 'URL patterns with wildcards (e.g., https://*example.com/*) that the agent is allowed to visit',
				routing: {
					send: {
						type: 'body',
						property: 'allowed_urls',
					},
				},
			},
			{
				displayName: 'Certificates',
				name: 'certificates',
				type: 'json',
				default: '',
				description: 'Array of base64-encoded p12 client certificates',
				routing: {
					send: {
						type: 'body',
						property: 'certificates',
						value: '={{ $value ? JSON.parse($value) : undefined }}',
					},
				},
			},
			{
				displayName: 'Device',
				name: 'device',
				type: 'options',
				options: [
					{
						name: 'Desktop',
						value: 'desktop',
					},
					{
						name: 'Mobile',
						value: 'mobile',
					},
				],
				default: 'desktop',
				description: 'The device type to use for the task',
				routing: {
					send: {
						type: 'body',
						property: 'device',
					},
				},
			},
			{
				displayName: 'Enable Recording',
				name: 'enable_recording',
				type: 'boolean',
				default: true,
				description: 'Whether to record a video of the execution',
				routing: {
					send: {
						type: 'body',
						property: 'enable_recording',
					},
				},
			},
			{
				displayName: 'Experimental Features',
				name: 'experimental_features',
				type: 'json',
				default: '',
				description: 'Dictionary of experimental feature toggles',
				routing: {
					send: {
						type: 'body',
						property: 'experimental_features',
						value: '={{ $value ? JSON.parse($value) : undefined }}',
					},
				},
			},
			{
				displayName: 'Max Steps',
				name: 'max_steps',
				type: 'number',
				default: 32,
				typeOptions: {
					minValue: 2,
					maxValue: 128,
				},
				description: 'Maximum number of steps the agent can take (2-128)',
				routing: {
					send: {
						type: 'body',
						property: 'max_steps',
					},
				},
			},
			{
				displayName: 'Metadata',
				name: 'metadata',
				type: 'json',
				default: '',
				description: 'Dictionary of variables/parameters for the agent',
				routing: {
					send: {
						type: 'body',
						property: 'metadata',
						value: '={{ $value ? JSON.parse($value) : undefined }}',
					},
				},
			},
			{
				displayName: 'Profile ID',
				name: 'profile_id',
				type: 'string',
				default: '',
				description: 'Browser profile ID for maintaining state across tasks',
				routing: {
					send: {
						type: 'body',
						property: 'profile_id',
					},
				},
			},
			{
				displayName: 'Profile Read Only',
				name: 'profile_read_only',
				type: 'boolean',
				default: false,
				description: 'Whether to load the profile without saving changes',
				routing: {
					send: {
						type: 'body',
						property: 'profile_read_only',
					},
				},
			},
			{
				displayName: 'Proxy Password',
				name: 'proxy_password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				description: 'Password for proxy authentication',
				routing: {
					send: {
						type: 'body',
						property: 'proxy_password',
					},
				},
			},
			{
				displayName: 'Proxy Server',
				name: 'proxy_server',
				type: 'string',
				default: '',
				description: 'Proxy server URL (must include protocol: http:// or https://)',
				routing: {
					send: {
						type: 'body',
						property: 'proxy_server',
					},
				},
			},
			{
				displayName: 'Proxy Username',
				name: 'proxy_username',
				type: 'string',
				default: '',
				description: 'Username for proxy authentication',
				routing: {
					send: {
						type: 'body',
						property: 'proxy_username',
					},
				},
			},
			{
				displayName: 'Response Model',
				name: 'response_model',
				type: 'json',
				default: '',
				description: 'JSON schema for the desired output structure',
				routing: {
					send: {
						type: 'body',
						property: 'response_model',
						value: '={{ $value ? JSON.parse($value) : undefined }}',
					},
				},
			},
			{
				displayName: 'Starting URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'The starting URL for the task. If not provided, starts with a blank page.',
				routing: {
					send: {
						type: 'body',
						property: 'url',
					},
				},
			},
			{
				displayName: 'Stealth Mode',
				name: 'stealth_mode',
				type: 'boolean',
				default: true,
				description: 'Whether to activate browser stealth mode',
				routing: {
					send: {
						type: 'body',
						property: 'stealth_mode',
					},
				},
			},
			{
				displayName: 'Use Adblock',
				name: 'use_adblock',
				type: 'boolean',
				default: true,
				description: 'Whether to enable ad-blocking for better performance',
				routing: {
					send: {
						type: 'body',
						property: 'use_adblock',
					},
				},
			},
		],
	},
];
