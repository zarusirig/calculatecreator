import { fal } from "@fal-ai/client";
import fs from "node:fs";
import path from "node:path";

const arg = (k, d) => {
  const i = process.argv.indexOf(`--${k}`);
  return i === -1 ? d : process.argv[i + 1];
};

const slug = arg("slug");
const prompt = arg("prompt");
if (!slug || !prompt) {
  console.log('Usage: node scripts/gen-image.mjs --slug hero --prompt "Minimal mountain sunrise"');
  process.exit(1);
}

fal.config({ credentials: process.env.FAL_KEY });
if (!process.env.FAL_KEY) throw new Error("Missing FAL_KEY");

const input = {
  prompt,
  num_images: Number(arg("num", "1")),
  aspect_ratio: arg("aspect", "auto"),
  output_format: arg("format", "png"),
  resolution: arg("resolution", "1K"),
};

const res = await fal.subscribe("fal-ai/flux/schnell", { input });
const images = res.data?.images || [];

const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const outDir = path.join(process.cwd(), "public", "images", slug);
fs.mkdirSync(outDir, { recursive: true });

const saved = [];
for (let i = 0; i < images.length; i++) {
  const url = images[i].url;
  const ext = input.output_format;
  const file = `${stamp}_${i + 1}.${ext}`;
  const outPath = path.join(outDir, file);

  const r = await fetch(url);
  if (!r.ok) throw new Error(`Download failed: ${r.status} ${url}`);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(outPath, buf);

  saved.push(`/images/${slug}/${file}`);
}

console.log(JSON.stringify({ requestId: res.requestId, files: saved }, null, 2));




