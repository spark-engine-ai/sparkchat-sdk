import { NextRequest, NextResponse } from 'next/server';
import SparkEngineAPI from 'sparkengine'; 

export async function POST(req: NextRequest) {
  try {
    const { prompt, projectId } = await req.json();
    
    const sparkEngine = new SparkEngineAPI(process.env.SPARKENGINE_API_KEY || '');

    const response = await sparkEngine.createCompletion({
      prompt,
      project_id: projectId,
    });
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching the API response.", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
