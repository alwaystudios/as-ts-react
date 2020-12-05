import { useThrottledRequests, useAsync } from "@alwaystudios/as-ui-components";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [parallel, setParallel] = useState<number>(10);
  const [requestCount, setRequestCount] = useState<number>(1000);
  const { throttleActions, throttleProgress } = useThrottledRequests(parallel);

  const requestsToMake = Array.from(Array(requestCount)).map(
    (_, index) => async () => {
      try {
        const response = await fetch(
          `/manifest.json?querystringValueToPreventCaching=${new Date()}_request-${index}`
        );
        const json = await response.json();

        throttleActions.requestSucceededWithData(json);
      } catch (error) {
        throttleActions.requestFailedWithError(error);
      }
    }
  );

  const { callback } = useAsync(async () => {
    await throttleActions.queueRequests(requestsToMake);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>useThrottledRequests</h1>
        Max parallel:
        <input
          value={parallel}
          onChange={(event) => setParallel(Number(event.currentTarget.value))}
        />
        Requests:
        <input
          value={requestCount}
          onChange={(event) =>
            setRequestCount(Number(event.currentTarget.value))
          }
        />
        <button onClick={callback}>Fire</button>
        {throttleProgress.loading && <div>Loading</div>}
        {throttleProgress.values.length > 0 && (
          <div>
            {throttleProgress.values.length} requests completed successfully
          </div>
        )}
        {throttleProgress.errors.length > 0 && (
          <div>{throttleProgress.errors.length} requests errored</div>
        )}
      </header>
    </div>
  );
};

export default App;
