import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ContextButtonComponent } from '../context-button/context-button.component';
import { ContextMenuComponent } from '../context-menu/context-menu.component';
import { MenuItem } from '../../models/MenuItem';
import { File } from '../../../core/models/File';

@Component({
  selector: 'app-card-file',
  standalone: true,
  imports: [NgStyle, ContextMenuComponent, ContextButtonComponent, NgIf],
  templateUrl: './card-file.component.html',
  styleUrl: './card-file.component.sass'
})
export class CardFileComponent {
  @Input()
  file: File = {
    fileName: '',
    isFavorite: false,
    author: '',
    type: '',
    size: '',
    url: '',
    duration: 0,
    durationDisplay: ""
  };
  
  public menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      { label: "Share", icon: "upload"},
      { label: "Rename", icon: "rename"},
      { label: "Delete", icon: "delete"}
    ]
  }
}
