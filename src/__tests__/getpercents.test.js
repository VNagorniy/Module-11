import { getPercents } from "../utils/getpercents.js";

describe("test for get percent of number", () =>{

    it("get 10 percents of 100 will be 10", () =>{
    const result = getPercents(10,100);
    expect(result).toBe(10);
    }),

    it("get 20 percents of 200 will be 40", () =>{
    const result = getPercents(20,200);
    expect(result).toBe(40);
    }),

    it("get 50 percents of 600 will be 300", () =>{
    const result = getPercents(50,600);
    expect(result).toBe(300);
    });

});
