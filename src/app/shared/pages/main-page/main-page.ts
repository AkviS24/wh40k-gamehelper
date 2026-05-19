import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingScreen } from "../../components/loading-screen/loading-screen";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LoadingScreen],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  loading: boolean = true;
  loadingScreenClosed = "main-loading-screen-hidden";

  if (loading: boolean) {
      setTimeout(() => {
        this.closeLoadingScreen();
        this.loading = false;
      }, 3000);
    }

  closeLoadingScreen() {
    return this.loadingScreenClosed;
  }

}  

