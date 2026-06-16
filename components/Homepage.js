import Link from 'next/link';
import { useState, useEffect } from 'react';
import DiscordIcon from './icons/discord';
import FAQIcon from './icons/faq';
import RulesIcon from './icons/rules';
import ScamsIcon from './icons/scams';
import AnimatedTitle from './AnimatedTitle';

const Card = ({ title, description, href, icon: Icon }) => (
  <Link
    href={href}
    className="flex flex-col justify-between p-6 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl transition-all duration-300 ease-out hover:border-ntts-blue-light/50 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/70 h-32 group relative overflow-hidden"
  >
    {/* Shimmer effect */}
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
    
    <div className="flex items-center mb-2 relative z-10">
      {Icon && <div className="text-ntts-blue mr-3"><Icon /></div>}
      <h3 className="text-xl font-bold text-ntts-blue">{title}</h3>
    </div>
    <p className="text-dark-text-secondary text-sm relative z-10">{description}</p>
  </Link>
);

export default function Homepage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerClasses = `
    flex flex-col items-center justify-center min-h-[80vh] px-4 
    transition-opacity duration-300 ease-in-out
    ${isMounted ? 'opacity-100' : 'opacity-0'}
  `;

  return (
    <div className={containerClasses}>
      <div className="text-center mb-12">
        <AnimatedTitle />
        <br />
        <p className="text-xl md:text-2xl font-bold text-dark-text-secondary max-w-2xl mx-auto px-4">
          The official community hub. Find our rules, guides, and important information.
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <Card 
          title="Rules" 
          description="Read our server and community guidelines." 
          href="/rules" 
          icon={RulesIcon} 
        />
        <Card 
          title="Scams" 
          description="Learn how to identify and avoid common scams." 
          href="/scams" 
          icon={ScamsIcon} 
        />
        <Card 
          title="FAQ" 
          description="Find answers to frequently asked questions." 
          href="/faq" 
          icon={FAQIcon} 
        />
        <Card 
          title="Discord" 
          description="Join our official Discord server to chat." 
          href="https://discord.gg/ntts" 
          icon={DiscordIcon} 
        />
      </div>
    </div>
  );
}
