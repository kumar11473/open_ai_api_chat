// const readline = require('readline');

// const userInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   })
  
//   userInterface.prompt()

// userInterface.on('line', async input =>{
//     console.log(input)
// })


import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY, // stored in .env file 
  })
)

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

userInterface.prompt()
userInterface.on("line", async input => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  })
  console.log(response.data.choices[0].message.content)
  userInterface.prompt()
})

/*
Generally, the "on" function registers an event handler for a specific event.

readline-> This module provides an interface for reading data from a Readable stream (such as process.stdin)
 one line at a time1. The on(‘line’) method takes a callback function as an argument, 
 which is invoked whenever the user presses the 
Enter key or the input stream receives an end-of-line input (EOL)

 https://nodejs.org/api/readline.html#readline_event_line
 
*/
