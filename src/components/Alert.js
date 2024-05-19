import React from 'react'

const Alert = (props) => {
    const capital=(word)=>{
let letter=word.toLowerCase()
return letter.charAt(0).toUpperCase() + letter.slice(1)
    }
    return (
        <div>
          {props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capital(props.alert.type)}</strong>:<strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}

export default Alert
