const TestPage = require('../pageobjects/startpage');

describe('Functional Tests for the Enklare home Page :', () => {
    it('Test 1 : Should open the privatlån page',  () => {
        //Tested using Page Object Model
         TestPage.open();
         expect(browser).toHaveTitleContaining('Samla och jämför lån');        
    });

    it('Test 2 : Should go to private loan page when clicked on "Privatlån Arrow Icon" or Privatlån submenu',  () => {
        
        //Tested using basic CSS elements Action -> Result expect way
       const privateLoanLink = $('href="/privatlan/"'); 
       privateLoanLink.click();
        expect(browser).toHaveUrl("https://enklare.se/privatlan/");
   });

});
