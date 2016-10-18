import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  /* Declared variables for TypeScript */
  currencies = [
    {currency: "Euro"},
    {currency: "Dolar"},
    {currency: "Yuan"},
    ];
    /* add or remove inline style */
    active:boolean = true;
  
    /* class for content */
    alertClasses =  {
      "alert" : true,
      "alert-warning": false,
      "alert-danger": false,
      "alert-info": false,
      "alert-success": false
    };
    alertStyle = {}
    setStyle(inline) {
      this.active = !this.active
      if(inline) {
        this.alertStyle={
          "color":"#000",
          "font-weight" : "bold"
        }
      } else {
        this.alertStyle={}
      }
    }

  constructor() {

  }
}

export class App {
  
}