import { LightningElement } from 'lwc';

export default class RenderListLwc extends LightningElement {
    superstars = ["Spiderman", "Superman", "Ironman", "Batman"];

    ceoList = [{
        id: 1,
        firstName: "Marc",
        lastName: "Benioff"
    },
    {
        id: 2,
        firstName: "Tim",
        lastName: "Cook"
    },
    {
        id: 3,
        firstName: "Satya",
        lastName: "Nadella"
    },
    {
        id: 4,
        firstName: "Sundar",
        lastName: "Pichai"
    }    
];
}