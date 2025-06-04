import { CosmosClient, Container, Database } from '@azure/cosmos';

// Use the correct environment variable names from README
const endpoint = import.meta.env.VITE_AZURE_COSMOS_ENDPOINT;
const key = import.meta.env.VITE_AZURE_COSMOS_KEY;
const databaseId = import.meta.env.VITE_AZURE_COSMOS_DATABASE_NAME || 'jagajiwa';

console.log('🔍 Cosmos DB Configuration Debug:');
console.log('Endpoint:', endpoint ? 'Set' : 'Not set');
console.log('Key present:', !!key);
console.log('Database ID:', databaseId);

// Check if Cosmos DB is properly configured
const isCosmosDBConfigured = !!(endpoint && key);

if (!isCosmosDBConfigured) {
  console.warn('❌ Cosmos DB not configured, using localStorage fallback');
  console.warn('Missing environment variables:', 
    !endpoint ? 'VITE_AZURE_COSMOS_ENDPOINT' : '', 
    !key ? 'VITE_AZURE_COSMOS_KEY' : ''
  );
} else {
  console.log('✅ Cosmos DB configured');
}

// Initialize Cosmos Client only if configured
const client = isCosmosDBConfigured ? new CosmosClient({ endpoint, key }) : null;

// Get or create database
export const getDatabase = async (): Promise<Database | null> => {
  if (!client) {
    console.log('❌ Cosmos DB client not available');
    return null;
  }
  
  try {
    console.log('🔄 Creating/connecting to database:', databaseId);
    const { database } = await client.databases.createIfNotExists({ 
      id: databaseId
    });
    console.log('✅ Database operation successful');
    return database;
  } catch (error: unknown) {
    console.error('❌ Database operation failed:');
    console.error('Error:', error);
    return null;
  }
};

// Get or create container
export const getContainer = async (containerId: string): Promise<Container | null> => {
  if (!client) {
    console.log('❌ Cosmos DB client not available for container:', containerId);
    return null;
  }

  try {
    console.log('🔄 Creating/connecting to container:', containerId);
    const database = await getDatabase();
    if (!database) {
      console.log('❌ Database not available, cannot create container');
      return null;
    }
    
    const { container } = await database.containers.createIfNotExists({
      id: containerId,
      partitionKey: { paths: ['/userId'] }
    });
    console.log('✅ Container operation successful:', containerId);
    return container;
  } catch (error: unknown) {
    console.error('❌ Container operation failed for:', containerId);
    console.error('Error:', error);
    return null;
  }
};

// Generate or get user ID (stored in localStorage for anonymity but persistent sessions)
export const getUserId = (): string => {
  let userId = localStorage.getItem('jagajiwa-user-id');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('jagajiwa-user-id', userId);
    console.log('✅ Generated new user ID:', userId);
  }
  return userId;
};

// Test Cosmos DB connection
export const testCosmosDBConnection = async (): Promise<boolean> => {
  if (!isCosmosDBConfigured) {
    console.log('❌ Cosmos DB not configured');
    return false;
  }

  try {
    const database = await getDatabase();
    if (database) {
      console.log('✅ Cosmos DB connection test successful');
      return true;
    } else {
      console.log('❌ Cosmos DB connection test failed');
      return false;
    }
  } catch (error) {
    console.error('❌ Cosmos DB connection test failed:', error);
    return false;
  }
};