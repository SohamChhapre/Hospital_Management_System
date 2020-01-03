import React,{useState} from 'react';


const Input=({type,value,isreq,onChangehandler,classname,onFocushandler,onChangeValid,placeholder})=>{
    const isfile = type === 'file';
    const [message,setMessage]=useState("")
    
    return (
        <React.Fragment>
        { !isfile?(<div><input required={isreq}  type={type} value={value} placeholder={placeholder} onChange={(e)=>{
                onChangehandler(e)
                let message=onChangeValid(e)
                setMessage(message)
                }} 
                // onFocus={(e)=>onFocushandler(e)}
                className={classname}  />{message && <small className="text-danger">{message}</small>}
                </div>):(<div><input required={isreq}  type={type} placeholder={placeholder} onChange={(e)=>{
                    onChangehandler(e)
                    let message=onChangeValid(e)
                    setMessage(message)

                    }}/>
                    {message && <small className="text-danger ">{message}</small>}
                    </div>)
                }
                </React.Fragment>
                )
}

export default Input;