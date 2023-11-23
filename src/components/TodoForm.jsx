import React, { useState } from 'react'
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos"
import { useDispatch, useSelector } from 'react-redux';

function TodoForm() {
    // const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const addHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: shortid.generate(),
            title,
            body,
        }
        dispatch(addTodo(newTodo));
    }

    return (
        <div>
            <form>
                <div>입력창</div>
                <label>제목</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>내용</label>
                <input value={body} onChange={(e) => setBody(e.target.value)} />
                <button onClick={addHandler}>입력</button>
            </form>
        </div>
    )
}

export default TodoForm;