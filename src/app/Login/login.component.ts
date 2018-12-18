import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.template.html'
})
export class LoginComponent {

  public login(inputCode: any): boolean {
    //console.log(inputCode.value);
    return false;
  }

}
