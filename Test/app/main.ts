// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routes";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./pages/nested-components/child.component";
import { MissionService }     from './pages/nested-components/mission.service';

@NgModule({
    declarations: [ AppComponent, 
                    ChildComponent,
                    navigatableComponents],
    entryComponents: [
                        ChildComponent,
                        ],
    bootstrap: [AppComponent],
    imports: [  NativeScriptModule,
                NativeScriptRouterModule,
                NativeScriptRouterModule.forRoot(routes)
                ],
    providers: [MissionService]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);