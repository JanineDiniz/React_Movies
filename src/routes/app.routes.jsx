import {Routes, Route} from 'react-router-dom'

import {NewNote} from '../pages/NewNote'
import {Home} from '../pages/Home'
import {Profile} from '../pages/Profile'
import {MoviePreview} from '../pages/MoviePreview'

export function AppRoutes(){
  return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/new' element={<NewNote/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/details/:id' element={<MoviePreview/>}></Route>
    </Routes>
  )
}