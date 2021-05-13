import './Components/card.scss';
import React, { useState, useEffect } from 'react';

import Section from './Components/Section';
import data from './Components/data';
import SectionOnMobile from './Components/SectionOnMobile';

function useWindowSize (){
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])
  return size;
};

function App() {
  const [height, width] = useWindowSize();
  const finalData = [];
  
  function getData (array){
    for (let i = 1; i < array.length; i++){
      if(i % 10 === 0){
        let actualRow= [];
        let index = 0;
          for(let j = i - 9; j <= i; j++){
            actualRow[index]=[];
            actualRow[index].push(array[j])
            index++;
          }
        finalData.push(actualRow);
      }
    }
    return finalData
  };
  getData(data.data);

  const section = finalData.map(
    (jobs, index) => {
      if(height, width < 1000){
        return <SectionOnMobile data={jobs} index={index}/>
      }
      else {
        return <Section data={jobs} index={index}/>
      }
  });
  
  return (
    <div>
      {section}
    </div>
  )
};

export default App;