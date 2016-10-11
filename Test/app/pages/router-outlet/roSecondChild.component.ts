import {Component} from "@angular/core";

@Component({
    selector: "ROSecondChildComponent",
    template: `
        <StackLayout backgroundColor="blue">
            <Label text="This is second child"></Label>
         </StackLayout>
    `
})
export class ROSecondChildComponent {
    constructor() {
        console.log("Second child created");
    }
}