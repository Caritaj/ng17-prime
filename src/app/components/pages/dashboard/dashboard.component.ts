import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, InputTextModule, ReactiveFormsModule, MatButtonModule,
    MessagesModule, MessageModule, DropdownModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isSubmitted: boolean = false;
  personDataFormGroup: FormGroup;
  genders: any[] = [
    { id: 1, text: 'Masculino' },
    { id: 2, text: 'Femenino' }
    // otros géneros si es necesario
  ];

  constructor(private fb: FormBuilder) {
    this.personDataFormGroup = this.fb.group({
      genderId: ['', Validators.required]
      // otros campos de tu formulario
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.personDataFormGroup.valid) {
      console.log('Form Submitted', this.personDataFormGroup.value);
    } else {
      console.log('Form Not Valid');
    }
  }
}
