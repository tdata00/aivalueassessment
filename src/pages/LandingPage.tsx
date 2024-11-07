import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Phone, Workflow } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !name) {
      setError('Please fill in all fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.eu2.make.com/hh5h687fve7prhm2im6lfajnn2nk2w7x', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      navigate('/assessment', { state: { name } });
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-[#15ae75]" />,
      title: 'AI Chatbots',
      description: 'Enhance business support with intelligent, 24/7 virtual assistants.'
    },
    {
      icon: <Phone className="w-8 h-8 text-[#15ae75]" />,
      title: 'Voice Agents',
      description: 'Implement voice-activated solutions for seamless, hands-free interactions.'
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#15ae75]" />,
      title: 'Workflow Automation',
      description: 'Streamline operations with AI-powered process optimization.'
    }
  ];

  const testimonials = [
    {
      quote: "The AI audit revealed potential savings of over $100,000 per year for my business. I'm amazed!",
      author: "Sarah Johnson, CEO"
    },
    {
      quote: "After implementing AI solutions, our customer engagement improved by 40% and no-shows decreased significantly.",
      author: "Michael Chen, Operations Director"
    }
  ];

  const benefits = [
    {
      icon: "📈",
      title: "Boost Revenue",
      description: "Increase your business revenue by 16-20% in the first year with AI-powered customer engagement."
    },
    {
      icon: "📅",
      title: "Reduce No-Shows",
      description: "Cut down no-show rates by up to 30% with AI-powered appointment reminders."
    },
    {
      icon: "⚡",
      title: "Save Time",
      description: "Automate up to 60-95% of repetitive tasks, allowing your staff to focus on core business."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
            AI Value Assessment Tool for Small Businesses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Unlock the future of your business with AI-powered solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get Your Free AI Audit
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Discover how AI can revolutionize your business operations. Our cutting-edge AI Value Assessment Tool analyzes your business needs and recommends tailored AI solutions to boost efficiency and revenue.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#15ae75] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#15ae75] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#15ae75] hover:bg-[#15ae75]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Get my AI Value Assessment</span>
                    <span className="text-xl">→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            What Business Leaders Are Saying
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-[#15ae75] font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Unlock Your Business's Potential
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};