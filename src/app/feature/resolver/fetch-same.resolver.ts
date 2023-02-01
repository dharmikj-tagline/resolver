import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class FetchSameResolver implements Resolve<boolean> {
  constructor(private data:DataService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.data.dataGet();
  }
}
