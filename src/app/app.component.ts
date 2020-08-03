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

  async ngOnInit() {
    const tasks = await DataStore.query(Task);
    console.log('AppComponent -> ngOnInit -> tasks', tasks);
  }

  async addTask() {
    const res = await DataStore.save(
      new Task({
        title: 'New Task',
      })
    );
    console.log('AppComponent -> addTask -> res', res);
  }
}
