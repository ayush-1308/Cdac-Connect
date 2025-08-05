const TeamMemberCard = ({ name, username, quote, img }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full">
      <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center mb-4 flex-shrink-0">
        {/* <span className="text-xs text-gray-500">128 x 128</span> */}
        {img ? (
          <img src={`/${img}`} alt={name} className="w-full h-full rounded-full object-cover" />
        ) : (
          <span className="text-xs text-gray-500">No Image Available</span>
        )}
      </div>
      <h3 className="text-2xl font-bold text-blue-800">{name}</h3>
      <div className="flex items-center text-gray-500 mb-4">
        <svg className="w-4 h-4 mr-1.5 text-orange-500" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span className="text-orange-500 font-semibold">{username}</span>
      </div>
      <blockquote className="w-full text-lg italic text-gray-600 border-l-4 border-yellow-400 pl-4 py-2 my-4">
        "{quote}"
      </blockquote>
      
    </div>
  );
};

export default TeamMemberCard;