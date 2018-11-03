import * as React from "react";
import { observer } from "mobx-react";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

export const Context = React.createContext({});
export const Provider = Context.Provider;

export const observeInjected = <C extends {}, I extends {}>(
  mapContextToProps: (context: C) => I
) => <P extends {}>(
  WrappedComponent: React.ComponentType<P>
): React.ComponentType<Subtract<P, I>> => {
  return function ObserveInjected(props: P) {
    const ObservedComponent = observer((context: C) => (
      <WrappedComponent {...mapContextToProps(context)} {...props} />
    ));
    return (
      <Context.Consumer>
        {(context: C) => <ObservedComponent {...context} />}
      </Context.Consumer>
    );
  };
};
