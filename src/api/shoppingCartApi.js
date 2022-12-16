import axios from "axios";
const baseUrl = "http://localhost:8080/EECS4413Project";
const token = localStorage.getItem("token");

//------------------------------------shoppingCartController-----------------------------------//
//用户登录后把购物车里的数据传进去，同步购物车
export function syncShoppingCart(shoppingCartItems) {
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
  const formData = new URLSearchParams();
  formData.append("item_id", itemId);
  return axios({
    url: `${baseUrl}/rest/cart`,
    method: "delete",
    data: formData,
    headers: {
      Authorization: token,
    },
  });
}

//get all cart items
export function getAllCartItems() {
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
