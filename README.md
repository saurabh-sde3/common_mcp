# common_mcp

Simple MCP service that exposes one tool: `get_basic_details`.

## What it does

- Runs as an MCP server over stdio
- Provides a single tool: `get_basic_details`
- Returns platform, Node version, architecture, current time, and uptime
- Optionally returns hostname if `includeHostname: true`

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

## MCP client config

Use `node` directly so the client can launch the stdio server.

### Cursor

Add this under MCP settings (or your MCP config file):

```json
{
  "mcpServers": {
    "common_mcp": {
      "command": "node",
      "args": [
        "/Users/saurabhverma/Desktop/vibecoding/projects/common_mcp/server.js"
      ]
    }
  }
}
```

### Claude Desktop

Put this in `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "common_mcp": {
      "command": "node",
      "args": [
        "/Users/saurabhverma/Desktop/vibecoding/projects/common_mcp/server.js"
      ]
    }
  }
}
```

## Example MCP tool call

Tool name: `get_basic_details`

Input:

```json
{
  "includeHostname": true
}
```

## Signature

Saurabh Verma
