export const loadOrderBook = orderbook => {
    return {
      type: 'LOAD_ORDERBOOK',
      payload: {
        orderbook
      }
    };
  };

  export const updateOrderbook = orderbook => {
    return {
      type: 'UPDATE_ORDERBOOK',
      payload: {
        orderbook
      }
    };
  };