import LoginPage from '../pageobjects/login.website.js';
import InventoryPage from '../pageobjects/inventory.webite.js';
import MyCartPage from '../pageobjects/mycart.website.js';
describe('Swag Labs Login Application',()=>{
    it('should login with the correct login info', async()=>{
        await LoginPage.open();
        await LoginPage.openedValidation();//Postive Test
        await LoginPage.login('standard_user','secret_sauce');
        await InventoryPage.openedValidation()//Postive Test
        await InventoryPage.addToCart();
        await MyCartPage.badgeValidation();//Postive Test
        await MyCartPage.clickMyCart();
        await MyCartPage.openedValidation();//Postive Test
        await MyCartPage.clickRemove();
        await MyCartPage.checkCart();//Postive Test
        await MyCartPage.clickItem();
        await MyCartPage.inItemValidation();//Postive Test
        await MyCartPage.clickMyCart()
        await MyCartPage.openedValidation();//Postive Test
        await MyCartPage.clickContinueShopping();
        await InventoryPage.openedValidation();//Postive Test
        await MyCartPage.clickMyCart();
        await MyCartPage.openedValidation();//Postive Test
        await MyCartPage.clickCheckout();
        await MyCartPage.checkoutOpenedValidation();//Postive Test
    })
})