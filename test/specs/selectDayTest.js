const MainPage = require('../pageobjects/doctor.page');

describe(`Врачи › Страница выдачи врачей: Фильтр 'Расписание" на выдаче врачей'`, () => {

    var dateAndMonthValue = undefined;

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
            MainPage.checkTextInScheduleForAllDaysBtn(`Расписание на все дни`);
        });
        it(`Нажимаем кнопку 'Расписание (фильтр)'`, () => {
            MainPage.clickScheduleForAllDaysBtn();
        });
        it(`Отображается элемент 'Cписок значений для выбора даты'`, () => {
            MainPage.checkIsDisplaedListValuesForDateSelected();
        });
        it(`Помечен галочкой пункт 'Все дни' в выпадающем списке 'Cписок значений для выбора даты'`, () => {
            MainPage.checkItemAllDaysIsSelected();
        });
        it(`Нажимаем на пункт 'Завтра' в выпадающем списке 'Cписок значений для выбора даты'`, () => {
            dateAndMonthValue = MainPage.getDateAndMonth();
            MainPage.clickItemTomorrow();
        });
        it(`Заголовок кнопки 'Расписание (фильтр)' содержит текст 'Расписание на завтра'`, () => {
            MainPage.checkTextInScheduleForAllDaysBtn(`Расписание на завтра`);
        });
        it(`Отображаются 10 карточек врачей на странице`, () => {
            MainPage.checkAmountDoctors();
        });
        it(`Отображаются врачи, работающие в выбранный день`, () => {
            
        });
    });
});