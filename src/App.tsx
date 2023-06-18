const App = () => <>
  <div className='grid place-content-center h-full bg-black text-white'>
    {[...Array(3).keys()].map(size => size + 1).map(
      size => [...Array(100).keys()].map(
        number => {
          const xOffset = Math.random() * 100,
                yOffset = Math.random() * 100
          return <div
            className='absolute'
            style={{
              animationDuration      : `${size + 10}s`,
              animationIterationCount: 'infinite',
              animationName          : 'rise',
              animationTimingFunction: 'linear'
            }}
            key={number}
          >
            <div
              className='bg-transparent'
              style={{
                boxShadow: `${xOffset}vw ${yOffset}vh #fff`,
                height   : `${size}px`,
                width    : `${size}px`
              }}
            ></div>
            <div
              className='bg-transparent'
              style={{
                boxShadow: `${xOffset}vw ${yOffset + 100}vh #fff`,
                height   : `${size}px`,
                width    : `${size}px`
              }}
            ></div>
          </div>
        }
      )
    )}

    <div>
      <h1 className='text-4xl font-bold text-center'>hi world</h1>
      <span className='text-sm'>carrd? what's that?</span>
    </div>
  </div>
</>
export default App
