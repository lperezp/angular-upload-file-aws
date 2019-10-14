import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  FOLDER = 'folder-lperezp/';

  constructor() { }

  uploadfile(file) {
    console.log(file);

    const bucket = new S3(
      {
        accessKeyId: 'YOU-PUBLIC-KEY',
        secretAccessKey: 'YOU-SECRET-KEY',
        region: 'YOU-REGION'
      }
    );

    const params = {
      Bucket: 'nameBucket',
      Key: this.FOLDER + file.name,
      Body: file,
    };

    return new Promise((resolve, reject) => {
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file.');
              reject(false);
          }

          console.log('Successfully uploaded file.',data);
          resolve(data);

      });
  });
  }

}
