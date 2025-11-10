import LoginPage from '../pageobjects/login.website.js';
import InventoryPage from '../pageobjects/inventory.webite.js';
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
        await MyCartPage.clickRemove();
        await MyCartPage.checkCart();//A
        await MyCartPage.clickItem();
        await MyCartPage.inItemValidation();//A
        await MyCartPage.clickMyCart()
        await MyCartPage.openedValidation();//A
        await MyCartPage.clickContinueShopping();
        await InventoryPage.openedValidation();//A
        await MyCartPage.clickMyCart();
        await MyCartPage.openedValidation();//A
        await MyCartPage.clickCheckout();
        await MyCartPage.checkoutOpenedValidation();//A
    })
})