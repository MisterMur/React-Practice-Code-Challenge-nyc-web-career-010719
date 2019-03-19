import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton.js'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  function renderSushi(){
    // console.log(props)
    return props.sushis.map((sushi,id)=>{
      return <Sushi
        key={id}
        sushi={sushi}
        sushisEatten={props.sushisEatten}
        handleSushiEat={props.handleSushiEat}
      />
    })
  }
  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton
          handleClick={props.handleClick}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer
