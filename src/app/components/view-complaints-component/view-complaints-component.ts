import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { Question } from '../../models/question.model';
import { ClientService } from '../../clientService';
import { T } from '@angular/cdk/keycodes';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-view-complaints-component',
  imports: [MatButtonModule,MatIcon,QRCodeComponent],
  templateUrl: './view-complaints-component.html',
  styleUrl: './view-complaints-component.css'
})
export class ViewComplaintsComponent implements OnInit{
   
newQuestion!:Question[]
cdr = inject(ChangeDetectorRef);
 @ViewChild('qrcodeContainer', { static: false }) qrcodeContainer!: ElementRef;
  
 



constructor(private dataService : ClientService){

}

ngOnInit():  void{
  this.dataService.getComplaints().subscribe({
    next :(resData) => {
      
           this.newQuestion = resData
           this.cdr.detectChanges()
        
       
        console.log(this.newQuestion.length)
  
    }
     
  })
 
  
}

  get reasons(){
    
    return this.newQuestion;
  }

  onSubmit(numbers:number){
    this.newQuestion = this.newQuestion.filter(item => item.id !== numbers)
    
     
     
    console.log(this.newQuestion)
    this.dataService.deleteComplaints(numbers)

  }

  onDownload() {
    const canvas = this.qrcodeContainer.nativeElement.querySelector('canvas');
    const url = canvas.toDataURL('image/png');

    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-code.png';
    a.click();
  }


  get company(){
    return this.dataService.company
  }



 






}

