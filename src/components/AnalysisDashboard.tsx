
import { useState, useEffect } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Lock, 
  Zap, 
  Globe,
  FileText,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface AnalysisData {
  fileName: string;
  fileSize: string;
  riskLevel: 'low' | 'medium' | 'high';
  riskScore: number;
  features: {
    ephemeralOverlay: boolean;
    uiFlowMismatch: boolean;
    batteryPermissionAbuse: boolean;
    dualSidedProtection: boolean;
    ecosystemFraud: boolean;
  };
  details: {
    packageName: string;
    version: string;
    permissions: string[];
    certificates: string[];
    analysisTime: string;
  };
}

interface AnalysisDashboardProps {
  file: File;
  onReset: () => void;
}

const AnalysisDashboard = ({ file, onReset }: AnalysisDashboardProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);

  useEffect(() => {
    // Simulate analysis process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          
          // Generate mock analysis data
          const mockData: AnalysisData = {
            fileName: file.name,
            fileSize: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
            riskLevel: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low',
            riskScore: Math.floor(Math.random() * 100),
            features: {
              ephemeralOverlay: Math.random() > 0.6,
              uiFlowMismatch: Math.random() > 0.7,
              batteryPermissionAbuse: Math.random() > 0.8,
              dualSidedProtection: Math.random() > 0.3,
              ecosystemFraud: Math.random() > 0.5,
            },
            details: {
              packageName: 'com.example.banking.app',
              version: '2.1.0',
              permissions: ['CAMERA', 'LOCATION', 'SMS', 'CONTACTS', 'STORAGE'],
              certificates: ['SHA-256: a1b2c3...', 'MD5: x1y2z3...'],
              analysisTime: new Date().toLocaleString(),
            }
          };
          
          setAnalysisData(mockData);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [file]);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-amber-400';
      case 'high': return 'text-red-400';
      default: return 'text-foreground/70';
    }
  };

  const getRiskBadgeClass = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'high': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-foreground/70';
    }
  };

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8 fade-in">
          <Zap className="w-16 h-16 text-brand-primary mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-3xl font-bold mb-4">Analyzing APK...</h2>
          <p className="text-foreground/70 mb-8">
            Running comprehensive security checks on {file.name}
          </p>
          
          <div className="w-full max-w-md mx-auto">
            <Progress value={progress} className="h-3 mb-4" />
            <p className="text-sm text-foreground/50">{progress}% Complete</p>
          </div>
        </div>
      </div>
    );
  }

  if (!analysisData) return null;

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-2">Security Analysis Report</h1>
            <p className="text-foreground/70">Comprehensive APK security assessment completed</p>
          </div>
          <Button 
            onClick={onReset}
            variant="outline"
            className="mt-4 md:mt-0"
          >
            Analyze Another APK
          </Button>
        </div>

        {/* Risk Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="security-card lg:col-span-2 scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                File Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-foreground/70">File Name</p>
                  <p className="font-mono text-sm">{analysisData.fileName}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">File Size</p>
                  <p className="font-mono text-sm">{analysisData.fileSize}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Package Name</p>
                  <p className="font-mono text-sm">{analysisData.details.packageName}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Version</p>
                  <p className="font-mono text-sm">{analysisData.details.version}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={`security-card ${analysisData.riskLevel === 'high' ? 'security-card-danger' : analysisData.riskLevel === 'medium' ? 'security-card-warning' : 'security-card-safe'} scale-in`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold ${getRiskColor(analysisData.riskLevel)} mb-2`}>
                  {analysisData.riskScore}%
                </div>
                <div className={`inline-flex px-4 py-2 rounded-full border text-sm font-semibold ${getRiskBadgeClass(analysisData.riskLevel)}`}>
                  {analysisData.riskLevel.toUpperCase()} RISK
                </div>
                <div className="mt-4">
                  <div className={`risk-meter`}>
                    <div 
                      className={`risk-meter-fill ${analysisData.riskLevel === 'high' ? 'risk-high' : analysisData.riskLevel === 'medium' ? 'risk-medium' : 'risk-low'}`}
                      style={{ width: `${analysisData.riskScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Features Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className={`security-card ${analysisData.features.ephemeralOverlay ? 'security-card-danger' : 'security-card-safe'} slide-up`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="w-6 h-6" />
                Ephemeral Overlay Tracing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                {analysisData.features.ephemeralOverlay ? (
                  <XCircle className="w-8 h-8 text-red-400" />
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-400" />
                )}
                <span className={`font-semibold ${analysisData.features.ephemeralOverlay ? 'text-red-400' : 'text-green-400'}`}>
                  {analysisData.features.ephemeralOverlay ? 'DETECTED' : 'CLEAN'}
                </span>
              </div>
              <p className="text-sm text-foreground/70">
                Detects short-lived fake overlays that appear for milliseconds (stealing OTPs)
              </p>
            </CardContent>
          </Card>

          <Card className={`security-card ${analysisData.features.uiFlowMismatch ? 'security-card-danger' : 'security-card-safe'} slide-up`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6" />
                UI Flow Mismatch Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                {analysisData.features.uiFlowMismatch ? (
                  <XCircle className="w-8 h-8 text-red-400" />
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-400" />
                )}
                <span className={`font-semibold ${analysisData.features.uiFlowMismatch ? 'text-red-400' : 'text-green-400'}`}>
                  {analysisData.features.uiFlowMismatch ? 'DETECTED' : 'CLEAN'}
                </span>
              </div>
              <p className="text-sm text-foreground/70">
                Compares real banking app UI flows vs. suspicious apps
              </p>
            </CardContent>
          </Card>

          <Card className={`security-card ${analysisData.features.batteryPermissionAbuse ? 'security-card-danger' : 'security-card-safe'} slide-up`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lock className="w-6 h-6" />
                Battery & Permission Abuse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                {analysisData.features.batteryPermissionAbuse ? (
                  <XCircle className="w-8 h-8 text-red-400" />
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-400" />
                )}
                <span className={`font-semibold ${analysisData.features.batteryPermissionAbuse ? 'text-red-400' : 'text-green-400'}`}>
                  {analysisData.features.batteryPermissionAbuse ? 'DETECTED' : 'CLEAN'}
                </span>
              </div>
              <p className="text-sm text-foreground/70">
                Flags hidden background services via unusual power drain
              </p>
            </CardContent>
          </Card>

          <Card className={`security-card ${analysisData.features.dualSidedProtection ? 'security-card-safe' : 'security-card-warning'} slide-up`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Dual-Sided Protection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                {analysisData.features.dualSidedProtection ? (
                  <CheckCircle className="w-8 h-8 text-green-400" />
                ) : (
                  <AlertTriangle className="w-8 h-8 text-amber-400" />
                )}
                <span className={`font-semibold ${analysisData.features.dualSidedProtection ? 'text-green-400' : 'text-amber-400'}`}>
                  {analysisData.features.dualSidedProtection ? 'ENABLED' : 'LIMITED'}
                </span>
              </div>
              <p className="text-sm text-foreground/70">
                Users → One-click scan, install-time blocking, lightweight app
              </p>
            </CardContent>
          </Card>

          <Card className={`security-card ${analysisData.features.ecosystemFraud ? 'security-card-danger' : 'security-card-safe'} slide-up`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Globe className="w-6 h-6" />
                Ecosystem-Level Fraud Prevention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                {analysisData.features.ecosystemFraud ? (
                  <XCircle className="w-8 h-8 text-red-400" />
                ) : (
                  <CheckCircle className="w-8 h-8 text-green-400" />
                )}
                <span className={`font-semibold ${analysisData.features.ecosystemFraud ? 'text-red-400' : 'text-green-400'}`}>
                  {analysisData.features.ecosystemFraud ? 'DETECTED' : 'CLEAN'}
                </span>
              </div>
              <p className="text-sm text-foreground/70">
                Goes beyond single-user protection helps banks reduce fraud across the entire ecosystem
              </p>
            </CardContent>
          </Card>

          <Card className="security-card slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Analysis Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-foreground/70">Analysis Time</p>
                  <p className="font-mono text-sm">{analysisData.details.analysisTime}</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Permissions</p>
                  <p className="text-sm">{analysisData.details.permissions.length} permissions found</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Certificates</p>
                  <p className="text-sm">{analysisData.details.certificates.length} certificates analyzed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <Card className={`security-card ${analysisData.riskLevel === 'high' ? 'security-card-danger' : analysisData.riskLevel === 'medium' ? 'security-card-warning' : 'security-card-safe'} scale-in`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              Security Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6">
              <h3 className={`text-2xl font-bold mb-4 ${getRiskColor(analysisData.riskLevel)}`}>
                {analysisData.riskLevel === 'high' 
                  ? 'HIGH RISK - POTENTIALLY MALICIOUS APK' 
                  : analysisData.riskLevel === 'medium' 
                  ? 'MEDIUM RISK - SUSPICIOUS ACTIVITIES DETECTED'
                  : 'LOW RISK - APK APPEARS SAFE'
                }
              </h3>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                {analysisData.riskLevel === 'high' 
                  ? 'This APK shows multiple indicators of malicious behavior. We strongly recommend NOT installing this application as it may compromise your device security and steal sensitive banking information.'
                  : analysisData.riskLevel === 'medium' 
                  ? 'This APK shows some concerning behaviors that warrant caution. Please verify the source and consider the risks before installation.'
                  : 'This APK passed our security checks and appears to be legitimate. However, always ensure you download apps from official sources.'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisDashboard;
