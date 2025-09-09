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
import { AttenceRegister } from './components/attedance-register/attence-register';
import { CompanyInfoComponent } from './components/company-info-component/company-info-component';
import { ViewAttendances } from './view-attendances/view-attendances';
import { CustomersAdminComponent } from './customers-admin-component/customers-admin-component';
import { ViewComplaintsComponent } from './components/view-complaints-component/view-complaints-component';
import { CommentsComponent } from './components/comments-component/comments-component';

export const routes: Routes = [
    {
        path :'custom-admin',
        component : CustomersAdminComponent,
        children:[

            { 
                path :'view-surveys',
                component : ViewSurveys,
            },
            { 
                path : 'view-users',
                component : ViewUsers,
            },
            {
                path:'view-meetings',
                component:ViewMeetingsComponent

            },
            {
                path : 'view-comments',
                component:ViewComplaintsComponent
            }
        ]
        
    },
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
                path:'',
                component:CompanyInfoComponent,
            },
            {
                path:'surveys',
                component:ViewSurveys,
                children:[
                    {
                path:'add-survey',
                component:CaptureSurvey
            },
            {
                path:'generate-qr-code/:id/:surveyORMeeting',
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
                        path:'generate-qr-code/:id/:surveyORMeeting',
                        component:GenerateQrCode,
                    },
                    {
                        path : 'view-attendaces',
                        component : ViewAttendances
                    }
                ]
            },
            {
                path:'comments',
                component:ViewComplaintsComponent
            }

            
        ]
    },

    {
        path:'survey/:id',
        component:Survey,
    },
    {
        path : 'attendace-register/:id',
        component : AttenceRegister,
    },

    {
        path:'qr-code-full-screen',
        component:GenerateQrCode,
    }

    ,
    {
        path :"capture-comments/:id",
        component:CommentsComponent
    }

    


  

];
