import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Photo } from "../models/Photo";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class PhotoService {
  photosUrl: string = "https://jsonplaceholder.typicode.com/photos/";
  constructor(private http: HttpClient) {}
  photoLimit: string = "?_limit=9";

  // Get Photos
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.photosUrl}${this.photoLimit}`);
  }
}
