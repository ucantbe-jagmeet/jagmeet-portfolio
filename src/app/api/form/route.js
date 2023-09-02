import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  let body = await request.json();
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);
  try {
    const database = client.db("05-portfolio");
    const inventary = database.collection("forms");
    const product = await inventary.insertOne(body);
    return NextResponse.json({ product, ok: true });
  } finally {
    await client.close();
  }
}
