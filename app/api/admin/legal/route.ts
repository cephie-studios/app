import { auth } from "@/auth";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const session = await auth();
  
  if (!session?.user?.isAdmin) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { type, data } = await request.json();

  const legalDir = path.join(process.cwd(), "app", "data", "legal");
  const availableTypes = fs.readdirSync(legalDir)
    .filter(file => file.endsWith(".json"))
    .map(file => file.replace(".json", ""));

  if (!availableTypes.includes(type)) {
    return new NextResponse("Invalid type", { status: 400 });
  }

  const filePath = path.join(legalDir, `${type}.json`);
  
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to write file:", error);
    return new NextResponse("Error saving data", { status: 500 });
  }
}
