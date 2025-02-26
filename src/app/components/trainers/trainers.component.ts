import { Component, computed, input, Signal } from '@angular/core';

// Models
import { Trainer } from '../../models/interfaces/trainer.interface';
import { TrainerType } from '../../models/types/trainer.type';

// Components
import { TrainerComponent } from '../trainer/trainer.component';

@Component({
  selector: 'app-trainers',
  imports: [TrainerComponent],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.scss'
})
export class TrainersComponent {
  trainers = input.required<Trainer[] | undefined>();
  type: Signal<TrainerType | undefined> = computed(() => this.trainers()?.[0]?.type);

}
