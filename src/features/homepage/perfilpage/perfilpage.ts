import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfilpage',
  standalone : true,
  imports: [],
  templateUrl: './perfilpage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Perfilpage {

  name =signal('Sebastian');
  lastName=signal('Gomez');
  age=signal(21);

  getFullName() {
      return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
    }
 

   changeData() {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

    resetData() {
    this.name.set('Sebastian');
    this.lastName.set('Gomez');
    this.age.set(21);
  }

   changeAge() {
    this.age.set(18);
  }

    get fullNameUpperCase() {
    return `${this.name()} ${this.lastName()}`.toUpperCase();
  }
}