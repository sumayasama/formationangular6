import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PwaService } from './shared/services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  // title = 'formationangular6';
  isPwaAvailable: boolean;
  constructor(
    private pwa: PwaService
  ) {
    this.isPwaAvailable = this.pwa.updates.isEnabled;
    console.log(this.pwa.updates.isEnabled);

  }

}
