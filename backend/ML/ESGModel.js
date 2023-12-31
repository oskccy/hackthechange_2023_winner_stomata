const OpenAI = require("openai");
const dotenv = require("dotenv");

dotenv.config();

async function visionModel(base64Images, prompt) {
  const openai = new OpenAI({
    apiKey: "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",
  });
  const imagesContent = base64Images.map((base64) => {
    return {
      type: "image_url",
      image_url: `data:image/png;base64,${base64}`,
    };
  });
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-16k",
    messages: [
      { role: "system", content: prompt },
      {
        role: "user",
        content: [...imagesContent],
      },
    ],
    max_tokens: 1000,
  });
  return response.choices[0].message.content; // Adjust according to the actual response structure you expect from OpenAI
}

module.exports = { visionModel };
