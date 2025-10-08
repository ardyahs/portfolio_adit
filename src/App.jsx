import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="relative overflow-x-hidden antialiased">
      {/* Dark Theme Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Main floating background elements with gray/white tones */}
          <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-r from-gray-500/15 to-gray-300/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-gray-700/25 to-gray-500/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>

          {/* Additional floating elements for depth */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/10 to-gray-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 right-1/3 w-56 h-56 bg-gradient-to-r from-gray-300/20 to-gray-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "5s" }}
          ></div>

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>
      </div>

      {/* Enhanced Floating Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gray/white themed sparkles */}
        <div
          className="absolute top-1/4 left-1/6 w-3 h-3 bg-gradient-to-r from-gray-300 to-white rounded-full animate-ping opacity-60"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/6 w-2 h-2 bg-gradient-to-r from-gray-200 to-white rounded-full animate-ping opacity-60"
          style={{ animationDelay: "3s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-1/6 right-1/2 w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-100 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "4s", animationDuration: "4.5s" }}
        ></div>
        <div
          className="absolute bottom-1/6 left-1/2 w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full animate-ping opacity-60"
          style={{ animationDelay: "5s", animationDuration: "3.8s" }}
        ></div>

        {/* Additional decorative elements */}
        <div
          className="absolute top-2/3 left-1/8 w-1 h-1 bg-gray-300 rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-2/3 right-1/8 w-2 h-2 bg-gray-500 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Navigation */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Full width */}
        <Hero />

        {/* Content Sections with Seamless Flow */}
        <div className="container mx-auto px-6 lg:px-8">
          {/* Technologies Section */}
          <section className="relative">
            <Technologies />
          </section>

          

          {/* Projects Section */}
          <section className="relative">
            <Projects />
          </section>

          {/* Elegant Divider */}
          <div className="relative flex items-center justify-center py-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>
            <div className="relative bg-gradient-to-r from-gray-800 to-black px-6 py-2 rounded-full border border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full animate-pulse"></div>
                <div
                  className="w-1 h-1 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <section className="relative pb-32">
            <Contact />
          </section>
        </div>
      </main>

      {/* Footer Background Decoration */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>
    </div>
  );
};

export default App;
