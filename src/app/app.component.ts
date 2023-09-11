import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Back', url: '', icon: '' },
    { title: 'Biceps', url: '', icon: '' },
    { title: 'Chest', url: '', icon: '' },
    { title: 'Core', url: '', icon: '' },
    { title: 'Legs', url: '', icon: '' },
    { title: 'Shoulders', url: '', icon: '' },
    { title: 'Triceps', url: '', icon: '' }
  ];
  constructor() {}
}
