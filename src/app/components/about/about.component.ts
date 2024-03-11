import { Component } from '@angular/core';
import { LineTextComponent } from '../../UI/line-text/line-text.component';
import { ButtonComponent } from '../../UI/button/button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LineTextComponent, ButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
