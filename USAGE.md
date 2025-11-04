# Smooth n8n Node - Usage Guide

## Installation

1. Build the node:
   ```bash
   npm run build
   ```

2. Link the node locally for testing:
   ```bash
   npm link
   ```

3. In your n8n installation directory:
   ```bash
   npm link n8n-nodes-smooth
   ```

4. Restart n8n

## Configuration

### Credentials Setup

1. In n8n, go to **Credentials** → **New**
2. Search for "Smooth API"
3. Enter your Smooth API key
4. Test the connection
5. Save

### Node Configuration

1. Add the **Smooth** node to your workflow
2. Select your Smooth API credentials
3. Configure the task:
   - **Task** (required): Describe what you want the AI browser agent to do in natural language
   - **Additional Options**:
     - **Starting URL**: The URL to start from (optional)
     - **Device**: Desktop or Mobile
     - **Max Steps**: Maximum number of steps (2-128, default 32)
     - **Enable Recording**: Whether to record video (default true)
     - And many more options...

## How It Works

1. **Task Submission**: The node submits your task to the Smooth API via POST `/task`
2. **Automatic Polling**: The node automatically polls the task status every 5 seconds
3. **Completion**: When the task is done/failed/cancelled, the node returns the result
4. **Timeout**: Maximum wait time is 10 minutes (120 attempts × 5 seconds)

## Output

The node returns a complete task object including:
- `id`: Task identifier
- `status`: Final status (done, failed, or cancelled)
- `output`: Task results/data
- `recording_url`: Link to execution video
- `downloads_url`: Link to any files generated
- `live_url`: Link to view the task interactively
- `credits_used`: Credits consumed
- `credits_balance`: Remaining credits

## Example Task Descriptions

- "Go to example.com and extract the main heading"
- "Search for 'n8n automation' on Google and get the top 3 results"
- "Fill out the contact form on example.com with name: John, email: john@example.com"
- "Navigate to GitHub and get the number of stars on the n8n/n8n repository"

## Troubleshooting

### "No task ID returned from initial request"

This error means the initial API request didn't return a valid response. Check:
1. Your API key is correct and active
2. You have sufficient credits in your Smooth account
3. The Smooth API is accessible from your n8n instance
4. Check the full error message for the actual response received

### Task timeout

If tasks consistently timeout:
1. Increase the task complexity allowance by setting a higher `max_steps`
2. Simplify your task description
3. Check if the target website is accessible and responsive

## API Documentation

For more information about the Smooth API:
- https://docs.smooth.sh/api-reference/agent/run-task
- https://docs.smooth.sh/api-reference/agent/get-task
