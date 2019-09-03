import { Injectable } from '@angular/core';
import {Course} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedCourseService {
  course: Course;
  constructor() { }
}
