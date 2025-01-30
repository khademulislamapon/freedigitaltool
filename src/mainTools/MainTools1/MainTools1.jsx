import { useState } from 'react';

const MainTools1 = () => {
  const [keyword, setKeyword] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState('');

  const titleTemplates = [
    'How to Master {keyword} in Just 10 Steps!',
    '{keyword} Explained: Everything You Need to Know',
    'Top 5 Tips for Better {keyword}',
    'Learn {keyword} Like a Pro: Ultimate Guide',
    'Boost Your Skills with These {keyword} Strategies',
    'The Ultimate {keyword} Tutorial for Beginners',
    'Master {keyword} Fast: Tips and Tricks',
    'Why {keyword} Is Important and How to Use It Effectively',
    'Secrets to Success in {keyword}: Don\'t Miss Out!',
    'Everything About {keyword} You Wish You Knew Sooner',
  ];

  const generateTitle = (keyword) => {
    if (!keyword) {
      return 'Please enter a keyword to generate a title.';
    }
    const randomTemplate = titleTemplates[Math.floor(Math.random() * titleTemplates.length)];
    return randomTemplate.replace('{keyword}', keyword);
  };

  const handleGenerate = () => {
    setGeneratedTitle(generateTitle(keyword));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-center my-28">
        <h1 className="text-2xl font-bold text-gray-800">YouTube Title Generator</h1>
        <input
          id="keyword"
          placeholder="Enter your keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-4/5 p-2 mt-4 border border-gray-300 rounded"
        />
        <button
          onClick={handleGenerate}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
        >
          Generate Title
        </button>
        <div id="titleOutput" className="mt-5 text-lg font-semibold text-gray-700">
          {generatedTitle}
        </div>
      </div>
    </div>
  );
};

export default MainTools1;

// https://fatjoe.com/
