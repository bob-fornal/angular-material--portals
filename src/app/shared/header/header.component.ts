import { Component, Input } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'task-header',
  standalone: true,
  imports: [
    MatGridListModule,
    MatToolbarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() eventId: string = '';
  @Input() taskId: string = '';
}
