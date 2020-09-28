const MainPage = require('../pageobjects/doctor.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Врачи › Страница выдачи врачей: Фильтр "Расписание" на выдаче врачей', () => {
    describe('Выбор дня', () => {
        it(`Открыта страница сайта "/doctor"`, () => {
            MainPage.open('/doctor');
            MainPage.checkOpenedPage();
        });
        it(`Отображаются 10 карточек врачей на странице`, () => {
            MainPage.checkAmountDoctors();
        });
        it(`Отображается кнопка "Расписание (фильтр)`, () => {
            
        });
    });
});