import React from 'react';
import { Code2, Database, Globe, Gauge } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "IDX Broker Integration",
      description: "Seamlessly integrate IDX Broker with your WordPress website for powerful real estate listings and search capabilities.",
      icon: <Database className="w-6 h-6 text-primary" />,
      link: "/services/idxbroker"
    },
    {
      title: "Custom WordPress Development",
      description: "Tailored WordPress solutions built to your exact specifications and business requirements.",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      link: "/services/wordpress-development"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your WordPress site for lightning-fast load times and exceptional user experience.",
      icon: <Gauge className="w-6 h-6 text-primary" />,
      link: "/services/performance-optimization"
    },
    {
      title: "WordPress Maintenance",
      description: "Comprehensive maintenance services to keep your WordPress site secure, updated, and running smoothly.",
      icon: <Globe className="w-6 h-6 text-primary" />,
      link: "/services/maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <ServiceHero
        title="Our Services"
        description="Expert WordPress development services tailored to your needs"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;