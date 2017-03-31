import { Component } from 'angular2/core';

@Component({
    selector: 'contact',
    template: `
        <div>
            <p>Surname: {{ contact.surname }}</p>
            <p>Age: {{ contact.age }}</p>
        </div>
    `,
    inputs: ["contact"]
})
export class ContactComponent {
    public  contact= {}
} 