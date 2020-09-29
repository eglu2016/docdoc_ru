const MainPage = require('../pageobjects/doctor.page');
const SecurePage = require('../pageobjects/secure.page');

describe(`Врачи › Страница выдачи врачей: Фильтр 'Расписание" на выдаче врачей'`, () => {
    describe('Выбор дня', () => {
        it(`Открыта страница сайта '/doctor'`, () => {
            MainPage.open('/doctor');
            MainPage.checkOpenedPage();
        });
        it(`Отображаются 10 карточек врачей на странице`, () => {
            MainPage.checkAmountDoctors();
        });
        it(`Отображается кнопка 'Расписание (фильтр)'`, () => {
            MainPage.checkIsDisplaedScheduleForAllDaysBtn();
        });
        it(`Заголовок кнопки 'Расписание (фильтр)' содержит текст 'Расписание на все дни'`, () => {
            MainPage.checkTextInScheduleForAllDaysBtn();
        });
        it(`Нажимаем кнопку 'Расписание (фильтр)'`, () => {
            MainPage.clickScheduleForAllDaysBtn();
        });
        it(`Отображается элемент 'Cписок значений для выбора даты'`, () => {
            MainPage.checkIsDisplaedListValuesForDateSelected();
        });
        it(`Помечен галочкой пункт Все дни в выпадающем списке 'Cписок значений для выбора даты'`, () => {
            MainPage.checkItemAllDaysIsSelected();
        });
    });
});