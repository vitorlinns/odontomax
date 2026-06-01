import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage();
await p.setViewportSize({ width: 1440, height: 900 });
await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
// scroll to just after the hero (benefits strip area)
await p.evaluate(() => window.scrollTo({ top: window.innerHeight, behavior: "instant" }));
await p.waitForTimeout(800);
await p.screenshot({ path: "hero-preview.png" });
await b.close();
