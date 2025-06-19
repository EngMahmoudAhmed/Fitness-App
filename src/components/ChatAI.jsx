import { useState } from 'react';
import { Mic, Sun, Trash2, Send } from 'lucide-react';

export default function ChatAI() {
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Hello,sir\nHow can I help you with your fitness?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    {
      title: 'Design a daily exercise plan',
      subtitle: 'Exercises to burn fat.',
      icon: '🏃‍♂️'
    },
    {
      title: 'Do I need to take supplements while dieting 2025?',
      subtitle: '',
      icon: '💊'
    },
    {
      title: 'How can I improve my flexibility?',
      subtitle: '',
      icon: '🧘‍♂️'
    },
    {
      title: 'Suggestion for you the best daily health regimen?',
      subtitle: '',
      icon: '🌟'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: inputMessage }]);
    setInputMessage('');
    // Here you would typically make an API call to your AI service
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Chat Messages */}
        <div className="space-y-6 mb-8">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.type === 'user' ? (
                <div className="bg-teal-600 rounded-lg p-4 max-w-[80%]">
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-lg p-4 max-w-[80%]">
                  <p className="whitespace-pre-line">{message.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 text-left transition-all duration-200 hover:shadow-lg border border-gray-700 hover:border-teal-500 group"
                onClick={() => {
                  setMessages(prev => [...prev, { type: 'user', content: action.title }]);
                }}
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{action.icon}</span>
                  <div>
                    <p className="font-medium">{action.title}</p>
                    {action.subtitle && (
                      <p className="text-sm text-gray-400">{action.subtitle}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSendMessage} className="relative">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask AI ?"
            className="w-full bg-gray-800 rounded-lg pl-4 pr-32 py-4 focus:outline-none focus:ring-2 focus:ring-teal-500 border border-gray-700"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-2">
            <button
              type="button"
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              title="Voice input"
            >
              <Mic size={20} />
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              title="Clear chat"
              onClick={() => setMessages([messages[0]])}
            >
              <Trash2 size={20} />
            </button>
            <button
              type="button"
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              title="Toggle theme"
            >
              <Sun size={20} />
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          AI can make mistakes, so double-check it.
        </p>
      </div>
    </div>
  );
}