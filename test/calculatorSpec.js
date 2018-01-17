var Calculator = require('./calculatorPageObject');

describe('Google Calculator', function() {
    var calculator = new Calculator();
    
    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/search?q=calculator');
        browser.driver.sleep(1000);
    });
    
    it('should solve the equation', function() {
        calculator.zero.click();
        calculator.two.click();
        calculator.seven.click();
        
        calculator.clear.click();
        
        calculator.five.click();
        
        calculator.minus.click();
        calculator.plus.click();
        
        calculator.typeValue("50.");
        
        calculator.equals.click();
        
        calculator.multiply.click();
        
        calculator.one.click();
        
        calculator.typeValue(protractor.Key.ENTER);
        
        expect(calculator.results.getText()).toEqual("75");
    });
});