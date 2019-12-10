import { Component, OnInit } from '@angular/core';
import {FilesUploadService} from "./files-upload.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.less'],
  providers: [FilesUploadService]
})
export class FilesUploadComponent implements OnInit {

  constructor(private httpService: FilesUploadService) { }

  uploadedFiles: FileList;

  isUpload: boolean = false;

  ngOnInit() {
  }

  fileChange(e) {
    this.uploadedFiles = e.target.files;

    console.log(this.uploadedFiles);
  }

  upload() {
    let formData = new FormData();

    formData.append('file', this.uploadedFiles[0], this.uploadedFiles[0].name);

    this.isUpload = true;

    this.httpService
      .post('http://localhost:5000/files/upload', formData)
      .subscribe(res => {
        this.isUpload = false;

        if (!res) return alert('Ошибка при отправке файла');

        this.uploadedFiles = null;
        alert('Файл успешно отправлен!');
      });
  }
}
