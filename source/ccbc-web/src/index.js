import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HeaderForm from './view/header'
import FooterForm from './view/footer'
import LoginForm from './view/login'
import SampleForm from './view/sample'
import RadarChartForm from './view/radar'
import GraphForm from './view/graph'
import DbForm from './view/db'
import ImageForm from './view/image'
import MenuForm from './view/menu'
import SenkyoKanriForm from './view/senkyo_kanri'
import SenkyoTorokuForm from './view/senkyo_toroku'
import TohyoTorokuForm from './view/tohyo_toroku'
import TohyoIchiranForm from './view/tohyo_ichiran'
import TohyoShokaiKobetsuForm from './view/tohyo_shokai_kobetsu'
import TohyoShokaiShosaiForm from './view/tohyo_shokai_shosai'
import CommentShokaiForm from './view/comment_shokai'
import CoinShokaiForm from './view/coin_shokai'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LoginForm} />
      <Route path="/sample" component={SampleForm} />
      <Route path="/radar" component={HeaderForm} />
      <Route path="/radar" component={RadarChartForm} />
      <Route path="/graph" component={HeaderForm} />
      <Route path="/graph" component={GraphForm} />
      <Route path="/db" component={HeaderForm} />
      <Route path="/db" component={DbForm} />
      <Route path="/image" component={HeaderForm} />
      <Route path="/image" component={ImageForm} />
      <Route path="/menu" component={MenuForm} />
      <Route path="/senkyo_kanri" component={SenkyoKanriForm} />
      <Route path="/senkyo_toroku" component={SenkyoTorokuForm} />
      <Route path="/tohyo_toroku" component={TohyoTorokuForm} />
      <Route path="/tohyo_ichiran" component={TohyoIchiranForm} />
      <Route path="/tohyo_shokai_kobetsu" component={TohyoShokaiKobetsuForm} />
      <Route path="/tohyo_shokai_shosai" component={TohyoShokaiShosaiForm} />
      <Route path="/comment_shokai" component={CommentShokaiForm} />
      <Route path="/coin_shokai" component={CoinShokaiForm} />
      <FooterForm />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
