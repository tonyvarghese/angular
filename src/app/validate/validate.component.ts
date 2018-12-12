import { Component} from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent {

  form: any = {};
 
  constructor() { }
 
  onSubmit() {
    console.log('email=' + this.form.email);
    console.log('username=' + this.form.username);
    console.log('password=' + this.form.password);
  }

}
