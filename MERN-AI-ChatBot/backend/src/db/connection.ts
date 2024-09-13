import { connect, disconnect } from "mongoose";
export default async function connectToDatabase(){
    try {
        // Mongoose Connection String Options:
        // You can also specify driver options in your connection string as parameters in the query string portion of the URI.
        await connect(process.env.MONGODB_URL as string);
    } catch (error) {
        console.log(error);
        throw new Error("Cannot Connect to MongoDB")
    }
}

async function disconnectFromDatabase(){
 try {
    await disconnect();
 } catch(error){
    console.log(error);
    throw new Error("Could not Disconnect from MongoDB");

 }
}

export { connectToDatabase, disconnectFromDatabase };