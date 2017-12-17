import { sum} from "calc";

describe("calc", function() {

    describe("sum", function() {

        it("returns x + y", function() {
            expect(sum(2,4)).to.equal(6);
        });

    });

});