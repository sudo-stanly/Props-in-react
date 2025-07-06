import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name="Tony Stark" age={30} isStudent={true}/> {/* changing pops of boolean to false will change the props property, usng ternary operator " ? true : false " */}
      <Student name="John Doe" age={65} isStudent={false}/>
    </>
  )
}

export default App