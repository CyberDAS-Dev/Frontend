import React from 'react'
import { Route } from 'react-router-dom'
import Landing from '@/pages/Landing/Landing'

export default function ghostRoutes() {
    return <Route exact path="/cancel" component={Landing} />
}
