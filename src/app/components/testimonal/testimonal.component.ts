import { Component } from '@angular/core';
import { LineTextComponent } from '../../UI/line-text/line-text.component';

@Component({
  selector: 'app-testimonal',
  standalone: true,
  imports: [LineTextComponent],
  templateUrl: './testimonal.component.html',
  styleUrl: './testimonal.component.css'
})
export class TestimonalComponent {
  data = [
    { id: 1, author: 'Michael Wong', spec: 'UI/UX Design Student', rating: '4.9', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' },
    { id: 2, author: 'Avril Song', spec: 'Web Development Student', rating: '4.8', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' },
    { id: 3, author: 'Jeane Wood', spec: 'Data Science Student', rating: '5.0', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!' }
  ]
}
