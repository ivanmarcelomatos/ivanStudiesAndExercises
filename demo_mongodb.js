//const { MongoClient } = require('mongodb'); 
const mongodb = require('mongodb').MongoClient;

require('dotenv').config();

async function run() {
    try {
        console.log('Trying to connect to mongoDB...');
        const client = await mongodb.connect(process.env.DB_CONNECTION_STRING_URL);

        console.log('Connected to database');
        
        const dbo = client.db('ivanBancoTeste');

        
    
        const cursor = dbo.collection('inventory').find({
            size: { w: 21, h: 14, uom: 'cm' }
          });
        const resultado = await cursor.toArray();

        console.log("Result: ", resultado);
        
        await client.close();  
    } catch (error) {
        console.error('Erro durante a operação:', error);
    }
}

run();  
