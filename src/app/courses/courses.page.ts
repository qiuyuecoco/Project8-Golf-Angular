import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from '../shared/services/api.service';
import {Course} from '../shared/models/course.model';
import {LoadingController, NavController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {SelectedCourseService} from '../shared/services/selected-course.service';
import {Courses} from '../shared/models/courses.model';
// import * as _ from 'lodash';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss']
})
export class CoursesPage implements OnInit {
  title = 'Course List';
  private allCourses: Courses[];

  constructor(
      private api: GolfCourseService,
      private loader: LoadingController,
      private navCtrl: NavController,
      private route: ActivatedRoute,
      private selectedCourse: SelectedCourseService,
      private router: Router
  ) { }

  async ngOnInit() {
      const loading = await this.loader.create({
          message: 'Getting available courses...'
      });
      loading.present().then(() => {
          this.api.getAllCourses().subscribe(data => {
              this.allCourses = data.courses;
              // console.log(data.courses, this.allCourses);
              loading.dismiss();
          });
      });
  }
    // async courseTapped(course: Course) {
    //   const loading = await this.loader.create({
    //       message: 'Getting course info...'
    //   });
    //   loading.present().then(() => {
    //       this.selectedCourse.course = course;
    //       this.api.getCourseById(course).subscribe(() => {
    //           this.router.navigate(['course-detail', course]);
    //           this.loader.dismiss();
    //       });
    //   });
    courseTapped(course: Course) {
        this.api.course = course;
        this.navCtrl.navigateForward('course-detail');
    }

//     async goToGameSetup() {
//         const loading = await this.loader.create({message: 'Getting your game ready...'});
//         loading.present().then(() => {
// // TODO: this.selectedTeam.team = favorite.team;
// //       this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(() => {
// //         this.router.navigate(['team-home', {id: favorite.tournamentId}]);
// //         this.loader.dismiss();
//         });
//     }
  // goBack() {
  //   this.router.navigate(['/courses']);
  // }
}

