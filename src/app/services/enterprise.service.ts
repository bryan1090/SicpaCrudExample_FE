import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private http:HttpClient) { }

  list()
  {
    return this.http.get(environment.webServices_url+'/enterprise/list').pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }

  delete(obj:any)
  {
    return this.http.post(environment.webServices_url+'/enterprise/delete',obj).pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }


  create(obj:any)
  {
    return this.http.post(environment.webServices_url+'/enterprise/create',obj).pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }

  update(obj:any)
  {
    return this.http.post(environment.webServices_url+'/enterprise/update',obj).pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }

}
