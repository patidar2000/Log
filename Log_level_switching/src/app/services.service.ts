import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // status="info"

  constructor(private _http:HttpClient) { }

  

  public showgetDetails(): Observable<any>{
    const options={responseType:'text'}
    return this._http.get('http://localhost:8080/getMessage',{responseType:'text'});
    
  }

  public showErrorDetails(): Observable<any>{
    const options={responseType:'text'}
    return this._http.get('http://localhost:8080/changeloglevel',
    {
      responseType:'text',
    params: new HttpParams().set('level','Error')
  });
    
  }

  public showInfoDetails(): Observable<any>{
    const options={responseType:'text'}
    return this._http.get(`http://localhost:8080/changeloglevel`,
    {
      responseType:'text',
    params: new HttpParams().set('level','Info')
  });
  }

  public showWarnDetails(): Observable<any>{
    const options={responseType:'text'}
    return this._http.get(`http://localhost:8080/changeloglevel`,
    {
      responseType:'text',
    params: new HttpParams().set('level','Warn')
  });
    
  }

  public showDebugDetails(): Observable<any>{
    const options={responseType:'text'}
    return this._http.get(`http://localhost:8080/changeloglevel`,
    {
      responseType:'text',
    params: new HttpParams().set('level','Debug')
  });
  }

  public showTraceDetails(): Observable<any>{
    const options={responseType:'text'}
    return this._http.get(`http://localhost:8080/changeloglevel`,
    {
      responseType:'text',
    params: new HttpParams().set('level','Trace')
  });
  }

  public showOffDetails(): Observable<any>{
    const options={responseType:'text'}
    return this._http.get(`http://localhost:8080/changeloglevel`,
    {
      responseType:'text',
    params: new HttpParams().set('level','Off')
  });
  }
}
