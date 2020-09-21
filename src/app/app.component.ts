import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Task, Account } from '../models';
import { Hub } from '@aws-amplify/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todos-with-datastore';

  tasks: Task[] = [];

  async ngOnInit() {
    // await this.updateTasks();
    await DataStore.start();

    Hub.listen('datastore', async (hubData) => {
      const { event } = hubData.payload;
      console.log(event, '-> data :', hubData.payload.data);
      if (event === 'ready') {
        // do something here once the data is synced from the cloud
        console.log('=========DATA SYNCED=========');
      }
    });
  }

  async updateTasks() {
    console.log('updating tasks');
    this.tasks = await DataStore.query(Task);
    console.log('AppComponent -> updateTasks -> this.tasks', this.tasks);
  }

  async addTask() {
    console.log('adding task');
    const res = await DataStore.save(
      new Task({
        title: `New Task ${Math.round(Math.random() * 1000)}`,
      })
    );
    console.log('AppComponent -> addTask -> res', res);
    await this.updateTasks();
    console.log('AppComponent -> addTask -> res', res);
  }

  async addAccount() {
    console.log('adding new account');

    await DataStore.save(
      new Account({ workspaces: [], formSharingConfigs: [], assignedForms: [] })
    );
    console.log('added new account');
  }
}
