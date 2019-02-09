import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.template.html'
})
export class RegisterComponent {

  public newCodeText: string = "Yeni bir kod oluşturulmamış !";

  public register(): boolean {
    return false;
  }

}
