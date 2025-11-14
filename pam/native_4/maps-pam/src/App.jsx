import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { MainMap } from './components'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <MainMap />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
