import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Survey from 'App/Models/Survey'; 
import Mail from '@ioc:Adonis/Addons/Mail'

export default class SurveysController {
    public async index({ view }:HttpContextContract){
        const surveys = await Survey.query().from('surveys').select('id', 'question_1', 'question_2', 'question_3', 'question_4', 'question_5');
        return view.render('survey', {surveys} )
    }
    

    public async create({ request, response , session}: HttpContextContract) {
        
        const question_1 = request.input('question_1');
        const question_2 = request.input('question_2');
        const question_3 = request.input('question_3');
        const question_4 = request.input('question_4');
        const question_5 = request.input('question_5');
    
        const survey = await Database.insertQuery<Survey>().table('surveys').insert({question_1, question_2, question_3,question_4, question_5});
        console.log( {survey} )

        session.flash('form', 'Survey successfully submitted!')

        // send email to admin with survey content
         Mail.send((message) => {
            message.to('alexis@pomales.org')
            message.htmlView('emails/new_survey', { question_1, question_2,question_3,question_4,question_5 } )
          })

        return response.redirect().back()
      }

    public async read({ view }:HttpContextContract){
        
        return view.render('survey')
    }

    public async update({ view }:HttpContextContract){
        return view.render('survey')
    }

    public async delete({ view }:HttpContextContract){
        return view.render('survey')
    }
}