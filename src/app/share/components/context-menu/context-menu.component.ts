import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.sass'
})
export class ContextMenuComponent {
  @Input()
  menuItems: MenuItem[] = [];
}
