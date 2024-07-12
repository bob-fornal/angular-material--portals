import { Component } from '@angular/core';

@Component({
  selector: 'app-inner-html',
  standalone: true,
  imports: [],
  templateUrl: './inner-html.component.html',
  styleUrl: './inner-html.component.scss'
})
export class InnerHtmlComponent {
  data: Array<string> = [
    '<div>Bob</div>',
    '<img class="img" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/01/Capstone_Course.jpeg.jpg" />',
  ];
}
