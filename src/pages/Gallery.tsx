import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

import GalleryImages from '@/components/GalleryImages';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <GalleryImages/>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
