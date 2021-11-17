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

  showToast(msg) {
    this.myToast = this.toast.create({
      message: msg,
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
