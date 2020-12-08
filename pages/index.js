import Head from 'next/head';
import Layout from '../layouts/Layout';


export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Class Control v.1</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <h1 className="ml-2">Aqui hi va la info i ya no queda tallada</h1>
      </Layout>
    </div>
  )
}
