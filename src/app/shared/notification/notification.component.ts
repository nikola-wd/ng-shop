import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationState = false;
  productName: string;
  notificationType: boolean;

  constructor(private notifService: NotificationService) { }

  ngOnInit() {

    this.notifService.notStateEmitter.subscribe(
      () => {
        this.notificationState = this.notifService.notificationState;
        this.productName = this.notifService.productName;
        this.notificationType = this.notifService.notificationType;

        setTimeout(() => {
          this.notificationState = false;
        }, 3500);
      }
    );
  }

}
