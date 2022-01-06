import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function Feedbackitem({item}) {
  const handleClick = (id) => {
    console.log(id)
  }

  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div> 
      <button onClick={ () => handleClick(item.id)} className="close">
        <FaTimes  color='purple'/>  
      </button> 
      <div className="text-display">{item.text}</div>  
    </Card>   
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired
}

export default Feedbackitem
