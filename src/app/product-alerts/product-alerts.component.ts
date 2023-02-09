import { Component, Input,Output,EventEmitter } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  console = console
  @Input() product: typeof products
  @Output() notify = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
