
import { useState } from 'react';
import Hero from '@/components/Hero';
import AnalysisDashboard from '@/components/AnalysisDashboard';
import Footer from '@/components/Footer';

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    console.log('File uploaded:', file.name, file.size);
    setUploadedFile(file);
  };

  const handleReset = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen">
      {!uploadedFile ? (
        <>
          <Hero onFileUpload={handleFileUpload} />
          <Footer />
        </>
      ) : (
        <>
          <AnalysisDashboard file={uploadedFile} onReset={handleReset} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
