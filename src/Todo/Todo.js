import { useState } from 'react';
import './Todo.css'

function Todo() {
    const [EditInput, setEditInput] = useState('')
    const [list, setList] = useState([])
    const inputhandler = (e) => {
        setEditInput(e.target.value)

    }
    const handler_Add = () => {
        if (EditInput !== '') {
            setList([...list, EditInput])
        }
        setEditInput('')
    }

    const Delete_Item = (i) => () => setList((list) => {
        return list.filter((e, index) => index !== i)
    })

    const Edit_Item = (i, e) => () => {
        if (list[i].length > 0) {
            setEditInput(list[i])
            list[i] = ''
        } else {
            list[i] = EditInput;
            setList(list);
            setEditInput('')
        }

    }

    return (
        <div className="Main_Container">
            <br />
            <h1 > ToDo List </h1>
            <br />
            <input type="text" placeholder='Add items' value={EditInput} onChange={inputhandler} />
            <button id='btn' onClick={handler_Add}><b> + </b>  </button>
            <ul>
                {
                    list.map((e, i) => {
                        return <li><button key={i} onClick={Delete_Item(i)} id="delete">x</button><button id="edit" onClick={Edit_Item(i)}>Edit</button>
                            <p id='list_items' >{e}</p></li>
                    })
                }

            </ul>
        </div>
    )
}
export default Todo;