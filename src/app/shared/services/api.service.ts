import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Courses} from './../models/courses.model';
import {Course} from './../models/course.model';
import {environment} from '../../../environments/environment';
import * as firebase from 'firebase';
import {AuthService} from './auth.service';

// firebase.initializeApp(environment.firebase);
// const db = firebase.firestore();
@Injectable({
  providedIn: 'root'
})

export class GolfCourseService {
  course: Course;
  selectedCourse: Course;
  private baseURL = 'https://golf-courses-api.herokuapp.com/courses';
  private courses: Courses[];
  loadedUser: any;
  user: firebase.firestore.CollectionReference;
  playerData: any;
  players: string[] = [];

  constructor(
      private httpClient: HttpClient,
      private acctService: AuthService
      ) {
    this.user = this.acctService.dB.collection('USERS');
  }
  saveUser(user) {
    this.user.doc(user.uid).update({user: this.playerData.players})
        .then(_ => console.log('added:', this.playerData))
        .catch(error => console.log('not added', error));
  }

  getAllCourses(): Observable<any> {
      // return this.httpClient.get(`${this.baseURL}`).pipe(map(data => data));
      return this.httpClient.get<Courses>(`${this.baseURL}`).pipe(
          map(data => data)
      );
  }
  getCourseById(ID): Observable<Course> {
    return this.httpClient.get<Course>(`${this.baseURL}/${ID}`)
        .pipe(map(course => {
          this.selectedCourse = course;
          return this.selectedCourse;
        }));
  }
}
