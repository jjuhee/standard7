import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import Todo from "../components/Todo"
import TodoForm from "../components/TodoForm";


const Home = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  return <div>

    <TodoForm />

    <h1>할 일</h1>
    {
      //todos.filter((item) => item.isDone === false)
      todos.filter((item) => {
        return (item.isDone === false)
      }).map((item) => {
        return <Todo item={item} />
      })
    }

    <h1>한 일</h1>
    {
      todos.filter((item) => item.isDone === true)
        .map((item) => {
          return <Todo item={item} />
        })
    }
  </div>;
};

export default Home;

