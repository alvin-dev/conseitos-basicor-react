import React, {useState} from "react";

export default (props) => {

  const [name, changeName] = useState('Pedro')

  return (
    <div>
      <h3>{name}</h3>
      <input type="text" value={null} onChange={e => changeName(e.target.value)} />
    </div>

  )
}
