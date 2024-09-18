//const { MongoClient } = require('mongodb');
const mongodb = require('mongodb').MongoClient;

require('dotenv').config();

async function run() {
    try {
        console.log('Trying to connect to mongoDB...');
        const client = await mongodb.connect(process.env.DB_CONNECTION_STRING_URL);

        console.log('Connected to database');
       
        const dbo = client.db('ivanBancoTeste');



        await dbo.collection('pizzas').bulkWrite( [
               { insertOne: { document: { _id: 3, type: "beef", size: "medium", price: 6 } } },
               { insertOne: { document: { _id: 4, type: "sausage", size: "large", price: 10 } } },
               { updateOne: {
                  filter: { type: "cheese" },
                  update: { $set: { price: 8 } }
               } },
               { deleteOne: { filter: { type: "pepperoni"} } },
               { replaceOne: {
                  filter: { type: "vegan" },
                  replacement: { type: "tofu", size: "small", price: 4 }
               } }
            ] );

        const cursor = dbo.collection('pizzas').find();

        const resultado = await cursor.toArray();

        console.log("Result: ", resultado);
       
        await client.close(); 
    } catch (err) {
        console.error('Erro durante a operação:', err);
    }
}

run(); 