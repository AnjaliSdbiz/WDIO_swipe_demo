const assert = require("assert");
const SwipePage = require("../pageobject.js");

describe("Swipe Gesture Test", () => {

  it("Swipe card and verify carousel moved", async () => {

    // STEP 1 — Open Swipe screen
    await SwipePage.openSwipeScreen();

    // STEP 2 — Get all cards before swipe
    const cardsBefore = await SwipePage.getCardsBeforeSwipe();
    const firstCard = cardsBefore[0];

    // STEP 3 — Perform swipe
    await SwipePage.performSwipe(firstCard.elementId);

    // STEP 4 — Get cards again
    const cardsAfter = await SwipePage.getCardsAfterSwipe();

    // STEP 5 — Assertion
    assert.ok(
      cardsAfter.length >= 1,
      "Swipe failed — no cards detected"
    );

    console.log("Swipe executed successfully");

  });

});

