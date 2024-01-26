import './index.css'

const ImageItem = props => {
  const {eachImage} = props
  const {thumbnailUrl} = eachImage
  return (
    <div>
      <li className="short-image">
        <img src={thumbnailUrl} alt="thumbnail" />
      </li>
    </div>
  )
}
export default ImageItem
