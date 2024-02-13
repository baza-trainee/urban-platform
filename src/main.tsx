import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App.tsx'

import { Provider } from 'react-redux'
import store from './store/store.ts'
import { ScrollProvider } from '../src/components/context/ScrollContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </BrowserRouter>
  </Provider>
)
