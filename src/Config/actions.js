export const addUserAction = (user) => {
  return { type: "add_user", payload: user };
};
export const updateUserAction = (newUser) => {
  return { type: "update_user", payload: newUser };
};
export const deleteUserAction = (id) => {
  return { type: "delete_user", payload: id };
};
