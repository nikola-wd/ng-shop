import { EventEmitter } from '@angular/core';

export class NotificationService {
  notificationState = false;
  productName: string;
  notificationType: boolean;

  constructor() {}

  notStateEmitter = new EventEmitter<void>();

  callNotif(itemName: string, type: boolean) {
    this.productName = itemName;
    this.notificationType = type;
    this.notificationState = true;
    this.notStateEmitter.emit();
  }

}
