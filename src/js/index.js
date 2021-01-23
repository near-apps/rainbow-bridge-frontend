import BN from 'bn.js'
import * as naj from 'near-api-js'
import './authEthereum'
import './authNear'
import * as dom from './domHelpers'
import render from './render'
import * as urlParams from './urlParams'
import * as transfers from './transfers'
import * as erc20Xnep21 from './transfers/erc20+nep21'
import * as utils from './utils'

// Can't import modules in <script> tags in files included via PostHTML 😞
window.BN = BN
window.dom = dom
window.erc20Xnep21 = erc20Xnep21
window.LOOP_INTERVAL = 5500
window.NearContract = naj.Contract
window.parseNearAmount = naj.utils.format.parseNearAmount
window.render = render
window.transfers = transfers
window.urlParams = urlParams
window.utils = utils

render()

transfers.onChange(render)
