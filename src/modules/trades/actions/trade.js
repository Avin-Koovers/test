export const loadMarketTrade = trade => {
    return {
      type: 'LOAD_MARKET_TRADE',
      payload: {
        trade
      }
    };
  };

  export const updateMarketTrade = trade => {
    return {
      type: 'UPDATE_MARKET_TRADE',
      payload: {
        trade
      }
    };
  };