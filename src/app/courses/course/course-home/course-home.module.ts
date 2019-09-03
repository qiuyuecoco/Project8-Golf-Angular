import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CourseHomePage } from './course-home.page';

const routes: Routes = [
  {
    path: '',
    component: CourseHomePage,
    children: [
        // TODO later: remove old routes to create lazy loading routes below
      {
        path: 'course-detail',
        children: [
            {
              path: '',
              loadChildren: '../course-detail/course-detail.module#CourseDetailPageModule'
            }
          ]
      },
      {
        path: 'tee-types',
        children: [
          {
            path: '',
            loadChildren: '../tee-types/tee-types.module#TeeTypesPageModule'
          },
        ]
      },
      {
        path: '',
        redirectTo: '/course-home/course-detail',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/course-home/course-detail',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CourseHomePage]
})
export class CourseHomePageModule {}
