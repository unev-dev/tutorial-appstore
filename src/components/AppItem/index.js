import './index.css'

const AppItem = props => {
  const {appd} = props
  const {appName, imageUrl} = appd

  return (
    <li className="appc">
      <img src={imageUrl} alt={appName} className="appsize" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
