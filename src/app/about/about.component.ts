import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from "@codeandweb/ngx-translate";
import { TranslateService } from "@codeandweb/ngx-translate";
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, CardModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  currentLang: string | undefined;
  isPt: boolean = false;

  constructor(private translate: TranslateService, private router: Router) {
    this.currentLang = this.translate.currentLang;
    this.isPt = this.currentLang === 'pt';

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      this.isPt = this.currentLang === 'pt';
    });
  }


}
