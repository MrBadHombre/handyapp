import Header from './Components/header'

import Button from '@mui/material/Button'

function App() {
  return (
    <>
      <Button style={{ color: 'white', height: '200px', padding: '50px' }}>
        Button
      </Button>
      <Button style={{ color: 'yellow' }}>Button</Button>

      <Header />
    </>
  )
}

export default App
