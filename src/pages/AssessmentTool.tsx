import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bot, Phone, Calendar, Zap, Workflow } from 'lucide-react';
import { AssessmentSection } from '../components/AssessmentSection';
import { BookingModal } from '../components/BookingModal';
import { AssessmentSection as AssessmentSectionType } from '../types/assessment';
import { calculateSectionValue, calculateMonthlySavings } from '../utils/calculations';

const AssessmentTool: React.FC = () => {
  const location = useLocation();
  const userName = location.state?.name || 'Guest';
  const [sectionValues, setSectionValues] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections: AssessmentSectionType[] = [
    {
      id: 'customerService',
      title: 'Customer Service AI Agent',
      icon: <Bot className="w-6 h-6 text-[#15ae75]" />,
      question: 'What is your current monthly customer service budget?',
      inputType: 'number',
      placeholder: 'Enter amount in $',
      source: 'Industry Statistics',
      citations: [
        {
          text: 'Klarna achieved $40M annual profit improvements',
          url: 'https://www.singlegrain.com/blog/ms/klarna-ai/'
        },
        {
          text: 'Businesses save 30% on support costs',
          url: 'https://adamconnell.me/chatbot-statistics/'
        },
        {
          text: 'Cost per ticket reduced from $40 to $8',
          url: 'https://ai-for.business/ai-case-study-saving-80-on-customer-support-costs-with-generative-ai/'
        }
      ]
    },
    {
      id: 'virtualReceptionist',
      title: 'Virtual Receptionist',
      icon: <Phone className="w-6 h-6 text-[#15ae75]" />,
      question: 'What is your average monthly call volume?',
      inputType: 'number',
      placeholder: 'Enter number of calls',
      source: 'Industry Statistics',
      citations: [
        {
          text: 'Virtual receptionists can handle up to 100 calls simultaneously',
          url: 'https://dialzara.com/blog/what-is-an-ai-virtual-receptionist-and-how-can-it-benefit-your-business/'
        },
        {
          text: 'Business saved $20,000 in lost revenue within 30 days',
          url: 'https://www.reddit.com/r/SideProject/comments/1e2kbdz/i_recreated_an_ai_phone_agent_that_saved_20000_in/'
        },
        {
          text: 'Save up to $250,000 over five years compared to full-time staff',
          url: 'https://dialzara.com/blog/how-much-does-an-ai-virtual-receptionist-cost/'
        }
      ]
    },
    {
      id: 'appointmentSetter',
      title: 'AI Appointment Setter',
      icon: <Calendar className="w-6 h-6 text-[#15ae75]" />,
      question: 'How many leads do you receive monthly?',
      inputType: 'number',
      placeholder: 'Enter number of leads',
      source: 'Industry Statistics',
      citations: [
        {
          text: 'Contact within 5 minutes: 21x more likely to qualify leads',
          url: 'https://www.callpage.io/blog/posts/speed-to-lead'
        },
        {
          text: '381% increase in conversion rates with 10-second response',
          url: 'https://www.trysetter.com/ai-appointment-setter'
        },
        {
          text: '20% increase in bookings and conversions in first week',
          url: 'https://www.reddit.com/r/SideProject/comments/1e2kbdz/i_recreated_an_ai_phone_agent_that_saved_20000_in/'
        }
      ]
    },
    {
      id: 'onboarding',
      title: 'One-Click Onboarding',
      icon: <Zap className="w-6 h-6 text-[#15ae75]" />,
      question: 'How many new clients do you onboard monthly?',
      inputType: 'number',
      placeholder: 'Enter number of clients',
      source: 'Industry Statistics',
      citations: [
        {
          text: 'Reduce onboarding time from 5+ days to 10 minutes',
          url: 'https://qflowbpm.com/process-onboarding/'
        },
        {
          text: '60% year-over-year revenue growth with automated onboarding',
          url: 'https://enboarder.com/blog/employee-engagement-onboarding-stats/'
        },
        {
          text: 'Save up to 20% of salary costs from improved retention',
          url: 'https://enboarder.com/blog/employee-engagement-onboarding-stats/'
        }
      ]
    },
    {
      id: 'workflow',
      title: 'Workflow Automation',
      icon: <Workflow className="w-6 h-6 text-[#15ae75]" />,
      question: 'How many hours are spent monthly on manual workflows?',
      inputType: 'number',
      placeholder: 'Enter hours per month',
      source: 'Industry Statistics',
      citations: [
        {
          text: 'Reduce manual processing time by 70%',
          url: 'https://beslick.com/what-is-ai-workflow-automation/'
        },
        {
          text: 'Minimize error rates by 90%',
          url: 'https://www.pulpstream.com/resources/blog/ai-workflow-automation'
        },
        {
          text: 'Improved decision-making and customer experience',
          url: 'https://www.leewayhertz.com/ai-for-workflow-automation/'
        }
      ]
    }
  ];

  const handleValueChange = (sectionId: string, value: string) => {
    setSectionValues(prev => ({ ...prev, [sectionId]: value }));
  };

  const totalSavings = Object.entries(sectionValues).reduce((total, [sectionId, value]) => {
    return total + calculateMonthlySavings(sectionId, value);
  }, 0);

  const hasAnyValue = Object.values(sectionValues).some(value => value !== '');

  const handleBookAudit = () => {
    window.open('https://tidycal.com/touchdataai/ai-assessment', '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Your AI Value Assessment
        </h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-300">
          Welcome {userName}! Let's calculate your potential savings with AI Implementation.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {sections.slice(0, 3).map(section => (
          <AssessmentSection
            key={section.id}
            section={section}
            value={sectionValues[section.id] || ''}
            onChange={(value) => handleValueChange(section.id, value)}
            result={calculateSectionValue(section.id, sectionValues[section.id] || '')}
            showCitations={!!sectionValues[section.id]}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {sections.slice(3).map(section => (
          <AssessmentSection
            key={section.id}
            section={section}
            value={sectionValues[section.id] || ''}
            onChange={(value) => handleValueChange(section.id, value)}
            result={calculateSectionValue(section.id, sectionValues[section.id] || '')}
            showCitations={!!sectionValues[section.id]}
          />
        ))}
      </div>

      {hasAnyValue && (
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Total Potential Annual Savings:
          </h3>
          <p className="text-3xl font-bold text-[#15ae75]">
            ${(totalSavings * 12).toLocaleString()}
          </p>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleBookAudit}
          className="bg-gradient-to-r from-[#15ae75] to-[#15ae75]/80 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Book a Free AI Audit
        </button>
      </div>
    </div>
  );
};

export { AssessmentTool };