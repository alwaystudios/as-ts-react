import { useAsync } from "@alwaystudios/as-ui-components";
import { promiseTimeout } from "@alwaystudios/as-utils";
import React from "react";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { State } from "./components/State";

const App = () => {
  const { state, callback } = useAsync(async () => {
    await promiseTimeout(2000);
    return "test";
  });

  useEffect(() => {
    if (!state.called) {
      callback();
    }
  }, [callback, state]);

  return (
    <>
      <Header />
      <State state={state} />
    </>
  );
};

export default App;
