import { createAction } from "@reduxjs/toolkit";

const inc = createAction("INC");
const dec = createAction("DEC");
const rnd = createAction("RND");
const cls = createAction("CLS");

export { inc, cls, dec, rnd };
