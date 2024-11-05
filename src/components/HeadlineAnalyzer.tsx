import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, PenTool } from 'lucide-react';

const POWER_WORDS = [
  'exclusive', 'guaranteed', 'incredible', 'revolutionary', 'secret', 'proven',
  'instant', 'powerful', 'ultimate', 'essential', 'premium', 'professional',
  'transform', 'unlock', 'master', 'discover', 'breakthrough', 'limited'
];

const EMOTIONAL_TRIGGERS = [
  'success', 'fear', 'trust', 'belonging', 'curiosity', 'urgency',
  'value', 'instant', 'safe', 'proven', 'easy', 'health', 'money'
];

export default function HeadlineAnalyzer() {
  const [headline, setHeadline] = useState('');
  const [analysis, setAnalysis] = useState<any>(null);

  const analyzeHeadline = () => {
    const words = headline.toLowerCase().split(' ');
    const powerWordsFound = words.filter(word => POWER_WORDS.includes(word));
    const emotionalTriggersFound = words.filter(word => EMOTIONAL_TRIGGERS.includes(word));
    
    const lengthScore = headline.length >= 40 && headline.length <= 60 ? 100 : 
      headline.length < 40 ? Math.round((headline.length / 40) * 100) :
      Math.round((60 / headline.length) * 100);

    const powerWordScore = Math.min(100, (powerWordsFound.length / 2) * 100);
    const emotionalScore = Math.min(100, (emotionalTriggersFound.length / 2) * 100);
    
    const overallScore = Math.round((lengthScore + powerWordScore + emotionalScore) / 3);

    setAnalysis({
      overallScore,
      lengthScore,
      powerWordScore,
      emotionalScore,
      powerWordsFound,
      emotionalTriggersFound,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
      <div className="flex items-center mb-6">
        <PenTool className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold">Headline Analyzer</h3>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enter your headline:
        </label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="e.g., Discover the Secrets to Writing High-Converting Copy"
        />
        <button
          onClick={analyzeHeadline}
          className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Analyze Headline
        </button>
      </div>

      {analysis && (
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block rounded-full bg-blue-50 p-4 mb-2">
              <span className="text-4xl font-bold text-blue-600">{analysis.overallScore}%</span>
            </div>
            <p className="text-gray-600">Overall Score</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-700 mb-1">{analysis.lengthScore}%</div>
              <p className="text-sm text-gray-600">Length</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-700 mb-1">{analysis.powerWordScore}%</div>
              <p className="text-sm text-gray-600">Power Words</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-700 mb-1">{analysis.emotionalScore}%</div>
              <p className="text-sm text-gray-600">Emotional Impact</p>
            </div>
          </div>

          <div className="space-y-4">
            {analysis.powerWordsFound.length > 0 && (
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <div>
                  <p className="font-medium">Power words found:</p>
                  <p className="text-gray-600">{analysis.powerWordsFound.join(', ')}</p>
                </div>
              </div>
            )}
            {analysis.emotionalTriggersFound.length > 0 && (
              <div className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <div>
                  <p className="font-medium">Emotional triggers found:</p>
                  <p className="text-gray-600">{analysis.emotionalTriggersFound.join(', ')}</p>
                </div>
              </div>
            )}
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-blue-500 mr-2 mt-1" />
              <div>
                <p className="font-medium">Optimization tips:</p>
                <ul className="text-gray-600 list-disc list-inside">
                  {headline.length < 40 && <li>Try making your headline longer (40-60 characters ideal)</li>}
                  {headline.length > 60 && <li>Consider shortening your headline (40-60 characters ideal)</li>}
                  {analysis.powerWordScore < 50 && <li>Add more power words to increase impact</li>}
                  {analysis.emotionalScore < 50 && <li>Include emotional triggers to engage readers</li>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}