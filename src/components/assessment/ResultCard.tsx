import React from 'react';
import { AssessmentResult } from '../../types';
import { Card, CardBody, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface ResultCardProps {
  result: AssessmentResult;
  onClose: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, onClose }) => {
  const date = new Date(result.timestamp).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const getRiskIcon = () => {
    switch (result.risk) {
      case 'low':
        return <CheckCircle className="w-16 h-16 text-success-500 mb-4" />;
      case 'moderate':
        return <AlertTriangle className="w-16 h-16 text-warning-500 mb-4" />;
      case 'high':
        return <AlertCircle className="w-16 h-16 text-error-500 mb-4" />;
      default:
        return null;
    }
  };

  const getRiskColor = () => {
    switch (result.risk) {
      case 'low':
        return 'text-success-600 bg-success-50 border-success-100';
      case 'moderate':
        return 'text-warning-600 bg-warning-50 border-warning-100';
      case 'high':
        return 'text-error-600 bg-error-50 border-error-100';
      default:
        return '';
    }
  };

  const getRiskLabel = () => {
    switch (result.risk) {
      case 'low':
        return 'Risiko Rendah';
      case 'moderate':
        return 'Risiko Sedang';
      case 'high':
        return 'Risiko Tinggi';
      default:
        return '';
    }
  };

  const getCategoryLabel = () => {
    switch (result.category) {
      case 'gambling':
        return 'Perjudian Online';
      case 'mental-health':
        return 'Kesehatan Mental';
      default:
        return '';
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardBody className="text-center py-8">
        <p className="text-sm text-gray-500 mb-4">Hasil Assessment {getCategoryLabel()} • {date}</p>
        <div className="flex justify-center">{getRiskIcon()}</div>
        <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${getRiskColor()} mb-6`}>
          {getRiskLabel()}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skor Anda: {result.score}</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className={`h-2.5 rounded-full ${
              result.risk === 'low'
                ? 'bg-success-500'
                : result.risk === 'moderate'
                ? 'bg-warning-500'
                : 'bg-error-500'
            }`}
            style={{ width: `${(result.score / (result.category === 'gambling' ? 32 : 24)) * 100}%` }}
          ></div>
        </div>
        <div className="text-left p-4 rounded-lg bg-gray-50 border border-gray-100 mb-6">
          <h3 className="font-medium text-gray-800 mb-2">Rekomendasi:</h3>
          <p className="text-gray-700">{result.recommendation}</p>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onClose}>
          Kembali
        </Button>
        <Button 
          variant="primary"
          onClick={onClose}
        >
          Selesai
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;