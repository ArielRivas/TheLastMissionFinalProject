export const CREATE_VIDEO = "CREATE_VIDEO";

export const createVideo = (newVideo, redirect) => (dispatch) => {
  const action = {
    type: CREATE_VIDEO,
    payload: newVideo,
  };
  dispatch(action);
  redirect();
};