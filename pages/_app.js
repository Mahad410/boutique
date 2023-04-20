import '@/styles/globals.css';
import Layout from "@/pages/components/Layout";
import {StateProvider} from '@/content/StateContent';
import {Toaster} from 'react-hot-toast';

export default function App({Component, pageProps}) {
    return (

        <StateProvider>
                <Layout>
                    <Toaster/>
                    <Component {...pageProps} />
                </Layout>
        </StateProvider>

    )
}
