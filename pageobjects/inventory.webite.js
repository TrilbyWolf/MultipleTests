import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website';
class InventoryPage extends Website{
    //Elements Getters
    get backpackItem(){
        return $('button#add-to-cart-sauce-labs-backpack');
    }
    get bikeLightItem(){
        return $('button#add-to-cart-sauce-labs-bike-light');
    }
    get inventoryValidationElement(){
        return $('span.title');
    }
    //Component Functions
    async addToCart(){
        await this.backpackItem.click();
        await this.bikeLightItem.click();
    }
    //Components Validation
    async openedValidation(){
        await expect(this.inventoryValidationElement).toBeExisting();
        await expect(this.inventoryValidationElement).toHaveText(expect.stringContaining("Products"));
    }
}
export default new InventoryPage(); 