import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@codeandweb/ngx-translate";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio-joao';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['pt', 'en']);
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
}
}
