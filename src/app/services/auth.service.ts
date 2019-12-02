import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';

//auth guard service
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  public canActivate(): boolean {
    const token = localStorage.getItem('id_token');

    console.log(token)
    // Check whether the token is expired and return
    // true or false
    if (token) {
      return true;
    }
    this.router.navigate(['register'])
    return false;

  }

  constructor(private router: Router) {

  }
  ngOnInit() {

  }
}


