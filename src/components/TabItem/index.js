import './index.css'

const TabItem = props => {
  const {eachItem, visitCountry} = props
  const {name, isVisited} = eachItem
  const onClickVisit = () => {
    visitCountry(eachItem)
  }
  return (
    <li className="eachCountry">
      <p>{name}</p>
      {isVisited ? (
        <p className="Visited">Visited</p>
      ) : (
        <button type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default TabItem
