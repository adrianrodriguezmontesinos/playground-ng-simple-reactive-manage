import { Component, computed, input, Signal } from '@angular/core';

// Models
import { Trainer } from '../../models/interfaces/trainer.interface';

// Components
import { ColorsComponent } from '../colors/colors.component';
import { StockComponent } from '../stock/stock.component';

@Component({
  selector: 'app-trainer',
  imports: [ColorsComponent, StockComponent],
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  trainer = input.required<Trainer>();
  stock: Signal<[string, number][]> = computed(() => Object.entries(this.trainer().stock));

}
