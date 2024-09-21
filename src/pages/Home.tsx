export function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: 'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Need a spot? Spot Me.</h1>
          <p className="mb-5">
          Find a safe spot or offer yours to others during floods. Stay protected and help your community with Spot Me!
          </p>
          <div className="flex justify-center gap-2">
            <button className="btn btn-primary">I need a spot</button>
            <button className="btn btn-secondary">I have a spot</button>
          </div>
        </div>
      </div>
    </div>
  )
}
