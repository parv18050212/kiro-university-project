# Lesson 5: Kiro Powers - Postman Power Demonstration

## Power Installed: Postman

**Keywords**: postman, api, testing, collections, rest, http, automation

### What is the Postman Power?

The Postman Power enables API testing and collection management directly within Kiro. It provides:
- Workspace creation and management
- Collection and request management
- Environment variable handling
- Mock server creation
- API specification management
- Automated test execution

### How It Works

The power activates automatically when keywords like "postman", "api", "testing", or "collections" are mentioned in prompts. It connects to Postman's hosted MCP server via OAuth authentication.

### Demonstration

#### Step 1: Get Authenticated User Information ✅

Successfully connected to Postman via OAuth and retrieved user information:

\`\`\`json
{
  "user": {
    "id": 32160969,
    "username": "supply-geologist-83272532",
    "email": "parvagarwal73@gmail.com",
    "fullName": "Parv Agarwal",
    "teamId": 19190732,
    "teamName": "supply-geologist-83272532's Team",
    "roles": ["admin", "billing", "user"]
  }
}
\`\`\`

#### Step 2: List Available Workspaces ✅

Found 1 personal workspace:

| Workspace Name | Type | Visibility | Created |
|---------------|------|-----------|---------|
| My Workspace | team | personal | 2024-01-05 |

#### Step 3: Power Activation via Keywords ✅

The Postman power was activated in this session simply by mentioning:
- "postman" - The power's primary keyword
- "api testing" - Related functionality keyword
- "collections" - Feature-specific keyword

### Available Tools (Minimal Mode)

The power provides 40 essential tools grouped by functionality:

**Workspace Management**: createWorkspace, getWorkspace, getWorkspaces, updateWorkspace

**Collection Management**: createCollection, getCollection, getCollections, putCollection, duplicateCollection

**Request Management**: createCollectionRequest, createCollectionResponse, updateCollectionRequest

**Environment Management**: createEnvironment, getEnvironment, getEnvironments, putEnvironment

**Mock Servers**: createMock, getMock, getMocks, updateMock, publishMock

**API Specs**: createSpec, getSpec, getAllSpecs, getSpecDefinition, updateSpecProperties

**Testing**: runCollection - Execute collections with automated tests

### Practical Use Cases

1. **Automated Testing**: Run Postman collections as part of CI/CD
2. **API Documentation**: Generate collections from OpenAPI specs
3. **Mock Servers**: Create mock endpoints for development
4. **Environment Management**: Manage different API configurations
5. **Test Automation**: Execute and validate API responses

### Hook Integration

A hook was created (`.kiro/hooks/api-postman-testing.kiro.hook`) that automatically triggers Postman testing when API files are edited. This demonstrates:
- Event-driven testing
- Automated quality assurance
- Integration with Kiro's file monitoring

### Benefits Demonstrated

✅ **Keyword Activation**: Power loads tools on-demand when relevant keywords are used
✅ **OAuth Authentication**: Seamless authentication flow managed by Kiro
✅ **Comprehensive API**: 40 tools for complete API workflow management
✅ **Automated Testing**: Integration with Kiro hooks for continuous testing
✅ **Documentation**: Built-in guides and examples for best practices

### Files Created

- `.kiro/hooks/api-postman-testing.kiro.hook` - Automated testing hook
- This demonstration document

### Lesson 5 Status: ✅ COMPLETED

**Power Installed**: Postman  
**Keywords Used**: postman, api, testing  
**Activation**: Successful via keyword mention  
**Tools Available**: 40 (minimal mode)  
**Hook Integration**: Yes  

---

*This demonstration shows how Kiro Powers provide on-demand capabilities through keyword activation, enabling efficient and context-aware development workflows.*
