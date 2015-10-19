describe('Controller test', function() {
    var scope;
    var CalcCtrl;

    beforeEach(module('calc.controller'));

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        CalcCtrl = $controller('CalcCtrl', {$scope: scope});
    }));

    it("add value to output", function() {
        scope.update("8");
        expect(scope.calc.output).toBe('8');
    });

    it("make postivie/negative", function() {
        expect(scope.calc.output).toBe('8');
        scope.change();
        expect(scope.calc.output).toBe('-8');
    });

    it("store number in memory", function() {
        expect(scope.calc.output).toBe('-8');
        scope.memAdd();
        scope.clear();
        scope.memAdd();
        expect(scope.calc.output).toBe('-8');
    });

    it("clear", function() {
        scope.clear();
        expect(scope.calc.output).toBe('0');
    });

    it("percentage", function() {
        scope.update("5");
        scope.update("0");
        scope.percent();
        expect(scope.calc.output).toBe('0.5');
    });

    it("adding up to 10", function() {
        scope.clear();
        scope.update("5");
        scope.set("add");
        expect(scope.calc.output).toBe("0");
        expect(scope.calc.first).toBe("5");
        scope.update("5");
        scope.calculate();
        expect(scope.calc.output).toBe("10");
    });

    it("multiplying to 50", function() {
        scope.clear();
        scope.update("5");
        scope.set("multiply");
        expect(scope.calc.output).toBe("0");
        expect(scope.calc.first).toBe("5");
        scope.update("1");
        scope.update("0");
        scope.calculate();
        expect(scope.calc.output).toBe("50");
    });

    it("divide to 3", function() {
        scope.clear();
        scope.update("9");
        scope.set("divide");
        expect(scope.calc.output).toBe("0");
        expect(scope.calc.first).toBe("9");
        scope.update("3");
        scope.calculate();
        expect(scope.calc.output).toBe("3");
    });

    it("multiply decimal numbers", function() {
        scope.clear();
        scope.update("3");
        scope.decimal();
        scope.update("2");
        scope.set("multiply");
        expect(scope.calc.output).toBe("0");
        expect(scope.calc.first).toBe("3.2");
        scope.update("2");
        scope.calculate();
        expect(scope.calc.output).toBe("6.4");
    });

    it("add decimal numbers", function() {
        scope.clear();
        scope.update("3");
        scope.decimal();
        scope.update("2");
        scope.set("add");
        expect(scope.calc.output).toBe("0");
        expect(scope.calc.first).toBe("3.2");
        scope.update("2");
        scope.decimal();
        scope.update("5");
        scope.calculate();
        expect(scope.calc.output).toBe("5.7");
    });

    it("check memory", function() {
        scope.memCall();
        expect(scope.calc.output).toBe("-8");
    });

    it("subtract to 3", function() {
        scope.clear();
        scope.update("8");
        scope.set("subtract");
        expect(scope.calc.output).toBe("0");
        expect(scope.calc.first).toBe("8");
        scope.update("5");
        scope.calculate();
        expect(scope.calc.output).toBe("3");
    });

    it("divide by 0", function() {
        scope.set("divide");
        scope.update("0");
        scope.calculate();
        expect(scope.calc.output).toBe("Error: cannot divide by zero");
        scope.clear();
    });
});