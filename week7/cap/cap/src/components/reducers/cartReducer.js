import item1 from '../../images/item1.jpg'
import item2 from '../../images/item2.jpg'
import item3 from '../../images/item3.jpg'
import item4 from '../../images/item4.jpg'
import item5 from '../../images/item5.jpg'
import item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1, title:'Dirty SweatPants', desc: "Semi-used Sweat Pants we pulled off a deceased jogger. Possibly a former olympic athlete but most likely a casual runner. Still a good price", price:21, img: item1},
        {id:2, title:'Stained Shirt', desc: "We think it's pasta sauce...We hope it's pasta sauce. Either way, what a deal!.", price:8, img: item2},
        {id:3, title:'Off-Brand Yeezeys', desc: "Who's going to pay for the real thing? Right?.",price:100, img: item3},
        {id:4, title:'Van Down by the River', desc: "If you don't study hard in school, you'll be living in this Van", price:9000, img: item4},
        {id:5, title:'Half-Eaten Carrots', desc: "To be honest we just kinda stumbled upon these while walking our pet farret. Could be useful", price:2, img: item5},
        {id:6, title:'IPhone X', desc: "We stole this from Dave in accounting so we could pay rent. Brand new! Please buy quick before he finds out",price:900, img: item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
   
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
         
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
          
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
    
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
  
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer