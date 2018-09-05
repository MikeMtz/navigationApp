import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page3Page } from "../page3/page3";

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  mutants:any[] = [
      {
        nombre: 'Magneto',
        poder: 'Control of metal'
      },
      {
        nombre: 'Wolverine',
        poder: 'Self healing'
      },
      {
        nombre: 'Cable',
        poder: 'Time traveler'
      },
      {
        nombre: 'Gambit',
        poder: 'Throw inanimate objects'
      }
  ];

  page3:any = Page3Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goPage3 (mutant:any) {
    this.navCtrl.push( Page3Page, { 'mutant' : mutant } )
  }

}
