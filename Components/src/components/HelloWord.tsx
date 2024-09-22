import { useEffect, useState } from 'react'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function HelloWorld() {
  const [randomColor, setRandomColor] = useState('rgb(0, 0, 0)')
  useEffect(() => {
    const timeout: NodeJS.Timeout = setInterval(() => {
      setRandomColor(`rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`)
    }, 1000)
    return () => clearInterval(timeout)
  }, [])
  return (
    <div className="flex justify-center mt-[35vh]">
      <div>
        <div className="text-5xl font-thin transition-colors duration-1000 ease-linear" style={{ color: randomColor }}>
          Rika-React-Template
        </div>
        <div className="my-4 flex justify-center gap-5 text-gray-500">
          <a
            target="_blank"
            href="https://rika-me.netlify.app/#/"
            className="icon-[mdi--user] text-5xl hover:text-gray-700"
            rel="noopener noreferrer"
          />
          <a
            target="_blank"
            href="https://github.com/rika-template/vue-template"
            className="icon-[mdi--github] text-5xl hover:text-gray-700"
            rel="noopener noreferrer"
          />
          <a
            target="_blank"
            href="https://gitee.com/rika-template/vue-template"
            className="icon-[simple-icons--gitee] text-5xl hover:text-gray-700"
            rel="noopener noreferrer"
          />
        </div>
      </div>

    </div>
  )
}

export default HelloWorld
