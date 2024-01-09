import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="w-full h-full flex flex-col justify-center items-center text-2xl text-center bg-red-600 text-white">
          An error occured in {this.props.name || "this component"}
          <button
            onClick={() => location.reload()}
            className="text-lg underline text-indigo-400"
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
