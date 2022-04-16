const mood = document.querySelector('#mood')
const angryButton = document.querySelector('#angry')
const wowButton = document.querySelector('#wow')
const loveButton = document.querySelector('#love')
const facePalmButton = document.querySelector('#face-palm')

angryButton.addEventListener('click', e => {
  store.dispatch({ type: 'ANGRY' })
  const state = store.getState()
  mood.innerText = state.mood
})

wowButton.addEventListener('click', e => {
  store.dispatch({ type: 'WOW' })
  const state = store.getState()
  mood.innerText = state.mood
})

loveButton.addEventListener('click', e => {
  store.dispatch({ type: 'LOVE' })
  const state = store.getState()
  mood.innerText = state.mood
})

facePalmButton.addEventListener('click', e => {
  store.dispatch({ type: 'FACE_PALM' })
  const state = store.getState()
  mood.innerText = state.mood
})
