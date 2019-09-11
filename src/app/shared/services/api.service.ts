import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Courses} from './../models/courses.model';
import {Course} from './../models/course.model';
import {environment} from '../../../environments/environment';
import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

firebase.initializeApp(environment.firebase);
const db = firebase.firestore();

@Injectable({
  providedIn: 'root'
})

export class GolfCourseService {
  course: Course;
  selectedCourse: Course;
  private baseURL = 'https://golf-courses-api.herokuapp.com/courses';
  private courses: Courses[];

  constructor(private httpClient: HttpClient) {}


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

  getGolfCourses(): Observable<Course[]> {
    const url = 'https://golf-courses-api.herokuapp.com/courses';
    return this.httpClient.get<Courses>(url).pipe(
        map(data => data.courses)
    );
  }

  getCourse(courseId): Observable<any> {
    const url = `https://golf-courses-api.herokuapp.com/courses/${courseId}`;
    return this.httpClient.get(url).pipe(map(data => data)
    );
  }
}


// import {HttpClient} from '@angular/common/http';
// import {Tournament} from './tournament.model';
// import {Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class EliteApiService {
//
//   currentTourney: any = [];
//
//   constructor(private http: HttpClient) { }
//
//   getTournaments(): Observable<Tournament[]> {
//     return this.http.get<Tournament[]>(`${ environment.firebaseBaseUrl }/tournaments.json`);
//   }
//   getTournamentData(tourneyId): Observable<any> {
//     return this.http.get(`${ environment.firebaseBaseUrl }/tournaments-data/${ tourneyId }.json`)
//         .pipe(
//             map(response => {
//               this.currentTourney = response;
//               return this.currentTourney;
//             })
//         );
//   }
//   getCurrentTourney() {
//     return this.currentTourney;
//   }
//   // getTournamentData(tourneyId): Observable<any> {
//   //   return this.http.get(`${ environment.firebaseBaseUrl }/tournaments-data/${ tourneyId }.json`);
//   // }}
