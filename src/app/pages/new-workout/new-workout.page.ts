import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.page.html',
  styleUrls: ['./new-workout.page.scss'],
})
export class NewWorkoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addWorkout(){
    this.router.navigate(['home']);
  }

}
