//const { MongoClient } = require('mongodb');
const mongodb = require('mongodb').MongoClient;

require('dotenv').config();

async function run() {
    try {
        console.log('Trying to connect to mongoDB...');
        const client = await mongodb.connect(process.env.DB_CONNECTION_STRING_URL);

        console.log('Connected to database');
       
        const dbo = client.db('ivanBancoTeste');



        await dbo.collection('inventory7').insertMany([
            {
              item: 'journal',
              qty: 25,
              size: { h: 14, w: 21, uom: 'cm' },
              status: 'A'
            },
            {
              item: 'notebook',
              qty: 50,
              size: { h: 8.5, w: 11, uom: 'in' },
              status: 'P'
            },
            {
              item: 'paper',
              qty: 100,
              size: { h: 8.5, w: 11, uom: 'in' },
              status: 'D'
            },
            {
              item: 'planner',
              qty: 75,
              size: { h: 22.85, w: 30, uom: 'cm' },
              status: 'D'
            },
            {
              item: 'postcard',
              qty: 45,
              size: { h: 10, w: 15.25, uom: 'cm' },
              status: 'A'
            }
          ]);


        const cursor = dbo.collection('inventory7').find();

        const resultado = await cursor.toArray();

        console.log("Result: ", resultado);
       
        await client.close(); 
    } catch (error) {
        console.error('Erro durante a operação:', error);
    }
}

run(); 