import { POST_ORDER_SUCCESS, POST_ORDER_FAILED, HANDLE_CLOSE_ORDER_MODAL, POST_ORDER_REQUEST} from '../actions/ingredients';

const orderReducer = {
  orderNumber: null,
  error: null
}

export const order = (state = orderReducer, action) => {
  switch(action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state
      }
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber
      }
    };
    case POST_ORDER_FAILED: {
      return {
        orderNumber: null,
        error: action.error
      }
    };
    case HANDLE_CLOSE_ORDER_MODAL: {
      return {
        orderNumber: null,
        error: null
      }
    }
    default: {
      return state
    }
  }
}
