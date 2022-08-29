import "./index.css";

const current = new Date();
const dateEl =
  current.getDate() +
  "-" +
  (current.getMonth() + 1) +
  "-" +
  current.getFullYear();
const timeEl = current.getHours() + ":" + current.getMinutes();

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div className="ToDo">
    <div className='ToDo__li'>
      <div
        id={todo.id}
        key={todo.id + todo.task}
        name="todo"
        value={todo.id}
        onClick={handleClick}
        className= {todo.complete ? "todo strike" : "todo"}
      >
        {todo.task}
      </div>
      <span className="ToDo__li--postDate">
        (added on {dateEl} at {timeEl})
      </span>
    </div>
    </div>
  );
};

export default ToDo;
