import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-app-home',

  imports: [AnalogWelcomeComponent],
  template: ` <analog-app-analog-welcome /> `,
})
export default class HomeComponent {}
