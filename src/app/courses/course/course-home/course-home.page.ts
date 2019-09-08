import { Component, OnInit } from '@angular/core';
import {SelectedCourseService} from '../../../shared/services/selected-course.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.page.html',
  styleUrls: ['./course-home.page.scss'],
})
export class CourseHomePage implements OnInit {

  constructor(private selectedCourse: SelectedCourseService) { }

  ngOnInit() {
  }
  get course(): string {
    return this.selectedCourse.course.name;
  }

}
