const App = () => <>
  <div className='grid place-content-center h-full bg-black text-white text-center transition'>
    {[...Array(3).keys()].map(size => size + 1).map(
      size => [...Array(30).keys()].map(
        number => {
          const xOffset = Math.random() * 100,
                yOffset = Math.random() * 100
          return <div
            className='absolute'
            style={{
              animationDuration      : `${size * 30 + 30}s`,
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
    <div className='p-8 sm:p-16 border-t border-t-gray-300 rounded-2xl flex flex-col gap-4 sm:gap-8 backdrop-blur-sm animate-fadeIn'>
      <h1 className='text-4xl font-bold text-center animate-fadeIn'>hi world 👋</h1>
      <main className='animate-fadeIn'>
        <p className='animate-fadeIn'>
          i'm
          <a
            href='https://github.com/circles-png'
            className='underline decoration-2 underline-offset-2 animate-fadeIn ml-1'
            target='_blank'
          >
            circles.png
          </a>
          !
        </p>
        <hr className='m-2 border-gray-500 animate-fadeIn'/>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8 divide-gray-500 animate-fadeIn'>
          <div className='animate-fadeIn'>
            <span className='font-bold animate-fadeIn'>likes:</span>
            <ul className='list-disc list-inside text-left animate-fadeIn'>
              <li>making things</li>
              <li>music</li>
              <li>monospace fonts</li>
              <li>gaming</li>
            </ul>
          </div>
          <div className='animate-fadeIn'>
            <span className='font-bold animate-fadeIn'>dislikes:</span>
            <ul className='list-disc list-inside text-left animate-fadeIn'>
              <li>not much</li>
            </ul>
          </div>
        </div>
        <hr className='m-2 border-gray-500 animate-fadeIn' />
        <h2 className='font-bold animate-fadeIn'>talk!</h2>
        <div className='flex justify-center animate-fadeIn'>
          <a
            href='https://discordapp.com/users/262120465525506049'
            className='decoration-[#5865F2] underline decoration-2 underline-offset-2 animate-fadeIn'
            target='_blank'
          >
            discord
          </a>
        </div>
      </main>
      <span className='text-sm text-gray-500 text-right animate-fadeIn'>carrd? what's that?</span>
    </div>
  </div>
</>
export default App
