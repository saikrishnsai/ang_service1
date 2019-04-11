import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class myservice{
    constructor(private _http:HttpClient){}
    getData(){
       return this._http.get("https://restcountries.eu/rest/v2/all")
    }
}