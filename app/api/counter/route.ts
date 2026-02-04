import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const COUNTER_TABLE = 'download_counter';
const COUNTER_ID = 1;

export async function GET() {
  try {
    // Get the current counter value from Supabase
    const { data, error } = await supabase
      .from(COUNTER_TABLE)
      .select('count')
      .eq('id', COUNTER_ID)
      .single();

    if (error && error.code !== 'PGRST116') {
      throw error;
    }

    const count = data?.count || 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching counter:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    // Get current count
    const { data, error: getError } = await supabase
      .from(COUNTER_TABLE)
      .select('count')
      .eq('id', COUNTER_ID)
      .single();

    const currentCount = data?.count || 0;
    const newCount = currentCount + 1;

    // Update the counter
    const { data: updatedData, error: updateError } = await supabase
      .from(COUNTER_TABLE)
      .upsert({ id: COUNTER_ID, count: newCount }, { onConflict: 'id' })
      .select()
      .single();

    if (updateError) {
      throw updateError;
    }

    return NextResponse.json({ count: updatedData?.count || newCount });
  } catch (error) {
    console.error('Error updating counter:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
