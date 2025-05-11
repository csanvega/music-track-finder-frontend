import { useState } from 'react'
import Button from '@mui/material/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Initial Setup</h1>
      <div>
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
