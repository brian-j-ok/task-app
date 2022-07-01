import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul style={{'list-style-type':'none'}}>
      {tasks.map((task) => {
        return (
          <div>
            <li key={task.id}>{(tasks.indexOf(task)+1) + '. ' + task.text}</li>
            <button>Delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Overview;