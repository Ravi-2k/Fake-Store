import React from "react";
import { UserContext } from "../Contexts/UserStateProvider";

const withUserContextConsumer = (WrappedComponent) => {
  function WithUserContextConsumer() {
    return (
      <UserContext.Consumer>
        {(value) => <WrappedComponent userId={value[0].userId} />}
      </UserContext.Consumer>
    );
  }

  return WithUserContextConsumer;
};

export default withUserContextConsumer;
