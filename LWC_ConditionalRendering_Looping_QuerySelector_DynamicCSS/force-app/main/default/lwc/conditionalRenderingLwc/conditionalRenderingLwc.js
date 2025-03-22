import { LightningElement } from 'lwc';

export default class ConditionalRenderingLwc extends LightningElement {
    displayMessage = false;

    changeHandler(event){
        this.displayMessage = !this.displayMessage;
    }
}