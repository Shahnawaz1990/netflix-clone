import type { AppProps } from 'next/app'
import '../styles/globals.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


/*
  for prisma
npm install -D prisma
npx prisma init
npm install @prisma/client

npx prisma db push
npm install next-auth
npm install bcrypt
npm i -D @types/bcrypt
npm i axios
npm install react-icons
npm install @next-auth/prisma-adapter
npm install swr
npm install lodash
npm install -D @types/lodash
npm install zustand

test@gmail.com
test123
*/