import User from "@components/User/User"

function App() {

  return (
    <>
      <User
        name="Ab Naeem" 
        email="abnaeem.bac@gmail.com" 
        age={ 23 }
        isRegistered={ false }
      />
    </>
  )
}

export default App
