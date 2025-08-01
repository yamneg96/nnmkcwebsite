import React from 'react';
import Link from 'next/link';
import Teenage from '../pages/TeenagePrograms/TeenagePrograms';

export default function Programs() {
  const programs = [
    {
      title: "Sunday Sermons",
      time: "Every Sunday at 10:00 AM",
      description: "Join us for inspiring worship services with uplifting music and meaningful messages that speak to the heart.",
      image: "https://images.pexels.com/photos/6120237/pexels-photo-6120237.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Weekly Service",
      href: "/SundaySermons/SundaySermons"
    },
    {
      title: "Youth Program",
      time: "Every Friday at 6:00 PM",
      description: "A vibrant community for young people to grow in faith, build friendships, and explore their purpose in Christ.",
      image: "https://images.pexels.com/photos/7186206/pexels-photo-7186206.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Youth Ministry",
      href: "/YouthPrograms/YouthPrograms"
    },
    {
      title: "Teenage Program",
      time: "Every Saturday at 4:00 PM",
      description: "Designed specifically for teenagers to navigate life's challenges with biblical wisdom and peer support.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Teen Ministry",
      href: '/TeenagePrograms/TeenagePrograms'
    },
    {
      title: "Nehemia Program",
      time: "Summer Sessions",
      description: "A special gathering for university students and young adults, focusing on leadership, spiritual growth, and community building.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "University Ministry",
      href: "/NehemiaPrograms/NehemiaPrograms"
    },
    {
      title: "Bible Study",
      time: "Wednesday at 7:00 PM",
      description: "Deep dive into Scripture with interactive discussions and practical application for daily life.",
      image: "https://images.pexels.com/photos/4100420/pexels-photo-4100420.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Study Group",
      href: "/BibleStudy/BibleStudy"
    },
    {
      title: "Community Outreach",
      time: "First Saturday of Every Month",
      description: "Serving our local community through food drives, volunteer work, and acts of kindness.",
      image: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Service",
      href: "/CommunityOutreach/CommunityOutreach"
    }
  ]

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover meaningful ways to grow in faith, connect with others, and serve our community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{program.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{program.time}</p>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full cursor-pointer">
                  <Link href={program.href}>
                    Learn More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}