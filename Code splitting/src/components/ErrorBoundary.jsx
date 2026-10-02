import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, info) {
    console.error("Error:", error);
    console.error("Component stack:", info.componentStack);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  toggleDetails = () => {
    this.setState((prev) => ({ showDetails: !prev.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(ellipse at top, #1e1b4b 0%, #09090b 60%, #030712 100%)",
            color: "#f8fafc",
            fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            padding: "2rem",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ambient Glows */}
          <div
            style={{
              position: "absolute",
              width: "450px",
              height: "450px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0) 70%)",
              top: "10%",
              left: "20%",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0) 70%)",
              bottom: "10%",
              right: "20%",
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          />

          {/* Luxury Card Container */}
          <div
            style={{
              position: "relative",
              maxWidth: "600px",
              width: "100%",
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
              border: "1px solid rgba(234, 179, 8, 0.25)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(234, 179, 8, 0.08)",
              borderRadius: "28px",
              padding: "3rem 2.5rem",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {/* Top Emblem / Icon */}
            <div
              style={{
                width: "72px",
                height: "72px",
                margin: "0 auto 1.75rem auto",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(234, 179, 8, 0.03))",
                border: "1px solid rgba(234, 179, 8, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 25px rgba(234, 179, 8, 0.25)",
              }}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#goldGradient)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#ca8a04" />
                  </linearGradient>
                </defs>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            {/* Badge */}
            <span
              style={{
                display: "inline-block",
                padding: "0.3rem 0.9rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#fde047",
                background: "rgba(234, 179, 8, 0.1)",
                border: "1px solid rgba(234, 179, 8, 0.2)",
                marginBottom: "1rem",
              }}
            >
              System Interruption
            </span>

            {/* Title */}
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                margin: "0 0 0.75rem 0",
                background: "linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              An Unexpected Flaw Occurred
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.98rem",
                lineHeight: 1.6,
                margin: "0 auto 2rem auto",
                maxWidth: "440px",
              }}
            >
              We encountered an issue while rendering this view. Your session and data remain safe.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "1.5rem",
              }}
            >
              <button
                onClick={this.handleReload}
                style={{
                  padding: "0.8rem 1.6rem",
                  borderRadius: "14px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  background: "linear-gradient(135deg, #fef08a 0%, #eab308 50%, #ca8a04 100%)",
                  color: "#0f172a",
                  boxShadow: "0 10px 25px rgba(234, 179, 8, 0.35)",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 14px 30px rgba(234, 179, 8, 0.45)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(234, 179, 8, 0.35)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
                Reload Experience
              </button>

              <button
                onClick={this.handleReset}
                style={{
                  padding: "0.8rem 1.5rem",
                  borderRadius: "14px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                }}
              >
                Try Again
              </button>
            </div>

            {/* Error Details Section */}
            {this.state.error && (
              <div style={{ marginTop: "1rem" }}>
                <button
                  onClick={this.toggleDetails}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#64748b",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    textDecoration: "underline",
                    padding: "0.4rem",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#64748b")}
                >
                  {this.state.showDetails ? "Hide Technical Details" : "View Technical Details"}
                </button>

                {this.state.showDetails && (
                  <div
                    style={{
                      marginTop: "0.75rem",
                      padding: "1rem",
                      borderRadius: "12px",
                      background: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      textAlign: "left",
                      fontSize: "0.78rem",
                      color: "#f87171",
                      fontFamily: "monospace",
                      wordBreak: "break-word",
                      maxHeight: "150px",
                      overflowY: "auto",
                    }}
                  >
                    {this.state.error.toString()}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}