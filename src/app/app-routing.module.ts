import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
  { path: 'course/', loadChildren: './courses/course/course.module#CoursePageModule' },
  { path: 'games', loadChildren: './games/games.module#GamesPageModule' },
  { path: 'course-detail', loadChildren: './courses/course/course-detail/course-detail.module#CourseDetailPageModule' },
  { path: 'tee-types', loadChildren: './courses/course/tee-types/tee-types.module#TeeTypesPageModule' },
  { path: 'course-home', loadChildren: './courses/course/course-home/course-home.module#CourseHomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
