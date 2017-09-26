
describe("My Test Suite", function () {

    it("should add numbers", function () {
        var sum = addition(2, 5);
        expect(sum).toBe(7);
    });

    it("should subtract numbers", function() {
        var result = subtraction(4, 2);
        expect(result).toBe(2);
    });

    it("should multiply numbers", function() {
        var product = multiply(4, 5);
        expect(product).toBe(20);
    });

    it("should divide numbers", function(){
        var result = divide(10, 2);
        expect(result).toBe(5);
    }) ;

});