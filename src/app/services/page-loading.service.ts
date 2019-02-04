import { Injectable } from '@angular/core';
// import { Subject} from 'rxjs/Subject';
import { LoaderState } from '../models/loading-state.model';

@Injectable({
  providedIn: 'root'
})
export class PageLoadingService {

  // private loaderSubject = new Subject<LoaderState>();
  // loaderState = this.loaderSubject.asObservable();
  // constructor() { }
  // show() {
  //   this.loaderSubject.next(<LoaderState>{show: true});
  // }
  // hide() {
  //   this.loaderSubject.next(<LoaderState>{show: false});
  // }
}
