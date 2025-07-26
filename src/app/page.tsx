'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FeatureCard } from '@/components/ui/feature-card'
import Globe3D from '@/components/3d/Globe3D'
import { useUser, SignInButton, SignUpButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { 
  Mic, 
  Globe, 
  MessageCircle, 
  Smartphone, 
  MapPin, 
  Bookmark, 
  Book,
  Sparkles,
  Brain,
  Users,
  ArrowRight,
  Play,
  Menu,
  X
} from 'lucide-react'

export default function HomePage() {
  const { isSignedIn } = useUser()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push('/voice')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            <span className="text-lg md:text-2xl font-bold gradient-text">TourGuide AI</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" className="text-white hover:text-blue-400">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="gradient" size="lg">
                    Get Started
                  </Button>
                </SignUpButton>
              </>
            ) : (
              <Button variant="gradient" size="lg" onClick={handleGetStarted}>
                Launch Voice Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 text-white hover:text-blue-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="p-4 space-y-4">
              {!isSignedIn ? (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="w-full justify-center text-white hover:text-blue-400">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button variant="gradient" className="w-full">
                      Get Started
                    </Button>
                  </SignUpButton>
                </>
              ) : (
                <Button variant="gradient" className="w-full" onClick={handleGetStarted}>
                  Launch Voice Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-16 md:pt-0 pb-8 sm:pb-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left px-2 sm:px-4 lg:px-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="block">Your Personal</span>
              <span className="gradient-text block">AI Tour Guide</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
            >
              Experience cities like never before with our AI-powered voice companion. 
              Get real-time insights, engaging stories, and personalized recommendations 
              in your native language.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              {!isSignedIn ? (
                <>
                  <SignUpButton mode="modal">
                    <Button variant="gradient" size="lg" className="group w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Start Your Journey
                    </Button>
                  </SignUpButton>
                  <Button variant="outline" size="lg" className="group w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    See Demo
                  </Button>
                </>
              ) : (
                <Button variant="gradient" size="lg" onClick={handleGetStarted} className="group w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg">
                  <Mic className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Launch Voice Guide
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right side - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Globe3D />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Revolutionary</span> Travel Experience
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI understands context, tells stories, and adapts to your preferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-12 h-12" />}
              title="Contextual Understanding"
              description="Listen beyond words—detect your mood, intent, and unique interests through natural conversation."
              delay={0.1}
            />
            
            <FeatureCard
              icon={<Book className="w-12 h-12" />}
              title="Engaging Storytelling"
              description="Deliver information as a local would, blending facts with captivating narratives that make each interaction memorable."
              delay={0.2}
            />
            
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Multilingual Accessibility"
              description="Break down language barriers by understanding and responding in your native language, making the city accessible to everyone."
              delay={0.3}
            />
            
            <FeatureCard
              icon={<Smartphone className="w-12 h-12" />}
              title="Effortless Access"
              description="Work seamlessly with minimal requirements—no downloads, just a call or a voice message away."
              delay={0.4}
            />
            
            <FeatureCard
              icon={<MapPin className="w-12 h-12" />}
              title="Location Awareness"
              description="Provide real-time, hyperlocal insights—what's open, what's nearby, and what's genuinely worth your time."
              delay={0.5}
            />
            
            <FeatureCard
              icon={<Bookmark className="w-12 h-12" />}
              title="Voice Bookmarks"
              description="Allow users to 'bookmark' favorite spots or experiences using only their voice."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Bonus</span> Features
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Experience cities through immersive audio adventures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass rounded-2xl p-8">
                <MessageCircle className="w-16 h-16 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Story Mode</h3>
                <p className="text-gray-300 leading-relaxed">
                  Guides users through the city as an audio adventure, weaving history 
                  and local lore into their route. Transform every walk into an 
                  immersive narrative experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-8">
                <Mic className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Voice Bookmarks</h3>
                <p className="text-gray-300 leading-relaxed">
                  Save your favorite discoveries with simple voice commands. 
                  Build a personal collection of memorable places and experiences 
                  that you can revisit anytime.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Explore</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
              Join thousands of travelers discovering cities through the power of AI
            </p>
            
            {!isSignedIn ? (
              <SignUpButton mode="modal">
                <Button variant="gradient" size="lg" className="group w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg mx-4 sm:mx-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Your Adventure
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </SignUpButton>
            ) : (
              <Button variant="gradient" size="lg" onClick={handleGetStarted} className="group w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg mx-4 sm:mx-0">
                <Mic className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Launch Voice Guide
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Globe className="w-6 h-6 text-blue-400" />
            <span className="text-lg md:text-xl font-bold gradient-text">TourGuide AI</span>
          </div>
          <p className="text-sm md:text-base text-gray-400">
            Transforming travel experiences through artificial intelligence
          </p>
        </div>
      </footer>
    </div>
  )
}
