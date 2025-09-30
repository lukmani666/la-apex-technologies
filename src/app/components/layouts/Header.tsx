'use client'
// import React, { useState, useEffect } from 'react';
// import { HiMenu, HiX, HiChevronDown, HiOutlineSparkles } from 'react-icons/hi';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { 
//       name: 'Services', 
//       href: '#services',
//       hasDropdown: true,
//       dropdownItems: [
//         'Web Development',
//         'Mobile Apps',
//         'Digital Marketing',
//         'Consulting'
//       ]
//     },
//     { name: 'About', href: '#about' },
//     { name: 'Case Studies', href: '#case-studies' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Contact', href: '#contact' }
//   ];

//   return (
//     <>
//       {/* Sticky Navbar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
//           : 'bg-slate-900'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
            
//             {/* Logo */}
//             <div className="flex items-center space-x-2 group cursor-pointer">
//               <div className="w-8 h-8 bg-gradient-to-br from-[#50C878] to-[#FFD700] rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
//                 <HiOutlineSparkles className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-white font-bold text-xl tracking-tight">L.A. Apex</span>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <div key={item.name} className="relative group">
//                   <a
//                     href={item.href}
//                     className="text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center space-x-1 py-2 relative overflow-hidden group"
//                     onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
//                     onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
//                   >
//                     <span className="relative z-10">{item.name}</span>
//                     {item.hasDropdown && (
//                       <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${
//                         isServicesOpen ? 'rotate-180' : ''
//                       }`} />
//                     )}
                    
//                     {/* Animated underline */}
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#239459] to-[#AD8B13] transition-all duration-300 group-hover:w-full"></div>
                    
//                     {/* Hover background effect */}
//                     <div className="absolute inset-0 bg-[#50C878]/10 rounded-lg transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
//                   </a>

//                   {/* Dropdown Menu */}
//                   {item.hasDropdown && (
//                     <div 
//                       className={`absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700/50 overflow-hidden transition-all duration-300 transform ${
//                         isServicesOpen 
//                           ? 'opacity-100 translate-y-0 visible' 
//                           : 'opacity-0 -translate-y-2 invisible'
//                       }`}
//                       onMouseEnter={() => setIsServicesOpen(true)}
//                       onMouseLeave={() => setIsServicesOpen(false)}
//                     >
//                       {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
//                         <a
//                           key={dropdownItem}
//                           href="#"
//                           className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#50C878]/10 transition-all duration-200"
//                         >
//                           {dropdownItem}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="hidden lg:block">
//               <button className="bg-gradient-to-r from-[#50C878] to-[#FFD700] hover:from-[#FFD700] hover:to-[#50C878] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#50C878]/25">
//                 Get a Free Consultation
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors duration-300"
//               >
//                 <div className="relative w-6 h-6">
//                   <HiMenu className={`absolute inset-0 transition-all duration-300 ${
//                     isMobileMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
//                   }`} />
//                   <HiX className={`absolute inset-0 transition-all duration-300 ${
//                     isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
//                   }`} />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
//           isMobileMenuOpen 
//             ? 'max-h-screen opacity-100' 
//             : 'max-h-0 opacity-0'
//         }`}>
//           <div className="bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
//             <div className="px-4 py-2 space-y-1">
//               {navItems.map((item, index) => (
//                 <div key={item.name}>
//                   <a
//                     href={item.href}
//                     className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#50C878]/10 rounded-lg transition-all duration-200 transform hover:translate-x-2"
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     {item.name}
//                   </a>
//                   {item.hasDropdown && item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
//                     <a
//                       key={dropdownItem}
//                       href="#"
//                       className="block px-8 py-2 text-gray-400 hover:text-white hover:bg-[#50C878]/5 rounded-lg transition-all duration-200 text-sm"
//                     >
//                       {dropdownItem}
//                     </a>
//                   ))}
//                 </div>
//               ))}
              
//               {/* Mobile CTA */}
//               <div className="pt-4 pb-2">
//                 <button className="w-full bg-gradient-to-r from-[#50C878] to-[#FFD700] hover:from-[#FFD700] hover:to-[#50C878] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
//                   Get a Free Consultation
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Demo Content */}
//       <div className="pt-16">
//         {/* Hero Section */}
//         <section id="home" className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#50C878] to-[#FFD700] bg-clip-text text-transparent">
//               L.A. Apex
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8">
//               Dynamic Navigation Experience
//             </p>
//             <button className="bg-gradient-to-r from-[#50C878] to-[#FFD700] hover:from-[#FFD700] hover:to-[#50C878] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#50C878]/25">
//               Scroll to Test Sticky Navigation
//             </button>
//           </div>
//         </section>

//         {/* Demo Sections */}
//         {['Services', 'About', 'Case Studies', 'Testimonials', 'Contact'].map((section) => (
//           <section 
//             key={section}
//             id={section.toLowerCase().replace(' ', '-')}
//             className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900"
//           >
//             <div className="text-center text-white">
//               <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#50C878] to-[#FFD700] bg-clip-text text-transparent">
//                 {section}
//               </h2>
//               <p className="text-lg text-gray-300">
//                 This is the {section} section. Scroll up to see the sticky navigation in action!
//               </p>
//             </div>
//           </section>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/app/components/ui/navigation-menu"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-lg"></div>
          <span className="text-2xl font-bold text-white">L.A. Apex</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-300 hover:text-emerald-400 transition-colors">Home</a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-emerald-400 bg-transparent">
                  Service
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-800 border border-gray-700">
                  <div className="p-4 w-64">
                    <a href="#service" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Software Development</a>
                    <a href="#service" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Data Science</a>
                    <a href="#service" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Automation</a>
                    <a href="#service" className="block px-3 py-2 text-gray-300 hover:text-emerald-400 hover:bg-gray-700 rounded">Tech Consulting</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <a href="#about" className="text-gray-300 hover:text-emerald-400 transition-colors">About</a>
          <a href="#case-studies" className="text-gray-300 hover:text-emerald-400 transition-colors">Case Studies</a>
          <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors">Contact</a>
        </nav>

        <Button className="hidden md:block bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold hover:from-emerald-600 hover:to-yellow-600">
          Get a Free Consultation
        </Button>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0 5 bg-white"></div>
            <div className="w-6 h-0 5 bg-white"></div>
            <div className="w-6 h-0 5 bg-white"></div>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="text-gray-300 hover:text-emerald-400">Home</a>
            <a href="#services" className="text-gray-300 hover:text-emerald-400">Services</a>
            <a href="#about" className="text-gray-300 hover:text-emerald-400">About</a>
            <a href="#case-studies" className="text-gray-300 hover:text-emerald-400">Case Studies</a>
            <a href="#testimonials" className="text-gray-300 hover:text-emerald-400">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400">Contact</a>
            <Button className="bg-gradient-to-r from-emerald-500 to-yellow-500 text-black font-bold w-full mt-4">
              Get a Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;