import {Component} from "@angular/core";
import {Router, NavigationStart, NavigationEnd} from "@angular/router";

@Component({
    selector: "ROParentComponent",
    template: `
        <StackLayout>
            <Button text="To second page" [nsRouterLink]="['/router-outlet-second']"></Button>
            <Button text="First child" [nsRouterLink]="['/router-outlet']" nsRouterLinkActive="active" [nsRouterLinkActiveOptions]="{exact:true}"></Button>
            <Button text="Second child" [nsRouterLink]="['/router-outlet/second']" nsRouterLinkActive="active"></Button>
            <router-outlet></router-outlet>
         </StackLayout>
    `
})
export class ROParentComponent {
    constructor(private _router: Router) {
        
    }
}