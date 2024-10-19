import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@codeandweb/ngx-translate";
import { TranslateService } from "@codeandweb/ngx-translate";
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
@Component({
  selector: 'menubar',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, TooltipModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  constructor(private translate: TranslateService, private router: Router) {}



  // Método para mudar o idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

   reloadPage(): void {
    this.router.navigate(['/'])
}

goToAbout() : void{
  this.router.navigate(['/about'])
}

goToSkills() : void{
  this.router.navigate(['/skills'])
}

goToProjects() : void{
  this.router.navigate(['/projects'])
}

}
