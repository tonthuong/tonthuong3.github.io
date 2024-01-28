import Information from './Components/information';
import Name from './Components/name';
import Active from './Components/active';
import Description from './Components/description';
import { createContext, useState } from 'react';
import Switch from "react-switch";
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("light");

  const tonggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme,tonggleTheme}}>
      <div id={theme} className='sm:h-[2860px] lg:h-[1800px] xl:h-[1800px] overflow-hidden'>
        <div >
        <div id='switch' className='float-right mt-7 mr-9'>
        <label>{theme === "light" ? "Day" : "Night"}</label>
        <Switch onChange={tonggleTheme} checked={theme === "light"}></Switch>
        </div>
          <div className=' h-[230px]'>
            <Name></Name>
          </div>
          <div className='lg:grid grid-cols-2'>
            <div>
              <div id='infor' className=' sm:h-[1000px] lg:shadow-2xl'>
                <Information></Information>
              </div>
              <div id='active' className=' sm:h-[550px] lg:shadow-2xl'>
                <Active></Active>
              </div>
            </div>
            <div id='descrip' className='sm:h-[820px] lg:h-[1320px] '>
              <Description />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
