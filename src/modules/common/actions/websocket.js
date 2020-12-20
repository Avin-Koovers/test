export const closeSocket = () => {
    return {
      type: 'CHANGE_SOCKET_STATE',
      payload: false
    };
  };

  export const openSocket = () => {
    return {
      type: 'CHANGE_SOCKET_STATE',
      payload: true
    };
  };
