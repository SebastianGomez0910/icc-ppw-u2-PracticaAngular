import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { FormUtils } from '../../../../app/utils/utils/FromUtils';


@Component({
  selector: 'app-formularios-dinamicos',

  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './formularios-dinamicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true 
})
export class FormulariosDinamicosComponent {

  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lenguajes: this.fb.array([
      this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
      this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
    ], Validators.minLength(3))
  });

  newLenguaje: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }


  onAddToLenguajes() {
    this.myForm.get('name')?.markAsTouched();
    this.newLenguaje.markAsTouched();
    if (this.newLenguaje.invalid) return;

  
    this.lenguajes.push(
      this.fb.control(this.newLenguaje.value, Validators.required)
    );

    this.newLenguaje.reset();
  }

  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
  }


  onSubmit() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }
}