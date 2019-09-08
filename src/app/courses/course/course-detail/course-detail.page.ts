import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from '../../../shared/services/api.service';
import {Course} from '../../../shared/models/course.model';
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
      private courseService: GolfCourseService
  ) {
    console.log('** course:', this.courseId);
  }

  ngOnInit() {
      const selectedCourseId = this.courseId;
      this.courseService.getCourseById(selectedCourseId).subscribe(course => {
          this.course = course;
      });
  }
  startGame() {
      console.log('start game clicked', this.courseId);
  }
}
