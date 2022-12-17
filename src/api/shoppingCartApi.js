import axios from "axios";
import {baseUrl} from "./constants"

//------------------------------------shoppingCartController-----------------------------------//
//用户登录后把购物车里的数据传进去，同步购物车
export function syncShoppingCart(shoppingCartItems) {
  const token = localStorage.getItem("token");

  return axios({
    url: `${baseUrl}/rest/cart`,
    method: "post",
    data: shoppingCartItems,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });
}

// Update cart item
export function updateShoppingCartItem(itemId, quantity) {
  const token = localStorage.getItem("token");

  const formData = new URLSearchParams();
  formData.append("item_id", itemId);
  formData.append("quantity", quantity);

  return axios({
    url: `${baseUrl}/rest/cart`,
    method: "put",
    data: formData,
    headers: {
      Authorization: token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

// Delete cart item
export function deleteCartItem(itemId) {
  const token = localStorage.getItem("token");

  const formData = new URLSearchParams();
  formData.append("item_id", itemId);
  return axios({
    url: `${baseUrl}/rest/cart`,
    method: "delete",
    data: formData,
    headers: {
      Authorization: token,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

//get all cart items
export function getAllCartItems() {
  const token = localStorage.getItem("token");

  return axios({
    url: `${baseUrl}/rest/cart`,
    method: "get",
    headers: {
      Authorization: token,
    },
  });
}

export function getCartMock() {
  return axios({
    url: `/cart.json`,
    method: "get",
  });
}
