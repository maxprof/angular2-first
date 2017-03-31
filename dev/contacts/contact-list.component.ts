import { Component } from 'angular2/core';
import { ContactComponent } from "./contact.component";

@Component({
    selector: 'contact-list',
    template: `
        <ul>
            <li 
                *ngFor="#contact of contacts"
                (click)="onSelect(contact)"
                [class.clicked]="selectedContact == contact"
                > 
                    {{ contact.name }}
                </li>
        </ul>
        <contact [contact]="selectedContact" ></contact>
    `,
    directives: [ContactComponent]
})

export class ContactListComponent{
    public selectedContact = {};
    public contacts = [
        { 
            name: "Max",
            surname: "Tester",
            age: 22 
        },
        { 
            name: "2222",
            surname: "lorem1",
            age: 22 
        },
        { 
            name: "3333",
            surname: "lorem2",
            age: 22 
        },
        { 
            name: "44444",
            surname: "lorem3",
            age: 22 
        }
    ];

    onSelect(contact){
      this.selectedContact = contact;
    }
}