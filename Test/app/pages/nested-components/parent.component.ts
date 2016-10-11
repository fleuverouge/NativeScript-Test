import {Component} from "@angular/core";
import { MissionService }     from './mission.service';

@Component({
    selector: "nested-component",
    template: `
        <StackLayout>
            <Label text="Tap the button" class="title"></Label>
            
            <Button text="TAP" (tap)="onTap()"></Button>

            <Label [text]="message" class="message" textWrap="true"></Label>
            <ChildComponent></ChildComponent>
        </StackLayout>
    `
})
export class ParentComponent {
    public counter: number = 16;
    constructor(private missionService: MissionService) {
        missionService.missionConfirmed$.subscribe(
        text => {
            console.log("confirm: " + text);
            this.counter++;
        });
    }
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.missionService.announceMission("Count " + this.counter);
        this.counter--;
    }
}