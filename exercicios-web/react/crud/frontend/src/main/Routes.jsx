import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        {/* Preciso colocar o exact pois ele confundirá caso nao coloque pois ambas as rotas possuem o "/" */}
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>