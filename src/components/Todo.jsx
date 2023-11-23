import styled from "styled-components";

const Todo = ({ item }) => {
    // const dispatch = useDispatch();

    return (
        <Todobox>
            <h2>title</h2>
            <p>{item.title}</p>
            <h2>body</h2>
            <p>{item.body}</p>
            <button>수정</button>
            <button>삭제</button>
        </Todobox>
    )
}

export default Todo;

const Todobox = styled.div`
  width:400px;
  height: 300px;
  border: 1px solid black;
`