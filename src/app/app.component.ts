import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Task } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todos-with-datastore';

  tasks: Task[];

  ngOnInit() {
    this.updateTasks();
  }

  async updateTasks() {
    this.tasks = await DataStore.query(Task);
  }

  async addTask() {
    const res = await DataStore.save(
      new Task({
        title: `New Task ${Math.round(Math.random() * 1000)}`,
      })
    );
    await this.updateTasks();
    console.log('AppComponent -> addTask -> res', res);
  }
}
