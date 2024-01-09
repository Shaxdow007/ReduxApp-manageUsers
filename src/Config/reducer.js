// start state :
const initialState = {
  users: [
    { id: 1, fullName: "nour eddine houmame", email: "nourEddin@gamil.com" },
    { id: 1, fullName: "ali benani", email: "benani@gamil.com" },
  ],
};
// reducer :
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addUser":
      return { ...state, users: [...state.users, action.payload] };
    case "updateUser":
      const { id, fullName, email } = action.payload;
      const user = state.users.find((us) => us.id === parseInt(id));
      if (user) {
        user.fullName = fullName;
        user.email = email;
      }
      return state;
    case "deleteUser":
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== parseInt(action.payload))],
      };
    default:
      return state;
  }
};
export default reducer;
