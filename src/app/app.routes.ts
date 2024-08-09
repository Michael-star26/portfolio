import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MessageMeComponent } from './message-me/message-me.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { Component } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ActuarialComponent } from './actuarial/actuarial.component';
import { AssignmentHelpComponent } from './assignment-help/assignment-help.component';
import { CodingTutorComponent } from './coding-tutor/coding-tutor.component';
import { DataSciComponent } from './data-sci/data-sci.component';
import { GameDevComponent } from './game-dev/game-dev.component';
import { PureMathComponent } from './pure-math/pure-math.component';
import { MathTutorComponent } from './math-tutor/math-tutor.component';
import { GamingComponent } from './gaming/gaming.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogComponent } from './blog/blog.component';
import { DeveloperComponent } from './developer/developer.component';
import { ApitestingComponent } from './apitesting/apitesting.component';


export const routes: Routes = [
    {path:'gaming',title:'Gaming',component:GamingComponent},
    {path:'actuarial',component:ActuarialComponent,title:'Actuarial'},
    {path:'about',component:AboutComponent,title:'About'},  
    {path:'projects',component:ProjectsComponent,title:'Projects'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'assignment-help',title:'Assignment',component:AssignmentHelpComponent},
    {path:'coding-tutor',title:'Coding tutor',component:CodingTutorComponent},
    {path:'data-sci',title:'Data science',component:DataSciComponent},
    {path:'game-dev',title:'Game Development',component:GameDevComponent},
    {path:'pure-math',title:'Mathematics',component:PureMathComponent},
    {path:'math-tutor',title:'Math tutor',component:MathTutorComponent},
    {path:'testimonials',title:'Testimonials',component:TestimonialsComponent},
    {path:'blog',title:'Blog',component:BlogComponent},
    {path:'developer',title:'Developer',component:DeveloperComponent},
    {path:'messageme',component:MessageMeComponent,title:'Message Me'},
    {path:'apitest',title:'Api',component:ApitestingComponent},
    {path:'',component:HomeComponent,title:'Home'},  
    {path:'**',component:NotFoundComponent,title:'404 not found'},
    
    
    
    


]
