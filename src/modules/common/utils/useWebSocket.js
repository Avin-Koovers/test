import ReconnectingWebSocket from "reconnecting-websocket";
import env from '../../../../app.json';
import { useRef, useEffect } from "react";
import { useDispatch, batch, useSelector } from "react-redux";
import { loadMarketTrade, updateMarketTrade } from "../../trades/actions/trade";
import { loadOrderBook, updateOrderbook } from "../../orderbook/actions/orderbook";
import { updateTicker } from "../../home/actions/ticker";

let batchDispatcher=[]
let batchRun;
export default useWebSocket =  (messageObject,type,reload) => {
    const webSocket = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if(webSocket.current){
            webSocket.current.close()
        }
  webSocket.current = new ReconnectingWebSocket(`${env.WS_URL}`);
        webSocket.current.onopen = async event => {            
            const message = JSON.stringify(messageObject)
              webSocket.current.send(message);
        }
        webSocket.current.onmessage = event => {
            const data = JSON.parse(event.data)
            if(type==='trades'){
                if(typeof(data[1])==="object" && data[1].length>1 && data[1][1].length===4){
                    dispatch(loadMarketTrade(data[1]))
                }else if(data[1]==="tu"){
                    dispatch(updateMarketTrade(data[2]))
                }
            }else if(type==='orderbook'){
                try {
                    if(data[1][1].length>1){
                        const orderbook = {asks:[],bids:[]}
                        data[1].map(order=>order[2]>0?orderbook.bids.push(order):orderbook.asks.push(order))
                        dispatch(loadOrderBook(orderbook))
                         batchRun = setInterval(function() {
                            if(batchDispatcher.length>0){
                                batch(()=>{
                                    batchDispatcher.forEach(res=>dispatch(res))
                                })
                            }
                           
                            batchDispatcher = [];
                          }, 100);
                      }else if(typeof(data[1][1]==='string')){
                        batchDispatcher.push(updateOrderbook(data[1]))
                         
                      }
                } catch (error) {

                }
               
            }else if(type==='ticker' && data.length===2){
                dispatch(updateTicker(data))
            }
           
        };

        return () => { webSocket.current.close();clearInterval(batchRun); };
    }, [reload]);

    return null
}