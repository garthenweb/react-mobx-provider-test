import * as React from "react";
import { observer } from "mobx-react";

import { IStore } from "./types";

export default observer((props: IStore) => (
  <React.Fragment>{props.test.a}</React.Fragment>
));
