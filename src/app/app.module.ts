import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiFormComponent } from './feature/api-form/api-form.component'; 
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './feature/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './feature/pipes/pipes.component';
import { PipeFilterPipe } from './pipes/pipe-filter.pipe';
import { PowerPipe } from './pipes/power.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApiFormComponent,
    HeaderComponent,
    PipesComponent,
    PipeFilterPipe,
    PowerPipe,
    EllipsisPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
