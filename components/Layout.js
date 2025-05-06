import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Layout({ children, title = 'Bhekumusa Eric Ntshwenya | Portfolio' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
