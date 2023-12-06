// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList

  return (
    <li className={`${className} card-item`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <img src={imgUrl} alt={title} className="card-img" />
      </div>
    </li>
  )
}

export default CardItem
