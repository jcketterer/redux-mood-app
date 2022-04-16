const INIT_STATE = { mood: '(⊙ᗜ⊙)' }

const moodReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ANGRY':
      return { ...state, mood: 'ಠ_ಠ' }
    case 'WOW':
      return { ...state, mood: '⊙▂⊙' }
    case 'LOVE':
      return { ...state, mood: '乂❤‿❤乂' }
    case 'FACE_PALM':
      return { ...state, mood: '(－‸ლ)' }
    default:
      state
  }
}

const store = Redux.createStore(moodReducer)
