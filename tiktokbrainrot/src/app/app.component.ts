import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WindowComponent } from './window/window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'tiktokbrainrot';
}
