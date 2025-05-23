import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectDB();

    const message = await Message.create(body);
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching messages' },
      { status: 500 }
    );
  }
} 