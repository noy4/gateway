import { ProviderAPIConfig } from '../types';

const SambaNovaAPIConfig: ProviderAPIConfig = {
  getBaseURL: ({ providerOptions }) =>
    providerOptions.customHost || 'https://fast-api.snova.ai',
  headers: ({ providerOptions }) => {
    return { Authorization: `Basic ${providerOptions.apiKey}` };
  },
  getEndpoint: ({ fn }) => {
    switch (fn) {
      case 'chatComplete':
        return '/v1/chat/completions';
      default:
        return '';
    }
  },
};

export default SambaNovaAPIConfig;
