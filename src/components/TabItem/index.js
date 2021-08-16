// Write your code here
import './index.css'

const TabItem = props => {
  const {tabdetails, someprogTochange, selbtn} = props
  const {tabId, displayText} = tabdetails

  const someprogTochangeo = () => {
    someprogTochange(tabId)
  }

  const xyz = selbtn ? 's-btn' : ''

  return (
    <li>
      <button
        type="button"
        className={`btn-style ${xyz}`}
        onClick={someprogTochangeo}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
