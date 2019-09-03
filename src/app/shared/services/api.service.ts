import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Courses} from './../models/courses.model';
import {Course} from './../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class GolfCourseService {

  constructor(private httpClient: HttpClient) {
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
