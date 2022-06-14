import React from 'react';

import './style.css';

export default class App extends React.Component {
  // your Javascript goes here
  render() {
    return (
      <div className="container">
        <h1>Mortgage Calculator</h1>
      
          <form className="form-horizontal">
            <div className="form-group">
              <label for="balance" className="col-sm-2 control-label">Loan Balance</label>
              <div className="col-sm-6">
                <input type="number" className="form-control" id="balance" name="balance" placeholder="Your Loan Balance" />
              </div>
            </div>

            <div className="form-group">
              <label for="rate" className="col-sm-2 control-label">APR</label>
              <div className="col-sm-6">
                <input type="number" className="form-control" id="rate" placeholder="Annual Percentage Rate" />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-2">
              <label for="term" className="col-sm-2 control-label">Term</label>
                <select name="term" id="term" className="form-control">
                  <option value="15">15 years</option>
                  <option value="30">30 years</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-2">
                <button type="submit" className="btn btn-primary">Calculate</button>
              </div>
            </div>
          </form>

          <div className="output">

          </div>

      </div>
    );
  }
}
