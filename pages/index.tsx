import Head from "next/head";
import { Body } from "../src/components/layout/body";
import { Layout } from "../src/components/layout/layout";
import { ChildrenProps } from "../src/utils/react/props";

export default function Home() {
  return <Wrapper>
    <Layout>
      <div className="h-6" />
      <Body />
      <div className="h-6" />
    </Layout>
  </Wrapper>
}


function Wrapper(props: ChildrenProps) {

  const { children } = props

  return <>
    <Head>
      <title>Piamias Victor</title>
      <meta name="referrer" content="no-referrer" />
      <meta name="application-name" content="Piamias Victor" />
      <meta
        name="description"
        content="Build to learn, learn to buildy"
      />
      <meta name="color-scheme" content="dark light" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white" />
      <link rel="icon" type="image/svg+xml" href="/Memoji.png" />
      <link rel="alternate icon" href="/Memoji.ico" />
    </Head>
    {children}
  </>
}