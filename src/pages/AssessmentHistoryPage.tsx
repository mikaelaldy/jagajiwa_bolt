import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { Card, CardBody, CardHeader, CardFooter } from '../components/ui/Card';
import { Button, LinkButton } from '../components/ui/Button';
import { getAssessmentResults, deleteAssessmentResult } from '../utils/storage';
import { AssessmentResult } from '../types';
import { ListChecks, ArrowRight, Trash2 } from 'lucide-react';

const AssessmentHistoryPage: React.FC = () => {
  const [results, setResults] = useState<AssessmentResult[]>([]);

  useEffect(() => {
    setResults(getAssessmentResults().sort((a, b) => b.timestamp - a.timestamp)); // Show newest first
  }, []);

  const handleDelete = (timestamp: number) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus hasil assessment ini?')) {
      deleteAssessmentResult(timestamp);
      setResults(prevResults => prevResults.filter(result => result.timestamp !== timestamp));
    }
  };

  const getRiskColor = (risk: 'low' | 'moderate' | 'high') => {
    switch (risk) {
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

  const getRiskLabel = (risk: 'low' | 'moderate' | 'high') => {
    switch (risk) {
      case 'low': return 'Risiko Rendah';
      case 'moderate': return 'Risiko Sedang';
      case 'high': return 'Risiko Tinggi';
      default: return '';
    }
  };

 const getCategoryLabel = (category: 'gambling' | 'mental-health') => {
    switch (category) {
      case 'gambling': return 'Perjudian Online';
      case 'mental-health': return 'Kesehatan Mental';
      default: return '';
    }
  };

  return (
    <AppLayout>
      <div className="container py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Riwayat Tes Kesehatan Mental</h1>
            <LinkButton to="/assessment" variant="outline" icon={<ListChecks className="w-4 h-4 mr-1" />}>
              Mulai Assessment Baru
            </LinkButton>
          </div>

          {results.length === 0 ? (
            <Card>
              <CardBody className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">Pantau hasil dan perkembangan kondisimu dari waktu ke waktu.</p>
                <LinkButton to="/assessment" icon={<ArrowRight className="w-5 h-5" />}>
                  Ambil Assessment Pertama Anda
                </LinkButton>
              </CardBody>
            </Card>
          ) : (
            <div className="space-y-6">
              {results.map((result) => (
                <Card key={result.timestamp} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-gray-800">
                        Assessment {getCategoryLabel(result.category)}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(result.risk)}`}>
                        {getRiskLabel(result.risk)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(result.timestamp).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                      })}
                    </p>
                  </CardHeader>
                  <CardBody>
                    <div className="mb-3">
                      <p className="text-gray-700"><span className="font-medium">Skor Anda:</span> {result.score}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Rekomendasi:</h4>
                      <p className="text-gray-700 leading-relaxed">{result.recommendation}</p>
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(result.timestamp)}
                      className="text-error-600 hover:bg-error-50 hover:text-error-700"
                      icon={<Trash2 className="w-4 h-4"/>}
                    >
                      Hapus
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default AssessmentHistoryPage; 