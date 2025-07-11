import Link from 'next/link';
import { useState, useEffect } from 'react';
import DiscordIcon from './icons/discord';
import FAQIcon from './icons/faq';
import RulesIcon from './icons/rules';
import ScamsIcon from './icons/scams';

const Card = ({ title, description, href, icon: Icon }) => (
  <Link
    href={href}
    className="block p-6 bg-dark-card border-2 border-ntts-blue-light rounded-lg transition-all duration-200 ease-in-out hover:border-ntts-blue-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-ntts-blue/10"
  >
    <div className="flex items-center mb-2">
      {Icon && <div className="text-[#253540]">{<Icon />}</div>}
      <h3 className="ml-3 text-xl font-bold text-[#253540]">{title}</h3>
    </div>
    <p className="text-[#253540]">{description}</p>
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
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-ntts-blue mb-4">
          No Text To Speech
        </h1>
        <p className="text-lg md:text-xl text-dark-text-secondary max-w-2xl mx-auto">
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
