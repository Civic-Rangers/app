import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

export default function Dashboard() {
  const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

  return (
    <>
      <div className="p-0 pb-20">
        <header className="mb-6 flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-lg">
          <h1 className="text-1xl font-bold text-white">Profile</h1>
        </header>

        <div>
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)}
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </>
  )
}
