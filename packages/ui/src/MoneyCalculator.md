import React from 'react';

type Props = {
  initialAmount: number;
};

type State = {
  amount: number;
  question: string;
  answer: number;
};

class MoneyCalculator extends React.Component<Props, State> {
  state = {
    amount: this.props.initialAmount,
    question: '',
    answer: 0,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Calculate the answer to the question
    // and update the amount of money accordingly
    const { amount, question, answer } = this.state;
    const newAmount =
      question === 'add'
        ? amount + answer
        : question === 'subtract'
        ? amount - answer
        : amount;
    this.setState({ amount: newAmount });
  };

  render() {
    const { amount, question, answer } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Current amount: {amount}</p>
        <label>
          <input
            type="radio"
            name="question"
            value="add"
            checked={question === 'add'}
            onChange={this.handleChange}
          />
          Add
        </label>
        <label>
          <input
            type="radio"
            name="question"
            value="subtract"
            checked={question === 'subtract'}
            onChange={this.handleChange}
          />
          Subtract
        </label>
        <label>
          <input
            type="number"
            name="answer"
            value={answer}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default MoneyCalculator;
