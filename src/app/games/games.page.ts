import { Component, OnInit } from '@angular/core';
import {Course} from '../shared/models/course.model';
import {GolfCourseService} from '../shared/services/api.service';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
    private course: Course;
    private players: any;
    get courseId(): number {
        return this.api.course.id;
    }
    private icons = [
        'flask',
        'beer',
        'football',
        'boat',
        'bluetooth'
    ];
    public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor(
        private load: LoadingController,
        private api: GolfCourseService,
        private navCtrl: NavController

    ) {
          // console.log('courseDetails:', this.courseId);
        //   console.log('courseHoles:', this.courseHoles);
        for (let i = 1; i < 5; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    async ngOnInit() {
        const id = this.courseId;
        // const id = 18300;
        const loading = await this.load.create({
            message: 'Game details...'
        });
        loading.present().then(() => {
            this.api.getCourseById(id).subscribe(data => {
                this.course = data;
                console.log('course data: ', data);
                loading.dismiss();
            });
        });
    }
    beginGame() {
        console.log('beginGame clicked', this.items);
    }
    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
}
