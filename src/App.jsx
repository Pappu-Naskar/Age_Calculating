import { useState,useEffect} from 'react'
 


function App() {
  const dob = new Date("2004-08-04T00:00:00")
  // const now = new Date()
  const [age , setAge] = useState({})
  const [isBirthday , setIsBirthday] = useState(false)

  

  useEffect(()=>{
    const timer = setInterval(() => {
       const today = new Date()
       const diff = today - dob
       //years , Months , day
        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth()
        let days = today.getDate() - dob.getDate()
          if(days<0){
            months--
            const lastMonth = new Date(today.getFullYear(),today.getMonth(),0)
            days+=lastMonth.getDate()
          }
          if(months<0){
            years--
            months+=12
          }
        const  milliseconds = diff % 1000
        const totalSeconds = Math.floor(diff / 1000)
        const seconds = totalSeconds % 60
        const totalMinutes = Math.floor(totalSeconds / 60)
        const  minutes = totalMinutes % 60
        const  totalHours = Math.floor(totalMinutes / 60)
        const hours = totalHours % 24
        // const totalDays = Math.floor(totalHours / 24)

        // check birthday
        setIsBirthday(
          today.getDate() == dob.getDate() && today.getMonth() == dob.getMonth()        
          
        )

      setAge({years,months,days,hours,minutes,seconds,milliseconds})
    },1)
    return () => clearInterval(timer)
  })


  return (
    <div className='h-screen flex items-center justify-center bg-black'>

      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-slate-400 to-black">
          <h1 className='text-white text-5xl text-bold md:text-5xl fron-light mb-2' >Life left...</h1>
          {/* <p className='text-white'>Today : {now.toDateString()}</p> */}
          {isBirthday && (
            <div className='text-xl font-bold text-pink-700 animate-bounce'>Wish you 🎉Happy Birthday🎊 Sir...</div>
           
          )}
          <div className='flex flex-wrap gap-4 justify-center items-end text-white'>
            <div className='text-center'>
                <div className='text-6xl front-bold'>{age.years}</div>
                <div className='uppercase text-sm tracking-widest mt-1'>Years</div> 
            </div>
         
            
              <div className='text-center'>
                <div className='text-6xl front-bold'>{age.months}</div>
                <div className='uppercase text-sm tracking-widest mt-1'>Months</div> 
            </div>

              <div className='text-center'>
                <div className='text-6xl front-bold'>{age.days}</div>
                <div className='uppercase text-sm tracking-widest mt-1'>Days</div> 
            </div>
              <div className='text-center'>
                <div className='text-6xl front-bold'>{age.hours}</div>
                <div className='uppercase text-sm tracking-widest mt-1'>Hours</div> 
            </div>
              <div className='text-center'>
                <div className='text-6xl front-bold'>{age.minutes}</div>
                <div className='uppercase text-sm tracking-widest mt-1'>Minutes</div> 
            </div>
              <div className='text-center'>
                <div className='text-6xl front-bold'>{age.seconds}</div>
                <div className='uppercase text-sm tracking-widest mt-1'>Seconds</div> 
            </div>
              {/* <div className='text-center'>
                <div className='text-6xl front-bold'>{age.milliseconds}</div>
                <div className='uppercase text-sm tracking-widest mt-1'>MS</div> 
            </div> */}

          </div>
      
      </div>
    
      
    </div>
  )
}

export default App
