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