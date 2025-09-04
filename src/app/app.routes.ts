import { Routes } from '@angular/router';
import { ClientAdminHome } from './components/client-admin-home/client-admin-home';
import { ViewCompanies } from './components/view-companies/view-companies';
import { CompanyRegistrationForm } from './components/company-registration-form/company-registration-form';
import { AboutCompany } from './components/about-company/about-company';
import { CreateUser } from './components/create-user/create-user';
import { ViewSurveys } from './view-surveys/view-surveys';
import { CaptureSurvey } from './components/capture-survey/capture-survey';
import { GenerateQrCode } from './components/generate-qr-code/generate-qr-code';
import { Survey } from './components/survey/survey';
import { ViewUsers } from './components/view-users/view-users';

export const routes: Routes = [
    {
        path:'',
        component:ClientAdminHome,
        children:[
            
    {
        path:'view-companies',
        component:ViewCompanies,
        children :[
            
        ]
        
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
        children:[
            {
                path:'surveys',
                component:ViewSurveys,
                children:[
                    {
                path:'add-survey',
                component:CaptureSurvey
            },
            {
                path:'generate-qr-code/:title',
                component:GenerateQrCode
            },
            
                  ]
            },
            {
         
                path:'users',
               component:ViewUsers,
               children: [
                {
                    path:'create-user',
                    component:CreateUser,
                }
               ]
    
            }
            
        ]
    },
    {
        path:'survey:title',
        component:Survey,
    },

    


  

];
