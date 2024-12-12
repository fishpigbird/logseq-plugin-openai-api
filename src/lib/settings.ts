import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin";
import { DalleImageSize, OpenAIOptions } from "./openai";

interface PluginOptions extends OpenAIOptions {
  injectPrefix?: string;
}

export const settingsSchema: SettingSchemaDesc[] = [
  {
    key: "openAIKey",
    type: "string",
    default: "",
    title: "OpenAI API Key",
    description:
      "Your OpenAI API key. You can get one at https://beta.openai.com",
  },
  {
    key: "openAICompletionEngine",
    type: "string",
    default: "gemini-2.0-flash-exp",
    title: "OpenAI Completion Engine",
    description: "Gemini yyds！",
  },
  {
    key: "chatCompletionEndpoint",
    type: "string",
    default: "https://api.openai.com/v1",
    title: "OpenAI API Completion Endpoint",
    description:
      "https://api.openai.com/v1",
  },
  {
    key: "chatPrompt",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "chatPromptH",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "chatPromptG",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "chatPromptT",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "chatPromptY",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "chatPromptU",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "chatPromptI",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "chatPromptO",
    type: "string",
    default:
      "Do not refer to yourself in your answers. Do not say as an AI language model...",
    title: "OpenAI Chat Prompt",
    description:
      "have fun",
  },
  {
    key: "openAITemperature",
    type: "number",
    default: 1.0,
    title: "OpenAI Temperature",
    description:
      "The temperature controls how much randomness is in the output.<br/>" +
      "You can set a different temperature in your own prompt templates by adding a 'prompt-template' property to the block.",
  },
  {
    key: "openAIMaxTokens",
    type: "number",
    default: 1000,
    title: "OpenAI Max Tokens",
    description:
      "The maximum amount of tokens to generate. Tokens can be words or just chunks of characters. The number of tokens processed in a given API request depends on the length of both your inputs and outputs. As a rough rule of thumb, 1 token is approximately 4 characters or 0.75 words for English text. One limitation to keep in mind is that your text prompt and generated completion combined must be no more than the model's maximum context length (for most models this is 2048 tokens, or about 1500 words).",
  },
  {
    key: "injectPrefix",
    type: "string",
    default: "",
    title: "Output prefix",
    description:
      "Prepends the output with this string. Such as a tag like [[gpt3]] or markdown like > to blockquote. Add a space at the end if you want a space between the prefix and the output or \\n for a linebreak.",
  },
  {
    key: "dalleImageSize",
    type: "string",
    default: "1024",
    title: "DALL-E Image Size",
    description:
      "Size of the image to generate. Can be 256, 512, or 1024 for dall-e-2;  Must be one of 1024x1024 , 1792x1024 , or 1024x1792 for dall-e-3 models.",
  },
  {
    key: "dalleModel",
    type: "string",
    default: "dall-e-3",
    title: "DALL-E Model",
    description: "The DALL-E model to use. Can be dall-e-2 or dall-e-3.",
  },
  {
    key: "dalleStyle",
    type: "string",
    default: "vivid",
    title: "Style",
    description:
      "The style of the generated images. Must be one of vivid or natural. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images.",
  },
  {
    key: "dalleQuality",
    type: "string",
    default: "standard",
    title: "Quality",
    description:
      "The quality of the image that will be generated. ‘hd’ creates images with finer details and greater consistency across the image. Defaults to ‘standard’.",
  },
  {
    key: "shortcutBlock",
    type: "string",
    default: "mod+j",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "shortcutBlockG",
    type: "string",
    default: "mod+g",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "shortcutBlockH",
    type: "string",
    default: "mod+h",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "shortcutBlockT",
    type: "string",
    default: "mod+t",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "shortcutBlockY",
    type: "string",
    default: "mod+y",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "shortcutBlockU",
    type: "string",
    default: "mod+u",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "shortcutBlockI",
    type: "string",
    default: "mod+i",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "shortcutBlockO",
    type: "string",
    default: "mod+o",
    title: "Keyboard Shortcut for /gpt-block",
    description: "",
  },
  {
    key: "popupShortcut",
    type: "string",
    default: "mod+shift+g",
    title: "Keyboard Shortcut for /gpt popup",
    description: "",
  },
];

function unescapeNewlines(s: string) {
  return s.replace(/\\n/g, "\n");
}
//fix3
export function getOpenaiSettings(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPrompt"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}

export function getOpenaiSettingsH(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPromptH"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}



export function getOpenaiSettingsG(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPromptG"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}


export function getOpenaiSettingsT(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPromptT"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}
export function getOpenaiSettingsY(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPromptY"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}
export function getOpenaiSettingsU(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPromptU"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}
export function getOpenaiSettingsI(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPromptI"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}
export function getOpenaiSettingsO(): PluginOptions {
  const apiKey = logseq.settings!["openAIKey"];
  const completionEngine = logseq.settings!["openAICompletionEngine"];
  const injectPrefix = unescapeNewlines(logseq.settings!["injectPrefix"]);
  const temperature = Number.parseFloat(logseq.settings!["openAITemperature"]);
  const maxTokens = Number.parseInt(logseq.settings!["openAIMaxTokens"]);
  const dalleImageSize = logseq.settings!["dalleImageSize"] as DalleImageSize;
  const dalleModel = logseq.settings!["dalleModel"];
  const dalleStyle = logseq.settings!["dalleStyle"];
  const dalleQuality = logseq.settings!["dalleQuality"];
  const chatPrompt = logseq.settings!["chatPromptO"];
  const completionEndpoint = logseq.settings!["chatCompletionEndpoint"];
  return {
    apiKey,
    completionEngine,
    temperature,
    maxTokens,
    dalleImageSize,
    dalleModel,
    dalleQuality,
    dalleStyle,
    injectPrefix,
    chatPrompt,
    completionEndpoint,
  };
}
