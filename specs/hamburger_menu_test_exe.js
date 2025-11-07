import LoginPage from '../pageobjects/login.website.js'
import InventoryPage from '../pageobjects/inventory.webite.js';
import HamburgerMenu from '../pageobjects/hamburgermenu.website.js';
import MyCart from '../pageobjects/mycart.website.js';
describe('Swag Labs Login Application',()=>{
    it('should login with the correct login info', async()=>{
        await LoginPage.open();
        await LoginPage.openedValidation();//A
        await LoginPage.login('standard_user','secret_sauce');
        await InventoryPage.openedValidation()//A
        await InventoryPage.addToCart();
        await MyCart.badgeValidation();//A
        await MyCart.clickMyCart();
        await MyCart.openedValidation();//A
        await HamburgerMenu.clickHamburgerMenu();
        await HamburgerMenu.openedValidation();//A
        await HamburgerMenu.clickResetApp();
        await MyCart.negaBadgeValidation();//A
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
        await HamburgerMenu.clickAbout();//Runs until page is loaded
        //await 
    })
})