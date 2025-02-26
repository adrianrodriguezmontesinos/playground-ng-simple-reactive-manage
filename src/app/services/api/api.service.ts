import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Trainer, TrainerImage } from '../../models/interfaces/trainer.interface';
import { TrainerType } from '../../models/types/trainer.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:3030/mkw/api/';
  private readonly http = inject(HttpClient);

  /**
   * Obtain all trainers to an specific type
   * @param type TrainerType
   * @returns trainer's array with same type
   */
  public getTrainersByType(type: TrainerType): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.BASE_URL}trainers/${type}`);
  }

  /**
   * Obtain a trainer image from API
   * @param id trainer's id
   * @returns trainer's corresponding image
   */
  public getTrainerImage(id: number): Observable<TrainerImage> {
    return this.http.get<TrainerImage>(`${this.BASE_URL}trainer/image/${id}`);
  }
}
