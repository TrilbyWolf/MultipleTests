import LoginPage from '../pageobjects/login.website.js';
import InventoryPage from '../pageobjects/inventory.webite.js';
import HamburgerMenu from '../pageobjects/hamburgermenu.website.js';
import MyCartPage from '../pageobjects/mycart.website.js';
describe('Swag Labs Login Application',()=>{
    it('should login with the correct login info', async()=>{
        await LoginPage.open();
        await LoginPage.openedValidation();//Postive Test
        await LoginPage.login('standard_user','secret_sauce');
        await InventoryPage.openedValidation()//Postive Test
        await InventoryPage.addToCart();
        await MyCartPage.badgeValidation();//Postive Test
        await MyCartPage.openedValidation();//Postive Test
        await HamburgerMenu.clickHamburgerMenu();
        await HamburgerMenu.openedValidation();//Postive Test
        await HamburgerMenu.clickResetApp();
        await MyCartPage.negaBadgeValidation();//Postive Test
        await HamburgerMenu.clickAllItems();
        await InventoryPage.openedValidation();//Postive Test
        await HamburgerMenu.clickHamburgerMenu();
        await HamburgerMenu.openedValidation();//Postive Test
        await HamburgerMenu.clickLogout();
        await LoginPage.openedValidation();//Postive Test
        await LoginPage.login('standard_user','secret_sauce');
        await InventoryPage.openedValidation();//Postive Test
        await HamburgerMenu.clickHamburgerMenu();
        await HamburgerMenu.openedValidation();//Postive Test
        HamburgerMenu.clickAbout();
        HamburgerMenu.aboutPageOpenedValidation();//Postive Test
    })
})