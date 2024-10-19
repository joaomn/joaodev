import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@codeandweb/ngx-translate";
import { TranslateService } from "@codeandweb/ngx-translate";
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'menubar',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, TooltipModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  constructor(private translate: TranslateService) {}

  // Método para mudar o idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

   reloadPage(): void {
    window.location.reload();
}
}
