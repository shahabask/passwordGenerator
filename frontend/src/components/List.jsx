

import React,{useState} from 'react'
import { usersApi } from '../axiosApi/axiosInstance'

 function List() {
    const [num,setNum]=useState('')

    async   function sentNumber(){
        try{
            
            let res= await usersApi.post('/list')
        }catch(error){
            console.error(error)
        }
    }
  return (
    <div>
      <form>
<input type='number' placeholder='enter a number'  onChange={setNum(e.target.value)}/>
        <button onClick={sentNumber}></button>
      </form>
    </div>
  )
}

export default List
