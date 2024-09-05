import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Guidelines from './components/Guidelines';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  console.log('App component rendering');
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create">Create Post</Link></li>
              <li><Link to="/guidelines">Guidelines</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" component={CreatePost} />
            <Route path="/guidelines" component={Guidelines} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;