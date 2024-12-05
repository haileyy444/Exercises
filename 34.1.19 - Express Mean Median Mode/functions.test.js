
const { describe } = require("node:test")
const { findMean, findMedian, findMode } = require("./functions.js")

describe("#findMean", function() {
    it("finds mean of [2,3,4,5]", function() {
        expect(findMean([2, 3, 4, 5])).toEqual(3.5)
    })
    it("finds median of []", function() {
        expect(findMean([])).toEqual(0)
    })
})


describe("#findMedian", function() {
    it("finds median of [2,3,4,5]", function() {
        expect(findMedian([2, 3, 4, 5])).toEqual(3.5)
    })
    it("finds median of [2,3,4,5,6,7]", function() {
        expect(findMedian([2, 3, 4, 5, 6, 7])).toEqual(4.5)
    })
    it("finds median of [2,3,4,5]", function() {
        expect(findMedian([2, 3, 4])).toEqual(3)
    })
})


describe("#findMode", function() {
    it("finds mode of [2,3,2,5]", function() {
        expect(findMedian([2, 3, 2, 5])).toEqual(2)
    })
})