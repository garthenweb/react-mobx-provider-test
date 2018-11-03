import * as React from "react";

import { observeInjected } from "./utils";

const TestObserveInjected = observeInjected(({ test }) => ({
  a: test.a
}))((props: { a: string }) => <div>TestObserveInjected: {props.a}</div>);

export default TestObserveInjected;
