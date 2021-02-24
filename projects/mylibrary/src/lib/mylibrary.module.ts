import { NgModule } from '@angular/core';
import { MylibraryComponent } from './mylibrary.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';



@NgModule({
  declarations: [MylibraryComponent],
  imports: [
    NgxAuthFirebaseUIModule
  ],
  exports: [MylibraryComponent]
})
export class MylibraryModule { }
