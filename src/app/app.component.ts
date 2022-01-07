import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista de tareas en Angular';
  list:any []= [];
  addTask(item:string)
  {
    this.list.push({id:this.list.length, name:item});
  }
  removeTask(id:number)
  {
    this.list = this.list.filter(item => item.id !== id);
  }
}
