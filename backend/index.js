const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);

const StreamChat = require('stream-chat-javascript');

const client = StreamChat.getInstance('YOUR_API_KEY', 'YOUR_APP_ID');


async function createUser(userId, userName) {

  const user = await client.createUser({ 

    id: userId, 

    name: userName,

    // Add any other custom user data here

  });

  console.log('User created:', user);

}



// Call the function to create a new user

createUser('user123', 'John Doe'); 
