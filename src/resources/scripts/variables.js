import Header from "../../components/header/Header";
import About from '../../components/about/About';
import Staff from '../../components/staff/Staff';
import Fundraisings from '../../components/fundraisings/Fundraisings';
import Results from "../../components/results/Results";
import Contacts from '../../components/contacts/Contacts';
import FAQ from "../../components/faq/FAQ";
import Login from '../../components/login/Login';
import Registration from '../../components/registration/Registration';
import Footer from "../../components/footer/Footer";

export const paths_data1 = {
    '/about': 'Про фонд',
    '/staff': 'Склад фонду'
};

export const paths_data2 = {
    '/fundraisings': 'Допомога',
    '/results': 'Звіти',
    '/contacts': 'Контакти',
    '/faq': 'FAQ'
};

export const questions = [
    {question: 'Як можу долучитися до благодійної діяльності фонду для підтримки українських військових?', answer: ''},
    {question: 'Які проекти з підтримки Збройних Сил України фінансує ваш фонд?', answer: ''},
    {question: 'Чи можу я обрати конкретний проєкт або військову частину для надання допомоги?', answer: ''},
    {question: 'Які матеріальні потреби є найбільш актуальними для військових зараз?', answer: ''},
    {question: 'Чи існує можливість надавати гуманітарну допомогу мирному населенню в зоні конфлікту?', answer: ''},
    {question: 'Як можна переконатися, що моя фінансова допомога дійсно досягає потребуючих?', answer: ''},
    {question: 'Чи приймаєте ви волонтерів для роботи безпосередньо на передовій?', answer: ''},
    {question: 'Які ще способи допомоги можуть бути корисними, окрім фінансових внесків?', answer: ''},
    {question: 'Чи проводить ваш фонд інформаційні заходи щодо ситуації на сході України та потреб Збройних Сил?', answer: ''},
    {question: 'Які гарантії того, що моя допомога буде використана ефективно і транспарентно?', answer: ''}
];

export const media_paths = {
    'fab fa-youtube': 'https://www.youtube.com/channel/UCya7l0Wl8SqlLCl5Jh3J04A',
    'fab fa-telegram': 'https://t.me/ndrtprv',
    'fab fa-linkedin': 'https://www.linkedin.com/in/andrii-toporov-465829264/',
    'fab fa-github': 'https://github.com/ndrtprv'
};

export const comps = {
    '/about': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <About />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ],
    '/staff': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <Staff />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ],
    '/fundraisings': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <Fundraisings />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ],
    '/results': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <Results />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ],
    '/contacts': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <Contacts />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ],
    '/faq': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <FAQ quests={questions} />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ],
    '/login': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <Login />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ],
    '/signup': [
        <Header data1={paths_data1} data2={paths_data2} />,
        <Registration />,
        <Footer data1={paths_data1} data2={paths_data2} data3={media_paths} />
    ]
};

export const button_paths = ['/login', '/signup'];