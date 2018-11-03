import * as React from "react";

import PassTo from "./PassTo";
import { Context } from "./utils";

export default class TestStaticContextPassThrough extends React.PureComponent {
  static contextType = Context;

  render() {
    return (
      <div>
        TestStaticContextPassThrough: <PassTo test={this.context.test} />
      </div>
    );
  }
}
