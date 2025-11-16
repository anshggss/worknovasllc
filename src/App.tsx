import { Menu, X, Cloud, Database, Shield, Brain, Users, Briefcase, CheckCircle } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">WorkNovas</span>
              <span className="ml-2 text-sm text-gray-600">Technologies</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Streamlining Technology,<br />Driving Results
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto">
                U.S.–India staffing & engineering partner delivering elite tech talent across cloud, data, cyber, AI, and more
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Austin-born, globally present
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Get Started
                </a>
                <a href="#services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Comprehensive workforce solutions tailored to your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Engineering</h3>
                <p className="text-gray-600">Expert cloud architects and engineers for AWS, Azure, and GCP implementations</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Database className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Engineering</h3>
                <p className="text-gray-600">Skilled data engineers and analysts to transform your data into insights</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
                <p className="text-gray-600">Security experts to protect your infrastructure and data assets</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Machine Learning</h3>
                <p className="text-gray-600">AI specialists to drive innovation and intelligent automation</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Staff Augmentation</h3>
                <p className="text-gray-600">Contingent, contract, and temporary labor solutions to scale your team quickly</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Direct Hire</h3>
                <p className="text-gray-600">Permanent placement services to find the perfect long-term fit for your organization</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Temp-to-Perm</h3>
                <p className="text-gray-600">Flexible hiring model with the opportunity to transition to permanent roles</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-blue-600 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">About WorkNovas Technologies</h2>
            <p className="text-xl text-blue-50 mb-6">
              A leader in workforce solutions, committed to delivering beyond traditional staffing. We specialize in technology workforce solutions, staffing, project solutions, and recruitment process outsourcing (RPO).
            </p>
            <p className="text-lg text-blue-100">
              Our experienced professionals are knowledgeable in all aspects of engineering and technology, providing quality personnel across IT, Engineering, Professional Services, Scientific Research, and Clinical sectors.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">Ready to find your next great hire or opportunity?</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">WorkNovas Technologies</h3>
              <p className="text-sm">Austin, TX, United States</p>
              <p className="text-sm mt-2">Elite tech talent across cloud, data, cyber, and AI</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">Staff Augmentation</a></li>
                <li><a href="#services" className="hover:text-white transition">Direct Hire</a></li>
                <li><a href="#services" className="hover:text-white transition">Temp-to-Perm</a></li>
                <li><a href="#services" className="hover:text-white transition">RPO Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Expertise</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">Cloud Engineering</a></li>
                <li><a href="#services" className="hover:text-white transition">Data Engineering</a></li>
                <li><a href="#services" className="hover:text-white transition">Cybersecurity</a></li>
                <li><a href="#services" className="hover:text-white transition">AI & ML</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="https://www.linkedin.com/company/worknovas-technologies" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 WorkNovas Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
