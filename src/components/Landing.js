import React from 'react';
import './Landing.css';
import emp_avatar from '../resources/photos/people.png';
import uaf_help from '../resources/photos/uaf_help.jpg';
import humanitarian from '../resources/photos/humanitarian.jpg';
import volunteer from '../resources/photos/volunteer.jpg';
import about_fund from '../resources/photos/about_fund.jpg';
import fundraise from '../resources/photos/fundraise.jpg';
import results from '../resources/photos/results.jpg';

function Landing() {
  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <svg className="bd-placeholder-img img-uaf" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={uaf_help} width="100%" height="100%" /></svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className='d-inline-block mb-1 mont'>Допомога ЗСУ</h1>
                <p className='rob carous'>Підтримка Збройних Сил України є важливим вкладом у забезпечення національної безпеки та суверенітету, а також наближає перемогу у війні з агресором.</p>
                <p className='rob-btn'><a className="btn btn-lg btn-primary" href="/">Підтримати ЗСУ</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <svg className="bd-placeholder-img img-hum" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={humanitarian} width="100%" height="100%" /></svg>
            <div className="container">
              <div className="carousel-caption">
                <h1 className='d-inline-block mb-1 mont'>Гуманітарна допомога</h1>
                <p className='rob carous'>Наша спільна діяльність спрямована на полегшення страждань та покращення умов тих, хто потребує допомоги, у тому числі постраждалим від війни.</p>
                <p className='rob-btn'><a className="btn btn-lg btn-primary" href="/">Пожертвувати</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img img-vol" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={volunteer} width="100%" height="100%" /></svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className='d-inline-block mb-1 mont'>Стати волонтером</h1>
                <p className='rob carous'>Бажаєш також допомагати постраждалим від війни або Збройним Силам? Тоді долучайся до нашої команди волонтерів! Заповнюй анкету і стань одним з нас.</p>
                <p className='rob-btn'><a className="btn btn-lg btn-primary" href="/">Приєднатися зараз</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Попередній</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Наступний</span>
        </button>
      </div>
      <div className="container marketing">
        <div className="row featurette start_elem">
          <div className="col-md-7 txt_field">
            <h2 className="featurette-heading lat-h2">Про благодійний фонд</h2>
            <p className="lead">"ValorAid Network" - це благодійний фонд, який об'єднує зусилля для надання підтримки на передовій лінії ЗСУ та надання гуманітарної допомоги тим, хто постраждав від наслідків конфлікту. Наш фонд зобов'язаний підтримувати і вдягати героїв на фронті та протягом мирних днів надавати допомогу потребуючим для відновлення життя.</p>
            <p className='rob-btn'><button type="button" class="btn btn-info">Докладніше</button></p>
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
            <p className='rob-btn'><button type="button" class="btn btn-info">Актуальні збори</button></p>
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
            <p className='rob-btn'><button type="button" class="btn btn-info">Усі звіти</button></p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><image href={results} width="100%" height="100%" /></svg>
          </div>
        </div>
        <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="d-flex flex-column justify-content-center">
            <h2 className="featurette-heading lat-h2">Зворотній зв'язок</h2>
            <p className="lead">Якщо вас цікавлять певні питання, зв'яжіться з нами, заповнивши форму.</p>
            <form action="/" method="post" id="form-box" className="p-2">
              <div className="form-group input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" name="name" className="form-control" placeholder="Введіть ваше ім'я" required />
              </div>
              <div className="form-group input-group mt-2 mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                </div>
                <input type="email" name="email" className="form-control" placeholder="Введіть ваш email" required />
              </div>
              <div className="form-group input-group mt-2 mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-at"></i></span>
                </div>
                <input type="text" name="subject" className="form-control" placeholder="Тема листа" required />
              </div>
              <div className="form-group input-group mt-2 mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-comment-alt"></i></span>
                </div>
                <textarea name="msg" id="msg" className="form-control" placeholder="Ваше повідомлення..." cols="30" rows="4" required></textarea>
              </div>
              <div className="form-group mt-2">
                <input type="submit" name="submit" id="submit" className="btn btn-primary btn-block" value="Відправити" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Landing;