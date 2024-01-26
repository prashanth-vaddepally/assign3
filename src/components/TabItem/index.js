import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {displayText} = tabDetails
  return (
    <li>
      <button type="button">{displayText}</button>
    </li>
  )
}
export default TabItem
