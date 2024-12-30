import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-sticky-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sticky-card.component.html',
  styleUrl: './sticky-card.component.scss'
})
export class StickyCardComponent {

  @Input() title: string = '';

}
