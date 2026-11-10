import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header.component';
import { CalculatorComponent } from './components/calculator.component';
import { FooterComponent } from './components/footer.component';

import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet, HeaderComponent, CalculatorComponent, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('testrun_ang.Client');
}
