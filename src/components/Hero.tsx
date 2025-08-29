
import { useState } from 'react';
import { Upload, Shield, Scan, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HeroProps {
  onFileUpload: (file: File) => void;
}

const Hero = ({ onFileUpload }: HeroProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const apkFile = files.find(file => file.name.endsWith('.apk'));
    
    if (apkFile) {
      onFileUpload(apkFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith('.apk')) {
      onFileUpload(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center mb-16 fade-in">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Shield className="w-12 h-12 text-brand-primary" />
          <h1 className="hero-title">SurakshaCheck</h1>
        </div>
        <p className="hero-subtitle max-w-2xl mx-auto mb-8">
          Advanced APK Security Analysis Platform - Detect fake banking apps with AI-powered threat intelligence
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70 mb-12">
          <div className="flex items-center gap-2">
            <Scan className="w-4 h-4 text-brand-secondary" />
            <span>Real-time Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Threat Detection</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span>Banking Security</span>
          </div>
        </div>
      </div>

      <Card className="w-full max-w-2xl scale-in">
        <div
          className={`upload-zone ${isDragging ? 'dragover' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Upload APK File</h3>
          <p className="text-foreground/70 mb-8">
            Drag & drop your APK file here or click to browse
          </p>
          
          <input
            type="file"
            accept=".apk"
            onChange={handleFileSelect}
            className="hidden"
            id="apk-upload"
          />
          
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl"
          >
            <label htmlFor="apk-upload" className="cursor-pointer">
              Select APK File
            </label>
          </Button>
          
          <p className="text-sm text-foreground/50 mt-4">
            Maximum file size: 100MB • Supported format: .apk
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
