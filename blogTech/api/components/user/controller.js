/**
 * * Login => Email, Password => POST
 * * SignUp => Name, Lastname, Email, Password => POST
 * * ShowUser => ID => Show => GET
 * * Reset password => Email => POST
 * * Update User => Id, UserData => PUT
 * * Delete user => Id => DELETE
 */
import { response } from "../../../network";
import { list, find, remove  ,json} from "../../../store/dummy";
import { _ } from 'underscore';


//*POST
const USER_TABLE = "users";

export const show = async (req, res) => {
  const { id } = req.params;

  const user = await find(USER_TABLE, id);
  return response({ res, data: user });
};

export const update = (req, res) => {
 
  //const users = await list(USER_TABLE);
  //console.log(users); 
  //return response({ res, data: users });
  

  
  const { id } = req.params;
  const { name , last_name, email, password } = req.body;

  if ( name && last_name && email && password ) {
  _.each(json, (movie, i) => {
    if (movie.id === id) {
        movie.name = name;
        movie.last_name = last_name;
        movie.email = email;
        movie.password = password;
    } else {
      console.log("Error");
    }
  });
  res.json(json1);
} else {
  res.status(500).json({error: 'There was an error.'});
  }
};

export const destroy = async (req, res) => {
  const { id } = req.params;

  const user = await remove(USER_TABLE, id);

  if (!user) {
    return response({ res, ok: false, data: { error: "User not found" } });
  }

  return response({ res, data: { success: "User deleted successfully!" } });
};

//* LISTA USUARIOS
export const showAll = async (req, res) => {
  //* Aca traigo la lista de usuarios
  const users = await list(USER_TABLE);
  console.log(users);

  return response({ res, data: users });
};
