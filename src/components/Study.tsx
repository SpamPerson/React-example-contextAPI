import * as React from 'react';
import { ThemeContext, themes } from '../studyContext/themeContext';

import Toolbar from './Toolbar';

const Study:React.FC = () => {
    const [theme, setTheme] = React.useState(themes.dark);

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

export default Study;