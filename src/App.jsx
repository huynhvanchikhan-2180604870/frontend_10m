
import { SnackbarProvider } from 'notistack';
import './App.css'
import MainLayout from './layouts/MainLayout'


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

  return (
    <>
      <MainLayout />
    </>
  )
}

export default App
