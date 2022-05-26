import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  
  constructor(private httpClient: HttpClient) { }
  private urn: string = 'https://api.github.com/users?page=1&per_page=3';

  get userList():Observable<any>{
    return this.httpClient.get<any>(this.urn).pipe(
      tap(res=>res), 
      tap(res => {
        res.map((resRepo: any) => {
          this.apiGetUserRepo(resRepo.repos_url).subscribe(
            res => resRepo.repository = res
          )
        })
      })
    )
  }

  public apiGetUserRepo( url: string):Observable<any>{
    return this.httpClient.get<any>( url ).pipe(
      map(
       res => res
      )
    )
  }
}
