import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  
  phoneno:string="";
  address:string="";
  bookname: string="";
  price: string="";
  author: string="";
  edition: string="";
  other: string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("bookname",this.bookname);
    uploadImageData.append("price",this.price);
    uploadImageData.append("author",this.author);
    uploadImageData.append("address",this.address);
    uploadImageData.append("edition",this.edition);
    uploadImageData.append("phone",this.phoneno);
    uploadImageData.append("other",this.other);
    
    

    let res =this.http.post("http://localhost:1234/book/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.bookname="";
        this.price="";
        this.author="";
        this.address="";
        this.edition="";
        this.phoneno="";
        this.other="";
        
      }
    );

  }

}
