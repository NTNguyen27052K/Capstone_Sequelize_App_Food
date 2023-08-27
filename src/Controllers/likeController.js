import Like from "../Model/like.js";

const getLikeRestaurant = async (request, response) => {
  //SELECT * FROM user
  let data = await Like.findAll();
  // response send data to client
  response.send(data);
};

export { getLikeRestaurant };