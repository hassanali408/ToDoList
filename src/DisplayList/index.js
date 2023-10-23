import BasicTable from "../Table";

const List = ({ items, setTodoList, todoList, editTask, setCompleteList,completeList }) => {
    return (
        <div>
            <BasicTable inputValue={items} setTodoList={setTodoList} todoList={todoList} editTask={editTask}
             setCompleteList={setCompleteList} completeList={completeList} />
        </div>
    );
}
export default List;