import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskHandlerComponent } from './pages/task-handler/task-handler.component';
import { InnerHtmlComponent } from './pages/inner-html/inner-html.component';
import { WebComponentComponent } from './pages/web-component/web-component.component';

const routes: Routes = [
  { path: 'web-component', component: WebComponentComponent },
  { path: 'inner-html', component: InnerHtmlComponent },
  { path: 'task-handler/:eventId/:taskId', component: TaskHandlerComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
