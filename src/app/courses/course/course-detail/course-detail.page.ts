import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GolfCourseService} from '../../../shared/services/api.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  private course;

  constructor(
      private route: ActivatedRoute,
      private courseService: GolfCourseService
  ) {
    console.log('**nav params:', this.course);
  }

  ngOnInit() {
    const observable = this.courseService.getCourse(this.course);
    observable.subscribe(
        (course: any) => (this.course = course)
    );
  }

}
