import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { videosContext } from "../../contexts/videosContext";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneVideo, oneVideo, updateVideo } = useContext(videosContext);
  const [edit, setEdit] = useState(null);
  //   console.log(params);
  console.log(edit);
  //   console.log(oneVideo);
  useEffect(() => {
    getOneVideo(params.id);
  }, []);
  useEffect(() => {
    setEdit(oneVideo);
  }, [oneVideo]);

  function handleValue(e) {
    let edited = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(edited);
  }
  function save() {
    updateVideo(params.id, edit);
    navigate("/");
  }

  return edit ? (
    <div>
      <input
        onChange={handleValue}
        name="title"
        type="text"
        value={edit.title}
      />
      <input
        onChange={handleValue}
        name="imageTitle"
        type="text"
        value={edit.imageTitle}
      />
      <input
        onChange={handleValue}
        name="genre"
        type="text"
        value={edit.genre}
      />
      <input
        onChange={handleValue}
        name="description"
        type="text"
        value={edit.description}
      />
      <button onClick={save}>SAVE</button>
    </div>
  ) : (
    <h1>Loading....</h1>
  );
};

export default Edit;
