import './index.css'

const CountryCard = props => {
  const {eachItem, removeCountry} = props
  const {name, imageUrl} = eachItem
  const onClickRemoveBtn = () => {
    removeCountry(eachItem)
  }
  return (
    <li className="CountryCard">
      <img src={imageUrl} alt="thumbnail" />
      <div className="cardContent">
        <p>{name}</p>
        <button type="button" className="RemoveBtn" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default CountryCard
