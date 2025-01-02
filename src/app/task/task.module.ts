import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TaskComponent } from "./task.component";
import { SpecifictaskComponent } from "./specifictask/specifictask.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[TaskComponent, SpecifictaskComponent, NewTaskComponent],
    exports: [TaskComponent],
    imports:[CommonModule, SharedModule]
})
export class TaskModule{}