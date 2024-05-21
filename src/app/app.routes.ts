import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentComponent } from './components/content/content.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CommentsComponent } from './components/comments/comments.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'content', component: ContentComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'comments', component: CommentsComponent },
    { path: '**', component: DashboardComponent } 
];
