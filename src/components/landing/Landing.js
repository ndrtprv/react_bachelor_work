import React from 'react';
import './Landing.css';
import emp_avatar from '../../resources/photos/people.png';
import uaf_help from '../../resources/photos/uaf_help.jpg';
import humanitarian from '../../resources/photos/humanitarian.jpg';
import volunteer from '../../resources/photos/volunteer.jpg';
import about_fund from '../../resources/photos/about_fund.jpg';
import fundraise from '../../resources/photos/fundraise.jpg';
import results from '../../resources/photos/results.jpg';
import ContactForm from './contact_form/ContactForm';
import Carousel from './carousel/Carousel';

function Landing() {
  return (
    <main>
      <Carousel uaf_help={uaf_help} humanitarian={humanitarian} volunteer={volunteer} />
      <div className="container marketing">
        <div className="row featurette start_elem">
          <div className="col-md-7 txt_field">
            <h2 className="featurette-heading lat-h2">Про благодійний фонд</h2>
            <p className="lead">"ValorAid Network" - це благодійний фонд, який об'єднує зусилля для надання підтримки на передовій лінії ЗСУ та надання гуманітарної допомоги тим, хто постраждав від наслідків конфлікту. Наш фонд зобов'язаний підтримувати і вдягати героїв на фронті та протягом мирних днів надавати допомогу потребуючим для відновлення життя.</p>
            <p className='rob-btn'><button type="button" className="btn btn-info">Докладніше</button></p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={about_fund} width="100%" height="100%" /></svg>
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row">
          <h2 className="featurette-heading lat-h2">Склад благодійного фонду</h2>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><image href={emp_avatar} width="140" height="140" /></svg>
            <h3 className='lat-h3'>Андрій Топоров</h3>
            <p className='rob'>Голова благодійного фонду.</p>
            <p className='rob-btn'><a className="btn btn-secondary" href="/">Деталі »</a></p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><image href={emp_avatar} width="140" height="140" /></svg>
            <h3 className='lat-h3'>Валерій Грищук</h3>
            <p className='rob'>Перший заступник голови.</p>
            <p className='rob-btn'><a className="btn btn-secondary" href="/">Деталі »</a></p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><image href={emp_avatar} width="140" height="140" /></svg>
            <h3 className='lat-h3'>Павло Пилипчук</h3>
            <p className='rob'>Адміністратор.</p>
            <p className='rob-btn'><a className="btn btn-secondary" href="/">Деталі »</a></p>
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7 order-md-2 txt_field">
            <h2 className="featurette-heading lat-h2">Збори</h2>
            <p className="lead">Місце, де ви можете долучитися до нашої місії та внести свій внесок у підтримку ЗСУ та допомогу тим, хто постраждав від війни. Тут ви зможете знайти різноманітні можливості пожертвувань та долучитися до наших проектів для спільного досягнення позитивних змін.</p>
            <p className='rob-btn'><button type="button" className="btn btn-info">Актуальні збори</button></p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={fundraise} width="100%" height="100%" /></svg>
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7 txt_field">
            <h2 className="featurette-heading lat-h2">Звіти</h2>
            <p className="lead">Ми ділимося докладними звітами про використання пожертвувань та реалізовані проекти. Тут ви зможете дізнатися, як ваша підтримка сприяє покращенню життя воїнів ЗСУ та тих, хто потерпів від війни, і бачити конкретні результати нашої спільної діяльності.</p>
            <p className='rob-btn'><button type="button" className="btn btn-info">Усі звіти</button></p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={results} width="100%" height="100%" /></svg>
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

export default Landing;