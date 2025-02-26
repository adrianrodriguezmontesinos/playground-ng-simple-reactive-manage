import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, combineLatest, map, Observable } from 'rxjs';

// Models
import { TrainerType } from '../../models/types/trainer.type';
import { Trainer, TrainerImage } from '../../models/interfaces/trainer.interface';

// Components
import { TrainersComponent } from '../../components/trainers/trainers.component';

// Services
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-gallery',
  imports: [TrainersComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  trainerTrype = TrainerType; // HTML Use

  private readonly apiService = inject(ApiService);

  sportTrainers: Signal<Trainer[] | undefined> = toSignal(this.getTrainers(TrainerType.SPORT));
  casualTrainers: Signal<Trainer[] | undefined> = toSignal(this.getTrainers(TrainerType.CASUAL));
  streetTrainers: Signal<Trainer[] | undefined> = toSignal(this.getTrainers(TrainerType.STREET));

  /**
   * 
   * @param type 
   * @returns 
   */
  private getTrainers(type: TrainerType): Observable<Trainer[]> {
    return this.apiService.getTrainersByType(type)
      .pipe(
        switchMap((trainers: Trainer[]) =>
          combineLatest(trainers.map((t: Trainer) => this.getTrainerWithImage(t)))
        )
      )
  }

  /**
   * 
   * @param t 
   * @returns 
   */
  private getTrainerWithImage(t: Trainer): Observable<Trainer> {
    return this.apiService.getTrainerImage(t.id)
      .pipe(map((trainerImage: TrainerImage) => ({ ...t, trainerImage })))
  }

}
