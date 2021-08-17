import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja Favoritar o Pokemon?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            this.presentToast2();
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.presentToast1();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast1() {
    const toast = await this.toastController.create({
      cssClass:'ion-text-center',
      message: 'Pokemon Favoritado',
      duration: 2000.,
      color:'success tint'
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      cssClass:'ion-text-center',
      message: 'Pokemon Não Favoritado',
      duration: 2000.,
      color:'danger tint'
    });
    toast.present();
  }

}
