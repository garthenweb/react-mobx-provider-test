import * as React from "react";

import PassTo from "./PassTo";
import { IStore } from "./types";

import { Context } from "./utils";

export default function TestHookPassThrough() {
  const context: IStore = React.useContext(Context);

  return (
    <div>
      TestHookPassThrough: <PassTo test={context.test} />
    </div>
  );
}
