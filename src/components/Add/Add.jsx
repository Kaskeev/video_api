import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { videosContext } from "../../contexts/videosContext";

const Add = () => {
  const navigate = useNavigate();
  const { addVideo } = useContext(videosContext);
  // title, imageTitle, genre, description
  const [newProduct, setNewProduct] = useState({
    title: "",
    imageTitle: "",
    genre: "",
    description: "",
  });

  function handleValues(e) {
    let product = {
      ...newProduct,
      [e.target.name]: e.target.value,
    };
    setNewProduct(product);
  }

  function save() {
    if (
      !newProduct.title ||
      !newProduct.description ||
      !newProduct.genre ||
      !newProduct.imageTitle
    ) {
      alert("Заполните поля");
      return;
    }
    addVideo(newProduct);
    navigate("/");
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleValues}
        value={newProduct.title}
        placeholder="Title"
        name="title"
      />
      <input
        type="text"
        onChange={handleValues}
        value={newProduct.imageTitle}
        placeholder="Image for title"
        name="imageTitle"
      />
      <input
        type="text"
        onChange={handleValues}
        value={newProduct.genre}
        placeholder="Genre"
        name="genre"
      />
      <input
        type="text"
        onChange={handleValues}
        value={newProduct.description}
        placeholder="Description"
        name="description"
      />
      <button onClick={save}>Save</button>
    </div>
  );
};

export default Add;
