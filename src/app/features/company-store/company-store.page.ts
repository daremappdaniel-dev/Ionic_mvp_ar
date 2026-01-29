import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ARLauncherPage } from '../ar-launcher/ar-launcher.page';

@Component({
  selector: 'app-company-store',
  templateUrl: './company-store.page.html',
  styleUrls: ['./company-store.page.scss'],
})
export class CompanyStorePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
  }

  async openAR() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ARLauncherPage,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();
  }
}
