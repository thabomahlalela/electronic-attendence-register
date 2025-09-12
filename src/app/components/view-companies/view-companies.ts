import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClientService } from '../../clientService';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { debounceTime, Subscription } from 'rxjs';
import { Company } from '../../models/company.models';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CompanyRegistrationForm } from '../company-registration-form/company-registration-form';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-companies',
  imports: [MatButtonModule, MatMenuModule, ReactiveFormsModule,MatIcon],
  templateUrl: './view-companies.html',
  styleUrl: './view-companies.css'
})
export class ViewCompanies {
 readonly dialog = inject(MatDialog);
 private _snackBar = inject(MatSnackBar);
 private service = inject(ClientService);
 private router = inject(Router);
 private companies! : Company[] 
 private viewCompanies! : Company[]
 private cdr = inject(ChangeDetectorRef);
 subscription! : Subscription;
isUndo = false;

 message = 'company deleted';
    action ='undo';
 





 form = new FormGroup({
      searchControl : new FormControl()
  })

  formDeregister = new FormGroup({
      deregisterControl : new FormControl()
  });


  
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

      dialogConfig.width = '500px'; // Set the desired width

    const dialogRef = this.dialog.open(CompanyRegistrationForm, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
        this.service.viewCompanies().subscribe(
        {
            next : (s)=>{
              this.companies = s
              this.viewCompanies = s
              this.cdr.detectChanges()
            } 
        }
    )
      
    });
  }


   constructor(){
    this.service.viewCompanies().subscribe(
        {
            next : (s)=>{
              this.companies = s
              this.viewCompanies = s
              this.cdr.detectChanges()
            } 
        }
    )
     this.subscription = this.form.controls.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((value : string)=>{
      this.companies = this.getCompanies.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()))
      this.cdr.detectChanges()
      console.log(value)
    })


    this.subscription = this.formDeregister.controls.deregisterControl.valueChanges.pipe(debounceTime(300)).subscribe((value : string)=>{
      this.companies=this.getCompanies.filter(item => item.registrationNO.toLowerCase() === (value.toLowerCase()))
      this.cdr.detectChanges()
      if(value=== ""){
        this.companies = this.getCompanies
      }
      console.log(value)
    })


   }
    ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDeregister() {
    console.log(this.formDeregister.value.deregisterControl)
       let company = this.getCompanies.find((s)=>s.registrationNO === this.formDeregister.value.deregisterControl)
    if(company){
      this.companies = this.getCompanies.filter((s)=>s.registrationNO !== this.formDeregister.value.deregisterControl)
      this.viewCompanies = this.companies
       console.log(company?.name,company?.email)
    }

     let  snackBarRef =this._snackBar.open(this.message, this.action, {duration:5000});

      if(this.isUndo === true) {
        this.isUndo = false;
      }

    snackBarRef.afterDismissed().subscribe(()=> {
      console.log("snackbar dismised");
        
      if(this.isUndo) {

      } else {
    this.service.deRegisterCompany(company!);
      }
    });

    snackBarRef.onAction().subscribe(()=>{
        this.companies.push(company!);
     this.cdr.detectChanges();
     this.isUndo =true;
    });
      
  } 

  get getCompanies(){
    return this.viewCompanies;
  }


  get myCompanies() {
    return this.companies
  }

  onAdd() {
    // this.router.navigate(['/register-company']);
   
  }

  onCompany(company:Company){
    this.service.setClickedCompany(company);
    this.router.navigate(['/edit-company'])
  }
}
