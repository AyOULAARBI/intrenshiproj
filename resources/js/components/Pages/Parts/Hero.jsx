import Card from './Card';
import hero from './hero.svg';

function Hero() {
  return (

 
      <div
        className=" bg-red-300 flex flex-col-reverse
         items-center px-6 mx-auto mt-0 space-y-0
        md:space-y-0 md:flex-row" style={{height:"89vh"}}>
        {/* <!-- Left item --> */}
        <div className="flex flex-col  space-y-12 md:w-1/2 h-full">
          <h1
            className="max-w-md text-4xl font-bold md:text-left md:text-5xl sm:text-center"
          >
            Afdal Agence dyal les services f l3alam hahaha
          </h1>
          <p className="max-w-sm sm:text-center text-darkGrayishBlue md:text-left">
            bla bla bla bla bla bla bla bla bla bla bla bla bla blablab blab bal bala babalbabla
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-red-400 rounded-full baseline hover:bg-red-600"
              >Get Started</a>
          </div>
        </div>
        {/* <!-- Image --> */}
        <div className="md:w-1/2">
          {/* <Card/> */}
          <img src={hero} alt="" />
        </div>
      </div>

  )
}

export default Hero