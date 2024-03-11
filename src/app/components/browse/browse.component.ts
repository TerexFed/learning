import { Component } from '@angular/core';
import { LineTextComponent } from '../../UI/line-text/line-text.component';
import { ButtonComponent } from '../../UI/button/button.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [LineTextComponent, ButtonComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  data = [
    { id: 1, author: 'Tom Kennedy', imageSrc: '../../../assets/dataimages/thinkingimage.png', date: 'Feb 23, 2024', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 2, author: 'Tom Kennedy', imageSrc: '../../../assets/dataimages/laptopimage.png', date: 'Feb 10, 2024', title: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 3, author: 'Tom Kennedy', imageSrc: '../../../assets/dataimages/layingimage.png', date: 'Feb 02, 2024', title: 'Lorem ipsum dolor sit amet consectetur.' }
  ]
}
