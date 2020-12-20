export const updateTicker = ticker => {
    return {
      type: 'UPDATE_TICKER',
      payload: {
        ticker
      }
    };
  };