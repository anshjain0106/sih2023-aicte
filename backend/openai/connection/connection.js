const axios = require('axios');
// require("openai");
require("dotenv").config();
const generateEmbed= async (text)=> {
    const url = 'https://api.openai.com/v1/embeddings';
    const model = 'text-embedding-ada-002'; // Replace with the ID of the model you want to use
    const input = text;
  
    const requestBody = {
      model,
      input
    };
    try {
      const API_KEY= process.env.OPENAI_KEY;
      // console.log(API_KEY);
      const response = await axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`
        }
      });
  
      const embedding = response.data.data[0].embedding;
      // console.log('Result:', embedding);
      return embedding;
  
    } catch (error) {
      console.error(error);
    }
  }

module.exports = generateEmbed;