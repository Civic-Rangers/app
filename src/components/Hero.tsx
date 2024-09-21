import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate()

  const handleNeedSpotClick = () => {
    navigate('/seeker/signup')
  }

  const handleHaveSpotClick = () => {
    navigate('/donor/signup');
  };

  const handleReportFloodClick = () => {
    navigate('/flood-alert');
  }

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-balance text-5xl font-bold text-white">Need a spot? Spot Me.</h1>
          <p className="mb-5 text-white">
            Find a safe spot or offer yours to others during floods. Stay protected and help your community with Spot
            Me!
          </p>
          <div className="flex justify-center gap-2">
            <button className="btn btn-primary" onClick={handleNeedSpotClick}>
              I need a spot
            </button>
            <button className="btn btn-secondary" onClick={handleHaveSpotClick}>
              I have a spot
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-1">          
            <button className="btn btn-active btn-accent" onClick={handleReportFloodClick}>
              Report Flood Zone
            </button>
          </div>
          <div className="flex justify-center gap-2">       
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
