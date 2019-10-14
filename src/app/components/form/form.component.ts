import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selectedFiles: FileList;
 status: number = 0;
  message: string;
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.message = "Cargando...";
    this.uploadService.uploadfile(file).then(data=>{
      this.status = 1;
    this.message = null;

    },error=>{
    this.message = null;
      this.status = 2;
    });
  }

  selectFile(event) {
    this.status = 0;
    this.selectedFiles = event.target.files;
  }
}
