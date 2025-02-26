import { Component, computed, input, Signal } from '@angular/core';

@Component({
  selector: 'app-stock',
  imports: [],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
  stocks = input.required<[string, number][]>();

  totalUnits: Signal<number> = computed(() => 
    this.stocks().reduce((acc: number, stock: [string, number]) => 
      acc + stock[1], 0)
  );

}
