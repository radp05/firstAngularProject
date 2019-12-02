import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form, NgForm } from "@angular/forms";
//import { ApiService } from '../services/api.service'
import { HttpClient } from "@angular/common/http";
import { Router} from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoginMode = true;
  registerForm: FormGroup
  error: string;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      // 'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])

    })
  }

  OnSubmit() {
    if (!this.isLoginMode) {
      console.log(this.registerForm.value)
      this.http.post('http://localhost:3006/register', this.registerForm.value)
        .subscribe((responseData) => {
          console.log(responseData)
        },
        error =>{

        })
    }
    else {
      this.http.post('http://localhost:3006/login', this.registerForm.value)
        .subscribe((responseData) => {
          console.log("LOGIN API")
          console.log(responseData)
          localStorage.setItem('id_token', JSON.stringify(responseData));
          this.router.navigate(['/dashboard']);
        },
        error=>{
          this.error = "error occured"
        })  

    }
  }
}


