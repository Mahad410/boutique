import '@/styles/globals.css';
import Layout from "@/pages/components/Layout";
import {StateProvider} from '@/content/StateContent';
import {Toaster} from 'react-hot-toast';
import SanityProvider from '@/lib/SanityProvider';
export default function App({Component, pageProps}) {
    return (

            <StateProvider>
                <SanityProvider>
                <Layout>
                    <Toaster/>
                    <Component {...pageProps} />
                </Layout>
                </SanityProvider>
            </StateProvider>

    )
}
