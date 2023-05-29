
import RoutesActivation from './Routes';
import './App.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { ThemeProvider } from 'react-bootstrap';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <>
       <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs">
          <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
              <RoutesActivation/>
          </SkeletonTheme>
       </ThemeProvider>
    </>
  )
}

export default App
