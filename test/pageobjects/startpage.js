const EnklareStartPage = require('./enklarestartpage');

class StartPage extends EnklareStartPage {
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('privatlan');
    }
}

module.exports = new StartPage();
