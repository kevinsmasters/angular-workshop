import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../../services/photo.service";
import { Photo } from "../../models/Photo";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos: Photo[];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }
}
