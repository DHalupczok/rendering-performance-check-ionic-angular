import {Component, OnDestroy} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subscription, tap} from "rxjs";

export interface ICat {
  id: string,
  url: string,
  width: number,
  height: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {

  constructor(private http: HttpClient) {
  }

  cats: ICat[] = []
  private subscriptions: Subscription[] = []
  apiKey = ''
  maximumCatsQuantity = 0;
  catsVisibility = false;
  multiplyFactor=1;
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  updateApiKey($event: any) {
    this.apiKey = $event.detail.value;
  }
  updateCatsMaxQuantity($event: any) {
    this.maximumCatsQuantity = $event.detail.value;
  }
  updateMultiplyFactor($event: any) {
    this.multiplyFactor = $event.detail.value;
  }
  multiplyArray(cats: ICat[]) {
    const arr=[];
    for(let i=0; i<this.multiplyFactor; i++) {
      arr.push(...cats);
    }
    this.cats=arr;
  }
  searchForCats() {
    const headers = new HttpHeaders({'x-api-key': this.apiKey});
    this.subscriptions.push(this.http.get<ICat[]>(`https://api.thecatapi.com/v1/images/search?limit=${this.maximumCatsQuantity}`, {headers}).pipe(tap((cats) => this.multiplyArray(cats))).subscribe(res => console.warn(res)));
  }

  toggleCats() {
    this.catsVisibility = !this.catsVisibility;
  }


}
