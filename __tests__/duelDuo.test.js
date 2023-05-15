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

  test("Check that clicking the Draw button Draw button displays the div with id = choices", async () => {
    //navigate to the web app
    await driver.get("http://localhost:8000");
    //Find the draw button and click it
    await driver.findElement(By.id("draw")).click()
    //Check to see if the div with the name of 'choices' is added.
    const displayRobots = await driver.wait(until.elementLocated(By.id("choices")), 1000)
    expect(await displayRobots.isDisplayed())
  })

  test("Check that clicking an “Add to Duo” button displays the div with id = player-duo", async () => {
    //navigate to the web app
    await driver.get("http://localhost:8000");
     //Find the draw button and click it
     await driver.findElement(By.id("draw")).click()
    //Find the Add to duo button and click it
    await driver.findElement(By.className("bot-btn")).click()
    //Check to see if the div with the id of 'player-duo' is added.
    const playerRobots = await driver.wait(until.elementLocated(By.id("player-duo")), 1000)
    expect(await playerRobots.isDisplayed())
  })
}); 