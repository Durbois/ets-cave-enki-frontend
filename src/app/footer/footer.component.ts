import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'phone',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/phone.svg'));

    iconRegistry.addSvgIcon(
        'email',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/email.svg'));
  }

  ngOnInit(): void {
  }

}
