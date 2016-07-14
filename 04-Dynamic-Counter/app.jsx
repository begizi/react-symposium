// Our App component
class App extends React.Component {
  constructor() {
    super();

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);

    this.state = {
      counterValue: 0
    };
  }

  handleIncrement() {
    this.setState({counterValue: this.state.counterValue + 1});
  }

  handleDecrement() {
    this.setState({counterValue: this.state.counterValue - 1});
  }

  render() {
    return (
      <Counter count={this.state.counterValue} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
    );
  }
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

// Render component to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('example')
);
