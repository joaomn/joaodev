import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import {TranslatePipe, TranslateDirective} from "@codeandweb/ngx-translate";
import { TranslateService } from "@codeandweb/ngx-translate";
import { Router } from '@angular/router';
import { MaincardComponent } from '../maincard/maincard.component';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AvatarModule, CardModule,TranslatePipe,
     TranslateDirective, MaincardComponent,SplitterModule, ButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private translate: TranslateService, private router: Router) {}



  // Método para mudar o idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

}
