// pages/index.tsx or App.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[8rem] px-4 sm:px-6 lg:px-8 space-y-24">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
