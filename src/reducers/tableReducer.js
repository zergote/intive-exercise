import { ADD_A_PERSON, LOAD_PERSONS_LS_SUCCESS } from '../actionTypes';

const initialState = {
  persons: [
    {
      name: 'Christian',
      surname: 'Yanez',
      country: 'Venezuela',
      birthday: '02/02/1998'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_A_PERSON:
      let newPerson = {
        name: action.values.name,
        surname: action.values.surname,
        country: action.values.country,
        birthday: action.values.birthday
      };
      let updatePersons = state.persons;
      updatePersons.push(newPerson);
      return { ...state, persons: updatePersons };

    case LOAD_PERSONS_LS_SUCCESS:
      return { ...state, persons: action.persons };
    default:
      return state;
  }
}
