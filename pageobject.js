const SwipePage = {
  get swipeTab() {
    return $('~Swipe');
  },

  get cards() {
    return $$('//android.view.ViewGroup');
  },

  async openSwipeScreen() {
    await this.swipeTab.waitForDisplayed({ timeout: 10000 });
    await this.swipeTab.click();
  },

  async getCardsBeforeSwipe() {
    return await this.cards;
  },

  async performSwipe(elementId) {
    await browser.execute("mobile: swipeGesture", {
      elementId: elementId,
      direction: "left",
      percent: 0.75
    });
    await browser.pause(1000);
  },

  async getCardsAfterSwipe() {
    return await this.cards;
  }
};

module.exports = SwipePage;