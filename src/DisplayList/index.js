import BasicTable from "../Table";

const List = ({ items, setTodoList, todoList }) => {
    return (

        <div>
            <BasicTable inputValue={items} setTodoList={setTodoList} todoList={todoList} />

        </div>
    );
}

export default List;