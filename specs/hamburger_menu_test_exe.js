import LoginPage from '../pageobjects/login.website.js';
import InventoryPage from '../pageobjects/inventory.webite.js';
import HamburgerMenu from '../pageobjects/hamburgermenu.website.js';
import MyCartPage from '../pageobjects/mycart.website.js';
describe('Swag Labs Login Application',()=>{
    it('should login with the correct login info', async()=>{
        await LoginPage.open();
        await LoginPage.openedValidation();//A
        await LoginPage.login('standard_user','secret_sauce');
        await InventoryPage.openedValidation()//A
        await InventoryPage.addToCart();
        await MyCartPage.badgeValidation();//A
        await MyCartPage.clickMyCart();
        await MyCartPage.openedValidation();//A
        await HamburgerMenu.clickHamburgerMenu();
        await HamburgerMenu.openedValidation();//A
        await HamburgerMenu.clickResetApp();
        await MyCartPage.negaBadgeValidation();//A
        await HamburgerMenu.clickAllItems();
        await InventoryPage.openedValidation();//A
        await HamburgerMenu.clickHamburgerMenu();
        await HamburgerMenu.openedValidation();//A
        await HamburgerMenu.clickLogout();
        await LoginPage.openedValidation();//A
        await LoginPage.login('standard_user','secret_sauce');
        await InventoryPage.openedValidation();//A
        await HamburgerMenu.clickHamburgerMenu();
        await HamburgerMenu.openedValidation();//A
        HamburgerMenu.clickAbout();//Runs until page is loaded
        HamburgerMenu.aboutPageOpenedValidation();
    })
})