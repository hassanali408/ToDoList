import BasicTable from "../Table";

const List = ({ items, setTodoList, todoList, editTask, setCompleteList, }) => {
    return (
        <div>
            <BasicTable inputValue={items} setTodoList={setTodoList} todoList={todoList} editTask={editTask} setCompleteList={setCompleteList} />
        </div>
    );
}
export default List;