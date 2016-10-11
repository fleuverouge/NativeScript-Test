import {Component} from "@angular/core";
import { MissionService }     from './mission.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: "ChildComponent",
    template: `<StackLayout>
                <Label text="Hello from child"></Label>
                <Button (tap)="onButtonTap()" [text]="buttonText"></Button>
              </StackLayout>`,
    // providers: [MissionService]
})

export class ChildComponent {
  subscription: Subscription;
  buttonText: string;
  constructor(private missionService: MissionService) {
      this.buttonText = "Empty";
    this.subscription = missionService.missionAnnounced$.subscribe(
      text => {
          console.log("Announce: " + text);
        this.buttonText = text;
    });
  }

  onButtonTap() {
      this.missionService.confirmMission(this.buttonText);
  }

    ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}