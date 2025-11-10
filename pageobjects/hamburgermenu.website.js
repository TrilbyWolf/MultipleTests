import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Website from './website.js';
class HamburgerMenu extends Website {
    //Elements Getters
    get hamburgerMenuButton(){
        return $('button#react-burger-menu-btn');
    }
    get allItemsButton(){
        return $('a#inventory_sidebar_link');
    }
    get aboutButton(){
        return $('a#about_sidebar_link');
    }
    get logoutButton(){
        return $('a#logout_sidebar_link');
    }
    get resetAppButton(){
        return $('a#reset_sidebar_link');
    }
    get hamburgerMenuOutButton(){
        return $('button#react-burger-cross-btn');
    }
    get hamburgerMenuValidationElement(){
        return $('div.bm-menu-wrap');
    }
    get aboutPageValidationElement(){
        return $('img[src="/images/logo.svg"]');
    }
    //Component Functions
    async clickHamburgerMenu(){
        await this.hamburgerMenuButton.click();
    }
    async clickAllItems(){
        await this.allItemsButton.click();
    }
    async clickAbout(){
        this.aboutButton.click();
    }
    async clickLogout(){
        await this.logoutButton.click();
    }
    async clickResetApp(){
        await this.resetAppButton.click();
    }
    async clickHamburgerMenuOut(){
        await this.hamburgerMenuOutButton.click();
    }
    //Components Validation
    async openedValidation(){
        await expect(this.hamburgerMenuValidationElement).toBeExisting();
        await expect(this.hamburgerMenuValidationElement).toHaveAttr('aria-hidden',expect.stringContaining("false"));
    }
    async aboutPageOpenedValidation(){
       await expect(this.aboutPageValidationElement).toBeExisting();
    }
}
export default new HamburgerMenu();