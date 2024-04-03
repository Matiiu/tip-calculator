import { MenuItem, OrderItem } from "../types";

export type OrderActions =
  | { type: "add-item"; payload: { newOrder: MenuItem } }
  | { type: "remove-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export function OrderReducer(
  state: OrderState = initialState,
  action: OrderActions
) {
  if (action.type === "add-item") {
    const orderExists = state.order.some(
      (order) => order.id === action.payload.newOrder.id
    );
    let updateOrder: OrderItem[] = [];

    if (orderExists) {
      updateOrder = state.order.map((order) =>
        order.id === action.payload.newOrder.id
          ? { ...order, quantity: order.quantity + 1 }
          : order
      );
    } else {
      updateOrder = [
        ...state.order,
        { ...action.payload.newOrder, quantity: 1 },
      ];
    }
    return {
      ...state,
      order: updateOrder,
    };
  }

  if (action.type === "remove-item") {
    return {
      ...state,
      order: state.order.filter((item) => item.id !== action.payload.id),
    };
  }

  if (action.type === "place-order") {
    return {
      order: [],
      tip: 0,
    };
  }

  if (action.type === "add-tip") {
    const tip = action.payload.value;
    return {
      ...state,
      tip,
    };
  }
}
