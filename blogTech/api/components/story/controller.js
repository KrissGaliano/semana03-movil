/**
 * * CREATE_STRORY => user_id, title, author, text, dateTime
 * * READ_STORY => story_id
 * * UPDATE_STORY => story_id, story_data
 * * DELETE_STORY => story_id
 */
 import { response } from "../../../network";
 import { list, remove  ,json1 ,store} from "../../../store/dummy";
 import { nanoid } from 'nanoid';
 import { _ } from 'underscore';
 const USER_TABLE = "stories";



 export const update = (req, res) => {

  
  const { id } = req.params;
  const { title , content, user_id  } = req.body;

  if ( title && content && user_id  ) {
  _.each(json1, (story, i) => {
    if (story.id === id) {
        story.title = title;
        story.content = content;
        story.user_id = user_id;
        
    } 
  });
  res.json(json1);
} else {
  res.status(500).json({error: ' error.'});
  }
};

 export const showAll = async (req, res) => {
    //* Aca traigo la lista de usuarios
    const users = await list(USER_TABLE);
    console.log(users);
  
    return response({ res, data: users });
  };

  export const signUp = async (req, res) => {
    const { id} = req.params;
    const story = req.body;
  
  
    const data = {
      id: nanoid(),
      title: story.title,
      content: story.content,
      user_id:id,

    };
  
    const users = await store(USER_TABLE, data);
  
    return response({ res, data: users });
  };
  
  export const deletestory = async (req, res) => {
    const { id } = req.params;
  
    const story = await remove(USER_TABLE, id);
  
    if (!story) {
      return response({ res, ok: false, data: { error: "User not found" } });
    }
  
    return response({ res, data: { success: "User deleted successfully!" } });
  };

 