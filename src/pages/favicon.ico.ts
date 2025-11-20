import type { APIRoute } from "astro";
import path from "node:path";
import sharp from "sharp";
import ico from "sharp-ico";

// relative to project root
const faviconSrc = path.resolve("src/images/favicon.png");

export const GET: APIRoute = async () => {
  // resize to 32px PNG
  const buffer = await sharp(faviconSrc).resize(32).toFormat("png").toBuffer();
  // generate ico
  const icoBuffer = ico.encode([buffer]);

  return new Response(icoBuffer, {
    headers: { "Content-Type": "image/x-icon" },
  });
};
