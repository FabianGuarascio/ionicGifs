import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { GiphyApiService } from '@services/giphy-api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonInfiniteScroll, IonInfiniteScrollContent, IonGrid, IonRow, IonCol]
})
export class Tab2Page {

  private apiService = inject(GiphyApiService)

  trendingGifs: any[] = [];
  offset = 0;


  ngOnInit() {
    this.loadTrendingGIFs();
  }

  loadTrendingGIFs(event?:any) {
    this.apiService.getTrendings(this.offset).subscribe((response) => {
      this.trendingGifs = this.trendingGifs.concat(response.data);
      this.offset += 25;
      if (event) {
        event.target.complete();
      }
    });
  }

  loadMore(event:any) {
    this.loadTrendingGIFs(event);
  }

}
