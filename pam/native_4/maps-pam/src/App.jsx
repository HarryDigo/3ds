import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { AppContextProvider } from '@contexts'

import { MainMap } from '@components'

import './global.css'

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <SafeAreaView className='flex-1'>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1 }}
            bounces={false}
            enableOnAndroid
            scrollEnabled={false}
            extraScrollHeight={285}
          >
            <MainMap />
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </AppContextProvider>
  )
}