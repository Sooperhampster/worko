import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent  implements OnInit {

  @Input() name: string = "Default Name";
  @Input() set1: string = "set1";
  @Input() set2: string = "set2";
  @Input() set3: string = "set3";
  @Input() set4: string = "set4";
  @Input() set5: string = "set5";

  @Input() hasSet1: boolean = true;
  @Input() hasSet2: boolean = false;
  @Input() hasSet3: boolean = false;
  @Input() hasSet4: boolean = false;
  @Input() hasSet5: boolean = false;
  

  constructor() { }

  ngOnInit() {}

}
