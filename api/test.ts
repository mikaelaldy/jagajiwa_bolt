import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const envCheck = {
    hasEndpoint: !!process.env.AZURE_OPENAI_ENDPOINT,
    hasApiKey: !!process.env.AZURE_OPENAI_API_KEY,
    hasDeploymentName: !!process.env.AZURE_OPENAI_DEPLOYMENT_NAME,
    nodeVersion: process.version,
    timestamp: new Date().toISOString()
  };

  return res.status(200).json(envCheck);
} 