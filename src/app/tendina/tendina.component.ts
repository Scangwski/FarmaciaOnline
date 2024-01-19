import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tendina',
  templateUrl: './tendina.component.html',
  styleUrls: ['./tendina.component.css']
})
export class TendinaComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const dropdowns = this.el.nativeElement.querySelectorAll('.tendina');

    dropdowns.forEach((dropdown: Element) => {
      const content = dropdown.querySelector('.dropdown-content') as HTMLElement;
      dropdown.addEventListener('click', () => {
        this.toggleDisplay(content);
      });
    });
  }

  private toggleDisplay(content: HTMLElement | null): void {
    if (content) {
      const currentDisplay = content.style.display;
      content.style.display = (currentDisplay === 'block') ? 'none' : 'block';
    }
  }
}
