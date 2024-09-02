import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Parse the incoming JSON request body
        const qna = await request.json();

        // Connect to the database
        const db = await connectDB();
        const qnaCollection = db.collection('qna');

        // Insert the document into the collection
        const result = await qnaCollection.insertOne(qna);

        // Return a successful response
        return NextResponse.json({ message: "Item successfully inserted" });
    } catch (error) {
        console.error(error);

        // Return an error response
        return NextResponse.json({ message: "Something went wrong", error: error.message }, { status: 500 });
    }
}
