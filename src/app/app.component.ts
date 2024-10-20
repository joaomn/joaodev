import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@codeandweb/ngx-translate";

import { LoadingPageComponent } from './loading-page/loading-page.component';

import { FooterbarComponent } from './footerbar/footerbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent, TranslatePipe, TranslateDirective, LoadingPageComponent, FooterbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio-joao';

  @ViewChild(LoadingPageComponent) loadingComponent!: LoadingPageComponent;

  ngOnInit() {
    // Simule um tempo de carregamento
    setTimeout(() => {
      this.loadingComponent.hideLoading();
    }, 3000); // tempo de 3 segundos
  }

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pt', 'en']);
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
}
}
