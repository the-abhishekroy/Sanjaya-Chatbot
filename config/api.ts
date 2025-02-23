export const API_KEY = 'dh-66CCmXY-rT2I4xGYXqr15eQPZWXt4hvkdnpbCC5noVw';

export const API_CONFIG = {
  baseUrl: 'https://api.dhenu.ai/v1',
  defaultModel: 'gpt-3.5-turbo',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
};

export const getApiKey = () => {
  return API_KEY;
};