// @refresh reload
import { Suspense } from 'solid-js';

import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';

import './root.css';

function Root() {
  return (
    <Html
      lang="en"
      class="scroll-smooth selection:bg-muted/40 motion-reduce:scroll-auto"
    >
      <Head>
        <Title>Mood Calendar</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="bg-base text-text antialiased">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

export default Root;
