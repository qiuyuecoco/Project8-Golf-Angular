import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from '../../../shared/services/api.service';
import {Course} from '../../../shared/models/course.model';
import {NavController} from '@ionic/angular';
// import * as _ from 'lodash';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})

export class CourseDetailPage implements OnInit {
  private course: Course;

  get courseId(): number {
      return this.courseService.course.id;
  }
  constructor(
      private courseService: GolfCourseService,
      private navCtrl: NavController
  ) {
    console.log('** course:', this.courseId);
  }

  ngOnInit() {
      const selectedCourseId = this.courseId;
      this.courseService.getCourseById(selectedCourseId)
          .subscribe(course => {
          this.course = course;
      });
  }
  startGame(course) {
      console.log('start game clicked', this.courseId);
      this.courseService.course = course;
      this.navCtrl.navigateForward(['games', {id: course}]);
  }
}
