import { test, expect } from "@playwright/test";

// The app shows a splash screen for ~2.5s, then renders the real content.
// Waiting for the Projects section guarantees the splash is gone.
async function gotoApp(page) {
  await page.goto("/");
  await page.locator("#project").waitFor({ state: "attached", timeout: 20000 });
}

test.describe("Portfolio", () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page);
  });

  test("has the correct document title", async ({ page }) => {
    await expect(page).toHaveTitle(/John Loyd Belen \| Full Stack Developer/);
  });

  test("renders all main sections", async ({ page }) => {
    for (const id of ["home", "project", "about", "timeline", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("nav menu links point to every section anchor", async ({ page }) => {
    const expected = ["#home", "#project", "#about", "#timeline", "#contact"];
    for (const href of expected) {
      await expect(page.locator(`a[href="${href}"]`).first()).toBeAttached();
    }
  });

  test("shows all project cards linking to the right URLs", async ({ page }) => {
    const expectedLinks = [
      "https://callexa-page-nw6i.vercel.app/",
      "https://servebeez.com/",
      "https://clip-factory-two.vercel.app/",
      "https://wizyemm.com",
      "https://www.suprah-app.com",
    ];
    for (const link of expectedLinks) {
      await expect(
        page.locator(`#project a[href="${link}"]`)
      ).toBeAttached();
    }
  });

  test("uses the Jol0o GitHub handle consistently", async ({ page }) => {
    const hrefs = await page.locator("a").evaluateAll((els) =>
      els.map((e) => e.getAttribute("href") || "")
    );
    const githubLinks = hrefs.filter((h) => h.includes("github.com"));
    expect(githubLinks.length).toBeGreaterThan(0);
    for (const link of githubLinks) {
      expect(link).toContain("github.com/Jol0o");
      expect(link).not.toContain("jloyd9836");
    }
  });

  test("all images have meaningful alt text", async ({ page }) => {
    const alts = await page.locator("img").evaluateAll((els) =>
      els.map((e) => e.getAttribute("alt"))
    );
    for (const alt of alts) {
      expect(alt, "img is missing alt text").toBeTruthy();
      expect(["image", "me"]).not.toContain((alt || "").trim().toLowerCase());
    }
  });

  test("exposes a working Download CV link", async ({ page }) => {
    const cv = page.getByRole("link", { name: /download cv/i });
    await expect(cv).toBeAttached();
    await expect(cv).toHaveAttribute("href", /drive\.google\.com/);
  });

  test("contact section exposes email and phone", async ({ page }) => {
    await expect(
      page.locator('#contact a[href^="mailto:"]')
    ).toBeAttached();
    await expect(page.locator('#contact a[href^="tel:"]')).toBeAttached();
  });
});

test.describe("SEO meta", () => {
  test("served HTML includes description and Open Graph tags", async ({
    request,
  }) => {
    const res = await request.get("/");
    const html = await res.text();
    expect(html).toContain('name="description"');
    expect(html).toContain('property="og:title"');
    expect(html).toContain('property="og:image"');
    expect(html).toContain("<title>John Loyd Belen");
  });
});
