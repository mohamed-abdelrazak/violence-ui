import { Component } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { UploadService } from '../../core/services/upload.service';

@Component({
  selector: 'app-technology',
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  selectedFile: File | null = null;
  uploadProgress: number | null = null;
  errorMessage: string | null = null;

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (!file) return;

    if (!this.validateFile(file)) {
      this.errorMessage =
        'Invalid file type! Only images and videos are allowed.';
      this.selectedFile = null;
      return;
    }

    this.selectedFile = file;
    this.errorMessage = null;
  }

  validateFile(file: File): boolean {
    const allowedImageTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
    ];
    const allowedVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];

    return (
      allowedImageTypes.includes(file.type) ||
      allowedVideoTypes.includes(file.type)
    );
  }

  upload() {
    if (!this.selectedFile) return;

    this.uploadService.uploadFile(this.selectedFile).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress && event.total) {
        this.uploadProgress = Math.round((100 * event.loaded) / event.total);
      } else if (event.type === HttpEventType.Response) {
        console.log('Upload success:', event.body);
        this.uploadProgress = null;
      }
    });
  }
}
