import { forwardRef } from "react";
import { FaGithub } from 'react-icons/fa';

const contributors = [
  { name: 'Aman', email: 'nandaaman.99948@gmail.com', githubUser: 'aman-nanda17' },
  { name: 'Himanshu', email: 'himanshurajpoot2233@gmail.com', githubUser: 'himanshuraj62' },
  { name: 'Ayush', email: 'ayushsinghlts123@gmail.com', githubUser: 'ayush-1308' },
  { name: 'Divyanshu', email: 'divyanshuvanwani@gmail.com', githubUser: 'Divyanshu3103' }, 
  { name: 'Ronak', email: 'ronakkudal00@gmail.com', githubUser: 'Ronakkudal' },
];

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <div className="bg-[#181824] text-white text-center py-10">
  <h2 className="text-3xl md:text-4xl font-bold">Collaborators</h2>
</div>

<footer ref={ref} className="bg-[#181824] text-gray-400 font-sans pt-10 pb-12">
  <div className="container mx-auto px-6">
    {/* Contributor columns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
      {contributors.map((contributor) => (
        <div key={contributor.name}
          className="flex flex-col items-center space-y-3 p-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-purple-900/20 hover:scale-105">
          <h3 className="text-lg font-bold text-white">{contributor.name}</h3>
          <a href={`mailto:${contributor.email}`} className="text-sm hover:text-purple-400 transition-colors">
            {contributor.email}
          </a>
          <a href={`https://github.com/${contributor.githubUser}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm hover:text-purple-400 transition-colors">
            <FaGithub className="h-4 w-4" />
            <span>github.com/{contributor.githubUser}</span>
          </a>
        </div>
      ))}
    </div>

    {/* Divider */}
    <div className="mt-16 pt-8 border-t border-gray-800 text-center">
      <p className="text-gray-500">© {currentYear} All Rights Reserved</p>
    </div>
  </div>
</footer>

    </>
  );
});

export default Footer;

