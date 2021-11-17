import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonicToastService {
  private myToast: any
  constructor(
    public toast: ToastController
  ) { }

  showToast() {
    this.myToast = this.toast.create({
      message: 'No valid calculation!',
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}