import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { resources } from 'src/environments/resources';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root',
})
export class FlowerService {
  protected baseApiPath = environment.baseApiPath;

  constructor(protected apiBaseService: ApiBaseService) {}

  public findAll(): Observable<any> {
    const uri: string = resources.flower.regador;

    return this.apiBaseService.get(`${this.baseApiPath + uri}`);
  }

  public findLogFlower(idDevice: string, idFlower: string): Observable<any> {
    const uri: string =
      resources.flower.log +
      '/' +
      idDevice +
      resources.flower.regador +
      '/' +
      idFlower;

    return this.apiBaseService.get(`${this.baseApiPath + uri}`);
  }
}
