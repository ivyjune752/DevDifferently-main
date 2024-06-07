import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { File } from '../../core/models/File';
import { Folder } from '../../core/models/Folder';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  private httpClient: HttpClient = inject(HttpClient);

  public getAllFolder(): Observable<Folder[]> {
    return this.httpClient
      .get<Folder[]>("/assets/data/folder.json", {
        responseType: 'json'
      })
      .pipe(
        catchError(res => this.handleError(res))
      );
  }

  public getRecentFiles(): Observable<File[]> {
    return this.httpClient
      .get<File[]>("/assets/data/file.json", {
        responseType: 'json',
      })
      .pipe(
        switchMap((files: File[]) => {
          files.forEach(file => {
            file.durationDisplay = this.toHHMMss(file.duration);
          })
          return of(files);
        }),
        catchError(res => this.handleError(res))
      );
  }

  private toHHMMss(duration: number): string {
    let hours: any = Math.floor(duration / 3600);
    let minutes: any = Math.floor((duration - (hours * 3600)) / 60);
    let seconds: any = duration - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    if (hours === "00") return minutes + ':' + seconds;
    return hours + ':' + minutes + ':' + seconds;
  }

  private handleError(err: any): Observable<any> {
    if (err == null) { return of([]); }
    console.log(err);
    return of(err);
  }
}
