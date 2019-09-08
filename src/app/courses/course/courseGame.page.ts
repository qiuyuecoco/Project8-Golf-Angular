import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {SelectedCourseService} from '../../shared/services/selected-course.service';
import {GolfCourseService} from '../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './courseGame.page.html',
  styleUrls: ['./courseGame.page.scss'],
})
export class CourseGamePage implements OnInit {

  constructor(
      private navCtrl: NavController,
      private selectedCourse: SelectedCourseService,
      private courseService: GolfCourseService,
      private route: ActivatedRoute,
      private loader: LoadingController,
      private router: Router
  ) {
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log('**nav params:', this.courseId);
  }

  ngOnInit() {

  }

}
