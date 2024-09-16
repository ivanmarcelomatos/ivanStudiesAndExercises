//const { MongoClient } = require('mongodb');
const mongodb = require('mongodb').MongoClient;

require('dotenv').config();

async function run() {
    try {
        console.log('Trying to connect to mongoDB...');
        const client = await mongodb.connect(process.env.DB_CONNECTION_STRING_URL);

        console.log('Connected to database');
       
        const dbo = client.db('ivanBancoTeste');



        await dbo.collection('students3').updateMany(
            { },
            [
              { $set: { average : { $trunc: [ { $avg: "$tests" }, 0 ] }, modified: "$$NOW" } },
              { $set: { grade: { $switch: {
                                    branches: [
                                        { case: { $gte: [ "$average", 90 ] }, then: "A" },
                                        { case: { $gte: [ "$average", 80 ] }, then: "B" },
                                        { case: { $gte: [ "$average", 70 ] }, then: "C" },
                                        { case: { $gte: [ "$average", 60 ] }, then: "D" }
                                    ],
                                    default: "F"
              } } } }
            ]
         )


        const cursor = dbo.collection('students3').find();

        const resultado = await cursor.toArray();

        console.log("Result: ", resultado);
       
        await client.close(); 
    } catch (error) {
        console.error('Erro durante a operação:', error);
    }
}

run(); 