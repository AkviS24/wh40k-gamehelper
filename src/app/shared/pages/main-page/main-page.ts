import { Component } from '@angular/core';
import { LoadingScreen } from "../../components/loading-screen/loading-screen";

@Component({
  selector: 'app-main-page',
  imports: [LoadingScreen],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  loading: boolean = true;
  firstLoad() {
    if(this.loading) {
      setTimeout(() => {
        this.loading = false;
        return "game";
      }, 1000);
    }
  }
}
