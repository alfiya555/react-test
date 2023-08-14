import React, {useCallback, useState} from 'react';
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";

function App() {
    const [isSmallNav, setIsSmallNav] = useState(false);
    const handleChangeSize = useCallback(() => {
        setIsSmallNav(!isSmallNav);
    }, [isSmallNav]);

  return (
    <div className="App">
        <Header isSmallNav={isSmallNav} />
      <Navigation isSmallNav={isSmallNav} onClickChangeSize={handleChangeSize} />
    </div>
  );
}

export default App;
