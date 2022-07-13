import { DefaultButton } from '@fluentui/react';
import * as React from 'react';
import { ThemeContext, themes } from '../../studyContext/themeContext';


const ThemedButton:React.FC = () => {
    const themeContext = React.useContext(ThemeContext);

    const onClickTheme = () => {
        if(themeContext.theme === themes.dark) {
            themeContext.setTheme(themes.light)
        }else{
            themeContext.setTheme(themes.dark)
        }
    }

    return (
        <DefaultButton 
            text='ChildComponent Button'
            style={{backgroundColor:themeContext.theme.background, color:themeContext.theme.foreground}}
            onClick={onClickTheme}
        />
    )
}

export default ThemedButton;