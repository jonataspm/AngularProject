import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  userName:any
  //resRepo: any
  constructor(private httpClient: HttpClient) { }
  private urn: string = 'https://api.github.com/users';
  

  get userList():Observable<any>{
    return this.httpClient.get<any>(this.urn).pipe(
      tap(res=>res)
      )
  }

  get user():Observable<any>{
    return this.httpClient.get<any>(this.urn+"/"+this.userName).pipe(
      tap(res=>res)/*, 
      tap(res => {
       this.apiGetUserRepo(res.repos_url).subscribe(
            res => this.resRepo.repository = res
          )
      } )*/
    )
  }
  public apiGetUserRepo( url: string):Observable<any>{
    return this.httpClient.get<any>( url ).pipe(
      map(res => res)
    )
  }

  public getUsername(getname: string) {
    this.userName = getname;
  }
}