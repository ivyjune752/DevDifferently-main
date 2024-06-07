import { Component, Input } from '@angular/core';
import { Folder } from '../../../core/models/Folder';
import { MenuItem } from '../../models/MenuItem';
import { ContextButtonComponent } from '../context-button/context-button.component';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'app-card-folder',
  standalone: true,
  imports: [ContextMenuComponent, ContextButtonComponent],
  templateUrl: './card-folder.component.html',
  styleUrl: './card-folder.component.sass'
})
export class CardFolderComponent {
  @Input()
  folder: Folder = {
    folderName: '',
    isFavorite: false,
    size: '',
    type: ''
  };

  public menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      { label: "Share", icon: "upload" },
      { label: "Rename", icon: "rename" },
      { label: "Delete", icon: "delete" }
    ]
  }
}
