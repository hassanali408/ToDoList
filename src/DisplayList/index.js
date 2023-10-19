import BasicTable from "../Table";

const List = ({ items, setTodoList, todoList, editTask }) => {
    return (
        <div>
            <BasicTable inputValue={items} setTodoList={setTodoList} todoList={todoList} editTask={editTask} />
        </div>
    );
}
export default List;