import axios from "axios";
const baseUrl = "http://localhost:8080/EECS4413Project";

//------------------------------------shoppingCartController-----------------------------------//
//SHOPPING CART:
// const shoppingCartItems = [
//     {item_id: 'XXX', quantity: 0},
//     {item_id: '051EZXVTANB1QGD4', quantity: 3},
//     {item_id: '0EIHD7I9TGLOSY6C', quantity: 5}
// ];

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
<<<<<<< HEAD
export function updateShoppingCartItem(itemId, quantity) {
    const formData = new URLSearchParams();
    formData.append('item_id', itemId);
    formData.append('quantity', quantity);
    return axios({
        url: `${baseUrl}/rest/cart`,
        method: 'put',
        data: formData,
        headers: {
            Authorization: token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
=======
export function updateShoppingCartItem({ itemId, quantity }) {
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
>>>>>>> 5c30a334f48411ad6cfe1db4b14c72a9ffc0b8ca
}

// Delete cart item
export function deleteCartItem(itemId) {
  const token = localStorage.getItem("token");

  return axios({
    url: `${baseUrl}/rest/cart/${itemId}`,
    method: "delete",
    headers: {
      Authorization: token,
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
