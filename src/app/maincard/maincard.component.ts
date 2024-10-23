import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@codeandweb/ngx-translate";
import { TranslateService } from "@codeandweb/ngx-translate";
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincard',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './maincard.component.html',
  styleUrl: './maincard.component.css'
})
export class MaincardComponent {
  constructor(private translate: TranslateService, private router: Router) {}



  // Método para mudar o idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

}
