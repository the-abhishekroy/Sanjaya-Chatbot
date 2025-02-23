import Chat from './components/Chat';
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FarmingBackground from "@/components/FarmingBackground"
import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50/50 to-white">
      <div className="fixed inset-0 z-0">
        <FarmingBackground />
      </div>
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 tracking-tight">
            Sanjaya Chatbot
          </h1>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Your intelligent farming companion for Northeast India's agricultural needs
          </p>
                  <Chat />
        </div>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">Expert Guidance</h3>
              <p className="text-green-600">
                Agricultural best practices and recommendations
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">Local Focus</h3>
              <p className="text-green-600">
                Specialized for Northeast Indian farming conditions
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <div className="text-3xl mb-4">🌾</div>
              <h3 className="font-semibold text-lg text-green-800 mb-2">24/7 Support</h3>
              <p className="text-green-600">
                Always available to answer your farming queries
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

