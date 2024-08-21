//const { MongoClient } = require('mongodb');
const mongodb = require('mongodb').MongoClient;

require('dotenv').config();

async function run() {
    try {
        console.log('Trying to connect to mongoDB...');
        const client = await mongodb.connect(process.env.DB_CONNECTION_STRING_URL);

        console.log('Connected to database');
       
        const dbo = client.db('ivanBancoTeste');

       
   
        const cursor = dbo.collection('inventory4');

        const pipeline = [
            {
              $project: {
                _id: 0,
                item: 1,
                status: {
                  $switch: {
                    branches: [
                      {
                        case: { $eq: ["$status", "A"] },
                        then: "Available"
                      },
                      {
                        case: { $eq: ["$status", "D"] },
                        then: "Discontinued"
                      }
                    ],
                    default: "No status found"
                  }
                },
                area: {
                  $concat: [
                    { $toString: { $multiply: ["$size.h", "$size.w"] } },
                    " ",
                    "$size.uom"
                  ]
                },
                reportNumber: { $literal: 1 }
              }
            }
          ];

        const resultado = await cursor.aggregate(pipeline).toArray();

        console.log("Result: ", resultado);
       
        await client.close(); 
    } catch (error) {
        console.error('Erro durante a operação:', error);
    }
}

run(); 