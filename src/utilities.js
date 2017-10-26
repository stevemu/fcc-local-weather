export function convertFToC(f) {
  const c = (f - 32) * .5556;
  return Math.floor(c);
}

export function convertCToF(c) {
    // const c = (f - 32) * .5556;
    const f = c * 1.8 + 32;
    return f;
}