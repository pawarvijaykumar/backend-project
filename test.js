import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://vijaykumar:Vijay12345@cluster0.j9z6jhc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("✅ Connected Successfully!");
} catch (err) {
  console.error(err);
} finally {
  await client.close();
}