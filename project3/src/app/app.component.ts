import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project3';

  testFun(message : string)
  {
    alert(message);
  }

  getTextBoxVal(text : any)
  {
    alert(text.value);
  }

  onSubmit(data: any)
  {
      console.warn(data);
  }

  getVal(email : any, address: any, conctat: any)
  {
    alert(email.value);
    alert(address.value);
    alert(conctat.value);
  }
}
