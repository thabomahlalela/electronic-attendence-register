import { Routes } from '@angular/router';
import { ClientAdminHome } from './components/client-admin-home/client-admin-home';
import { ViewCompanies } from './components/view-companies/view-companies';
import { CompanyRegistrationForm } from './components/company-registration-form/company-registration-form';
import { AboutCompany } from './components/about-company/about-company';

export const routes: Routes = [
    {
        path:'',
        component:ClientAdminHome,
        children:[
            
    {
        path:'view-companies',
        component:ViewCompanies,
        
    },
         {
        path:'register-company',
        component:CompanyRegistrationForm,
    },
        ]
    },
    {
        path:'edit-company',
        component:AboutCompany,

    }


  

];
