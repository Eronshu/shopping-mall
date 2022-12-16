import axios from "axios";
const baseUrl = "http://localhost:8080/EECS4413Project";
const token = localStorage.getItem("token");
export function getCommentMock() {
  return axios({
    url: `/comment.json`,
    method: "get",
  });
}
//set review
export function setReview({ id, rating, comment }) {
  const formData = new URLSearchParams();
  formData.append("item_id", id);
  formData.append("rating", rating);
  formData.append("comment", comment);
  return axios({
    url: `${baseUrl}/rest/review`,
    method: "post",
    data: formData,
    headers: {
      Authorization: token,
    },
  });
}
//getReview
export function getReview(itemId) {
  return axios({
    url: `${baseUrl}/rest/review/${itemId}`,
    method: "get",
  });
}
