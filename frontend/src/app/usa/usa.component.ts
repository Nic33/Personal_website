import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class USAComponent {

  constructor(private httpClient: HttpClient, protected sanitizer: DomSanitizer) { }

  imageSrc: string = '';

  message = '';

  imageID : number = 0;
  selectedTeam: string = '';

  onSelected(value: string) {
    console.log('Selected value:', value);
    this.imageID = Number(this.selectedTeam);
  }

  loadImage() {
    const url = 'http://localhost:8080/images/' + this.imageID;

    this.httpClient.get(url, { responseType: 'blob' }).subscribe({
      next: (response: Blob) => {
        this.createImageFromBlob(response);
        this.message = 'Success';
      },
      error: (error) => {
        console.log('Error loading image:', error);
        this.message = 'Error createImageFromBlob';
      },
      complete: () => console.log('complete')
    });
  }

  createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageSrc = reader.result as string;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }else{
      console.log('Error readAsDataURL');
    }
  }
}

