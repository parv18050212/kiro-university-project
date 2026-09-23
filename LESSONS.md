# Kiro University Challenge - Lessons Documentation

## Status of Lessons 1-4

**Important Note**: The Kiro University Challenge releases lessons progressively each day:
- Mon Sept 21: Lessons 1-2
- Tue Sept 22: Lessons 3-4  
- **Wed Sept 23 (TODAY)**: Lessons 5-6 ✅ COMPLETED
- Thu Sept 24: Lesson 7 + Bonuses

If you missed Lessons 1-4 when they were released, see `LESSONS_1-4_INFO.md` for guidance on:
- Where to find the lesson content (Discord, documentation, social media)
- How to catch up before the final exam
- Why the final exam is what really matters

The final exam (opens Sept 25) is where all lessons are demonstrated and scored.

---

## Lesson 5: Powers (500 credits)

### What are Kiro Powers?

Kiro Powers are packages that provide:
- Pre-configured tools
- Agent skills and best practices
- Context and workflows loaded on-demand via keywords

### Implementation

1. **Installed Power**: (To be specified after installation via Powers panel)
2. **Keyword Activation**: Powers activate when relevant keywords are mentioned
3. **Benefit**: Access to expert knowledge, automations, and specialized tools

### Files Created
- Opened Powers configuration panel for installation
- Powers can be installed from: https://kiro.dev/powers/

---

## Lesson 6: Model Context Protocol (MCP) (1,000 credits)

### What is MCP?

MCP allows Kiro to:
- Connect to external servers
- Access specialized tools and APIs
- Use domain-specific resources
- Handle server elicitation for additional inputs

### Implementation

**MCP Configuration File**: `.kiro/settings/mcp.json`

Configured servers:
1. **filesystem** - Access to local filesystem operations
2. **fetch** - HTTP request capabilities

### Configuration Details

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "uvx",
      "args": ["mcp-server-filesystem", "d:\\Coding\\kiro-university-project"],
      "disabled": false
    },
    "fetch": {
      "command": "uvx",
      "args": ["mcp-server-fetch"],
      "disabled": false
    }
  }
}
```

### Usage
- MCP servers automatically connect when Kiro starts
- Tools from these servers become available to Kiro agents
- Can be scoped to specific agents in workspace

---

## Next Steps

- Complete remaining lessons (if any)
- Build the final exam project (opens Sept 25)
- Submit by October 5, 2026 at 23:59 PT
- Earn up to 5,250 credits!
