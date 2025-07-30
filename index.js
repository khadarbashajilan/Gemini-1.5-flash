import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY); // should print your API key in browser console


const genAI = new GoogleGenerativeAI(API_KEY);

async function main() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Explain to me about Quantum computing and im a 10 year old child.");

    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (err) {
    console.error("Gemini Error:", err);
  }
}

main();


// const openai = new OpenAI({
//     apiKey: API_KEY,
//     baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
//     dangerouslyAllowBrowser:true
// });

// async function main() {
//   try {
//     const response = await openai.chat.completions.create({
//       model: "gemini-2.0-flash",
//       messages:[
//         {
//             role: "user",
//             content: "Explain to me about Quantum computing and im a 10 year old child. In a Sentence",
//         }
// ],
//     });
//     console.log(response.choices[0].message.content); // Access the response text here
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// main();
    
      // Initialize with your API key (store it in `.env` for security!)
      // const genAI = new GoogleGenerativeAI(API_KEY);
      
      // async function run() {
      //   // Use the Gemini 1.5 Flash model (or "gemini-pro" for older models)
      //   const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      
      //   // Generate content
        
      //   const prompt = "Hi";
      //   const result = await model.generateContent(prompt);
      //   const response = result.response;
      //   const text = response.text();
      
      //   console.log(`Response: ${text}`);
      // }
      
      // run().catch(console.error);
      