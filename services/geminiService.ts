import { GoogleGenAI, Type } from "@google/genai";
import { AiStrategyResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMarketingStrategy = async (
  businessType: string,
  targetAudience: string
): Promise<AiStrategyResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a brief marketing strategy for a ${businessType} targeting ${targetAudience}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "5 high-impact SEO keywords"
            },
            emailHook: {
              type: Type.STRING,
              description: "A catchy, personalized cold email subject line"
            },
            seoFocus: {
              type: Type.STRING,
              description: "One sentence describing the primary SEO content strategy"
            }
          },
          required: ["keywords", "emailHook", "seoFocus"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AiStrategyResponse;
  } catch (error) {
    console.error("Error generating strategy:", error);
    // Return fallback data if API fails or key is missing
    return {
      keywords: ["AI Automation", "Digital Growth", "Future Marketing", "Smart SEO", "Lead Gen"],
      emailHook: "Transform your business with intelligent automation today",
      seoFocus: "Focus on long-tail keywords regarding automation efficiency."
    };
  }
};