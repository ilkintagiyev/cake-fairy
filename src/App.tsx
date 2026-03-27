import { Toaster } from 'react-hot-toast'
import Routing from './Routing'

const App = () => {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Routing/>
    
    </>
  )
}

export default App