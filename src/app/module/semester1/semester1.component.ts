import { ImageInformationI } from './../../interfaces/image-information.interface';
import { animate, style } from '@angular/animations';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { ImagePreviewComponent } from 'src/app/components/image-preview/image-preview.component';
import { diplomas, importantes, otras, presentation } from 'src/app/constants/images-mapper';

@Component({
  selector: 'app-semester1',
  templateUrl: './semester1.component.html',
  styleUrls: ['./semester1.component.scss']
})
export class Semester1Component implements OnInit {
  @ViewChild(NgxMasonryComponent) masonry!: NgxMasonryComponent;
  private dialog = inject(MatDialog);

  public masonryOptions: NgxMasonryOptions = {
    animations: {
      show: [style({ opacity: 0 }), animate('1000ms ease-in', style({ opacity: 1 }))],
      hide: [style({ opacity: '*' }), animate('1000ms ease-in', style({ opacity: 0 }))]
    },
    initLayout: false
  };

  public images: ImageInformationI[] = otras;
  public importantes: ImageInformationI[] = importantes;
  public diplomas: ImageInformationI[] = diplomas;
  public presentation: ImageInformationI = presentation;

  public ngOnInit(): void {
    this.randomGallery();
  }

  public randomGallery(): void {
    let currentIndex = this.images.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.images[currentIndex], this.images[randomIndex]] = [this.images[randomIndex], this.images[currentIndex]];
    }
  }

  public openDialog(image: ImageInformationI): void {
    this.dialog.open(ImagePreviewComponent, {
      data: { image },
      backdropClass: 'backdropBackground'
    });
  }

  public goToExternalLink(): void {
    window.location.href = 'https://onghabiderinternacional.com.co/';
  }
}
