'use client';

import { GraduationCap, Award, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const courses = [
  {
    level: 'Certificate and Diploma',
    mqfLevel: 'Levels 1-4',
    programs: ['Service Operations', 'Cabin Crew Basics', 'Food and Beverage Management'],
    duration: '6-18 months',
    icon: Award,
    color: 'from-red-600 to-red-700'
  },
  {
    level: 'Bachelors and Advanced',
    mqfLevel: 'Levels 5-6',
    programs: ['Business Administration', 'Engineering Fundamentals', 'Hospitality Management'],
    duration: '3-4 years',
    icon: BookOpen,
    color: 'from-black to-gray-800'
  },
  {
    level: "Master's Level 7",
    mqfLevel: 'Level 7',
    programs: ['Nursing Science', 'Strategic Accounting', 'Public Health'],
    duration: '1-2 years',
    icon: GraduationCap,
    color: 'from-red-600 to-red-700'
  },
  {
    level: 'Doctorate Level 8',
    mqfLevel: 'Level 8',
    programs: ['Doctor of Business Administration', 'PhD in Engineering', 'Research Programs'],
    duration: '3-5 years',
    icon: Users,
    color: 'from-black to-gray-800'
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            <GraduationCap className="h-4 w-4 mr-2" />
            Academic Programs
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            On-Campus Programmes Across
            <span className="text-red-600"> All MQF Levels</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Delivered by our partner institutions in Malta, offering comprehensive education from foundation to doctorate level
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="group h-full bg-white border-2 border-gray-100 hover:border-red-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-red-600">{course.mqfLevel}</div>
                    <div className="text-xs text-gray-500">{course.duration}</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-black group-hover:text-red-600 transition-colors mt-4">
                  {course.level}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Example Programmes:</h4>
                    <div className="space-y-2">
                      {course.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Academic Journey?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us to match you with the right institution and programme for your career goals
          </p>
        
        <Link href="#courses">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg group bg-transparent"
          >
            Find Your Program
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}