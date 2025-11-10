import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website.js';
class MyCartPage extends Website {
    //Elements Getters
    get myCartButton(){
        return $('a.shopping_cart_link');
    }
    get removeButton(){
        return $('button#remove-sauce-labs-backpack');
    }
    get itemButton(){
        return $('a#item_0_title_link');
    }
    get continueShoppingButton(){
        return $('button#continue-shopping');
    }
    get checkoutButton(){
        return $('button#checkout');
    }
    get myCartValidationElement(){
        return $('span.title');
    }
    get badgeValidationElement(){
        return $('span.shopping_cart_badge');
    }
    get itemValidationElement(){
        return $('div.inventory_details_name');
    }
    get checkoutValidationElement(){
        return $('span.title');
    }
    //Component Functions
    async clickMyCart(){
        await this.myCartButton.click();
    }
    async clickRemove(){
        await this.removeButton.click();
    }
    async clickItem(){
        await this.itemButton.click();
    }
    async clickContinueShopping(){
        await this.continueShoppingButton.click();
    }
    async clickCheckout(){
        await this.checkoutButton.click();
    }
    //Components Validation
    async openedValidation(){
        await expect(this.myCartValidationElement).toBeExisting();
        await expect(this.myCartValidationElement).toHaveText(expect.stringContaining("Your Cart"));
    }
    async badgeValidation(){
        await expect(this.badgeValidationElement).toBeExisting();
    }
    async negaBadgeValidation(){
        await expect(this.badgeValidationElement).not.toBeExisting();
    }
    async inItemValidation(){
        await expect(this.itemValidationElement).toBeExisting();
        await expect(this.itemValidationElement).toHaveText(expect.stringContaining("Sauce Labs Bike Light"));
    }
    async checkoutOpenedValidation(){
        await expect(this.checkoutValidationElement).toBeExisting();
        await expect(this.checkoutValidationElement).toHaveText(expect.stringContaining("Checkout: Your Information"));
    }
    async checkCart(){
        await this.badgeValidation();
        await expect(this.badgeValidationElement).toHaveText(expect.stringContaining("1"));
    }
}
export default new MyCartPage();