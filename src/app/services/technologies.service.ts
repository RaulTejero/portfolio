import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {url} from '../url/url';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor(private HttpClient: HttpClient) { }
  getAll(): Promise<string[]> {
    let result = this.HttpClient.get<string[]>(url+"technologies.json").toPromise();
    return result;
  }
}
