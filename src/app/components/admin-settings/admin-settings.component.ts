import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { AbstractControl, EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../clientService';

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
  cdr = inject(ChangeDetectorRef);
  
  adminService = inject(ClientService);
 
 
   

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

    this.isUsernameFormSubmitted = true;
    if(this.usernameForm.controls['oldUsername'].pristine) {
      this.oldUsernamePlaceholder = 'required';
    }

    if(this.usernameForm.controls['newUsername'].pristine) {
      this.newUsernamePlaceholder = 'required';
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
}
