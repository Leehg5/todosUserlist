import React from "react";
import { Table, Checkbox, Mask, Badge, Button } from "react-daisyui";
import UserList from "./UserList";
const Body = ({
  user,
  users,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedTodo,
}) => {
  return (
    <div
      className="overflow-x-auto mx-auto my-4 block"
      style={{
        width: "1200px",
        height: "70vh",
      }}
    >
      {/* <Checkbox onClick={() => {}} /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          // border: "5px red solid", rgba() 수정
        }}
      >
        <span
          style={{
            marginRight: "30px",
            marginLeft: "30px",
          }}
        >
          Name
        </span>
        <span
          style={{
            marginRight: "50px",
          }}
        >
          Address
        </span>
        <span
          style={{
            marginRight: "70px",
          }}
        >
          Phone
        </span>
        <span
          style={{
            marginRight: "20px",
            marginLeft: "-30px",
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
            marginLeft: "-10px",
          }}
        >
          Edit
        </span>
        <span>Delete</span>
        <span>&nbsp;</span>
        <span>Read More</span>
        <span />
        <button
          onClick={() => {}}
          style={{
            border: "1px black solid",
            borderRadius: "10%",
            padding: "10px",
          }}
        >
          {" "}
          회원 추가
        </button>
      </div>
      <UserList
        user={user}
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedTodo={setSelectedTodo}
        style={{}}
      />

      {/* <Checkbox />
          <div className="flex items-center space-x-3 truncate">
            <Mask
              variant="squircle"
              src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
            />
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
          <div>
            Zemlak, Daniel and Leannon
            <br />
            <Badge color="ghost" size="sm">
              Desktop Support Technician
            </Badge>
          </div>
          <div>Purple</div>
          <Button color="ghost" size="xs">
            details
          </Button>
          <Checkbox />
          <div className="flex items-center space-x-3 truncate">
            <Mask
              variant="squircle"
              src="http://daisyui.com/tailwind-css-component-profile-3@56w.png"
            />
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
          <div>
            Carrol Group
            <br />
            <Badge color="ghost" size="sm">
              Tax Accountant
            </Badge>
          </div>
          <div>Red</div>
          <Button color="ghost" size="xs">
            details
          </Button>
          <Checkbox />
          <div className="flex items-center space-x-3 truncate">
            <Mask
              variant="squircle"
              src="http://daisyui.com/tailwind-css-component-profile-4@56w.png"
            />
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
          <div>
            Rowe-Schoen
            <br />
            <Badge color="ghost" size="sm">
              Office Assistant I
            </Badge>
          </div>
          <div>Crimson</div>
          <Button color="ghost" size="xs">
            details
          </Button>
          <Checkbox />
          <div className="flex items-center space-x-3 truncate">
            <Mask
              variant="squircle"
              src="http://daisyui.com/tailwind-css-component-profile-5@56w.png"
            />
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
          <div>
            Wyman-Ledner
            <br />
            <Badge color="ghost" size="sm">
              Community Outreach Specialist
            </Badge>
          </div>
          <div>Indigo</div>
          <Button color="ghost" size="xs">
            details
          </Button> */}
    </div>
  );
};

export default Body;
