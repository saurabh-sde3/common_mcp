import os from "node:os";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer(
  {
    name: "common-mcp-service",
    version: "1.0.0"
  }
);

server.registerTool(
  "get_basic_details",
  {
    description: "Returns basic system and runtime details.",
    inputSchema: {
      includeHostname: z.boolean().optional()
    }
  },
  async ({ includeHostname }) => {
    const details = {
      platform: process.platform,
      nodeVersion: process.version,
      architecture: process.arch,
      currentTimeIso: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime())
    };

    if (includeHostname) {
      details.hostname = os.hostname();
    }

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(details, null, 2)
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
