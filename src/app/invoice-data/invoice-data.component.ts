import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-data',
  templateUrl: './invoice-data.component.html',
  styles: [
  ]
})
export class InvoiceDataComponent implements OnInit {
  fileToUpload: any;
  fileData: any;
  viewRawData:boolean;
  rawdata:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSelectFile(files: FileList) {
    
    this.fileToUpload = true;
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.fileData = formData;
  }
  submitInvoice()
  {
    
    let opt = { responseType: 'text' as 'text' };
    this.http.post('https://einvoiceservice-dev.azurewebsites.net/api/InvoiceService/upload', this.fileData,opt).subscribe(data => {
      
      this.viewRawData=true;
       this.rawdata=data;

      });
  }

}
