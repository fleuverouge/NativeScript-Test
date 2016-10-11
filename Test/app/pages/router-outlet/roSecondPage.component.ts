import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "ROSecondPageComponent",
    template: `
        <StackLayout>
            <Label text="This is second page"></Label>
         </StackLayout>
    `
})
export class ROSecondPageComponent {
    constructor(private _router: Router) {

    }
}