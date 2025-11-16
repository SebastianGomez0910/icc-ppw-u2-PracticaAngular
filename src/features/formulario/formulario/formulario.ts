import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder, } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Formulario { 

  private fb=inject(FormBuilder);

  myForm: FormGroup=this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    edad:[0, [Validators.required, Validators.min(18)]],
    correo:['',[Validators.required, Validators.email]]
  });

    formulario =new FormGroup({
      nombre:new FormGroup('',),
      email:new FormGroup(''),
  });

  onSubmit() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log('Datos del formulario',this.myForm.value);
    alert('formulario invalido. datos enviados correctamente ')
    this.myForm.reset();
  }

  isValidField(fieldName: string): boolean | null {
    return (
      this.myForm.controls[fieldName].errors &&
      this.myForm.controls[fieldName].touched
    );
  }

  getFieldError(fieldName: string): string | null {
    if (!this.myForm.controls[fieldName]) {
      return null;
    }

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;

        case 'email':
          return 'Formato de correo inválido';
      }
    }

    return null;
  }
}

