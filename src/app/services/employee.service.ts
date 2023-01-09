import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  list()
  {
    return this.http.get(environment.webServices_url+'/employee/list').pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }

  delete(obj:any)
  {
    return this.http.post(environment.webServices_url+'/employee/delete',obj).pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }


  create(obj:any)
  {
    return this.http.post(environment.webServices_url+'/employee/create',obj).pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }

  update(obj:any)
  {
    return this.http.post(environment.webServices_url+'/employee/update',obj).pipe(
      map((res:any)=>{
        return res['listaObjetos'];
      }))
      ; 
  }


}
