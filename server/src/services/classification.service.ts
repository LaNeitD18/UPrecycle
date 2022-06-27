// @ts-ignore
import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc'


// TODO: refactor this to .env
const CLARIFAI_UPRECYCLE_API_KEY = "aba9d3d4691c46b980f2618562253394";
const CLARIFAI_UPRECYCLE_MODEL_ID = 'UPrecycle';



////////////////////////////////////////////////////////////////////////////////////////////////////
interface ClarifaiConceptResponse {
  id?: string,
  name: string,
  value: number,
}

async function predictWithClarifai(apiKey: string, modelId: string, imageUrl: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const stub = ClarifaiStub.grpc();
    
    const metadata = new grpc.Metadata();
    metadata.set("authorization", `Key ${apiKey}`);
    
    stub.PostModelOutputs(
      {
          model_id: modelId,
          inputs: [{data: {image: {base64: imageUrl}}}]
      },
      metadata,
      (err: any, response: any) => {

        if (err)
          reject(err);
    
        if (response?.status.code !== 10000) {
          const errorDetails = response?.outputs.map((output: any) => output?.status?.details);
          reject(errorDetails);
        }
            
        resolve(response?.outputs?.[0]);
      }
    );
  })
}

export async function predictTrashType(imageUrl: string): Promise<ClarifaiConceptResponse[]> {
  if (!imageUrl)
    throw "Missing image url."
  const response = await predictWithClarifai(CLARIFAI_UPRECYCLE_API_KEY, CLARIFAI_UPRECYCLE_MODEL_ID, imageUrl);
  
  return response.data.concepts.map((concept: any) => ({
    id: concept.id,
    name: concept.name,
    value: concept.value,
  }));
}

let randomPrediction: ClarifaiConceptResponse[] = [];

function generateNewRandomPrediction(): ClarifaiConceptResponse[]{
  return [
    { id: "Battery", name: "Battery", value: Math.random() },
    { id: "Biological", name: "Biological", value: Math.random() },
    { id: "BrownGlass", name: "BrownGlass", value: Math.random() },
    { id: "Cardboard", name: "Cardboard", value: Math.random() },
    { id: "Clothes", name: "Clothes", value: Math.random() },
    { id: "GreenGlass", name: "GreenGlass", value: Math.random() },
    { id: "Metal", name: "Metal", value: Math.random() },
    { id: "Paper", name: "Paper", value: Math.random() },
    { id: "Plastic", name: "Plastic", value: Math.random() },
    { id: "Shoes", name: "Shoes", value: Math.random() },
    { id: "Trash", name: "Trash", value: Math.random() },
    { id: "WhiteGlass", name: "WhiteGlass", value: Math.random() },
  ].sort((c1, c2) => c2.value - c1.value)
}

/**
 * @param refreshTime The refresh time in ***milisecond***
 */
export function initPredictionRandomizer (refreshTime: number) {
  randomPrediction = generateNewRandomPrediction();
  
  setInterval(() => {
    randomPrediction = generateNewRandomPrediction();
  }, refreshTime);
}

export async function getRandomPrediction(): Promise<ClarifaiConceptResponse[]> {
  return randomPrediction;
}