import { Stack } from "@fluentui/react";
import * as React from "react";
import Nav from "./Nav";
import UtilizeToolbar from "./UtilizeToolbar";
import Viewer from "./Viewer";

const Wrapper: React.FC = () => {
   return (
      <Stack>
         <UtilizeToolbar />
         <Stack horizontal tokens={{childrenGap:10}}>
            <Stack.Item style={{padding:10}}>
               <Nav />
            </Stack.Item>
            <Stack.Item style={{padding:10,width:'100%'}}>
               <Viewer />
            </Stack.Item>
         </Stack>
      </Stack>
   );
};

export default Wrapper;
