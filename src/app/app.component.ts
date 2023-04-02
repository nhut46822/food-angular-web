import { Component, OnInit } from '@angular/core';
import { auditTime, forkJoin, fromEvent } from 'rxjs';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learn-rxjs';
}
