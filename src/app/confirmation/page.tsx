"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Calendar, Clock, Mail, Phone, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import confetti from 'canvas-confetti';

const ConfirmationContent = () => {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  // Get parameters from URL
  const name = searchParams.get('name') || 'Valued Customer';
  const email = searchParams.get('email') || '';
  const service = searchParams.get('service') || 'consultation';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';

  useEffect(() => {
    setMounted(true);
    
    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  const serviceNames: Record<string, string> = {
    'software-development': 'Software Development',
    'web-app-development': 'Web & App Development',
    'data-science': 'Data Science & Analysis',
    'automation': 'Automation & Scripting',
    'tech-consulting': 'Tech Consulting',
    'cloud-solutions': 'Cloud Solutions',
    'consultation': 'General Consultation'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Icon */}
        <div className="text-center mb-8 animate-scale-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-500 rounded-full mb-6 animate-bounce">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Appointment Confirmed!
          </h1>
          <p className="text-lg text-gray-300">
            Thank you for choosing L.A. Apex Technologies
          </p>
        </div>

        {/* Confirmation Details Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-emerald-500/20 shadow-2xl mb-6 animate-fade-in">
          <div className="space-y-6">
            {/* Customer Name */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-700">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">Confirmed for</p>
                <p className="text-xl font-semibold text-white">{name}</p>
              </div>
            </div>

            {/* Service */}
            <div className="flex items-start gap-4 pb-4 border-b border-gray-700">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">Service</p>
                <p className="text-lg font-semibold text-white">
                  {serviceNames[service] || 'Consultation'}
                </p>
              </div>
            </div>

            {/* Date & Time */}
            {(date || time) && (
              <div className="flex items-start gap-4 pb-4 border-b border-gray-700">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Scheduled for</p>
                  <p className="text-lg font-semibold text-white">
                    {date && <span>{new Date(date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>}
                    {date && time && <span> at </span>}
                    {time && <span>{time}</span>}
                  </p>
                </div>
              </div>
            )}

            {/* Email */}
            {email && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">Confirmation sent to</p>
                  <p className="text-lg font-semibold text-white break-all">{email}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* What's Next Section */}
        <div className="bg-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 mb-6 animate-fade-in delay-300">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-emerald-400" />
            What happens next?
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">1</span>
              <span>You&apos;ll receive a confirmation email with all the details</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">2</span>
              <span>Our team will reach out 24 hours before your appointment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">3</span>
              <span>Prepare any questions or materials you&apos;d like to discuss</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">4</span>
              <span>Join the meeting at the scheduled time via the link in your email</span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 mb-6 animate-fade-in delay-500">
          <h3 className="text-lg font-bold text-white mb-4">Need to make changes?</h3>
          <p className="text-gray-300 mb-4">
            If you need to reschedule or have any questions, feel free to contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:contact@laapextechnologies.tech"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>contact@laapextechnologies.tech</span>
            </a>
            <a 
              href="tel:+2348067543280"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(+234) 806-754-3280</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-700">
          <Link href="/" className="flex-1">
            <Button 
              className="w-full bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold py-6 text-lg hover:from-emerald-600 hover:to-yellow-600 transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/services" className="flex-1">
            <Button 
              variant="outline"
              className="w-full border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white py-6 text-lg transition-all duration-300"
            >
              Explore Services
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-8 animate-fade-in delay-1000">
          <p className="text-gray-400 text-sm mb-2">
            Join 500+ satisfied clients who trust L.A. Apex Technologies
          </p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
            <span className="text-gray-300 ml-2 text-sm">4.9/5 from 200+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfirmationPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
};

export default ConfirmationPage;
