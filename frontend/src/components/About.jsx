import Navbar from './Navbar';
import TeamMemberCard from './ui/TeamMemberCard';

const teamMembers = [
    {
    name: 'Aman Nanda',
    username: 'aman-nanda17',
    quote: 'There are 10 types of people in this world, those who understand binary and those who don\'t.',
    img: 'aman.jpg',
    },
    {
    name: 'Himanshu Rajpoot',
    username: 'himanshuraj62',
    quote: 'Logic builds the world. Imagination builds the interface.',
    img: 'himanshu1.jpg',
  },
  {
    name: 'Ayush Singh',
    username: 'ayush-1308',
    quote: 'There are APIs, and then there are APIs that change the world.',
    img: 'ayush.png',
  },
  {
    name: 'Divyanshu Vanwani',
    username: 'Divyanshu3103',
    quote: "Code is like humor, When you have to explain it, it's bad",
    img: 'divyanshu.jpg',
  },
  {
    name: 'Ronak Kudal',
    username: 'Ronakkudal',
    quote: 'Code is the tool that turns imagination into innovation.',
    img: 'ronak.jpg',
  },
 
];

const About = () => {
  return (

    <>
    
    <div className="bg-[#181824] min-h-screen font-sans">
       <button
      onClick={() => (window.location.href = '/')}
      className="text-white bg-transparent border-none outline-none focus:outline-none hover:underline text-lg items-center"
      >
      ← Go Back to Home
    </button>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white">
            Cdac Connect Team Showcase
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            We are a passionate group of developers and designers dedicated
            to building innovative solutions. Get to know the people who brought Cdac Connect to life.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.username} {...member} />
                ))}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
