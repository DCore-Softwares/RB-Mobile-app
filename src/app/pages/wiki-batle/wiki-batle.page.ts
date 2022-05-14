import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-wiki-batle',
  templateUrl: './wiki-batle.page.html',
  styleUrls: ['./wiki-batle.page.scss'],
})
export class WikiBatlePage implements OnInit {

  constructor(public actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'RRPL - 1ª Liga',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'História',
        icon: 'library',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Temporadas',
        icon: 'ribbon',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Epeciais',
        icon: 'gift',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Gladiadores',
        icon: 'people-circle',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Fechar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
