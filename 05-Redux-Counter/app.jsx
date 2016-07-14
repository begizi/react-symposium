const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Our App component
class App extends React.Component {
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.dispatch({ type: INCREMENT });
  }

  handleDecrement() {
    this.props.dispatch({ type: DECREMENT });
  }

  render() {
    return (
      <Counter count={this.props.count} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  count: React.PropTypes.number
}

// Our component
class Counter extends React.Component {
  render() {
    return (
      <div>
        Counter Value {this.props.count} &nbsp;
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
    count: React.PropTypes.number,
    onIncrement: React.PropTypes.func,
    onDecrement: React.PropTypes.func
};

// mapStateToProps function is used in the connect higher order component to
// take the state and return an object with the keys and values to get passed into
// the props
function mapStateToProps(state) {
  return {count: state}
}

// Use ReactRedux connect higher order component that connects App to the store
// and gives it access to the dispatch method
const ConnectedApp = ReactRedux.connect(mapStateToProps)(App)

// Use Provider to be able to connect components to store
const Provider = ReactRedux.Provider;

// Redux Reducer
function CounterReducer(state = 0, action) {
// action is object passed in from the dispatch method. ie `{ type: INCREMENT }`
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

// Create the store for the application. The second argument if for redux devtools and can be ignored.
const store = Redux.createStore(CounterReducer, window.devToolsExtension && window.devToolsExtension());

// Render component to the DOM
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('example')
);
