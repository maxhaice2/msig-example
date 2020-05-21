import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  imageData = new ImageData(100,100);
  constructor() {
    
   }
   
}
