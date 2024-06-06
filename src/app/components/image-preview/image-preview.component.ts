import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageInformationI } from 'src/app/interfaces/image-information.interface';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { image: ImageInformationI }) {}

  public downloadImage(src: string): void {
    const link = document.createElement('a');
    link.href = src;
    link.download = this.getFileNameFromSrc(src);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private getFileNameFromSrc(src: string): string {
    return src.split('/').pop() ?? '';
  }
}
