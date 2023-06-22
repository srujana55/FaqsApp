import {Component} from 'react'

import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-con">
          {faqsList.map(item => (
            <FaqItem details={item} key={item.id} isClicked={false} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
