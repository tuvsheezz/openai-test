import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Common/Loader';

const CompletionPage = lazy(() => import('./Pages/CompletionPage'));
const ChatCompletionPage = lazy(() => import('./Pages/ChatCompletionPage'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const ImageGenerationPage = lazy(() => import('./Pages/ImageGenerationPage'));

export const AppRoutes: React.FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<CompletionPage />} />
          <Route path="/completion" element={<CompletionPage />} />
          <Route path="/chat_completion" element={<ChatCompletionPage />} />
          <Route path="/image_generation" element={<ImageGenerationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};
