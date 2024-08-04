import { Component,Injectable,OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { EditorModule } from 'primeng/editor';
import { HttpClient } from '@angular/common/http';
import { config,Observable } from 'rxjs';
import { ApiDataService } from '../services/api-data.service';
import { NgFor } from '@angular/common';
import { KeyValue } from '@angular/common';
@Component({
  selector: 'app-message-me',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    EditorModule,
    NgFor,

  ],
  // providers: [
  //   {
  //     provide: STEPPER_GLOBAL_OPTIONS,
  //     useValue: { showError: true }
  //   }
  // ],
  templateUrl: './message-me.component.html',
  styleUrl: './message-me.component.css'
})
@Injectable({providedIn:'root'})
export class MessageMeComponent implements OnInit {
  userCred!:FormGroup;
  userIssues!:FormGroup;
  isComplete=false;
  isLinear=false;
  message:any
  people={
    "jina":"Angeline",
    "umri":20
  }
  // getData?:any
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private apiService:ApiDataService){}
  ngOnInit(): void {

    this.userCred=this.formBuilder.group({
      userName:['',Validators.required],
      contact:['',Validators.required]
    })
 
    this.userIssues=this.formBuilder.group({
      description:['',Validators.required],
      content:['',Validators.required]
      
    })


    this.apiService.getMessage().subscribe(
      (data)=>{
        this.message=data
      },
      (error)=>{
        console.error('API error',error)
      }
    )
    
  }
  
}

// worked


