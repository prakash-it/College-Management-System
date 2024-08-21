import React from 'react'

export default function Dashboard() {
  return (
    <div className="flex">
    {/* <Sidebar /> */}
    <div className="flex-1 p-5 ml-[240px]">
      <section className="mb-10">
        <h2 className="text-2xl mb-5 text-gray-800">Overview</h2>
        <div className="flex gap-5">
          <div className="bg-white p-5 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform cursor-pointer flex-1 max-w-xs">
            <h3 className="text-lg mb-2 text-blue-500">Total Students</h3>
            <p className="text-base text-gray-600">500</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform cursor-pointer flex-1 max-w-xs">
            <h3 className="text-lg mb-2 text-blue-500">Total Teachers</h3>
            <p className="text-base text-gray-600">50</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg hover:transform hover:-translate-y-1 transition-transform cursor-pointer flex-1 max-w-xs">
            <h3 className="text-lg mb-2 text-blue-500">Total Classes</h3>
            <p className="text-base text-gray-600">50</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-5 text-gray-800">Recent Activity</h2>
        {/* Add a list of recent activity items */}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-5 text-gray-800">Upcoming Events</h2>
        {/* Add a calendar or list of upcoming events */}
      </section>

      {/* Add more sections for other parts of the teacher dashboard */}
    </div>
  </div>
  )
}
