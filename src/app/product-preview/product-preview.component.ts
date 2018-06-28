import { Component, OnInit, Input } from '@angular/core';
import {CarStatus} from './../shared/models/Car.model';
@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input() CarPreview:CarStatus;
  constructor() { }

  ngOnInit() {
  }
 
}
