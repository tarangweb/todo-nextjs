import React, {createContext} from "react"
import Todoform from "./components/Todoform"
import 'font-awesome/css/font-awesome.min.css'

const TodoTitle = createContext('')
const NotificationTitle = createContext('')

const index = ()=>{
  return(
    <>
<TodoTitle.Provider value={'WORKS TO BE DONE Tarang'}>
      <NotificationTitle.Provider value={'TO BE DONE:'}>
    <Todoform/>
    </NotificationTitle.Provider>
    </TodoTitle.Provider>
    </>
  )
}

export default index;
export {TodoTitle,NotificationTitle}