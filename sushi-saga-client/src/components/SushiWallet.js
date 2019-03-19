import React from "react"

const SushiWallet = (props) => {
  return (
  <div className="sushi-wallet">
    <form onSubmit={props.handleSubmit}>
      <input type='number' value={props.balance} onChange={props.handleChange}/>
      <input type='submit'/>
    </form>

  </div>
  )
}

export default SushiWallet
