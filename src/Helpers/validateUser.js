import { setUser } from "../redux/actions/userActions";

const validateUser = (userDetails, users, dispatch) => {
  const { userName, password } = userDetails;
  let userId = 0,
    currUserDetails;

  users.forEach((user) => {
    if (user.username === userName && user.password === password) {
      userId = user.id;
      currUserDetails = user;
    }
  });

  if (userId > 0) {
    dispatch(setUser(currUserDetails));
  } else {
    alert("You are not Registered On Fake Store");
  }

  return currUserDetails;
};

export default validateUser;
