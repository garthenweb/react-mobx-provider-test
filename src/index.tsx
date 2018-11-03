import * as React from "react";
import { render } from "react-dom";
import { observable } from "mobx";

import { Provider } from "./utils";
import TestHookPassThrough from "./TestHookPassThrough";
import TestStaticContextPassThrough from "./TestStaticContextPassThrough";
import TestObserveInjected from "./TestObserveInjected";

const store = {
  test: observable({
    a: 0
  })
};

render(
  <Provider value={store}>
    <TestHookPassThrough />
    <TestStaticContextPassThrough />
    <TestObserveInjected />
  </Provider>,
  document.getElementById("root")
);

setInterval(() => {
  store.test.a = store.test.a + 1;
}, 100);
