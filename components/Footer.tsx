import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="md:col-span-2">
            <div className='flex space-x-4 items-center mb-6'>
              <img src="/MKC-Logo.png" alt="MKC Logo" className='h-18 w-18'/>
              <h3 className="text-2xl font-bold">NNMKC</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A welcoming church family dedicated to growing in faith, serving our community, 
              and sharing God's love with everyone who walks through our doors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors duration-200">Programs</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Prayer Requests</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="/SundaySermons/SundaySermons" className="text-gray-300 hover:text-white transition-colors duration-200">Sunday Sermons</a></li>
              <li><a href="/YouthPrograms/YouthPrograms" className="text-gray-300 hover:text-white transition-colors duration-200">Youth Program</a></li>
              <li><a href="/TeenagePrograms/TeenagePrograms" className="text-gray-300 hover:text-white transition-colors duration-200">Teen Program</a></li>
              <li><a href="/NehemiaPrograms/NehemiaPrograms" className="text-gray-300 hover:text-white transition-colors duration-200">Nehemia Program</a></li>
              <li><a href="/BibleStudy/BibleStudy" className="text-gray-300 hover:text-white transition-colors duration-200">Bible Study</a></li>
              <li><a href="/CommunityOutreach/CommunityOutreach" className="text-gray-300 hover:text-white transition-colors duration-200">Community Outreach</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 NNMKC. All rights reserved. Built with love and faith.
          </p>
        </div>
      </div>
    </footer>
  )
}