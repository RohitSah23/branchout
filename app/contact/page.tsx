'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-red-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-900/80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get in <span className="text-red-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your Malta journey? Contact our expert team for personalized guidance and support.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
                  <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                  <p className="text-red-100">
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                        <Input
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Inquiry Type *</label>
                        <Select onValueChange={(value: string) => handleInputChange('inquiryType', value)}>
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student-placement">Student Placement</SelectItem>
                            <SelectItem value="job-recruitment">Job Recruitment</SelectItem>
                            <SelectItem value="skills-card">Skills Card</SelectItem>
                            <SelectItem value="visa-assistance">Visa Assistance</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Message *</label>
                      <Textarea
                        placeholder="Tell us about your goals and how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="rounded-xl border-gray-200 focus:border-red-500 focus:ring-red-500 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl py-4 font-semibold text-lg group"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-xl border-0 rounded-xl overflow-hidden">
                <CardHeader className="bg-black text-white p-6">
                  <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Address</h4>
                      <p className="text-gray-600 text-sm">
                        47B South Street<br />
                        Valletta VLT 1100<br />
                        Malta
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">+356 7941 6447</p>
                    </div>
                  </div> */}
{/* 
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">consultancybranchout@gmail.com</p>
                    </div>
                  </div> */}
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="shadow-xl border-0 rounded-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                  <CardTitle className="text-xl font-bold flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-black">Monday - Friday</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-black">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-black">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-xl border-0 rounded-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-red-600 mx-auto mb-2" />
                    <p className="text-red-800 font-semibold">Malta Office Location</p>
                    <p className="text-red-600 text-sm">Valletta, Malta</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
