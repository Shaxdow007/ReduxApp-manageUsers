export const addUserAction = (user) => {
  return { type: "addUser", payload: user };
};
export const updateUserAction = (newUser) => {
  return { type: "updateUser", payload: newUser };
};
export const deleteUserAction = (id) => {
  return { type: "deleteUser", payload: id };
};
