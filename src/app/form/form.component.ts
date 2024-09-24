import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title = 'cupping_therapy';
  isNavbarTransparent: boolean = true;
  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Scrolling to section: ${sectionId}`);
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section not found: ${sectionId}`);
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    this.isNavbarTransparent = window.scrollY < 50;
  }
 
  
}
