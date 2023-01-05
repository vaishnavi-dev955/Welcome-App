// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="background-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button
          className="custom-button"
          type="button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
