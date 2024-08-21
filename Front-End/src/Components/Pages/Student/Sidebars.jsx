import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsGraphUp, BsFileText, BsBook, BsGraphDown, 
  BsCalendar, BsChatDots, BsGear 
} from 'react-icons/bs';
export default function Sidebars() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className={`fixed top-0 left-0 h-full bg-[#2c3e50] text-white overflow-y-auto pt-16 transition-width duration-300 z-50 ${isOpen ? 'w-[250px]' : 'w-[80px]'}`}>
    <div className="text-center mb-6">
      <img src="../assets/bg1.png" alt="Logo" className="w-[50px] h-auto mx-auto" />
    </div>
    <div className="text-center text-xl font-bold mb-8">Student</div>
    <ul className="list-none p-0">
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsGraphUp className="mr-3" />
        <Link to="/Student-dashboard" className="text-white no-underline">Dashboard</Link>
      </li>
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsFileText className="mr-3" />
        <Link to="/student/assignments" className="text-white no-underline">Assignments</Link>
      </li>
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsBook className="mr-3" />
        <Link to="/student/exams" className="text-white no-underline">Exams</Link>
      </li>
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsGraphDown className="mr-3" />
        <Link to="/student/performance" className="text-white no-underline">Performance</Link>
      </li>
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsCalendar className="mr-3" />
        <Link to="/student/attendance" className="text-white no-underline">Attendance</Link>
      </li>
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsBook className="mr-3" />
        <Link to="/student/library" className="text-white no-underline">Library</Link>
      </li>
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsChatDots className="mr-3" />
        <Link to="/student/communication" className="text-white no-underline">Announcement</Link>
      </li>
      <li className="flex items-center py-3 px-5 text-lg border-b border-[#34495e] hover:bg-[#34495e] transition-colors">
        <BsGear className="mr-3" />
        <Link to="/student/settings" className="text-white no-underline">Profile</Link>
      </li>
    </ul>
    <div
      className="absolute top-5 right-0 w-8 h-8 bg-[#34495e] rounded-full cursor-pointer flex items-center justify-center"
      onClick={toggleSidebar}
    >
      <span className={`text-white text-lg transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▲</span>
    </div>
  </div>
  )
}
