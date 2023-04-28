import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchbarPage";
import { skleptestHomeUrl, searchbarClickUrl, notFoundMessageUrl } from "../../config/pagesUrl";
import { incorrectSearchPhrase, notFoundMessage } from "../../config/data";

describe("E2E - SearchBar", async () => {
    it("Should open Skleptest home page and verify url and visible searchbar", async () => {
        await GlobalPage.openPage(skleptestHomeUrl, skleptestHomeUrl);
        await SearchBarPage.searchBarIsVisible();
    })

    it("Should click on search icon, and verify url", async () => {
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchbarClickUrl);
        await browser.pause(3000);
    })

    it("Should type incorrect book name and verify alert", async () => {
        await SearchBarPage.typeSearchPhrase(incorrectSearchPhrase);
        await SearchBarPage.clickOnSearchIcon();
        await expect(await SearchBarPage.getNotFoundAlertText()).toContain(notFoundMessage);
        await browser.pause(3000);
    })

    it("Should clear input value and click on search icon", async () => {
    await SearchBarPage.clearSearchBar();
    await SearchBarPage.clickOnSearchIcon();
    await browser.pause(3000);
    })

})