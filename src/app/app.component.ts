import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Download-Upload';
  inputData: string = '';
  apiFile = 'https://api.escuelajs.co/api/v1/files/';
  uploadFileName: string[] = [];

  constructor(private http:HttpClient){}

  uploadImage(event : any){
    
    const file =  event.currentTarget.files[0];
    if(file.type === 'image/png' && file.size === 2000000){
      const formObject = new FormData();
      formObject.append('file', file)
      console.log(formObject)
    }
  }
}
