import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { footerComponent } from './shared/footer.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
 

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        footerComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent}, //default route
            {path:'', redirectTo: 'welcome', pathMatch:'full'},
            {path:'**', redirectTo:'welcome', pathMatch:'full'} //usually for 404 display
        ]),
        ProductModule     
    ]
})
export class AppModule { }
