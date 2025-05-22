import React from 'react';
import { Question } from '../../types';
import { Card, CardBody } from '../ui/Card';
import { Radio } from '../ui/Input';

interface QuestionCardProps {
  question: Question;
  selectedValue: number | null;
  onSelect: (value: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedValue,
  onSelect,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(Number(e.target.value));
  };

  return (
    <Card className="mb-6">
      <CardBody>
        <h3 className="text-lg font-medium text-gray-800 mb-4">{question.text}</h3>
        <div className="space-y-2">
          {question.options.map((option) => (
            <Radio
              key={option.value}
              id={`q${question.id}-o${option.value}`}
              name={`question-${question.id}`}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              label={option.label}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default QuestionCard;