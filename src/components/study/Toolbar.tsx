import * as React from "react";

import { Stack } from "@fluentui/react/lib/Stack";
import { DefaultButton } from "@fluentui/react/lib/Button";

import ThemedButton from "./ThemedButton";
import { ThemeContext, themes } from "../../studyContext/themeContext";

const Toolbar: React.FC = () => {
   const themeContext = React.useContext(ThemeContext);

   return (
      <Stack style={{ background: themeContext.theme.background }}>
         <Stack.Item>
            <DefaultButton
               text={themeContext.theme === themes.dark ? "Change_LightMode" : "Change_DarkMode"}
               style={{ backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground }}
               onClick={() => {
                  if (themeContext.theme === themes.dark) {
                     themeContext.setTheme(themes.light);
                  } else {
                     themeContext.setTheme(themes.dark);
                  }
               }}
            />
         </Stack.Item>
         <Stack.Item>
            <ThemedButton />
         </Stack.Item>
      </Stack>
   );
};

export default Toolbar;
