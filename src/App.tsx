
import { useState } from 'react'
import { ChevronDown, Menu, Search, User, X } from 'lucide-react'
import { useConfig } from './contexts/ConfigContext'

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const config = useConfig()

  const products = [
    { name: 'Products', link: '#' },
    { name: 'Industries', link: '#' },
    { name: 'Learning', link: '#' },
    { name: 'Support', link: '#' },
    { name: 'Company', link: '#' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src={config.siteIdentity?.logoUrl || 'https://via.placeholder.com/80x40?text=Logo'}
                  alt={config.siteIdentity?.name || 'Logo'}
                />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {products.map((product) => (
                  <a
                    key={product.name}
                    href={product.link}
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    {product.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              <div className="relative mx-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-salesforce-blue focus:border-salesforce-blue sm:text-sm"
                  placeholder="Search"
                />
              </div>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                Login
              </a>
              <button
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: config.theming?.primaryColor || undefined }}
              >
                {config.hero?.ctaText || 'Try for Free'}
              </button>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-salesforce-blue"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.link}
                  className="border-salesforce-blue text-salesforce-blue block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {product.name}
                </a>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <User className="h-10 w-10 rounded-full text-gray-400" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Account
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-salesforce-blue to-salesforce-dark-blue">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {config.hero?.title || 'We bring companies and customers together'}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-100">
              {config.hero?.subtitle || 'Salesforce helps you find more customers, win their business, and keep them happy so you can grow faster than ever.'}
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <a
                href={config.hero?.ctaLink || '#'}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: config.theming?.primaryColor || '#ffffff', color: '#ffffff' }}
              >
                {config.hero?.ctaText || 'Start my free trial'}
              </a>
              <button className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Watch demos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {config.whatsNew?.title || "What's new at Salesforce"}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(config.whatsNew?.items || [
              { title: 'Product Feature 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ctaText: 'Learn more', ctaLink: '#' },
              { title: 'Product Feature 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ctaText: 'Learn more', ctaLink: '#' },
              { title: 'Product Feature 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ctaText: 'Learn more', ctaLink: '#' },
            ]).map((item, idx) => (
              <div
                key={idx}
                className="pt-6 pb-8 px-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {item.description}
                </p>
                <a
                  href={item.ctaLink || '#'}
                  className="mt-4 inline-flex items-center text-salesforce-blue hover:text-salesforce-dark-blue text-sm font-medium"
                >
                  {item.ctaText || 'Learn more'}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['About Salesforce', 'Popular Links', 'Support', 'Legal'].map(
              (section) => (
                <div key={section}>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    {section}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          Link {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; 2023 Salesforce, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
  