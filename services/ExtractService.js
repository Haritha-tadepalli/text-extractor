import { OpenAI } from "openai";

class ExtractService {
    constructor() {
        this.openai = new OpenAI({
            openAIApiKey: process.env.OPENAI_API_KEY
        });
        console.log(process.env.OPENAI_API_KEY);
    }
    async extractProcessAndEnrichText(extractedText) {
        try {
            const openaiRes = await this.openai.chat.completions.create({
                model: 'gpt-3.5-turbo-1106',
                messages: [{
                    "role": "user",
                    "content": 'Extract key information as key-value pairs from the below text in flat JSON format with level-one only i.e., don\'t use one-to-many mapping, use strictly one-to-one mapping and avoid nested mapping of arrays, include essential data such as names, dates, amounts, and relevant details:\n\n' + extractedText + '\n\nSample Output Format:\n\n{"key":"value1","key2":"value2","key3":"value3",...'
                }],
                response_format: { type: "json_object" }
            });
    
            const enrichedData = openaiRes.choices[0].message.content;
    
            const keyValuePairs = JSON.parse(enrichedData);

            console.log(keyValuePairs);

            return keyValuePairs;
        }
        catch (error) {
            console.error('Error processing and enriching text:', error);
            return null;
        }
    }

}

export default ExtractService;