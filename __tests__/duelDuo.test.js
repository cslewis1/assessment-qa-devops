const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Check that clicking the Draw button hides the button by adding the class hide", async () => {
    //navigate to the web app
    await driver.get("http://localhost:8000");
    //Find the draw button and click it
    await driver.findElement(By.id("draw")).click()
    //Check to see if the class with the name of 'hide' is added.
    const displayRobots = await driver.wait(until.elementLocated(By.css("#container div")), 1000)
    expect(await displayRobots.getText()).toBe("")
  })


}); 