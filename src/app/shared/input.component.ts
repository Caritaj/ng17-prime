import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@Component({
    selector: 'app-input',
    standalone: true,
    imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule],
    template: `
        <mat-form-field appearance="outline">
            <mat-label>{{ label }}</mat-label>
            <ng-container *ngIf="type !== 'select'; else selectTemplate">
                <input
                    matInput
                    [ngModel]="value"
                    [disabled]="isDisabled"
                    (ngModelChange)="onChange($event)"
                    [placeholder]="placeholder"
                    [type]="type"
                />
            </ng-container>
            <ng-template #selectTemplate>
                <mat-select
                    [ngModel]="value"
                    [disabled]="isDisabled"
                    (ngModelChange)="onChange($event)"
                    [placeholder]="placeholder"
                >
                    <mat-option *ngFor="let item of options" [value]="item.id">
                        {{ item.text }}
                    </mat-option>
                </mat-select>
            </ng-template>
        </mat-form-field>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
    styles: `mat-form-field {width: 100%;}`,
})
export class InputComponent implements ControlValueAccessor {
    @Input() label = '';
    @Input() placeholder = '';
    @Input() type: 'text' | 'password' | 'select' = 'text';
    @Input() options: { id: any; text: string }[] = [];

    value: string = '';
    isDisabled: boolean = false;
    onChange = (_: any) => { };
    onTouch = () => { };

    writeValue(obj: any): void {
        if (obj && obj !== '') {
            this.value = obj;
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}