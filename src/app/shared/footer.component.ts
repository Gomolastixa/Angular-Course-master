import { Component } from "@angular/core";

@Component({
    selector: 'pm-footer',
    templateUrl: './footer.html'
})
export class footerComponent {

    
    copyright = "Basic Copyright Shit";

    addText(): void {
        this.copyright += " bruh";
    }
}