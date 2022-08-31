import { useState } from "react";
import UserListItem from "./UserListItem";

const UserList = ({
  users,
  onRemove,
  onInsertToggle,
  setSelectedTodo,
  onToggle,
}) => {
  return (
    <ul
      className="UserList"
      style={{
        margin: "0 auto",
        width: "1200px",
      }}
    >
      {users.map((user, index) => (
        <UserListItem
          user={user}
          key={index}
          onRemove={onRemove}
          onToggle={onToggle}
          onInsertToggle={onInsertToggle}
          setSelectedTodo={setSelectedTodo}

          //   handleDragStart={handleDragStart}
          //   handleDragOver={handleDragOver}
          //   handleDrop={handleDrop}
        />
        // { ))} }
      ))}
    </ul>
  );
};

export default UserList;
