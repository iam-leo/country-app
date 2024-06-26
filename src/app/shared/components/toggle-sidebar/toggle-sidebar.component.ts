import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-toggle-sidebar',
  templateUrl: './toggle-sidebar.component.html',
  styleUrl: './toggle-sidebar.component.css',
})
export class ToggleSidebarComponent {
  @Input() isSidebarVisible: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
