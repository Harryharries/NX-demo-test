import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
// importing the component from the library
import { Hero } from '@acme/ui';

@Component({
  imports: [NxWelcome, RouterModule, Hero],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'demo';
}
