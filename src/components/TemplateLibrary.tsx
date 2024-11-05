import React, { useState } from 'react';
import { Layout, Search, Copy, CheckCheck } from 'lucide-react';

const TEMPLATES = [
  {
    category: 'Headlines',
    templates: [
      {
        title: 'How-To Template',
        structure: 'How to [Achieve Desired Outcome] in [Timeframe] Without [Pain Point]',
        example: 'How to Write Converting Copy in 7 Days Without Prior Experience'
      },
      {
        title: 'Benefit-Driven Template',
        structure: '[Number] Proven Ways to [Achieve Benefit] and [Bonus Outcome]',
        example: '7 Proven Ways to Double Your Income and Work Less Hours'
      },
      {
        title: 'Problem-Solution Template',
        structure: 'Tired of [Pain Point]? Discover How to [Solution] in [Timeframe]',
        example: 'Tired of Rejection? Discover How to Write Irresistible Proposals in 24 Hours'
      }
    ]
  },
  {
    category: 'Email Subject Lines',
    templates: [
      {
        title: 'Curiosity Gap',
        structure: 'The [Unusual Thing] That [Achieved Result]',
        example: 'The 3-Word Phrase That Doubled Our Sales'
      },
      {
        title: 'Urgent Announcement',
        structure: '[Time-Sensitive Word]: [Benefit] Ends [Timeframe]',
        example: 'URGENT: 50% Off Copywriting Course Ends Tonight'
      }
    ]
  },
  {
    category: 'Sales Pages',
    templates: [
      {
        title: 'Problem-Agitate-Solution',
        structure: '[Identify Problem]\n[Agitate Pain Points]\n[Present Solution]',
        example: 'Struggling to land clients?\nEvery rejection feels like a step backward...\nIntroducing our Client Acquisition Blueprint'
      },
      {
        title: 'Feature-Benefit-Proof',
        structure: '[Feature Description]\n[Benefit to User]\n[Proof/Testimonial]',
        example: 'AI-Powered Analysis\nGet instant feedback on your copy\n"Improved my conversion rate by 47%" - John D.'
      }
    ]
  }
];

export default function TemplateLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('Headlines');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTemplate(text);
    setTimeout(() => setCopiedTemplate(null), 2000);
  };

  const filteredTemplates = TEMPLATES.find(cat => cat.category === selectedCategory)?.templates.filter(
    template => 
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.example.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
      <div className="flex items-center mb-6">
        <Layout className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold">Copy Template Library</h3>
      </div>

      <div className="mb-6">
        <div className="flex items-center bg-gray-50 rounded-lg p-2">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search templates..."
            className="bg-transparent border-none focus:ring-0 flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {TEMPLATES.map(category => (
          <button
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category.category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredTemplates?.map((template, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-semibold">{template.title}</h4>
              <button
                onClick={() => copyToClipboard(template.structure)}
                className="text-blue-600 hover:text-blue-700"
              >
                {copiedTemplate === template.structure ? (
                  <CheckCheck className="h-5 w-5" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Structure:</p>
                <p className="text-gray-700 whitespace-pre-line">{template.structure}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Example:</p>
                <p className="text-gray-700">{template.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}