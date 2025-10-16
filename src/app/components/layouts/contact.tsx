"use client"
import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/app/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAIL_API!
      );

      toast({
        title: "Message Sent! ✅",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({name: "", email: "", service: "", message: ""});
    } catch (error) {
      console.error(error);
      console.log("EmailJS Public Key:", process.env.EMAIL_API);
      toast({
        title: "Failed to Send ❌",
        description: "Please check your network or try again later.",
      });
    }
  };

  const handleScheduleCall = () => {
    // replace this URL with your actual scheduling link (Calendly, Cal.com, etc.)
    window.open('https://calendly.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="contact" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-800">
              <TabsTrigger value="contact" className="cursor-pointer data-[state=active]:bg-emerald-600">Contact Form</TabsTrigger>
              <TabsTrigger value="info" className="cursor-pointer data-[state=active]:bg-emerald-600">Contact Info</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="space-y-6">
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl border border-gray-700 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 text-white focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 text-white focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service" className="text-white mb-2 block">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:border-emerald-500 focus:outline-none"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="software-development">Software Development</option>
                    <option value="web-app-development">Web & App Development</option>
                    <option value="data-science">Data Science & Analysis</option>
                    <option value="automation">Automation & Scripting</option>
                    <option value="tech-consulting">Tech Consulting</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 border border-gray-600 text-white rounded-md focus:border-emerald-500 focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold py-6 text-base hover:from-emerald-600 hover:to-yellow-600 transform hover:scale-100 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="info" className="space-y-6">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="text-emerald-600" size={24} />
                    </div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <p className="text-gray-300">contact@laapextechnologies.tech</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="text-yellow-600" size={24} />
                    </div>
                    <h3 className="text-white font-bold mb-2">Phone</h3>
                    <p className="text-gray-300">(+234) 805-4325-762</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="text-emerald-600" size={24} />
                    </div>
                    <h3 className="text-white font-bold mb-2">Office</h3>
                    <p className="text-gray-300">Osogbo, Osun State</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Button 
                    onClick={handleScheduleCall}
                    className="cursor-pointer bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold px-8 py-4"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Contact;
