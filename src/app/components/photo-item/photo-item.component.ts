import { Component, OnInit, Input } from "@angular/core";
import { PhotoService } from "../../services/photo.service";

import { Photo } from "../../models/Photo";

@Component({
  selector: "app-photo-item",
  templateUrl: "./photo-item.component.html",
  styleUrls: ["./photo-item.component.css"]
})
export class PhotoItemComponent implements OnInit {
  @Input() photo: Photo;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {}
}
