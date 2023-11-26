import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

export type menuType<T> = {
  label: string;
  url: string;
  icon: T;
};

export type modelType = {
  name: string;
  description: string;
  maxTokens: number;
  trainingData: string;
};

export type completionAPIProps = {
  model: modelType;
  maxToken: number;
  prompt: string;
  suffix: string;
  temperature: number;
  top_p: number;
  stop: string;

  apiKeyError: string;
  maxTokenError: string;
};

export type chatCompletionAPIProps = {
  model: modelType;
  messages: ChatCompletionMessageParam[];

  apiKeyError: string;
};

export type completionAPIPropsKeys = keyof completionAPIProps;

export type completionAPIHandleArgType = {
  key: completionAPIPropsKeys;
  value: string | modelType | number;
};

export type completionAPIHandleChangeType = (
  changes: completionAPIHandleArgType[],
) => void;

export type chatCompletionAPIPropsKeys = keyof chatCompletionAPIProps;

export type chatCompletionAPIHandleArgType = {
  key: chatCompletionAPIPropsKeys;
  value: string | modelType | number | ChatCompletionMessageParam[];
};

export type chatCompletionAPIHandleChangeType = (
  changes: chatCompletionAPIHandleArgType[],
) => void;
