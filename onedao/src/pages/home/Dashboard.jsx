import React, { useState } from "react";
import {
  Bell,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [currentMonth, setCurrentMonth] = useState("Aug 2021");

  // Sample data for the dashboard
  const topDrivers = [
    {
      id: 1,
      name: "Maharrm Hasanli",
      img: "/api/placeholder/48/48",
      phone: "+994 (51) 456-78-90",
      orders: 5,
      income: 98,
    },
    {
      id: 2,
      name: "Gina Garza",
      img: "/api/placeholder/48/48",
      phone: "+994 (51) 123-45-67",
      orders: 5,
      income: 15,
    },
    {
      id: 3,
      name: "Brian Reed",
      img: "/api/placeholder/48/48",
      phone: "+994 (51) 387-65-20",
      orders: 5,
      income: 23,
    },
    {
      id: 4,
      name: "Tammy Spencer",
      img: "/api/placeholder/48/48",
      phone: "+994 (51) 456-78-90",
      orders: 5,
      income: 98,
    },
    {
      id: 5,
      name: "Joseph Brooks",
      img: "/api/placeholder/48/48",
      phone: "+994 (51) 456-78-15",
      orders: 5,
      income: 98,
    },
    {
      id: 6,
      name: "Juan Steward",
      img: "/api/placeholder/48/48",
      phone: "+994 (51) 999-22-56",
      orders: 5,
      income: 98,
    },
  ];

  const recentRides = [
    {
      id: 1,
      user: {
        name: "Sierra Ferguson",
        img: "/api/placeholder/40/40",
        phone: "+994 (51) 345-67-89",
      },
      carComfort: "simple",
      orderedTime: "04.12.2021 09:30",
      startLocation: "15 Kuku Area, Fukher Street, Tashkent, Uzbekistan",
      finishLocation: "15 Kuku Area, Fukher Street, Tashkent, Uzbekistan",
      income: "10 000 000 sum",
    },
    {
      id: 2,
      user: {
        name: "Sierra Ferguson",
        img: "/api/placeholder/40/40",
        phone: "+994 (51) 345-67-89",
      },
      carComfort: "elite",
      orderedTime: "04.12.2021 07:24",
      startLocation: "19 Habibulla Odqon ko'chasi, Toshkent, O'zbekiston",
      finishLocation: "21 Habibulla Odqon ko'chasi, Toshkent, O'zbekiston",
      income: "350 000 sum",
    },
    {
      id: 3,
      user: {
        name: "Sierra Ferguson",
        img: "/api/placeholder/40/40",
        phone: "+994 (51) 345-67-89",
      },
      carComfort: "convenient",
      orderedTime: "04.12.2021 03:15",
      startLocation: "78 Buyruq Ijrosi, Toshkent, O'zbekiston",
      finishLocation: "78 Buyruq Ijrosi, Toshkent, O'zbekiston",
      income: "1 550 000 sum",
    },
    {
      id: 4,
      user: {
        name: "Sierra Ferguson",
        img: "/api/placeholder/40/40",
        phone: "+994 (51) 345-67-89",
      },
      carComfort: "convenient",
      orderedTime: "17.11.2021 17:18",
      startLocation: "15 Kunayh ko'chasi, Toshkent 100017, O'zbekiston",
      finishLocation: "15 Kunayh ko'chasi, Toshkent 100017, O'zbekiston",
      income: "800 000 000 sum",
    },
    {
      id: 5,
      user: {
        name: "Sierra Ferguson",
        img: "/api/placeholder/40/40",
        phone: "+994 (51) 345-67-89",
      },
      carComfort: "convenient",
      orderedTime: "04.12.2021 06:50",
      startLocation: "1 Hujj Tashrifi ko'chasi, Toshkent 100081, O'zbekiston",
      finishLocation: "1 Hujj Tashrifi ko'chasi, Toshkent 100081, O'zbekiston",
      income: "10 000 000 sum",
    },
  ];

  const menuItems = [
    { id: 1, name: "Dashboard", icon: "📊", active: true },
    { id: 2, name: "Orders", icon: "📝" },
    { id: 3, name: "Rides", icon: "🚖" },
    { id: 4, name: "Clients", icon: "👥" },
    { id: 5, name: "Drivers", icon: "🚘" },
    { id: 6, name: "Shift", icon: "⏱️" },
    { id: 7, name: "Live map", icon: "🗺️" },
    { id: 8, name: "Car classes", icon: "🚗" },
    { id: 9, name: "Branches", icon: "🏢" },
    { id: 10, name: "Moderators", icon: "👨‍💼" },
    { id: 11, name: "Settings", icon: "⚙️" },
  ];

  // Static credentials for admin access
  const ADMIN_EMAIL = "admin@example.com";
  const ADMIN_PASSWORD = "Admin123!";

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        {/* Profile Section */}
        <div className="p-4 bg-black">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold mr-3">
              M
            </div>
            <div>
              <div className="font-bold">Maharram</div>
              <div className="text-xs text-gray-400">+994 (51) 470-10-30</div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="p-2">
          <div className="text-xs font-bold text-gray-400 mb-2 px-2">
            MAIN MENU
          </div>

          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center p-2 my-1 rounded-md ${
                item.active ? "bg-blue-500" : "hover:bg-gray-800"
              }`}
            >
              <div className="mr-3">{item.icon}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div>
              <span className="font-medium">Good morning, Maharram</span>
              <span className="ml-1">👋</span>
              <span className="text-gray-500 ml-4 text-sm">
                you have 1 new message.
              </span>
            </div>
          </div>
          <div className="flex">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full ml-2">
              <MessageSquare size={20} />
            </button>
            <div className="ml-4 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-sm">M</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Cards Row */}
          <div className="flex justify-between mb-8">
            <div className="w-1/2">
              <h2 className="font-bold text-lg mb-4">Knowledge base</h2>
              <div className="flex space-x-4">
                <div className="bg-blue-100 p-4 rounded-lg flex-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-blue-800">Total Orders</span>
                    <ChevronRight size={16} className="text-blue-500" />
                  </div>
                </div>
                <div className="bg-red-100 p-4 rounded-lg flex-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-red-800">Total Earnings</span>
                    <ChevronRight size={16} className="text-red-500" />
                  </div>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg flex-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-orange-800">Profits</span>
                    <ChevronRight size={16} className="text-orange-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 pl-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Top Drivers</h2>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
              <div className="space-y-2 max-h-72 overflow-y-auto pr-2">
                {topDrivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src={driver.img}
                        alt={driver.name}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">{driver.name}</div>
                        <div className="text-xs text-gray-500">
                          {driver.phone}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">
                        Orders: {driver.orders}
                      </div>
                      <div className="font-medium">
                        Income: $ {driver.income}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Statistic</h2>
              <div className="flex items-center">
                <button className="p-1">
                  <ChevronLeft size={18} className="text-gray-400" />
                </button>
                <span className="mx-2 text-sm">{currentMonth}</span>
                <button className="p-1">
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border mb-4">
              <div className="mb-4">
                <h3 className="font-medium mb-2">Progress score</h3>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm mr-4">Average grade</span>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Exams</span>
                </div>
              </div>

              {/* Chart placeholder - In a real app, you'd use a chart library */}
              <div className="h-40 border-b border-gray-200 relative">
                <div className="absolute h-full w-full flex items-center justify-center">
                  <div className="text-xs opacity-50">
                    Chart visualization would go here
                  </div>
                </div>
                <svg className="h-full w-full">
                  <path
                    d="M0,100 Q50,50 100,80 T200,90 T300,60 T400,80"
                    fill="none"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,130 Q50,150 100,120 T200,70 T300,100 T400,60"
                    fill="none"
                    stroke="rgb(16, 185, 129)"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute top-1/4 left-3/4 bg-gray-200 rounded-full text-xs px-2 py-1 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  <span>5</span>
                </div>
              </div>

              <div className="flex justify-between pt-2 text-xs text-gray-500">
                <div>Jan</div>
                <div>Feb</div>
                <div>Mar</div>
                <div>Apr</div>
                <div>May</div>
                <div>Jun</div>
                <div>Jul</div>
                <div>Aug</div>
                <div>Sep</div>
                <div>Oct</div>
                <div>Nov</div>
                <div>Dec</div>
              </div>
            </div>
          </div>

          {/* Rides Table */}
          <div className="bg-white rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left font-medium text-gray-500">
                    User
                  </th>
                  <th className="p-4 text-left font-medium text-gray-500">
                    Car Comfort
                  </th>
                  <th className="p-4 text-left font-medium text-gray-500">
                    Ordered Time
                  </th>
                  <th className="p-4 text-left font-medium text-gray-500">
                    Start Location
                  </th>
                  <th className="p-4 text-left font-medium text-gray-500">
                    Finish Location
                  </th>
                  <th className="p-4 text-left font-medium text-gray-500">
                    Income
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentRides.map((ride) => (
                  <tr key={ride.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center">
                        <img
                          src={ride.user.img}
                          alt={ride.user.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="font-medium">{ride.user.name}</div>
                          <div className="text-xs text-gray-500">
                            {ride.user.phone}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{ride.carComfort}</td>
                    <td className="p-4">{ride.orderedTime}</td>
                    <td className="p-4">
                      <div className="max-w-xs truncate">
                        {ride.startLocation}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="max-w-xs truncate">
                        {ride.finishLocation}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className={`text-green-500 font-medium`}>
                        {ride.income}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="p-4 flex justify-between items-center text-sm">
              <div>1-5 of items</div>
              <div className="flex items-center">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full ml-2 text-gray-700">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full ml-2 text-gray-400">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
