import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const app_routes: Routes = [
    { path:'home', component: IndexComponent },
    { path:'**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, { useHash: true })
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{

}