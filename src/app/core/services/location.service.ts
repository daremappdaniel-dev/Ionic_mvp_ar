import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface LocationProvider {
  getPosition(): Observable<{ lat: number; lng: number }>;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService implements LocationProvider {

  constructor() { }

  getPosition(): Observable<{ lat: number; lng: number }> {
    // MOCK: Sol, Madrid (Para probar en PC)
    // En el futuro, aquí pondremos: return from(Geolocation.getCurrentPosition());
    return of({ lat: 40.416775, lng: -3.703790 }); 
  }
}
