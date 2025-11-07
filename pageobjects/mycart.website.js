import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website.js';
class MyCart extends Website {
    //Elements Getters
    get myCartButton(){
        return $('a.shopping_cart_link');
    }
    get myCartValidationElement(){
        return $('span.title');
    }
    get badgeValidationElement(){
        return $('span.shopping_cart_badge');
    }
    //Component Functions
    async clickMyCart(){
        await this.myCartButton.click();
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
        await expect(this.badgeValidationElement).toBeExisting();
    }
}
export default new MyCart();