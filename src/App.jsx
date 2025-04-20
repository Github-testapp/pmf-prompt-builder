// src/App.jsx - Improved container and header
import React from 'react';
import './App.css';
import PMFApp from './components/PMFApp';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-5xl mx-auto p-6">
                <header className="text-center mb-8 pt-8">
                    <h1 className="text-3xl font-bold text-blue-800">PMF法プロンプトビルダー</h1>
                    <p className="text-gray-600 mt-2">AIとのコミュニケーションを最適化するプロンプト設計ツール</p>
                </header>
                <PMFApp />
            </div>
        </div>
    );
}

export default App;