import React, { useState } from "react";
import { Table, Checkbox, Mask, Badge, Button } from "react-daisyui";
import { MdOutlineSearch } from "react-icons/md";
import UserList from "./UserList";
import "../styles/Body.css";

const Body = ({
  user,
  users,
  onInsert,
  onRemove,
  onUpdate,
  onInsertToggle,
  setSelectedUser,
  onAddToggle,
  onSearch,
}) => {
  const [value, setValue] = useState("");
  const onSearchChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
      className="overflow-x-auto mx-auto my-4 block"
      style={{
        width: "1200px",
        height: "70vh",
        backgroundColor: "#FCF6F5",
        position: "relative",
      }}
    >
      {" "}
      <button
        className="btn btn-info absolute"
        style={{
          left: "10px",
          top: "10px",
        }}
        onClick={() => {
          onAddToggle();
        }}
      >
        회원 추가
      </button>
      <input
        type="text"
        placeholder="검색할 이름을 입력해주세요"
        className="input input-bordered input-info w-full max-w-xs absolute"
        style={{
          right: "70px",
          top: "10px",
        }}
        value={value}
        onChange={onSearchChange}
      />
      <button
        value={value}
        onChange={onSearchChange}
        onClick={() => onSearch(value)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/149/149852.png"
          alt=""
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            right: "1%",
            top: "3%",
          }}
        />
      </button>
      {/* <Checkbox onClick={() => {}} /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          marginTop: "70px",
          alignItems: "center",
          backgroundColor: "#7b9acc",
          color: "white",
          // border: "5px red solid", rgba() 수정
        }}
      >
        <span
          style={{
            width: "100px",
            textAlign: "center",
            marginLeft: "-10px",
          }}
        >
          이름
        </span>
        <span
          style={{
            marginLeft: "-20px",
          }}
        >
          주소
        </span>
        <span
          style={{
            marginLeft: "40px",
            marginRight: "10px",
          }}
        >
          연락처
        </span>
        <span
          style={{
            marginRight: "0px",

            marginLeft: "10px",
          }}
        >
          가입날짜
        </span>
        <span
          style={{
            marginLeft: "10px",
          }}
        >
          취미
        </span>
        <span>&nbsp;</span>
        <span
          style={{
            marginLeft: "-50px",
          }}
        >
          수정
        </span>
        <span>삭제</span>
        <span>&nbsp;</span>
        <span>Read More</span>
        <span />
      </div>
      <UserList
        user={user}
        users={users}
        onRemove={onRemove}
        onInsertToggle={onInsertToggle}
        setSelectedUser={setSelectedUser}
        onUpdate={onUpdate}
        onInsert={onInsert}
        onAddToggle={onAddToggle}
      />
    </div>
  );
};
export default Body;
