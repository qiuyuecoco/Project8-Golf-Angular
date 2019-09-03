import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {Course} from '../../shared/models/course.model';
import {SelectedCourseService} from '../../shared/services/selected-course.service';
import {GolfCourseService} from '../../shared/services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  private course;

  constructor(
      private navCtrl: NavController,
      private selectedCourse: SelectedCourseService,
      private courseService: GolfCourseService,
      private route: ActivatedRoute,
      private loader: LoadingController
  ) {
    console.log('**nav params:', this.course);
  }

  ngOnInit() {
    const observable = this.courseService.getCourse(this.course);
    observable.subscribe(
        (course: any) => (this.course = course)
    );
  }

  goToGameSetup() {
    this.navCtrl.navigateForward('gameSetup');
  }
  getCou(): number {
    return this.selectedCourse.course.id;
  }
  // get course(): string {
  //   return this.route.snapshot.paramMap.get('name');
  // }
}
