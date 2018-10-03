import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { PyePage } from '../pye/pye';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  cs = CsPage;
  pye = PyePage;

  constructor(public navCtrl: NavController) {
  }
    
    clickHistoria(){
      this.navCtrl.push(this.historia);
    }
    
    clickCs (){
      this.navCtrl.push(this.cs);
    }

    clickPye (){
      this.navCtrl.push(this.pye);
    }
  }


