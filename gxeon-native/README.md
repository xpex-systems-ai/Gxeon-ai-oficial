# GXEON Native — Foundation

Native GXEON command-center frontend, isolated from the LibreChat root.

## Deploy on Vercel
- Root directory: `gxeon-native`
- Framework: Next.js
- Build command: `npm run build`
- No secrets required for this static foundation.

## Architecture
- Frontend: Vercel
- Agent API/runtime: Railway (separate service)
- Data/auth/vector memory: existing Supabase project
- Model providers and MCP tools: server-side adapters only

This foundation UI does not claim live agent execution. Connectors remain disabled until API, auth, RLS policies and approval flows pass verification.
