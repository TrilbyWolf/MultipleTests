import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals';
import Website from './website.js';
class LoginPage extends Website {
    //Elements Getters
    get usernameElem(){
        return $('input[placeholder="Username"]');
    }
    get passwordElem(){
        return $('input[placeholder="Password"]');
    }
    get loginButtonElem(){
        return $('input[type="submit"]');
    }
    //Component Functions
    async login (username, password){
        await this.usernameElem.setValue(username);
        await this.passwordElem.setValue(password);
        await this.loginButtonElem.click();
    }
    open(){
        return super.open('login');
    }
    //Components Validation
    async openedValidation(){
        await expect(this.loginButtonElem).toBeExisting();
    }
}
export default new LoginPage();