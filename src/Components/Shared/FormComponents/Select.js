import React,{useState} from 'react';

const Select=({classname,arr,value,isreq,onChangehandler,onChangeValid,name})=>{

    const [message,setMessage]=useState("");
        return(<div>
        <select required={isreq} 
                className={classname} onChange={(e)=> {
                    onChangehandler(e)
                    let message=onChangeValid(e)
                    setMessage(message)
                }} 
                value={value}>
                <option value="">Select {name}</option>
                {   arr.map((e, i)=>(
                    <option key={i} value={`${e.id}$${e.name}`}>
                        {e.name}
                    </option>
                  ))}
                
        </select>
        {message && <small className="text-danger"> {message}</small>}
</div>
        )

}
export default Select;