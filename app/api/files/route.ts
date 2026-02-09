import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');

  const getFiles = (dir: string): string[] => {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(filePath));
      } else {
        const relativePath = path.relative(publicDir, filePath).replace(/\\/g, '/');
        results.push(relativePath);
      }
    });
    return results;
  };

  try {
    const files = getFiles(publicDir);
    return NextResponse.json({ files });
  } catch (error) {
    console.error('Error reading public directory:', error);
    return NextResponse.json({ error: 'Failed to read files' }, { status: 500 });
  }
}
