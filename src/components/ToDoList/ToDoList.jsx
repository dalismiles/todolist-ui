import ToDo from "../ToDo";
import "./index.css";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div className="ToDoList">
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button className="clear" onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
