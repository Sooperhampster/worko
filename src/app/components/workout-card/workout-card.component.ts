import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workout-card',
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.scss'],
})
export class WorkoutCardComponent  implements OnInit {

  @Input() name: string = "Default Name";
  @Input() dateCreated: string = "1/1/1900";
  @Input() notes: string= "Default Notes";

  constructor() { }

  ngOnInit() {}

}
