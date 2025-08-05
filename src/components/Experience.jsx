import React from "react";
import {
  FaLaptopCode,
  FaCloudSun,
  FaBook,
  FaStore,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const experiences = [
  {
    year: "Jan–Jun 2025",
    role: "Frontend Intern – Olivkart FZE LLC",
    description:
      "Worked remotely using HTML, CSS, and JavaScript to enhance web interfaces, improve responsiveness, and implement UI changes in collaboration with designers.",
    icon: <FaLaptopCode className="text-2xl text-blue-600 dark:text-blue-300" />,
  },
  {
    year: "2025",
    role: "Simify – Spotify Song Recommender",
    description:
      "Engineered a Flask-based music recommendation system using Spotify's API to deliver similar songs by analyzing genre, artist, and audio features. Built with Python and deployed with styled HTML UI.",
    icon: <FaRobot className="text-2xl text-blue-600 dark:text-blue-300" />,
  },
  {
    year: "2025",
    role: "NuroFi – AI-Powered Crypto Prediction",
    description:
      "Built a platform using Python, Django, and TensorFlow to forecast crypto trends using LSTM models and real-time tracking.",
    icon: <FaChartLine className="text-2xl text-blue-600 dark:text-blue-300" />,
  },
  {
    year: "2025",
    role: "LearnX – Online Library Portal",
    description:
      "Developed a digital library using HTML, CSS, JS, and Firebase for students to access and manage books and documents in real-time.",
    icon: <FaBook className="text-2xl text-blue-600 dark:text-blue-300" />,
  },
  {
    year: "2025",
    role: "Geekonik Summer Training – ML & DL",
    description:
      "Completed a 4-week certified training in Machine Learning and Deep Learning organized by Geekonik and BIT, Gorakhpur.",
    icon: <FaRobot className="text-2xl text-blue-600 dark:text-blue-300" />,
  },
  {
    year: "2025",
    role: "Multifunctional Web Platform",
    description:
      "Built a responsive web app integrating restaurant ordering, mini-games, and utility tools using HTML, CSS, JavaScript, and PHP.",
    icon: <FaStore className="text-2xl text-blue-600 dark:text-blue-300" />,
  },
  {
    year: "2024",
    role: "Real-Time Weather App",
    description:
      "Created a responsive Flask-based weather app using WeatherAPI and Bootstrap to display real-time weather data.",
    icon: <FaCloudSun className="text-2xl text-blue-600 dark:text-blue-300" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative px-4 py-20 bg-white dark:bg-black overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-blob2 pointer-events-none"></div>

      {/* Title */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Experience Timeline
        </h2>
      </div>

      {/* Timeline Path */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="border-l-4 border-blue-500 dark:border-blue-300 relative">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-10 pl-8 pr-4 relative group ${
                index % 2 === 0 ? "ml-0" : "ml-12 sm:ml-32"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-5 h-5 bg-blue-500 dark:bg-blue-300 rounded-full -left-[11px] top-2.5 border-4 border-white dark:border-black"></div>

              {/* Card Content */}
              <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-blue-100 dark:border-blue-800 hover:shadow-xl transition-transform transform hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  {exp.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.year} — {exp.role}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        .animate-blob1 {
          animation: blob1 8s infinite ease-in-out;
        }

        @keyframes blob2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(30px) scale(1.1); }
        }
        .animate-blob2 {
          animation: blob2 10s infinite ease-in-out;
        }

        .glow-text {
          text-shadow: 0 0 10px rgba(59,130,246,0.7), 0 0 20px rgba(59,130,246,0.5);
        }
      `}</style>
    </section>
  );
};

export default Experience;
