import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { File } from '../../core/models/File';
import { Folder } from '../../core/models/Folder';
import { CardFileComponent } from '../../share/components/card-file/card-file.component';
import { CardFolderComponent } from '../../share/components/card-folder/card-folder.component';
import { DirectoryService } from './directory.service';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CardFolderComponent, CardFileComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.sass'
})
export class DirectoryComponent implements OnInit {

  public folders: Folder[] = [];
  public files: File[] = [];

  private directoryService: DirectoryService = inject(DirectoryService);
  private destroyRef: DestroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.directoryService.getAllFolder().subscribe({
      next: (folders: Folder[]) => {
        this.folders = folders;
      },
      error: (error: any) => {
        console.error(error);
      }
    });

    this.directoryService.getRecentFiles().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (files: File[]) => {
        this.files = files;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}
