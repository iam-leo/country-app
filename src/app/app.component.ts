import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'country-app';

  isSidebarVisible: boolean = false;
  isDesktop: boolean = window.innerWidth >= 768;

  ngOnInit(): void {
    // Monitorear cambios de pantalla (responsive) para mostrar/ocultar el sidebar
    this.onResize();

    // Cuando se genera el componente si esta en una pantalla desktop seteamos isSidebarVisible en true
    if (this.isDesktop) this.isSidebarVisible = true;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  onResize() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
      console.log(this.isDesktop);

      if (!this.isDesktop) this.isSidebarVisible = false;

      if (this.isDesktop) {
        this.isSidebarVisible = true;
      }
    });
  }
}
