import { Component, OnInit } from '@angular/core';
import {Course} from '../shared/models/course.model';
import {GolfCourseService} from '../shared/services/api.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  // private course: Course;
  //
  // get courseId(): any {
  //   return this.courseService.course.id;
  // }
  // get courseHoles(): any {
  //   return this.courseId;
  // }
  // constructor(
  //     private courseService: GolfCourseService,
  //     // private navCrtl: NavController
  // ) {
  //   console.log('courseDetails:', this.courseId);
  //   console.log('courseHoles:', this.courseHoles);
  // }
  //
  // ngOnInit() {
  //   const selectedCourseId = this.courseId;
  //   this.courseService.getCourseById(selectedCourseId)
  //       .subscribe(course => {
  //         this.course = course;
  //       });
  // }
    private selectedItem: any;
    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];
    public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor() {
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    ngOnInit() {
    }
    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
    beginGame() {
        console.log('beginGame clicked', this.items);
    }
}
