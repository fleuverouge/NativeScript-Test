import {Component} from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
    selector: "HomePage",
    templateUrl: "pages/home/home.html"
})
export class HomePage {
    constructor() {
    
    }
    refreshList(args) {

    }
}