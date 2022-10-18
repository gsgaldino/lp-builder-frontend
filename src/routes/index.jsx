import React, { Suspense, lazy } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Page = lazy(() => import('../pages/Page'));

export default function Routes() {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Switch>
        <Route index element={<Home />} />
        <Route path="/page/:pageId" element={<Page />} />
      </Switch>
    </Suspense>
  );
}
