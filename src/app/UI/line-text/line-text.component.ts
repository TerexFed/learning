import { Component, Input } from '@angular/core';

@Component({
  selector: 'line-text',
  standalone: true,
  imports: [],
  templateUrl: './line-text.component.html',
  styleUrl: './line-text.component.css'
})
export class LineTextComponent {
  @Input() text: string;
}
