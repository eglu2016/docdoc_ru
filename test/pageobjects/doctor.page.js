const assert = require('assert');
const Page = require('./common.page');

/**
 * Класс для работы со страницей "/doctor" 
 */
class DoctorPage extends Page {
    // текст 'Запишитесь на приём к врачу онлайн'
    get titlePage() { return $(`//div[contains(@class,'doctors-list-page-search-form__title')]`) }
    // список карточек докторов на стр.
    get cardDoctors() {
        return $$(`//div[@data-test-id='doctor-card-search-results']`)
    }
    // кнопка 'Расписание на все дни'
    get btnScheduleForAllDays() {
        return $(`//*[text()='Дата приема']/..//span[@class='select-box__title']`)
    }
    // список значений для выбора даты
    get listValuesForDateSelected() {
        return $(`//*[@data-test-id='date_select_items']/*[@class='select-box__options']`)
    }
    // пункт 'Все дни' отмечен галочкой в списке значений для выбора даты
    get itemAllDaysChecked() {
        return $(`//*[text()='Все дни']/../span[contains(@class, 'active-icon')]`)
    }
    // пункт 'Завтра' в списке значений для выбора даты
    get itemTomorrow() {
        return $(`//span[contains(@class, 'options-item-title') and contains(text(), 'Завтра')]`)
    }
    // пункт 'Завтра' в списке значений для выбора даты (для получения даты и мес.)
    get itemTomorrowGetDateAndMonth() {
        return $(`//span[contains(@class, 'options-item-title') and contains(text(), 'Завтра')]/span`)
    }
    // для получения значений Онлайн-расписание на ... в список карточек докторов 
    get valueOnlineScheduleСardDoctors() {
        return $$(`//*[@class='clinic-slots__caption']`)
    }
    
    /**
     * проверка, что появился открылась страница
     */
    checkOpenedPage() {
        this.titlePage.waitForExist({ timeout: 15000 });
        expect(this.titlePage).toHaveText(`Запишитесь на приём к врачу онлайн`);
    }

    /**
     * проверим кол-во докторов на странице
     */
    checkAmountDoctors() {
        let amountDoctors = this.cardDoctors.length;
        assert.ok(amountDoctors == 10,
            `На стр. '/doctor' не отображаются 10 карточек врачей; Акт.знач. ${amountDoctors}`);
    }

    /**
     * проверка, что появился кнопка 'Расписание на все дни'
     */
    checkIsDisplaedScheduleForAllDaysBtn() {
        expect(this.btnScheduleForAllDays).toBeDisplayed();
    }

    /**
     * проверка, что кнопка содержит текст
     * @param {String} nameBtn - ожид. текст на кнопке 
     */
    checkTextInScheduleForAllDaysBtn(nameBtn) {
        expect(this.btnScheduleForAllDays).toHaveText(nameBtn);
    }

    /**
     * нажимаем кнопку 'Расписание на все дни'
     */
    clickScheduleForAllDaysBtn() {
        this.btnScheduleForAllDays.scrollIntoView();
        this.btnScheduleForAllDays.click();
    }

    /**
     * проверка, что отобразился список значений для выбора даты
     */
    checkIsDisplaedListValuesForDateSelected() {
        expect(this.listValuesForDateSelected).toBeDisplayed();
    }

    /**
     * проверка, что пункт 'Все дни' отмечен галочкой
     */
    checkItemAllDaysIsSelected() {
        expect(this.itemAllDaysChecked).toBeDisplayed();
    }

    /**
     * получаем значение даты и месяца рядом с пунктом 'Завтра'
     * в списке значений для выбора даты
     */
    getDateAndMonth() {
        return this.itemTomorrowGetDateAndMonth.getText();
    }

    /**
     * для выбора пункта 'Завтра' в списке значений для выбора даты
     */
    clickItemTomorrow() {
        this.itemTomorrow.click();
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