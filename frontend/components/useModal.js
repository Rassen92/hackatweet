import { useState } from "react";

const useModal = () => {
  const [isSignInModalVisible, setSignInIsModalVisible] = useState(false);

  function toggle() {
    setSignInIsModalVisible(!isSignInModalVisible);
  }

  return {
    isSignInModalVisible,
    toggle
  };
};

export default useModal;
