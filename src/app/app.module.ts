import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./task/task.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule, TaskModule]
})
export class AppModule { }