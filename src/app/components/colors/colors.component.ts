import { Component, input } from '@angular/core';
import { Color } from '../../models/interfaces/trainer.interface';

@Component({
  selector: 'app-colors',
  imports: [],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  colors = input.required<Color[]>();

  isArray = (value: any): boolean => Array.isArray(value);

  getCSSGrad(color: Color): string {
    const colorArray = color as string[];
    return `linear-gradient(45deg, ${colorArray.join(', ')})`;
  }

}
