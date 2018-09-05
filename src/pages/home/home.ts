import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from "../index.pages";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  page2:any = Page2Page

  constructor(public navCtrl: NavController) {
  }

  goToPage2 () {
    this.navCtrl.push( Page2Page );
  }

}
