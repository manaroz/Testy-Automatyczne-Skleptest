class ProductPage {
    get productTitle() {
        return $("div.summary.entry-summary > h1.product_title.entry-title");
    }

    get addToCartBtn() {
        return $("button.single_add_to_cart_button.button.alt");
    }

    async clickOnAddToCartBtn() {
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
        await btn.click();
    }

    async productTitleIsVisible() {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
    }

    async addToCartBtnIsVisible() {
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
    }
}

export default new ProductPage();