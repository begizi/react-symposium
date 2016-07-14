// Our App component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counterValue: 0
    };
  }

  render() {
    return (
      <Counter count={this.state.counterValue} />
    );
  }
}

// Our component
class Counter extends React.Component {
  render() {
    return (
      <div>
        Counter Value {this.props.count} &nbsp;
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: React.PropTypes.number
};

// Render component to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('example')
);
