import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught application error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', backgroundColor: '#0c0f14', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f59e0b', marginBottom: '1rem' }}>
            Om Dental Clinic & Implant Center
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '480px', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
            A temporary display error occurred while rendering the page. Click below to reload the clinic website.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '0.75rem 1.75rem', borderRadius: '0.75rem', backgroundColor: '#f59e0b', color: '#0f172a', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
          >
            Reload Website
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
