import React from 'react'
import Head from 'next/head'

export type AppHeaderProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const AppHeader = (props: AppHeaderProps) => {
  const { title, description, children } = props;

  return (
    <Head>
      <title>{title ? `${title} | AgeCode Profile` : 'AgeCode Profile'}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Musify Music" />
      <meta name="url" content="https://musify-music.vercel.app/" />
      <meta name="og:url" content="https://musify-music.vercel.app/" />
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  )
}

AppHeader.defaultProps = {
  title: '',
  description: '',
}

export default AppHeader