import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormsModule,ReactiveFormsModule, Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { EditorModule } from 'primeng/editor';
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
    EditorModule
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
export class MessageMeComponent implements OnInit {
  userCred!:FormGroup;
  userIssues!:FormGroup;
  isComplete=false;
  isLinear=false;
  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.userCred=this.formBuilder.group({
      userName:['',Validators.required],
      contact:['',Validators.required]
    })
 
    this.userIssues=this.formBuilder.group({
      description:['',Validators.required],
      content:['',Validators.required]
      
    })
    
  }
  
}
