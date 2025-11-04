import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SmoothApi implements ICredentialType {
	name = 'smoothApi';

	displayName = 'Smooth API';

	icon: Icon = 'file:../icons/smooth.svg';

	documentationUrl = 'https://docs.smooth.sh/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				apikey: '={{$credentials?.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.smooth.sh/api/v1',
			url: '/task',
			method: 'POST',
			body: {
				task: 'test connection',
			},
		},
	};
}
