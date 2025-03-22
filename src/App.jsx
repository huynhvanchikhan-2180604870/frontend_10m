
import { enqueueSnackbar, SnackbarProvider } from 'notistack';
import './App.css'
import MainLayout from './layouts/MainLayout'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './store/Authentication/Action';


function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MainApp />
    </SnackbarProvider>
  );
}

function MainApp() {
  const jwt = localStorage.getItem('jwt')
  const dispatch = useDispatch()
  useEffect(() =>{
    if(jwt){
      dispatch(getUserProfile(jwt))
    }
  }, [dispatch, jwt, enqueueSnackbar])
  return (
    <>
      <MainLayout />
    </>
  )
}

export default App
