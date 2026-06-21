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

  test("shows all 5 project cards", async ({ page }) => {
    const cards = page.locator("#project button[aria-haspopup='dialog']");
    await expect(cards).toHaveCount(5);
  });

  test("project card opens modal with correct details", async ({ page }) => {
    const firstCard = page.locator("#project button[aria-haspopup='dialog']").first();
    await firstCard.click();

    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();

    // Modal contains project name
    await expect(modal.locator("#modal-title")).toBeAttached();
    // Modal has a live link
    await expect(modal.locator('a:has-text("View Live")')).toBeAttached();
  });

  test("Escape key closes the project modal", async ({ page }) => {
    await page.locator("#project button[aria-haspopup='dialog']").first().click();
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test("modal live link goes to the correct external URL for each project", async ({ page }) => {
    const expectedLinks = [
      "https://callexa-page-nw6i.vercel.app/",
      "https://servebeez.com/",
      "https://clip-factory-two.vercel.app/",
      "https://wizyemm.com",
      "https://www.suprah-app.com",
    ];
    const cards = page.locator("#project button[aria-haspopup='dialog']");
    for (let i = 0; i < expectedLinks.length; i++) {
      await cards.nth(i).click();
      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible();
      await expect(modal.locator('a:has-text("View Live")')).toHaveAttribute(
        "href",
        expectedLinks[i]
      );
      await page.keyboard.press("Escape");
      await expect(modal).not.toBeVisible();
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
    await expect(page.locator('#contact a[href^="mailto:"]')).toBeAttached();
    await expect(page.locator('#contact a[href^="tel:"]')).toBeAttached();
  });

  test("mobile: hamburger button is present and has ARIA attributes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const btn = page.locator('button[aria-controls="mobile-menu"]');
    await expect(btn).toBeAttached();
    await expect(btn).toHaveAttribute("aria-expanded", "false");
    await btn.click();
    await expect(btn).toHaveAttribute("aria-expanded", "true");
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
