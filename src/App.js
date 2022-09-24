import './App.css';
import Items from "./components/Items";
import Input from "./components/Input";
import { useState } from "react";
import SwipeToDelete from 'react-swipe-to-delete-component';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';



function App() {
  const [openAdd, setopenAdd] = useState(false);
  const [items, setItems] = useState([]);
  const [all, setAll] = useState(true);
  async function onAdd(txt) {
    if (txt !== "") {
      const exist = items.find(el => el.text === txt);
      if (!exist) {
         await setItems([...items,{text:txt,check:false}])
      }
      else {
        await alert("This task is already in the List")
      }
      await setopenAdd(false)
    }
    else {
      alert("Enter a title for your task");
   }
  }

  function onCheck(txt) {
    setItems(
      items.map((el) => (
        el.text === txt ?
          { text: el.text, check: !el.check }
          :
          el
      ))
    )

  }
  function onDelete(txt) {
    setItems(
      items.filter(el=>el.text!==txt)
    )
    
  }
  return (
    <div id="whole" className=' bg-gradient-to-r from-cyan-100 to-blue-300'>
      <div id="app" className='grid h-screen w-screen place-items-center'>
        {openAdd ?
          <Input onAdd={onAdd}/>
          :
        <div id='body' className='rounded-lg bg-sky-500 h-5/6 w-5/12 drop-shadow-5xl max-w-xl'>
          <div id="title" className='m-5 text-center text-2xl font-bold text-white'>
            <h1 className='text-3xl'>My TodoList</h1>
          </div>
         <div id="container" className=' rounded-lg bg-white h-5/6 mx-5'>
         <div id="commands" className=" rounded-t h-1/6 w-6/6 flex justify-around">
                <button className="rounded m-1  w-full  text-white text-lg bg-sky-700 " onClick={() => setAll(!all)}>
                  {all ? "Show Undone" : "Show All"}</button>
                <button className="rounded m-1  w-full  text-white text-lg bg-sky-700" onClick={()=>setopenAdd(true)}>Add new</button>
          </div>
          <div id='divideLine' className='w-full border-t border-b border-gray-300'></div>
              <div id="toDoItems" className='overflow-y-scroll h-5/6 bg-white'>
                {all ?
                  items.map((el) => (
                    <SwipeToDelete key={el.text}  onDelete={()=>onDelete(el.text)}>
                    <Items text={el.text} check={el.check} onCheck={onCheck} /></SwipeToDelete>))
                  :
                  items.map((el) => (
                    !el.check ?
                      <SwipeToDelete key={el.text} onDelete={()=>onDelete(el.text)}>
                      <Items text={el.text} check={el.check} onCheck={onCheck} /></SwipeToDelete>
                      :
                      ""
                  ))
                }
           </div>
        </div>
        <div className="text-center text-white font-bold">Be Productive</div>
    </div>}
    </div>
  </div>
  );
}

export default App;
