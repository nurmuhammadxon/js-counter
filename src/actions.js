const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const rnd = (value) => ({ type: "RND", payload: value });
const cls = () => ({ type: "CLS" });

export { inc, cls, dec, rnd };
