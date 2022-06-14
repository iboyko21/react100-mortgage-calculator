import React, { Component } from 'react';


export default class App extends Component {
  // your Javascript goes here
  constructor(props){
    super(props);
      this.state = {
        balance: 0,
        rate: 0,
        term: 15
      };
      this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
      this.setState({
          [event.target.id]: event.target.value
      });
      console.log(this.state);
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Mortgage Calculator</h1>
        <hr className="w-25" />
      
          <form className="form-horizontal">
            <div className="form-group">
              <label for="balance" className="col-sm-2 control-label">Loan Balance</label>
              <div className="col-sm-6">
                <input type="number" className="form-control" id="balance" name="balance" value={this.state.balance} onChange={this.handleOnChange} placeholder="Your Loan Balance" />
              </div>
            </div>

            <div className="form-group">
              <label for="rate" className="col-sm-2 control-label">Interest Rate (%)</label>
              <div className="col-sm-6">
                <input type="number" step="0.01" className="form-control" id="rate" name="rate" value={this.state.rate} onChange={this.handleOnChange} placeholder="Annual Percentage Rate" />
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
                <button name="submit" className="btn btn-primary">Calculate</button>
              </div>
            </div>
          </form>

          <div className="output" id="output">
            Output
          </div>

      </div>
    );
  }
}
