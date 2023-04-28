import { searchPhrase } from "../../config/data";
import { searchProductUrl, skleptestHomeUrl, cartUrl } from "../../config/pagesUrl";
import SearchbarPage from "../../pages/components/SearchbarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/ProductPage";

describe("E2E - Products", async () => {
    let produtTitle: string = "";
    let price:string = "";

    before(() => {
        browser.url(skleptestHomeUrl);
    })

    it("Should type search phrase and click search icon", async () => {
        await SearchbarPage.typeSearchPhrase(searchPhrase);
        await SearchbarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    })

    it("Should click on first product", async () => {
        await SearchResultPage.clickOnFirstProductItem();
        await ProductPage.productTitleIsVisible();
        await ProductPage.addToCartBtnIsVisible();
        await browser.pause(3000);
    })

    it("Should click on add to cart button", async () => {
        await ProductPage.clickOnAddToCartBtn();
        await expect(browser).toHaveUrlContaining(cartUrl);
        await browser.pause(3000);
    })
})