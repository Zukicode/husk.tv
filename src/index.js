import React from 'react'
import ReactDOM from 'react-dom/client'

//Styles
import './styles/index.scss'

//Components
import { App } from 'components/App'

//Router
import { BrowserRouter } from 'react-router-dom'

//Redux
import { store } from 'features/store'
import { Provider } from 'react-redux'

//Firebase
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
