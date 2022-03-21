import React, { useReducer } from "react";
import axios from "axios";
// get - для получения одного обьекта
// post - добавляем
// delete - удаляем
// patch - частичная замена
// put - полная замена

//! вызываем метод для создания контекста
export const videosContext = React.createContext();

// ! API
const API = "http://localhost:8000/videos";

//! начальное состояние, чтоб позже могли сохранить данные
const INIT_STATE = {
  videos: [],
};

//! функция, которая меняет State
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return { ...state, videos: action.payload.data };
    default:
      return state;
  }
};

const VideosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllVideos() {
    const result = await axios.get(API);
    // console.log("getAllVideos", result);
    let action = {
      type: "GET_VIDEOS",
      payload: result,
    };
    dispatch(action);
  }
  async function deleteVideo(id) {
    await axios.delete(`${API}/${id}`);
    getAllVideos();
  }

  return (
    <videosContext.Provider
      value={{ videos: state.videos, getAllVideos, deleteVideo }}
    >
      {children}
    </videosContext.Provider>
  );
};

export default VideosContextProvider;
