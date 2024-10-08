import Link from 'next/link'

// Import icons from Heroicons (you may need to install @heroicons/react)
import { 
  BookOpenIcon, 
  WrenchIcon, 
  CogIcon, 
  ExclamationTriangleIcon,
  ChartBarIcon,
  ServerIcon,
  SignalIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function WikiPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <header className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3">
            <BookOpenIcon className="h-10 w-10 text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-800">SOP Wiki</h1>
          </div>
          <p className="text-gray-600 mt-2 ml-13">Technical documentation and standard operating procedures for Signal Smarts network solutions</p>
        </header>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 mb-8 rounded-r-lg shadow-sm flex items-start" role="alert">
          <ChartBarIcon className="h-6 w-6 mr-2 flex-shrink-0" />
          <div>
            <p className="font-semibold">Welcome to the Signal Smarts SOP Wiki</p>
            <p className="mt-1">This resource contains comprehensive technical information and procedures for our network solutions.</p>
          </div>
        </div>

        <main className="bg-white shadow rounded-lg p-6 mb-8">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
              <ServerIcon className="h-6 w-6 mr-2 text-blue-500" />
              About This Wiki
            </h2>
            <p className="text-gray-700 mb-4">
              The SOP Wiki serves as a central repository for Signal Smarts' technical operations, including:
            </p>
            <ul className="list-none text-gray-700 mb-4 pl-5 space-y-2">
              {[
                "Detailed technical specifications",
                "Step-by-step procedures for installation and maintenance",
                "Comprehensive troubleshooting guides",
                "Best practices for network design and optimization",
                "Documentation on custom solutions and integrations"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <SignalIcon className="h-5 w-5 mr-2 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2 flex items-center">
              <CogIcon className="h-6 w-6 mr-2 text-blue-500" />
              Wiki Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Network Design",
                  icon: <ServerIcon className="h-6 w-6 text-blue-500" />,
                  items: ["Site Survey Procedures", "Capacity Planning", "Frequency Management"]
                },
                {
                  title: "Installation",
                  icon: <WrenchIcon className="h-6 w-6 text-green-500" />,
                  items: ["Access Point Mounting", "Cabling Standards", "Network Configuration"]
                },
                {
                  title: "Maintenance",
                  icon: <CogIcon className="h-6 w-6 text-yellow-500" />,
                  items: ["Routine Checks", "Firmware Updates", "Performance Optimization"]
                },
                {
                  title: "Troubleshooting",
                  icon: <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />,
                  items: ["Common Issues", "Diagnostic Tools", "Escalation Procedures"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
                    {category.icon}
                    <span className="ml-2">{category.title}</span>
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link href="#" className="text-blue-600 hover:text-blue-800 hover:underline flex items-center">
                          <SignalIcon className="h-4 w-4 mr-2" />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
              <ClockIcon className="h-6 w-6 mr-2 text-blue-500" />
              Recent Updates
            </h2>
            <ul className="space-y-3">
              {[
                { update: "Added new section on 802.11ax (Wi-Fi 6) deployment", time: "2 days ago" },
                { update: "Updated troubleshooting guide for mesh networks", time: "1 week ago" },
                { update: "New SOP for integrating IoT devices in campground networks", time: "2 weeks ago" }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <SignalIcon className="h-5 w-5 mr-2 text-blue-500" />
                  <span className="text-gray-700">{item.update} - </span>
                  <span className="text-gray-500 ml-1 text-sm">{item.time}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="text-sm text-gray-600 mt-8 pt-4 border-t flex items-center justify-between">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="flex items-center">
            <WrenchIcon className="h-5 w-5 mr-1 text-gray-500" />
            For technical support, please contact Joseph
          </p>
        </footer>
      </div>
    </div>
  )
}