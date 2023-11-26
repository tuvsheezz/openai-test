import { modelType } from '../types/types';

export const chatCompletionModels: modelType[] = [
  {
    name: 'gpt-3.5-turbo',
    description:
      'gpt-3.5-turbo	Currently points to gpt-3.5-turbo-0613. Will point to gpt-3.5-turbo-1106 starting Dec 11, 2023. See continuous model upgrades.',
    maxTokens: 4096,
    trainingData: 'Up to Sep 2021',
  },
];

export const completionModels: modelType[] = [
  {
    name: 'text-curie-001',
    description: 'Very capable, faster and lower cost than Davinci.',
    maxTokens: 2049,
    trainingData: 'Up to Oct 2019',
  },
  {
    name: 'text-babbage-001',
    description: 'Capable of straightforward tasks, very fast, and lower cost.',
    maxTokens: 2049,
    trainingData: 'Up to Oct 2019',
  },
  {
    name: 'text-davinci-003',
    description:
      'Most capable GPT-3 model. Can do any task the other models can do, often with higher quality',
    maxTokens: 2049,
    trainingData: 'Up to Oct 2019',
  },
];

export const apiKeyDescription: string[] = [
  "An OpenAI API key is a unique identifier that allows developers to access OpenAI's models through the API. The API key is used to authenticate requests to the API and to track usage.",
  'OpenAI offers several models through the API, including GPT-3, DALL-E, and Codex.',
];

export const maxTokensDescription: string[] = [
  'Max Tokens parameter is a control for the maximum number of tokens that can be generated in a single call to the GPT model.',
  'A token is a discrete unit of meaning in natural language processing.',
  'In GPT, each token is represented as a unique integer, and the set of all possible tokens is called the vocabulary.',
];

export const promptDescription: string[] = [
  'A prompt is a question or instruction given to an AI model, especially a Large Language Model (LLM), to elicit a specific response.',
  'It serves as the interface between human intent and machine output.',
];

export const suffixDescription: string[] = [
  'The suffix that comes after a completion of inserted text.',
];

export const temperatureDescription: string[] = [
  'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
  '',
  'We generally recommend altering this or `top_p` but not both.',
];

export const topPDescription: string[] = [
  'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.',
  'So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
  '',
  'We generally recommend altering this or `top_p` but not both.',
];

export const stopDescription: string[] = [
  'Up to 4 sequences where the API will stop generating further tokens.',
  'The returned text will not contain the stop sequence.',
];
