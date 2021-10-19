import React from "react";

import Task from "./Task";
export const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task}/>
      ))}
    </>
  );
};
