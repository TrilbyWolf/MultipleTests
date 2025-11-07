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
    //Component Functions
    async clickHamburgerMenu(){
        await this.hamburgerMenuButton.click();
    }
    async clickAllItems(){
        await this.allItemsButton.click();
    }
    async clickAbout(){
        await this.aboutButton.click();
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
        await expect(hamburgerMenuValidationElement).toBeExisting();
        await expect(hamburgerMenuValidationElement).toHaveAttr('aria-hidden',expect.stringContaining("false"));
    }
}
export default new HamburgerMenu();