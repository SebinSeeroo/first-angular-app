import { Injectable } from "@angular/core";
import { NewTaskData } from "./specifictask/specifictask.model";
@Injectable({providedIn:"root"})
export class TaskService {

    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ];

    constructor(){
        debugger;
        const tasksFromStorage =  localStorage.getItem('tasks');

        if(tasksFromStorage && tasksFromStorage !== "[]"){
            debugger;
            this.tasks = JSON.parse(tasksFromStorage);
        }
    }

    getUserTask(userId: string) {
        debugger;
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
        });
        this.saveTask();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTask();
    }

    private saveTask(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}