import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";
import { mockData } from "../mock/mockData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A progressive career path showcasing consistent growth in strategic leadership roles 
            across diverse industries and organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200"></div>

          <div className="space-y-8">
            {mockData.experience.map((exp, index) => (
              <div key={index} className={`lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-800 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-semibold text-slate-800">
                              {exp.position}
                            </CardTitle>
                            <p className="text-lg font-medium text-slate-700">{exp.company}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="text-slate-600 border-slate-300">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </Badge>
                        <Badge variant="outline" className="text-slate-600 border-slate-300">
                          <MapPin className="w-3 h-3 mr-1" />
                          {exp.location}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-slate-600 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty space for alignment */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">Career Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="text-3xl font-bold text-blue-700 mb-2">7</div>
              <div className="text-slate-600">Organizations</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
              <div className="text-3xl font-bold text-emerald-700 mb-2">6</div>
              <div className="text-slate-600">Leadership Roles</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
              <div className="text-3xl font-bold text-purple-700 mb-2">₹20Bn</div>
              <div className="text-slate-600">Projects Managed</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <div className="text-3xl font-bold text-orange-700 mb-2">15+</div>
              <div className="text-slate-600">Targets Exceeded</div>
            </div>
          </div>
        </div>

        {/* Professional Timeline Summary */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-8">
            Professional Evolution Timeline
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Banking & Finance (2012-2017)</h4>
              <p className="text-slate-600 text-sm">Foundation in financial services, risk management, and infrastructure project financing across ICICI Bank & IDBI Bank</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Strategic Growth (2018-2023)</h4>
              <p className="text-slate-600 text-sm">Progressive leadership roles in startup ecosystem, agribusiness, and strategic marketing with measurable business impact</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Executive Leadership (2024-Present)</h4>
              <p className="text-slate-600 text-sm">C-suite positioning as Chief of Staff driving operational excellence and organizational transformation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
