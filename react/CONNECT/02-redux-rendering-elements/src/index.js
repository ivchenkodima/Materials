import { createStore } from 'redux';

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
};

const store = createStore(playlist);

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  console.log(store.getState());
  store.getState().forEach(track => {
    const li = document.createElement('li');
    const btn = document.createElement('button');

    li.textContent = track;
    btn.textContent = 'Delete';

    li.appendChild(btn);
    list.appendChild(li);
  });
})


addTrackBtn.addEventListener('click', () => {
  const trackName = trackInput.value;
  store.dispatch({
    type: 'ADD_TRACK', payload: trackName
  });
});
