import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from '../shared/services/api.service';
import {Course} from '../shared/models/course.model';
import {LoadingController, NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {SelectedCourseService} from '../shared/services/selected-course.service';

// import * as _ from 'lodash';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss']
})
export class CoursesPage implements OnInit {
  title = 'Course List';
  private courses;

  constructor(
      private courseService: GolfCourseService,
      private loader: LoadingController,
      private navCtrl: NavController,
      private route: ActivatedRoute,
      private selectedCourse: SelectedCourseService
  ) { }

  async ngOnInit() {
    // const loading = await this.loader.create({
    //   message: 'Getting Courses...'
    // });
    // loading.present.then(() => {
    //   const selectedCourse = this.route.snapshot.paramMap.get('id');
    //   this.courseService.getGolfCourses(selectedCourse).subscribe(data => {
    //     this.courses = data.courses;
    //
    //   });
    // });
    const observable = this.courseService.getGolfCourses();
    observable.subscribe(
        (courses: Course[]) => (this.courses = courses)
    );
  }
  async goToGameSetup() {
    const loading = await this.loader.create({message: 'Getting your game ready...'});
    loading.present().then(() => {
// TODO: this.selectedTeam.team = favorite.team;
//       this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(() => {
//         this.router.navigate(['team-home', {id: favorite.tournamentId}]);
//         this.loader.dismiss();
    });
  }
  courseTapped(id) {
    this.selectedCourse.course = id;
    console.log(id);
    this.navCtrl.navigateForward(['course', {id}]);
  }
  // goBack() {
  //   this.router.navigate(['/courses']);
  // }
}

