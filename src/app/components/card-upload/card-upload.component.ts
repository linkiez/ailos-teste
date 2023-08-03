import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-upload',
  templateUrl: './card-upload.component.html',
  styleUrls: ['./card-upload.component.scss'],
})
export class CardUploadComponent {
  constructor() {}

  @Input() titulo: string = 'Titulo';
  @Input() obrigatorio: boolean = false;
  @Output() onChangeFiles = new EventEmitter<File>();

  file: File | undefined;
  imagePath: string | undefined;

  onFileSelected(event: Event) {
    this.file = (event.target as HTMLInputElement).files![0];
    const mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      alert('Only images are supported.');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.imagePath = reader.result as string;
    }

    this.emitFiles();
  }

  emitFiles(){
    this.onChangeFiles.emit(this.file);
  }
}
