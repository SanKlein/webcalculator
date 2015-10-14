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
        expect(scope.calc.output).toEqual('8');
    });

    it("make postivie/negative", function() {
        expect(scope.calc.output).toEqual('8');
        scope.change();
        expect(scope.calc.output).toEqual('-8');
    });
});