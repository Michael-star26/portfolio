import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiDataService } from '../services/api-data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-apitesting',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './apitesting.component.html',
  styleUrl: './apitesting.component.css'
})
export class ApitestingComponent implements OnInit{
  constructor(private userManagement:ApiDataService){}
  ngOnInit(): void {
    this.fetchUser()
  }
  user=''
  users={}
  error=''
  response={}

  fetchUser(){
    this.userManagement.fetchUser().subscribe(
      (data):any=>{
        this.users=data
      },
      (error)=>{
        this.error=error
        console.log(error)
      }
    )
  }

  createUser(){
    this.userManagement.createUsers(this.user).subscribe(
      (response)=>{
        this.response=response
        // refresh user list
        this.fetchUser()
      },
      (error)=>{
        this.error=error
      }
    )
  }

  deleteUser(){
    this.userManagement.deleteUser(this.user).subscribe(
      (response)=>{
        this.response=response
        // refresh user list
        this.fetchUser()
      },
      (error)=>{
        this.error=error
      }
    )
  }

  news:any=[];

  results={}
  fetchNews(){
    this.userManagement.fetchNews().subscribe(
      (data)=>this.news=data
    )
  }

  

}
