import { NextRequest, NextResponse } from 'next/server';

// Import Vercel KV SDK
import { kv } from '@vercel/kv';

const COUNTER_KEY = 'download_counter';

export async function GET() {
  // Get the current counter value
  let count = await kv.get(COUNTER_KEY);
  if (typeof count !== 'number') count = 0;
  return NextResponse.json({ count });
}

export async function POST() {
  // Increment the counter atomically
  const count = await kv.incr(COUNTER_KEY);
  return NextResponse.json({ count });
}
