import { useState } from "react";
import UserListItem from "./UserListItem";
const UserList = ({
  users,
  onRemove,
  onInsertToggle,
  setSelectedUser,
  onUpdate,
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
          onInsertToggle={onInsertToggle}
          setSelectedUser={setSelectedUser}

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
