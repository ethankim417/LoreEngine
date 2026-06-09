import AdmZip from "adm-zip";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const EXCLUDED_DIRS = new Set([
  ".git",
  ".next",
  ".vercel",
  "coverage",
  "dist",
  "node_modules"
]);

const EXCLUDED_FILE_NAMES = new Set(["source.zip"]);

export async function GET() {
  try {
    const zip = new AdmZip();
    const root = process.cwd();

    addDirectory(zip, root, root);

    return new NextResponse(zip.toBuffer(), {
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition": 'attachment; filename="lore-engine-source.zip"',
        "Content-Type": "application/zip"
      }
    });
  } catch (error) {
    console.error("Export Error:", error);
    return NextResponse.json({ error: "Failed to create source export." }, { status: 500 });
  }
}

function addDirectory(zip: AdmZip, root: string, directory: string) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    const relativePath = path.relative(root, absolutePath).replace(/\\/g, "/");

    if (shouldExclude(entry, relativePath)) {
      continue;
    }

    if (entry.isDirectory()) {
      addDirectory(zip, root, absolutePath);
      continue;
    }

    zip.addLocalFile(absolutePath, path.dirname(relativePath) === "." ? "" : path.dirname(relativePath));
  }
}

function shouldExclude(entry: fs.Dirent, relativePath: string) {
  if (entry.isDirectory()) {
    return EXCLUDED_DIRS.has(entry.name) || entry.name.startsWith(".tmp");
  }

  return (
    entry.name.startsWith(".env") ||
    EXCLUDED_FILE_NAMES.has(entry.name) ||
    relativePath.startsWith(".tmp")
  );
}
