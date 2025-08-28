import { SurveyObj } from "../models/survey.model";


export const DUMMY_SURVEY : SurveyObj= 
    {
          id : 0,
          title:'health',
          description:'welcome to our customer satisfaction survey !we\'re excited to hear about your experience with our products/service \
          this survey should take 10 minustes to complete and your feed back should take about 10 minutes to complete ,and your feedback will help\
          us understand what we\'re doing well and where we can improve.Your input is invaluable to us ,and we\'ll use it to make informed decisions \
          about our products/service.all responses will be kept confidential and anynomous  ',
          question : [
            {
                id :0,
                question:'How satisfied are you with our products/service?'
            },
            {
                 id :0,
                question:'how would you rate the quality of our products/services?'
            },
            {
                 id :0,
                question:'How would you rate the quality of our products/services?'
            },
            {
                 id :0,
                question:'Have you contacted our custormer support teat in the past?'
            },
            {
                 id :0,
                question:'if yes how would you rate the responsiveness of our customer supporrt team?'
            },
             
   
          ]
            
         }
            
    ;
