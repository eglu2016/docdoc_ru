const assert = require('assert');
const Page = require('./common.page');

/**
 * Класс для работы со страницей "/doctor" 
 */
class DoctorPage extends Page {
    // текст 'Запишитесь на приём к врачу онлайн'
    get titlePage() { return $(`//div[contains(@class,'doctors-list-page-search-form__title')]`) }
    // кнопка 'Расписание на все дни'
    get btnScheduleForAllDays() { return $(`//*[text()='Дата приема']/..//span[@class='select-box__title']`) }
    
    /**
     * проверка, что появился открылась страница
     */
    checkOpenedPage() {
        let isExisting = this.titlePage.isExisting();
        assert.ok(isExisting, `Не открылась страница '/doctor'`);
    }

    /**
     * проверим кол-во докторов на странице
     */
    checkAmountDoctors() {
        let amountDoctors = $$(`//div[@data-test-id='doctor-card-search-results']`);
        assert.ok(amountDoctors.length == 10, `На стр. '/doctor' не отображаются 10 карточек врачей`)
    }

    /**
     * для открытия страницы с параметром
     * @param {string} page - имя страницы 
     */
    open(page) {
        return super.open(page);
    }
}

module.exports = new DoctorPage();