import React, { Component } from 'react';


export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        balance: 0,
        rate: 0,
        term: 15,
        mPay: 0
      };
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnChange(event) {
      this.setState({
          [event.target.id]: event.target.value
      });
  }

    handleOnClick(event){
      event.preventDefault();
      let balance = (this.state.balance);
      let rate = (this.state.rate) / 100 / 12;
      let term = (this.state.term) * 12;

      let result = (balance * (rate * Math.pow((1 + rate), term)) / 
                    (Math.pow((1 + rate), term) - 1)).toFixed(2);

      this.setState({
        mPay: result
      })
    }
  
  render() {
    return (
      <div className="container">
          <h3>Mortgage Calculator</h3>
        <hr />
          <form className="form-horizontal">
            <div className="form-group">
              <label for="balance" className="col-sm-2 control-label">Loan Balance</label>
              <div className="col-sm-6">
                <input type="number" className="form-control" id="balance" name="balance" value={this.state.balance} onChange={this.handleOnChange} />
              </div>
            </div>

            <div className="form-group">
              <label for="rate" className="col-sm-2 control-label">Interest Rate (%)</label>
              <div className="col-sm-6">
                <input type="number" step="0.01" className="form-control" id="rate" name="rate" value={this.state.rate} onChange={this.handleOnChange} />
              </div>
            </div>

            <div className="form-group">
              <label for="term" className="col-sm-2 control-label">Loan Term (years)</label>
              <div className="col-sm-6">
                <select className="form-control" id="term" name="term" value={this.state.term} onChange={this.handleOnChange}>
                  <option value="15">15</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-2">
                <button name="submit" onClick={this.handleOnClick} className="btn btn-primary">Calculate</button>
              </div>
            </div>
          </form>

          <div className="col-sm-offset-4" id="output">
           ${this.state.mPay} is your payment
          </div>
      </div>
    );
  }
}
