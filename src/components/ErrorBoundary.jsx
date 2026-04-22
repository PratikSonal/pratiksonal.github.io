import { Component } from 'react'

/**
 * ErrorBoundary — catches render errors in any child tree.
 * Usage:
 *   <ErrorBoundary name="Home">
 *     <Home />
 *   </ErrorBoundary>
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error(`[ErrorBoundary: ${this.props.name ?? 'unknown'}]`, error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: 'Outfit, sans-serif',
          gap: '16px',
          padding: '40px',
          textAlign: 'center',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(239,68,68,0.15)',
            border: '1.5px solid rgba(239,68,68,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 24, color: '#ef4444',
          }}>
            ✕
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: 'rgba(255,255,255,0.85)', margin: 0 }}>
            Something went wrong{this.props.name ? ` in ${this.props.name}` : ''}
          </h2>
          <p style={{ fontSize: 14, maxWidth: 420, margin: 0, lineHeight: 1.6 }}>
            {this.state.error?.message ?? 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: 8,
              padding: '10px 24px',
              borderRadius: 50,
              border: '1.5px solid rgba(255,255,255,0.12)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'Outfit, sans-serif',
              fontSize: 13,
              cursor: 'pointer',
              transition: 'border-color 0.2s',
            }}
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
