import React, { useMemo } from 'react';

import { BrowserRouter } from 'react-router-dom';

import ReduxProvider from './Redux';

export const Providers = ({ children }: React.PropsWithChildren<unknown>) => {
  const providers = useMemo(() => [BrowserRouter, ReduxProvider], []);

  return (
    <>
      {providers.reduceRight(
        (stack, Provider) => (
          <Provider>{stack}</Provider>
        ),
        children,
      )}
    </>
  );
};
