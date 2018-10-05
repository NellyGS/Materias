import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { PyePage } from '../pye/pye';
import { DibPage } from '../dib/dib';
import { ComPage } from '../com/com';
import { MiPage } from '../mi/mi';
import { RobPage } from '../rob/rob';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  cs = CsPage;
  pye = PyePage;
  dib = DibPage;
  com = ComPage;
  mi = MiPage;
  rob = RobPage;

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

    clickDib (){
      this.navCtrl.push(this.dib);
    }

    clickCom (){
      this.navCtrl.push(this.com);
    }

    clickMi (){
      this.navCtrl.push(this.mi);
    }

    clickRob (){
      this.navCtrl.push(this.mi);
    }
  }


