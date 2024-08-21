import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import EventCalendar from './EventCalender';
// import Announcement from './Announcement';
// import Performance from './Performance';
import axios from 'axios';

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/events/getall');
      setEvents(response.data.events || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/performance/getall');
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error('Error fetching student performance:', error);
    }
  };
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className={`flex-1 p-5 transition-margin duration-300 ${isOpen ? 'ml-[250px]' : 'ml-[80px]'}`}>
        <div className="flex gap-5 flex-1 mb-10">
          <section className="flex-1 mb-10">
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

          <section className="flex-1 mb-10">
            {/* <EventCalendar events={events} /> */}
          </section>
        </div>

        <div className="mt-5 flex gap-5">
          {/* <Performance studentPerformance={studentPerformance} />
          <Announcement announcements={announcements} /> */}
        </div>
      </div>
    </div>
  )
}
