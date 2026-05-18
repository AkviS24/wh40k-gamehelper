import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingScreen } from "../../components/loading-screen/loading-screen";


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LoadingScreen],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit, OnDestroy {
  loading: boolean = true;
  private timerId: any;
  loadingScreenStatus = "main-loading-screen"; 

  ngOnInit() {
    if (this.loading) {
      this.timerId = setTimeout(() => {
        this.loading = false;
        console.log("Loading screen should be hidden now");
      }, 3000);
    }
  }

  ngOnDestroy() {
    // Verhindert Speicherlecks, falls die Komponente vorzeitig verlassen wird
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }
}
