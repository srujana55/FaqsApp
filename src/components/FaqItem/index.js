// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  onDisplay = () => {
    this.setState(prevState => {
      const {isClicked} = prevState
      return {
        isClicked: !isClicked,
      }
    })
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isClicked} = this.state
    let imgUrl =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    let alt = 'plus'
    let des = ''
    if (isClicked === true) {
      imgUrl =
        'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      alt = 'minus'
      des = (
        <div>
          <hr className="rule" /> <p className="para">{answerText}</p>
        </div>
      )
    }

    return (
      <li className="list-item">
        <div className="con">
          <h1 className="paragraph">{questionText}</h1>
          <button type="button" className="btn" onClick={this.onDisplay}>
            <img className="image" src={imgUrl} alt={alt} />
          </button>
        </div>
        {des}
      </li>
    )
  }
}

export default FaqItem
