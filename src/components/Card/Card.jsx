import React, { useContext } from "react";
import { videosContext } from "../../contexts/videosContext";

const Card = ({ item }) => {
  const { deleteVideo } = useContext(videosContext);
  return (
    <div>
      <img src={item.imageTitle} alt="" width={"200px"} />
      <div>{item.title}</div>
      <button onClick={() => deleteVideo(item.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default Card;
