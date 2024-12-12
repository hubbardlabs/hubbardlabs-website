import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, Wrench, Bell } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';

const MaintenancePage: React.FC = () => {
  const services = [
    {
      title: "Security Monitoring",
      description: "24/7 security monitoring and threat prevention",
      icon: <Shield className="w-6 h-6 text-primary" />
    },
    {
      title: "Regular Updates",
      description: "Core, theme, and plugin updates management",
      icon: <RefreshCw className="w-6 h-6 text-primary" />
    },
    {
      title: "Technical Support",
      description: "Expert technical support when you need it",
      icon: <Wrench className="w-6 h-6 text-primary" />
    },
    {
      title: "Uptime Monitoring",
      description: "Continuous uptime monitoring and alerts",
      icon: <Bell className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <ServiceHero
        title="WordPress Maintenance"
        description="Keep your WordPress site secure, updated, and running smoothly"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-card rounded-lg border border-dark-lighter p-6"
              >
                <div className="p-2 bg-primary/10 rounded-lg inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-dark-card rounded-lg border border-dark-lighter p-8 mb-16"
          >
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
              Maintenance Plans
            </h2>
            <div className="space-y-6">
              <div className="p-6 border border-dark-lighter rounded-lg">
                <h3 className="text-xl font-semibold text-secondary mb-2">Basic Plan</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Weekly updates</li>
                  <li>• Security monitoring</li>
                  <li>• Daily backups</li>
                  <li>• Basic support</li>
                </ul>
              </div>
              <div className="p-6 border border-primary/30 rounded-lg bg-primary/5">
                <h3 className="text-xl font-semibold text-secondary mb-2">Pro Plan</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Daily updates</li>
                  <li>• Advanced security</li>
                  <li>• Real-time backups</li>
                  <li>• Priority support</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-montserrat font-bold text-secondary mb-6">
              Choose Your Maintenance Plan
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Select the maintenance plan that best fits your needs and let us take care of your WordPress site.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Plans
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;