import React from 'react';
import CourseCard from './CourseCard';
import { courses } from '../data/courses';

interface CourseSectionProps {
  activeTab: string;
}

export default function CourseSection({ activeTab }: CourseSectionProps) {
  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Professional Copywriting Courses</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Choose from our selection of expert-led copywriting courses designed to help you master the art of persuasive writing.
        </p>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}