//const { MongoClient } = require('mongodb');
const mongodb = require('mongodb').MongoClient;

require('dotenv').config();

async function run() {
    try {
        console.log('Trying to connect to mongoDB...');
        const client = await mongodb.connect(process.env.DB_CONNECTION_STRING_URL);

        console.log('Connected to database');
       
        const dbo = client.db('ivanBancoTeste');

       
   
        const insertedItems = await dbo.collection('inventory5').insertMany([{ _id: 1, item: null }, { _id: 2 }]);

        const cursor = dbo.collection('inventory5').find({ _id: { $in: [1, 2] } });
        
        const resultado = await cursor.toArray();

        console.log("Result: ", resultado);
       
        await client.close(); 
    } catch (error) {
        console.error('Erro durante a operação:', error);
    }
}

run(); 