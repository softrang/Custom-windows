import React, { useEffect } from 'react';

function GoogleCustomSearch() {
  useEffect(() => {
    // Dynamically add the CSE script
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=b0e595cc844b341d0';
    script.async = true;
    document.body.appendChild(script);
    script.style.width="100%"

    return () => {
      // Cleanup the script if needed on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='w-full'>
      {/* The Google Custom Search Element */}
      <div className="gcse-search"></div>

     

    </div>
  );
}

export default GoogleCustomSearch;
