import Layout from '../components/layout/layout'
import React from 'react';
import '../styles/toc.css'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';


export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ChakraProvider>
  );
}