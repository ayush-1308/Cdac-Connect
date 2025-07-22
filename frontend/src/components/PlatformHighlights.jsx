import { HiOutlineUserGroup, HiOutlineBookOpen, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

const features = [
  {
    icon: <HiOutlineUserGroup className="h-10 w-10 text-purple-400" />,
    title: 'Community Forums',
    description: 'Engage in discussions, ask questions, and connect with peers from various academic backgrounds.',
  },
  {
    icon: <HiOutlineBookOpen className="h-10 w-10 text-purple-400" />,
    title: 'Resource Sharing',
    description: 'Access and share notes, projects, and study materials easily within a secure environment.',
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="h-10 w-10 text-purple-400" />,
    title: 'Peer-to-Peer Mentoring',
    description: 'Find mentors or become one to guide fellow students, fostering a collaborative learning culture.',
  },
];

const PlatformHighlights = () => {
  return (
    <section className="bg-[#181824] text-white font-sans py-24 sm:py-32">
      <div className="c</section>ontainer mx-auto px-6 text-center">
        
        {/* Section Header */}
        <h2 className="text-5xl font-bold">Why CDAC Connect?</h2>
        <h2 className="text-3xl pt-5 font-bold">Why Not?</h2>
        <p className="text-xl text-gray-400 mt-4">
          Everything you need to excel in your academic life, all in one place.
        </p>
        
        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-8 text-center flex flex-col items-center
                         transition-all duration-300 ease-in-out 
                         transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-800/20"
            >
              {/* Icon Circle */}
              <div className="bg-purple-900/30 p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              
              {/* Card Title */}
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              
              {/* Card Description */}
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;