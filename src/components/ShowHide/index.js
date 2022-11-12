// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isFirstnameDisplayed: false,
    isSecondnameDisplayed: false,
  }

  firstName = () => {
    this.setState(prevState => ({
      isFirstnameDisplayed: !prevState.isFirstnameDisplayed,
    }))
  }

  lastName = () => {
    this.setState(prevState => ({
      isSecondnameDisplayed: !prevState.isSecondnameDisplayed,
    }))
  }

  render() {
    const {isFirstnameDisplayed, isSecondnameDisplayed} = this.state

    let firstNameElement
    let secondNameElement

    if (isFirstnameDisplayed === true) {
      firstNameElement = <p className="msg-element">Joe</p>
    } else {
      firstNameElement = null
    }

    if (isSecondnameDisplayed === true) {
      secondNameElement = <p className="msg-element">Jonas</p>
    } else {
      secondNameElement = null
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btns-paras-container">
          <div className="btn-container">
            <button
              onClick={this.firstName}
              className="btn-style"
              type="button"
            >
              Show/Hide Firstname
            </button>

            <div>
              <p>{firstNameElement}</p>
            </div>
          </div>

          <div className="btn-container">
            <button onClick={this.lastName} className="btn-style" type="button">
              Show/Hide Lastname
            </button>

            <div>
              <p>{secondNameElement}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
