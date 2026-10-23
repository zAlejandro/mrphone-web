import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = { e: null };
  static getDerivedStateFromError(e) {
    return { e };
  }
  componentDidUpdate(p) {
    if (p.at !== this.props.at && this.state.e) this.setState({ e: null });
  }
  render() {
    const e = this.state.e;
    return e ? (
      <div className="wrap sec">
        <h2>Algo salió mal en esta página</h2>
        <p className="mut">{String(e.message || e)}</p>
        <Link className="btn" to="/">
          Volver al inicio
        </Link>
      </div>
    ) : (
      this.props.children
    );
  }
}
