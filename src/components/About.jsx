import React from "react";
import profilePic from "../assets/profile.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-20 rounded-full filter blur-3xl animate-blob1 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-blob2 pointer-events-none"></div>

      {/* SVG Waves */}
      <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 320">
        <path
          fill="#93c5fd"
          fillOpacity="0.15"
          d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-in">
        {/* Profile Image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-400 opacity-40 blur-2xl"></div>
          <img
            src={profilePic}
            alt="Waqas Jamal Siddiqui"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-2xl object-cover relative z-10"
          />
          <span className="absolute inset-0 rounded-full border-4 border-blue-300 animate-spin-slow pointer-events-none"></span>
        </div>

        {/* About Text */}
        <div className="text-center md:text-left space-y-5 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-white/80 font-medium leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              Waqas Jamal Siddiqui
            </span>
            , a driven{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              Full Stack Developer & AI/ML enthusiast
            </span>{" "}
            based in Gorakhpur, Uttar Pradesh.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-white/80 font-medium leading-relaxed">
            I'm currently pursuing my B.Tech at Dr. A.P.J. Abdul Kalam Technical University. My passion lies in turning complex problems into efficient, intelligent, and user-centric software solutions.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-white/80 font-medium leading-relaxed">
            I'm deeply motivated by{" "}
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              curiosity, consistency, and creative thinking
            </span>
            . Whether solo or in a team, I strive to build solutions that make a meaningful impact.
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-out forwards;
          }
          @keyframes blob1 {
            0%, 100% { transform: translateY(0) scale(1);}
            50% { transform: translateY(-30px) scale(1.1);}
          }
          .animate-blob1 {
            animation: blob1 8s infinite ease-in-out;
          }
          @keyframes blob2 {
            0%, 100% { transform: translateY(0) scale(1);}
            50% { transform: translateY(30px) scale(1.1);}
          }
          .animate-blob2 {
            animation: blob2 10s infinite ease-in-out;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;
