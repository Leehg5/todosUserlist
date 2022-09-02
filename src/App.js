import Body from "./components/Body";
import Head from "./components/Head";
import Footer from "./components/Footer";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import UserEdit from "./components/UserEdit";
// import Draggable from "react-draggable";

const App = () => {
  const [user, setUser] = useState("");
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  // const handleDragStart = (e, user) => {
  //   e.dataTransfer.effectAllowed = "move";
  //   e.dataTransfer.setData("tmp", JSON.stringify(user));
  // };
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  // };
  // const handleDrop = async (e, targetItem) => {
  //   e.preventDefault();
  //   try {
  //     const originalItem = await JSON.parse(e.dataTransfer.getData("tmp")); // 1
  //     setUsers((users) =>
  //       users.map((user) => {
  //         return user.id === targetItem.id
  //           ? { ...originalItem, id: targetItem.id }
  //           : user.id === originalItem.id
  //           ? { ...targetItem, id: originalItem.id }
  //           : user;
  //       })
  //     );
  //     const data = await axios({
  //       url: `http://localhost:3001/users/swap/${originalItem.id}`,
  //       method: "PATCH",
  //       data: { targetId: targetItem.id },
  //     });
  //     setUsers(data.data);
  //   } catch (e) {
  //     setError(e);
  //   }
  // };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:3002/users",
          method: "GET",
        });

        setUsers(data.data);
        setIsLoading(false);
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 3000);
        });
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);
  if (error) {
    return <>에러: {error.message}</>;
  }
  if (isLoading) {
    return <>Loading...</>;
  }

  const onInsert = async (text) => {
    try {
      const data = await axios.post(`http://localhost:4000/users/add`, {
        text: text,
      });

      // setIsLoading(false);
      //   await new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //       resolve();
      //     }, 3000);
      // });
      setUsers(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onRemove = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const removeData = async () => {
        try {
          const data = await axios({
            url: `http://localhost:3002/users/delete/${id}`,
            method: "DELETE",
          });
          setIsLoading(false);
          setUsers((users) => users.filter((user) => user.id !== id));
        } catch (e) {
          setError(e);
        }
      };
      removeData();
      if (error) {
        return <>에러: {error.message}</>;
      }
      if (isLoading) {
        return <>Loading...</>;
      }
    }
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onUpdate = async (
    id,
    nameValue,
    addressValue,
    phoneValue,
    featureValue
  ) => {
    try {
      const data = await axios.patch(
        `http://localhost:3002/users/update/${id}`,
        {
          name: nameValue,
          address: addressValue,
          phone: phoneValue,
          feature: featureValue,
        }
      );
      setUsers(data.data);
    } catch (e) {
      setError(e);
    }
    onInsertToggle();
    if (error) {
      return <>에러: {error.message}</>;
    }
    if (isLoading) {
      return <>Loading...</>;
    }
  };

  return (
    <div>
      <Head />
      <Body
        user={user}
        users={users}
        onRemove={onRemove}
        onInsertToggle={onInsertToggle}
        setSelectedUser={setSelectedUser}
        onUpdate={onUpdate}
      />
      {insertToggle && (
        <UserEdit
          user={user}
          users={users}
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          selectedUser={selectedUser}
          onUpdate={onUpdate}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
