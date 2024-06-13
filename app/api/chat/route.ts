import { NextRequest, NextResponse } from 'next/server';

const API_URL = "https://run.sparkengine.ai/api/engine/completion";

export async function POST(req: NextRequest) {
  try {
    const { prompt, projectId } = await req.json();
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: process.env.SPARKENGINE_API_KEY,
        ProjectId: projectId,
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching the API response.", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
