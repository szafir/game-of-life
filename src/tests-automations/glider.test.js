import puppeteer from "puppeteer";

describe("Glider", async () => {
  test("check if glider is rendering properly", async () => {
    const browser = await puppeteer.launch({
      headless: false
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    const cont = await page.$("[class*='Toolbar-formationSelector']");
    await cont.click();
    const value = await page.$("li[class*='MuiMenuItem-gutters'][data-value='0']");
    value.click();
    await page.screenshot({
      path: "screenshots/glider.png",
      clip: {
        x:400, y: 200, width: 300, height: 300
      }
    });

    await browser.close();
    expect(true).toBe(false);
  });
});
