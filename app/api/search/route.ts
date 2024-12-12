import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.REED_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    // Construct the URL with user's search params
    const url = new URL("https://www.reed.co.uk/api/1.0/search");
    const params = req.nextUrl.searchParams;

    params.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(apiKey + ":").toString("base64")}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Reed API Error" }, { status: 500 });
    }

    const jobs = await res.json();

    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
