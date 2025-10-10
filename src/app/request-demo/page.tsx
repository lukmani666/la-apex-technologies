"use client"
import React, { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { useToast } from '@/app/hooks/use-toast';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';


const RequestDemo = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    industry: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    
    toast({
      title: "Demo Request Received!",
      description: "We'll contact you shortly to schedule your personalized demo.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      companySize: '',
      industry: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => router.push('/')}
            className="cursor-pointer text-emerald-400 hover:text-emerald-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Request a <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">Demo</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                See how our innovative solutions can transform your business. Fill out the form below and we'll schedule a personalized demo.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 md:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-200">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-gray-200">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-200">Business Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-200">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="text-gray-200">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <Label htmlFor="companySize" className="text-gray-200">Company Size *</Label>
                    <Select
                      name="companySize"
                      value={formData.companySize}
                      onValueChange={(value) => handleSelectChange('companySize', value)}
                      required
                    >
                      <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-emerald-500">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent className='bg-gray-800 border border-gray-700'>
                        <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="1-10">1-10 employees</SelectItem>
                        <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="11-50">11-50 employees</SelectItem>
                        <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="51-200">51-200 employees</SelectItem>
                        <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="201-500">201-500 employees</SelectItem>
                        <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="industry" className="text-gray-200">Industry *</Label>
                  <Select
                    name="industry"
                    value={formData.industry}
                    onValueChange={(value) => handleSelectChange('industry', value)}
                    required
                  >
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-emerald-500">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent className='bg-gray-800 border border-gray-700'>
                      <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="technology">Technology</SelectItem>
                      <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="finance">Finance</SelectItem>
                      <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="healthcare">Healthcare</SelectItem>
                      <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="retail">Retail</SelectItem>
                      <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="education">Education</SelectItem>
                      <SelectItem className='cursor-pointer hover:text-emerald-400 hover:bg-gray-700' value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-200">Tell us about your needs</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-emerald-500 min-h-[120px]"
                    placeholder="What challenges are you looking to solve? What features are most important to you?"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p className="font-semibold text-white mb-1">What to expect:</p>
                    <ul className="space-y-1 text-gray-400">
                      <li>• Personalized 30-minute demo session</li>
                      <li>• Live Q&A with our product experts</li>
                      <li>• Custom solutions tailored to your needs</li>
                    </ul>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold py-6 text-lg hover:from-emerald-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300"
                >
                  Request Demo
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestDemo;