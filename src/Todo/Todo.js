import { useState } from 'react';
import './Todo.css'
import {NavLink} from 'react-router-dom'
function Todo() {
    const[color,setColor]= useState(false)
    const [EditInput, setEditInput] = useState('')
    const [list, setList] = useState([])
    let [bool, setBool] = useState(false)
    let [index, setIndex] = useState('')
    const inputhandler = (e) => {
        setEditInput(e.target.value)

    }
    const handler_Add = () => {
        console.log(index, EditInput, bool)
        if (EditInput !== '' && !bool) {
            setList([...list, EditInput])
        }
        else{
            if(list[index]===''){
            bool = !bool;
            setBool(bool)
            list[index] = EditInput;
            setList(list);
            }
        }
        setEditInput('')
    }

    const Delete_Item = (i) => () => setList((list) => {
        return list.filter((e, index) => index !== i)
    })

    const Edit_Item = (i, e) => () => {
        setIndex(i)
        if (list[i].length > 0) {
            bool = !bool 
            setBool(bool)    // true
            setEditInput(list[i])
            list[i] = ''
        } else {
            bool = !bool    // false
            setBool(bool)
            list[i] = EditInput;
            setList(list);
            setEditInput('')
        }

    }

    return (
        <div className="Main_Container">
           <NavLink to='calculator'><button className='calsi'>Calculator</button></NavLink>
            <br />
            <h1 > ToDo List Only Front End</h1>
            <br />
            <input id='todo-input' type="text" placeholder='Add items' value={EditInput} onChange={inputhandler} />
            <i id='btn' onClick={handler_Add} className='material-icons'>add</i>
            <div className='Add_Scrollbar'>
            <ul>
                {
                    list.map((e, i) => {
                        return <li><p id='list_items' >{e}</p><i className='material-icons' id="edit" onClick={Edit_Item(i)}>edit</i><i className='material-icons' key={i} onClick={Delete_Item(i)} id="delete">delete</i>
                            </li>
                    })
                }

            </ul>
            </div>
        </div>
    )
}
export default Todo;