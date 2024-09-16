//const { MongoClient } = require('mongodb');
const mongodb = require('mongodb').MongoClient;

require('dotenv').config();

async function run() {
    try {
        console.log('Trying to connect to mongoDB...');
        const client = await mongodb.connect(process.env.DB_CONNECTION_STRING_URL);

        console.log('Connected to database');
       
        const dbo = client.db('ivanBancoTeste');



        await dbo.collection('temperatures').updateMany( { },
            [
              { $addFields: { "tempsF": {
                    $map: {
                       input: "$tempsC",
                       as: "celsius",
                       in: { $add: [ { $multiply: ["$$celsius", 9/5 ] }, 32 ] }
                    }
              } } }
            ]
          )


        const cursor = dbo.collection('temperatures').find();

        const resultado = await cursor.toArray();

        console.log("Result: ", resultado);
       
        await client.close(); 
    } catch (error) {
        console.error('Erro durante a operação:', error);
    }
}

run(); 