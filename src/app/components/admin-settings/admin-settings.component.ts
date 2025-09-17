import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../clientService';
import { Person } from '../../models/person.model';

// function matchingPasswords(control: AbstractControl) {
//   const password = control.get('newPassword')?.value;
//   const confirmPassword = control.get('confirmPassword')?.value;

//   if(confirmPassword === password) {
    
//     return null;
//   }

//   return {passwordsDoNotMatch:true}
// }


@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.css'
})
export class AdminSettingsComponent {
  isChangingPassword = false;
  isChangingUsername = false;
  isOldUsernameMatching = false;
  isOldUsernameNotMatching = false;
  isPasswordFormSubmited = false;
  isUsernameFormSubmitted = false;
  isOldPasswordMatching = false;
  isOldPasswordNotMatching = false;
  oldUsernamePlaceholder = 'old username';
  newUsernamePlaceholder = 'new username'
  oldPasswordPlaceholder = 'old password';
  newPasswordPlaceholder ='new password';
  confirmPasswordPlaceholder = 'confirm password';
 ;
  
    private cdr = inject(ChangeDetectorRef);
    
    private adminService = inject(ClientService);
    private person : Person =  this.adminService.getPerson
    private error = this.adminService.getError;
    private usernameError? : string;
    private count = 1
 
 
   

  options = [
    {
      id : '0',
      name:'change username'
    },
    {
      id : '1',
      name:'change password'
    }
  ]

  usernameForm = new FormGroup({
    oldUsername : new FormControl('', {
      validators:[Validators.required]
    }),
    newUsername : new FormControl('', {
      validators: [Validators.required]
    }),
  });

  passwordForm = new FormGroup({
    oldPassword : new FormControl('', {
      validators:[Validators.required]
    }),

    passwords : new  FormGroup({
      newPassword : new FormControl('', {
        validators:[Validators.required]
      }),
      confirmPassword : new FormControl('', {
        validators: [Validators.required]
      }),
    }, {
      // validators:[matchingPasswords]
    })
  })



  onSubmit(){
    console.log(this.person.user?.username)

    this.isUsernameFormSubmitted = true;
    if(this.usernameForm.controls['oldUsername'].pristine) {
      this.oldUsernamePlaceholder = 'required';
    }

    if(this.usernameForm.controls['newUsername'].pristine) {
      this.newUsernamePlaceholder = 'required';
    }
   
    if(this.usernameForm.value.oldUsername !== this.person.user?.username){
      this.usernameError = 'old username is incorrect'
    }else{
      if(this.count == 1){
        this.count = 2
        this.person.user!.username = this.usernameForm.value.newUsername!;
        console.log(this.person.user?.username)
        this.adminService.updatePerson(this.person)
        this.usernameError = 'old username is correct'
        this.usernameForm.value.newUsername = ''
      }else{
        this.usernameError = 'try again later'
      }
      
    }
    
     
  }

  onSubmitPasswordForm() {
    this.isPasswordFormSubmited = true;
    if(this.passwordForm.controls['oldPassword'].pristine) {
        this.oldPasswordPlaceholder = 'required';
      }
  
      if(this.passwordForm.controls['passwords'].controls['newPassword'].pristine) {
        this.newPasswordPlaceholder = 'required';
      }

      if(this.passwordForm.controls['passwords'].controls['confirmPassword'].pristine) {
        this.confirmPasswordPlaceholder = 'required';
      }

       if(this.passwordForm.controls['passwords'].invalid && this.passwordForm.controls['passwords'].touched) {
      this.passwordForm.controls['passwords'].controls['confirmPassword'].reset();
      this.confirmPasswordPlaceholder = 'do not match'
    }
    console.log(this.passwordForm.value.passwords!.confirmPassword!)

     this.adminService.verifyPassword(this.person.user!.username,this.passwordForm.value.oldPassword!).subscribe({
           next : (authres)=>{
             console.log(authres.person)
             console.log(authres.roles)
             console.log(authres.person.company)
             console.log(authres.person.user)
             console.log(authres.token)
             this.person = authres.person
              this.error = 'password correct'
              this.cdr.detectChanges()
              this.person.user!.password = this.passwordForm.value.passwords!.confirmPassword!

               this.adminService.updatePerson(this.person)
           },
           error : (error)=>{
             console.log(error.error)
             this.error = error.error
              this.cdr.detectChanges()

            }
         
         })
    
  }

  onClick(option:string) {
    if(option === '0') {
      if(this.isChangingPassword == true) {
        this.isChangingPassword = false;
        
      }
      if(this.isChangingUsername == true) {
        this.isChangingUsername = false;
      }

      this.isChangingUsername = true;
    } else if (option === '1') {
      if(this.isChangingUsername == true) {
        this.isChangingUsername = false;
      }
      if(this.isChangingPassword == true) {
        this.isChangingPassword = false;
      }
      this.isChangingPassword = true;
    }
  }

  get settingsOptions() {
    return this.options
  }

    get getClass() {
      
       return {
      'my-class':this.isPasswordFormSubmited,
      'invalid': this.passwordForm.controls['oldPassword'].pristine,

    }
}

 get getClass1() {
    
       return {
      'my-class1':this.isUsernameFormSubmitted,
      'invalid': this.usernameForm.controls['oldUsername'].pristine,

    }
}

  get getError(){
       if(this.passwordForm.valid) {
          return this.error
       }

       return ;
    
    };

    get getusernameError(){
       if(this.usernameForm.valid) {
          return this.usernameError;
        }

       return ;
    }
}
