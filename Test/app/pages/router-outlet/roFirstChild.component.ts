import {Component} from "@angular/core";

@Component({
    selector: "ROFirstChildComponent",
    template: `
        <StackLayout backgroundColor="green">
            <Label text="This is first child"></Label>
         </StackLayout>
    `
})
export class ROFirstChildComponent {
    constructor() {
        console.log("First child created");
    }

}