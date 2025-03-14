
import React, { ReactNode } from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
