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
        return $('a#item_4_link');
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
        return;
    }
    get checkoutOpenedValidation(){
        return;
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
        await expect(myCartValidationElement).toBeExisting();
        await expect(myCartValidationElement).toHaveText(expect.stringContaining("Your Cart"));
    }
    async badgeValidation(){
        await expect(badgeValidationElement).toBeExisting();
    }
    async negaBadgeValidation(){
        await expect(badgeValidationElement).toBeExisting();
    }
    async removedValidation(){
        //await expect()
    }
    async inItemValidation(){
        await expect(itemValidationElement).toBeExisting();
    }
    async checkoutOpenedValidation(){
        await expect(checkoutValidationElement).toBeExisting();
        await expect(checkoutValidationElement).toHaveText(expect.stringContaining("Checkout: Your Information"));
    }
}
export default new MyCartPage();