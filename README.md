# n8n-nodes-smooth

This is an n8n community node. It lets you use [Smooth](https://smooth.sh) - an AI browser agent - in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

### Community Node Installation

In n8n, go to **Settings** → **Community Nodes** → **Install** and enter:

```
n8n-nodes-smooth
```

## Operations

### Run Task

Execute a task in natural language using the Smooth AI browser agent. The node automatically polls for task completion.

**Required Parameters:**
- **Task**: Natural language description of what you want the AI agent to do

**Optional Parameters:**
- **Starting URL**: The URL to start from (optional, starts with blank page if not provided)
- **Device**: Desktop or Mobile (default: Desktop)
- **Max Steps**: Maximum number of steps the agent can take (2-128, default: 32)
- **Response Model**: JSON schema for structured output
- **Metadata**: Dictionary of variables/parameters for the agent
- **Allowed URLs**: URL patterns with wildcards that the agent can visit
- **Enable Recording**: Record video of execution (default: true)
- **Profile ID**: Browser profile for maintaining state across tasks
- **Profile Read Only**: Load profile without saving changes
- **Stealth Mode**: Activate browser stealth mode (default: true)
- **Use Adblock**: Enable ad-blocking (default: true)
- **Proxy Settings**: Server, username, password
- **Certificates**: Base64-encoded p12 client certificates
- **Experimental Features**: Feature toggles

**Output:**
- Task ID and status
- Task output/results
- Recording URL (video of execution)
- Downloads URL (any files generated)
- Live URL (interactive task viewing)
- Credits used and remaining balance

## Credentials

You need a Smooth API key to use this node.

### Getting Your API Key

1. Sign up for a [Smooth account](https://smooth.sh)
2. Navigate to your [API settings](https://app.smooth.sh/settings/api)
3. Generate a new API key
4. Copy the key

### Adding Credentials to n8n

1. In n8n, go to **Credentials** → **New**
2. Search for "Smooth API"
3. Enter your API key
4. Test the connection
5. Save

## Compatibility

Compatible with n8n@1.60.0 or later

## Usage

### Example Tasks

The Smooth node can automate any web-based task. Here are some examples:

**Data Extraction:**
```
Go to example.com and extract all product names and prices
```

**Web Research:**
```
Search Google for "n8n automation tools" and get the top 5 results with titles and URLs
```

**Form Filling:**
```
Fill out the contact form on example.com with name: John Doe, email: john@example.com, message: Test message
```

**Social Media:**
```
Go to Twitter, search for #n8n, and get the latest 10 tweets
```

**E-commerce:**
```
Add item SKU-12345 to cart on example-shop.com and proceed to checkout
```

### How It Works

1. **Task Submission**: The node submits your task to the Smooth API
2. **Automatic Polling**: Polls the task status every 5 seconds
3. **Completion**: Returns results when the task is done/failed/cancelled
4. **Timeout**: Maximum wait time is 10 minutes

### Response Format

The node returns the complete task object including:
```json
{
  "id": "task-id",
  "status": "done",
  "output": { ... },
  "recording_url": "https://...",
  "downloads_url": "https://...",
  "live_url": "https://...",
  "credits_used": 10,
  "credits_balance": 990,
  "device": "desktop",
  "created_at": 1234567890
}
```

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Smooth Documentation](https://docs.smooth.sh)
* [Smooth API Reference](https://docs.smooth.sh/api-reference)
* [GitHub Repository](https://github.com/circlemind-ai/n8n-nodes-smooth)
