var Calculator = function() {
    // Numbers
    this.zero = element(by.id('cwbt43'));
    this.one = element(by.id('cwbt33'));
    this.two = element(by.id('cwbt34'));
    this.three = element(by.id('cwbt35'));
    this.four = element(by.id('cwbt23'));
    this.five = element(by.id('cwbt24'));
    this.six = element(by.id('cwbt25'));
    this.seven = element(by.id('cwbt13'));
    this.eight = element(by.id('cwbt14'));
    this.nine = element(by.id('cwbt15'));
    this.point = element(by.id('cwbt44'));
    
    // Mathematical Operations - Simple
    this.plus = element(by.id('cwbt46'));
    this.minus = element(by.id('cwbt36'));
    this.multiply = element(by.id('cwbt26'));
    this.divide = element(by.id('cwbt16'));
    this.equals = element(by.id('cwbt45'));
    this.leftParen = element(by.id('cwbt03'));
    this.rightParen = element(by.id('cwbt04'));
    this.percent = element(by.id('cwbt05'));
    
    // Mathematical Operations - Advanced
    this.toggleAngle = element(by.id('cwbt00'));
    this.factorial = element(by.id('cwbt02'));
    this.inv = element(by.id('cwbt10'));
    this.sin = element(by.id('cwbt11'));
    this.ln = element(by.id('cwbt12'));
    this.pi = element(by.id('cwbt20'));
    this.cos = element(by.id('cwbt21'));
    this.log = element(by.id('cwbt22'));
    this.e = element(by.id('cwbt30'));
    this.tan = element(by.id('cwbt31'));
    this.sqrt = element(by.id('cwbt32'));
    this.ans = element(by.id('cwbt40'));
    this.exp = element(by.id('cwbt41'));
    this.power = element(by.id('cwbt42'));
    
    // Input / Output
    this.clear = element(by.id('cwbt06'));
    this.results = element(by.id('cwtltblr'));
    this.history = element(by.id('cwles'));
    
    this.typeValue = function(value) {
        this.results.click();
        this.results.sendKeys(value);
    };
};

module.exports = Calculator;