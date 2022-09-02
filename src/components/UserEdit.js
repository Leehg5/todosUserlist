import React, { useState, useEffect } from "react";
import "../styles/UserEdit.css";

const UserEdit = ({
  user,
  users,
  onRemove,
  onUpdate,
  // onToggle={onToggle}
  onInsertToggle,
  selectedUser,
}) => {
  const [nameValue, setNameValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [featureValue, setFeatureValue] = useState("");
  const onNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const onAddressChange = (e) => {
    setAddressValue(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };
  const onFeatureChange = (e) => {
    setFeatureValue(e.target.value);
  };

  // e.preventDefault()에러 원인 및 해결
  //useEffect표시하지 않은 사용자 정의 메소드가 인수를 전달하지 않고
  // 첫 번째 매개변수로 전달된 콜백 함수를 호출하기 때문입니다.
  // preventDefault그런 다음 첫 번째 인수 를 호출하려고 합니다
  // 이 인수는 undefined. 입니다
  // 콜백에 올바른 값을 전달하도록 메소드를 수정 useEffect하거나
  // 정의되지 않은 매개변수를 사용하지 않도록 콜백을 변경해야 합니다.
  const onSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    onUpdate(
      selectedUser.id,
      nameValue,
      addressValue,
      phoneValue,
      featureValue
    );
    setNameValue("");
    setAddressValue("");
    setPhoneValue("");
    setFeatureValue("");
    onInsertToggle();
  };

  useEffect(() => {
    setNameValue(selectedUser.name);
    setAddressValue(selectedUser.address);
    setPhoneValue(selectedUser.phone);
    setFeatureValue(selectedUser.feature);
  }, [selectedUser]);

  return (
    <div className="Edit absolute">
      <span className="EditHeader">
        수정하기
        <button
          className="closeBtn btn-circle"
          onClick={() => onInsertToggle()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </span>

      <div className="form-control absolute gap-2">
        <label className="input-group input-group-md">
          <input
            value={nameValue}
            onChange={onNameChange}
            type="text"
            placeholder="이름를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <label className="input-group input-group-md">
          <input
            onChange={onAddressChange}
            value={addressValue}
            type="text"
            placeholder="주소를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <label className="input-group input-group-md">
          <input
            onChange={onPhoneChange}
            value={phoneValue}
            type="text"
            placeholder="연락처를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <label className="input-group input-group-md">
          <input
            onChange={onFeatureChange}
            value={featureValue}
            type="text"
            placeholder="취미를 입력해주세요"
            className="input input-bordered input-md"
          />
        </label>
        <button
          className="editComplete btn btn-outline btn-info"
          type="submit"
          onClick={() => {
            onSubmit();
            onInsertToggle();
          }}
        >
          수정 완료
        </button>
      </div>
    </div>
  );
};

export default UserEdit;
