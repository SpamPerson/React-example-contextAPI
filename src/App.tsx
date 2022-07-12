import React from 'react';

import { Stack } from '@fluentui/react/lib/Stack';

import Study from './components/Study';
import { DefaultButton } from '@fluentui/react';
import Utilize from './components/Utilize';

export const App: React.FC = () => {
  const [isStudy, setIsStudy] = React.useState<boolean>(false);
  const [isUtilize, setIsUtilize] = React.useState<boolean>(false);

  return (
    <Stack>
      <Stack.Item>
        <DefaultButton
          text='Study'
          onClick={()=>{
            if(isUtilize){
              setIsUtilize(false)
            }
            setIsStudy(!isStudy)
          }}
        />
        <DefaultButton
          text='Utilize'
          onClick={()=>{
            if(isStudy){
              setIsStudy(false)
            }
            setIsUtilize(!isUtilize)
          }}
        />
      </Stack.Item>
      <Stack.Item hidden={!isUtilize}>
        <Utilize />
      </Stack.Item>
      <Stack.Item hidden={!isStudy}>
        <Study/>
      </Stack.Item>
    </Stack>
  );
};
