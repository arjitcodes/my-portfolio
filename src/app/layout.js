
import ProviderBody from '@/components/ProviderBody'
import './globals.css'


export const metadata = {
  title: 'Arjit - Web devloper',
  description: 'Protfolio website of Arjit , Arjit is a fullstack web devloper .',
  icons: {
    icon: '/icon.png',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth snap-y snap-mandatory'>

      <body className=''>
        <ProviderBody >{children}</ProviderBody>
      </body>
    </html>
  )
}
