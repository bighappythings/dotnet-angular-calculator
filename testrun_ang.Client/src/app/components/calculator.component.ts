import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../services/calculator.service';

import { ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'calculator',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.css'
})

export class CalculatorComponent {
    firstNumber = 0;
    secondNumber = 0;
    result: number | null = null;

    operation = 'add';

    showModal = false;

    constructor(
        private calculatorService: CalculatorService,
        private cdr: ChangeDetectorRef
    ){}

    runCalculation(): void {

        if (this.operation === 'add'){
            this.calculatorService
                .add(this.firstNumber, this.secondNumber)
                .subscribe(result => {

                    console.log('Before update:', this.result);

                    this.result = result;
                    this.showModal = true;
                    this.cdr.detectChanges();

                    console.log('After update:', this.result);
            });
        } else {
            this.calculatorService
                .subtract(this.firstNumber, this.secondNumber)
                .subscribe(result => {
                    this.result = result;
                    this.showModal = true;
                    this.cdr.detectChanges();
                });
        }
    }

     closeModal(): void {
        this.showModal = false;
    }
}