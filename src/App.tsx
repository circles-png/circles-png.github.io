const App = () => <>
  <div className='grid place-content-center h-full bg-black text-white text-center'>
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
    <div className='p-8 sm:p-16 border-t border-t-gray-300 rounded-2xl flex flex-col gap-4 sm:gap-8 backdrop-blur-sm'>
      <h1 className='text-4xl font-bold text-center'>hi world 👋</h1>
      <main>
        <p>i'm <a href='https://github.com/circles-png' className='underline decoration-2 underline-offset-2' target='_blank'>circles.png</a>!</p>
        <hr className='m-2 border-gray-500'/>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8 divide-gray-500'>
          <div>
            <span className='font-bold'>likes:</span>
            <ul className='list-disc list-inside text-left'>
              <li>making things</li>
              <li>music</li>
              <li>monospace fonts</li>
              <li>gaming</li>
            </ul>
          </div>
          <div>
            <span className='font-bold'>dislikes:</span>
            <ul className='list-disc list-inside text-left'>
              <li>not much</li>
            </ul>
          </div>
        </div>
        <hr className='m-2 border-gray-500' />
        <h2 className='font-bold'>talk!</h2>
        <div className='flex justify-center'>
          <a
            href='https://discordapp.com/users/262120465525506049'
            className='decoration-[#5865F2] underline decoration-2 underline-offset-2'
            target='_blank'
          >
            discord
          </a>
        </div>
      </main>
      <span className='text-sm text-gray-500 text-right'>carrd? what's that?</span>
    </div>
  </div>
</>
export default App
