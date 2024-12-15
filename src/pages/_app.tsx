import '../styles/globals.css';
import { WagmiConfig, createClient, configureChains, sepolia } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

// Configure the chains, explicitly setting Sepolia as the testnet
const { chains, provider, webSocketProvider } = configureChains(
  [sepolia],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <MantineProvider withNormalizeCSS>
        <Notifications />
        <Component {...pageProps} />
      </MantineProvider>
    </WagmiConfig>
  );
}
