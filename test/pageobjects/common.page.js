/**
* Общий класс 
*/
module.exports = class CommonPage {
    /**
     * для открытия главной страницы
     */
    open(page) {
        return browser.url(`https://docdoc.ru${page}`)
    }
}