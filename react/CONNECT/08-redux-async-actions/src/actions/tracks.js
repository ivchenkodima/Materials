var mockApiData = [
  {
    id: 1,
    name: 'Enter Sandman'
  },
  {
    id: 2,
    name: 'Welcome Home'
  },
  {
    id: 3,
    name: 'Master of Puppets'
  },
  {
    id: 4,
    name: 'Fade to Black'
  }
];

export const getTracks = () => dispatch => {
  dispatch({
    type: 'FETCH_TRACKS_REQUEST',
    payload: ''
  });

  return setTimeout(() => {
    dispatch({
      type: 'FETCH_TRACKS_SUCCESS',
      payload: mockApiData
    })
  }, 2000)
};

export const onAddTrack = name => dispatch => {
  const payload = {
    id: Date.now().toString(),
    name
  };
  dispatch({ type: 'ADD_TRACK', payload });
};

export const onFindTrack = name  =>  dispatch => {
  console.log('name', name);
  dispatch({ type: 'FIND_TRACK', payload: name});
};
