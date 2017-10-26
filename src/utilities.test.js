import {convertFToC, convertCToF} from "./utilities";

test('convert F to C', () => {
    expect(convertFToC(50)).toBe(10);
});

test('convert C to F', () => {
    expect(convertCToF(10)).toBe(50);
});