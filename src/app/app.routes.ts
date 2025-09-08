import { Routes } from '@angular/router';
import { ClientAdminHome } from './components/client-admin-home/client-admin-home';
import { ViewCompanies } from './components/view-companies/view-companies';
import { CompanyRegistrationForm } from './components/company-registration-form/company-registration-form';
import { AboutCompany } from './components/about-company/about-company';
import { CreateUser } from './components/create-user/create-user';
import { ViewSurveys } from './components/view-surveys/view-surveys';
import { CaptureSurvey } from './components/capture-survey/capture-survey';
import { GenerateQrCode } from './components/generate-qr-code/generate-qr-code';
import { Survey } from './components/survey/survey';
import { ViewUsers } from './components/view-users/view-users';
import { ViewMeetingsComponent } from './components/view-meetings-component/view-meetings-component';
import { CaptureMeeting } from './components/capture-meeting/capture-meeting';
import { CustomAdmin } from './custom-admin/custom-admin.service';

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
                path:'generate-qr-code/:title/:surveyORMeeting',
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
    
            },
            {
                path:'meetings',
                component:ViewMeetingsComponent,
                children:[
                    {
                        path:'add-meeting',
                        component:CaptureMeeting
                    },
                    {
                        path:'generate-qr-code/:title/:surveyORMeeting',
                        component:GenerateQrCode,
                    }
                ]
            }
            
        ]
    },
    {
        path:'survey:title',
        component:Survey,
    },
    {
        path:'custom-admin',
        component:CustomAdmin,
        children:[
            {
                path:'view-surveys',
                component:ViewSurveys,
            },
            {
                path:'view-users',
                component:ViewUsers,
            },
            {
                path:'view-meetings',
                component:ViewMeetingsComponent
            }
            

        ]
    }

    


  

];
