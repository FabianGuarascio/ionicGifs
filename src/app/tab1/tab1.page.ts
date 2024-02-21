import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { GiphyApiService } from '../core/services/giphy-api.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,JsonPipe],
})
export class Tab1Page {

  private apiService = inject(GiphyApiService)
  public trendingGifs = toSignal(this.apiService.getTrendings( 0, 5))





}
