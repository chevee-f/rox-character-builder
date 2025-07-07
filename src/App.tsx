import React, { useState } from 'react';
import { 
  Sword, 
  Shield, 
  Star, 
  Check, 
  Lock, 
  Users, 
  TrendingUp, 
  Download,
  Share2,
  Heart,
  Github,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Calendar,
  Tag,
  Eye,
  Copy,
  ArrowRight,
  Zap,
  Target,
  Crown,
  Coffee,
  Gift
} from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CharacterBuilder from './CharacterBuilder';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    {
      name: "Jake_PH",
      role: "Guild Leader",
      text: "This tool saved me hours planning our guild's MVP runs. The build optimizer is incredible!",
      rating: 5
    },
    {
      name: "MysticMage2024",
      role: "Content Creator",
      text: "I use this for all my build guides now. My viewers love the visual previews!",
      rating: 5
    },
    {
      name: "SniperElite",
      role: "Competitive Player",
      text: "Finally, a builder that actually understands RoX mechanics. The meta builds section is gold.",
      rating: 5
    }
  ];

  const metaBuilds = [
    {
      class: "Sniper",
      name: "PvE DPS Beast",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      tags: ["PvE", "DPS", "MVP"],
      rating: 4.8,
      views: "2.1k"
    },
    {
      class: "Assassin Cross",
      name: "PvP Burst King",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      tags: ["PvP", "Burst", "Arena"],
      rating: 4.9,
      views: "3.5k"
    },
    {
      class: "High Priest",
      name: "Support Master",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      tags: ["Support", "Healing", "Guild"],
      rating: 4.7,
      views: "1.8k"
    },
    {
      class: "Lord Knight",
      name: "Tank Fortress",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      tags: ["Tank", "MVP", "Defense"],
      rating: 4.6,
      views: "2.3k"
    }
  ];

  const faqs = [
    {
      question: "Is this an official Ragnarok X tool?",
      answer: "No, this is a fan-made tool created by passionate RoX players for planning and optimizing builds. It's not affiliated with the official game."
    },
    {
      question: "Do I need to create an account to use it?",
      answer: "Not for basic features! You can build and save up to 3 builds locally without signing up. Premium features require an account for cloud saving and sharing."
    },
    {
      question: "Can I export or share my builds?",
      answer: "Absolutely! You can export builds as images, generate shareable links, or even copy build codes to share with friends and guild members."
    },
    {
      question: "Will this be updated with new patches and content?",
      answer: "Yes! Our team actively follows RoX updates and patches. New equipment, skills, and balance changes are typically added within 24-48 hours of release."
    },
    {
      question: "Is my build data safe and private?",
      answer: "Your data is completely safe. Local builds stay on your device, and cloud builds are encrypted. You control what you share publicly."
    }
  ];

  const updates = [
    {
      date: "Jan 15, 2025",
      category: "New Feature",
      title: "Added Assassin Cross class support!",
      description: "Complete skill tree and equipment database"
    },
    {
      date: "Jan 10, 2025",
      category: "Enhancement",
      title: "Refine simulation now supports +15!",
      description: "More accurate damage calculations"
    },
    {
      date: "Jan 5, 2025",
      category: "Content",
      title: "50+ new meta builds from top players",
      description: "Fresh strategies for the new year"
    },
    {
      date: "Dec 28, 2024",
      category: "Bug Fix",
      title: "Fixed equipment comparison tool",
      description: "Now shows accurate stat differences"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sword className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">RoX Character Builder</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-indigo-600 transition-colors">Features</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('community')} className="text-gray-600 hover:text-indigo-600 transition-colors">Community</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</button>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">Login</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-6 h-6 text-emerald-600" />
                <span className="text-emerald-600 font-semibold">The Ultimate RoX Tool</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                RoX Character Builder
              </h1>
              <p className="text-2xl text-indigo-600 font-semibold mb-4">
                Visualize. Optimize. Dominate.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Create perfect character builds with our visual builder. Plan your stats, equipment, and skills before spending your precious zeny in-game!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/builder" className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Start Building Now</span>
                </Link>
                <button onClick={() => scrollToSection('pricing')} className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-all flex items-center justify-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>See Pricing</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Character Build Preview" 
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Sniper PvE Build</h3>
                  <p className="text-gray-600">ATK: 12,450 • CRIT: 85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Build Like a Pro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visual character building to meta analysis, we've got all the tools to make you a RoX legend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Sword className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">See Your Build Come to Life</h3>
              <p className="text-gray-600">Visual character builder with real-time stat calculations and equipment previews.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learn from the Best</h3>
              <p className="text-gray-600">Access meta builds from top players and content creators in the community.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Masterpiece</h3>
              <p className="text-gray-600">Export as images or create shareable links to show off your builds to friends.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Never Forget Equipment</h3>
              <p className="text-gray-600">Interactive equipment checklist to track what you need to farm or buy.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guild Management Made Easy</h3>
              <p className="text-gray-600">Coordinate builds with your guild members and plan strategies together.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Build Suggestions</h3>
              <p className="text-gray-600">AI-powered optimization suggestions to maximize your character's potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic CTA after Features */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Perfect Character?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of players who are already dominating with optimized builds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Start Building Free</span>
            </button>
            <button onClick={() => scrollToSection('pricing')} className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all flex items-center justify-center space-x-2">
              <Crown className="w-5 h-5" />
              <span>View Premium Plans</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by the RoX Community
            </h2>
            <p className="text-xl text-gray-600">
              See what players are saying about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA after Testimonials */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Community of Champions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start building like the pros and see why everyone's switching to RoX Character Builder
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
            <ArrowRight className="w-5 h-5" />
            <span>Get Started Now</span>
          </button>
        </div>
      </section>

      {/* Community Meta Builds */}
      <section id="community" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Community Meta Builds
            </h2>
            <p className="text-xl text-gray-600">
              Discover and copy the most effective builds from top players
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metaBuilds.map((build, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="relative">
                  <img src={build.image} alt={build.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {build.class}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{build.views}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{build.name}</h3>
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{build.rating}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {build.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 group-hover:bg-indigo-700">
                    <Copy className="w-4 h-4" />
                    <span>Copy Build</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you're ready to dominate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Forever */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-300 transition-colors">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">₱0</div>
                <p className="text-gray-600">Perfect for casual players</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Visual character builder</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Access to all equipment</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Save 3 builds locally</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Share public links</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>View meta builds</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-5 h-5 mr-3">⚠️</span>
                  <span>Contains ads</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                Get Started Free
              </button>
            </div>

            {/* Premium Monthly */}
            <div className="bg-indigo-600 text-white rounded-2xl p-8 transform scale-105 shadow-2xl">
              <div className="text-center mb-8">
                <div className="bg-emerald-400 text-emerald-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium Monthly</h3>
                <div className="text-4xl font-bold mb-2">₱50<span className="text-lg">/month</span></div>
                <p className="text-indigo-100">For serious players</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>No ads experience</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Save 20 builds to cloud</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>History & undo features</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Equipment checklist</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Load meta builds</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span>Tag & organize builds</span>
                </li>
              </ul>
              
              <button className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Start Premium Trial
              </button>
            </div>

            {/* Premium Lifetime */}
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 hover:border-emerald-300 transition-colors">
              <div className="text-center mb-8">
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Best Value
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Lifetime</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">₱500<span className="text-lg text-gray-600">/once</span></div>
                <p className="text-gray-600">For guild leaders & pros</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Unlimited cloud builds</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Share profile publicly</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Save builds from others</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>AI build optimization</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Guild/Team management</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-500 mr-3" />
                  <span>Meta stats dashboard</span>
                </li>
              </ul>
              
              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
                Get Lifetime Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about RoX Character Builder
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guild Leaders CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Than Just a Builder?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Run a guild or create content? We offer custom plans with advanced features for teams, 
            streamers, and community leaders who need more power.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact for Guild Plan</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Join Discord</span>
            </button>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section id="donate" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What's New?
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest features and improvements
            </p>
          </div>

          <div className="space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-sm text-gray-500">{update.date}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      update.category === 'New Feature' ? 'bg-emerald-100 text-emerald-700' :
                      update.category === 'Enhancement' ? 'bg-blue-100 text-blue-700' :
                      update.category === 'Content' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {update.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{update.title}</h3>
                  <p className="text-gray-600">{update.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-pink-500" />
              <Coffee className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Support Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              RoX Character Builder is a passion project made by players, for players. 
              Your support helps us keep the servers running and add amazing new features!
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-indigo-600">15k+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">50k+</div>
                  <div className="text-sm text-gray-600">Builds Created</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Server Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">Free</div>
                  <div className="text-sm text-gray-600">Forever</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Coffee Tier */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buy Us Coffee</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₱25</div>
              <p className="text-gray-600 mb-6">
                Fuel our late-night coding sessions and keep the updates coming!
              </p>
              <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                <Coffee className="w-4 h-4" />
                <span>Send Coffee</span>
              </button>
            </div>

            {/* Pizza Tier */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-pink-200">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Team Pizza</h3>
              <div className="text-3xl font-bold text-pink-600 mb-2">₱100</div>
              <p className="text-gray-600 mb-6">
                Feed our small team and help us work on bigger features faster!
              </p>
              <button className="w-full bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center space-x-2">
                <Gift className="w-4 h-4" />
                <span>Send Pizza</span>
              </button>
            </div>

            {/* Server Tier */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Server Hero</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-2">₱250</div>
              <p className="text-gray-600 mb-6">
                Cover our monthly server costs and become a community hero!
              </p>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Be a Hero</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Donate?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Keep It Free</h4>
                  <p className="text-gray-600">Help us maintain free access to core features for all players</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Faster Updates</h4>
                  <p className="text-gray-600">More resources mean quicker patch updates and new features</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Better Servers</h4>
                  <p className="text-gray-600">Improved performance and reliability for everyone</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Community Love</h4>
                  <p className="text-gray-600">Show appreciation for the countless hours we put into this</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-white rounded-xl border-l-4 border-pink-400">
              <p className="text-gray-700 italic">
                "Every donation, no matter how small, means the world to us. You're not just supporting a tool - 
                you're supporting a dream to make RoX more enjoyable for everyone!" 
                <span className="font-semibold">- The RoX Builder Team</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Sword className="w-8 h-8 text-indigo-400" />
                <span className="text-xl font-bold">RoX Character Builder</span>
              </div>
              <p className="text-gray-400 mb-6">
                The ultimate tool for Ragnarok X character building and optimization.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <MessageCircle className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('community')} className="text-gray-400 hover:text-white transition-colors">Meta Builds</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors">FAQ</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><button onClick={() => scrollToSection('donate')} className="text-gray-400 hover:text-white transition-colors">Donate</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 RoX Character Builder. Made with ❤️ for the RoX community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/builder" element={<CharacterBuilder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;