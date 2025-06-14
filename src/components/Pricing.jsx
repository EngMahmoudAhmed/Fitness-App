import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '29',
            period: 'month',
            description: 'Perfect for beginners',
            features: [
                'Access to basic workout plans',
                'Basic health tracking',
                'Community forum access',
                'Email support'
            ],
            buttonText: 'Start Basic',
            highlighted: false
        },
        {
            name: 'Pro',
            price: '49',
            period: 'month',
            description: 'Most popular choice',
            features: [
                'All Basic features',
                'Advanced workout plans',
                'Personalized nutrition guide',
                'Priority support',
                'Progress analytics'
            ],
            buttonText: 'Go Pro',
            highlighted: true
        },
        {
            name: 'Elite',
            price: '99',
            period: 'month',
            description: 'For serious athletes',
            features: [
                'All Pro features',
                '1-on-1 coaching sessions',
                'Custom meal plans',
                'Advanced performance metrics',
                'Premium workshop access'
            ],
            buttonText: 'Get Elite',
            highlighted: false
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Choose Your Plan</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Select the perfect plan that matches your fitness journey and goals</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`rounded-2xl p-8 ${plan.highlighted ? 'bg-teal-500 text-white transform scale-105' : 'bg-white'} shadow-xl transition-all duration-300 hover:transform hover:scale-105`}
                        >
                            <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                            <p className={plan.highlighted ? 'text-teal-100' : 'text-gray-600'}>{plan.description}</p>
                            <div className="my-8">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className={`${plan.highlighted ? 'text-teal-100' : 'text-gray-600'}`}>/{plan.period}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <Check className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-white' : 'text-teal-500'}`} />
                                        <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/signup" className="block">
                                <button 
                                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors duration-200 ${plan.highlighted ? 'bg-white text-teal-500 hover:bg-gray-100' : 'bg-teal-500 text-white hover:bg-teal-600'}`}
                                >
                                    {plan.buttonText}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;