import './App.scss'
import Home from '@components/Home'
import { useDialog } from '@hooks/useDialog';
import { useThemeSwitcher } from '@hooks/useThemeSwitcher'
import { Button } from '@mui/material';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';

function App() {
  const {toggleTheme} = useThemeSwitcher();
  const {askConfirmation} = useDialog();
  const {messageDialogDetails,isSubmitted} = useSelector((state:RootState) => state.notification);
  const handleSwitchTheme = ()=>{
    toggleTheme()
  }

  const handleDialogOpen = ()=>{
    askConfirmation("confirmation",1);
  }
  return (
    <>
    {isSubmitted && <p>hello</p>}
     <Button variant="contained" onClick={handleDialogOpen}>Open Dialog</Button>
     <Button onClick={handleSwitchTheme} variant="contained">toggle theme</Button>
     <Home/>
    </>
  )
}

export default App
