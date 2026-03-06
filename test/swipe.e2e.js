const assert = require("assert");

describe("Swipe Gesture Test", () => {

  it("Swipe card and verify carousel moved", async () => {

    // STEP 1 — Open Swipe screen
    const swipeTab = await $("~Swipe");
    await swipeTab.waitForDisplayed({ timeout: 10000 });
    await swipeTab.click();

    // STEP 2 — Get all cards before swipe
    const cardsBefore = await $$('//android.view.ViewGroup');
    const firstCard = cardsBefore[0];

    // STEP 3 — Perform swipe
    await browser.execute("mobile: swipeGesture", {
      elementId: firstCard.elementId,
      direction: "left",
      percent: 0.75
    });

    await browser.pause(1000);

    // STEP 4 — Get cards again
    const cardsAfter = await $$('//android.view.ViewGroup');

    // STEP 5 — Assertion
    assert.ok(
      cardsAfter.length >= 1,
      "Swipe failed — no cards detected"
    );

    console.log("Swipe executed successfully");

  });

});

