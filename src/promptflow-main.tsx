import React from 'react';
import ReactDOM from 'react-dom/client';
import { PromptFlowPage } from './components/PromptFlowPage';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PromptFlowPage basePath="../" />
    </React.StrictMode>
  );
}

export default PromptFlowPage;
