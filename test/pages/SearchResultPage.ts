class SearchResultPage {
    get firstProductItem() {
        return $("h2.entry-title > a:nth-child(1)")
    }

    async clickOnFirstProductItem() {
        const item:WebdriverIO.Element = await this.firstProductItem;
        await item.waitForDisplayed();
        await item.click();
    }   
}

export default new SearchResultPage();