import initCallback from './initCallback.js'
import componentsInit from './componentsInit.js'

import Button from '../components/button-native.js'
import Carousel from '../components/carousel-native.js'
import Collapse from '../components/collapse-native.js'
import Dropdown from '../components/dropdown-native.js'
import Modal from '../components/modal-native.js'
import Popover from '../components/popover-native.js'
import Tab from '../components/tab-native.js'

componentsInit.Button = [ Button, '[data-toggle="buttons"]' ]
componentsInit.Carousel = [ Carousel, '[data-ride="carousel"]' ]
componentsInit.Collapse = [ Collapse, '[data-toggle="collapse"]' ]
componentsInit.Dropdown = [ Dropdown, '[data-toggle="dropdown"]']
componentsInit.Modal = [ Modal, '[data-toggle="modal"]' ]
componentsInit.Popover = [ Popover, '[data-toggle="popover"],[data-tip="popover"]' ]
componentsInit.Tab = [ Tab, '[data-toggle="tab"]' ]

// bulk initialize all components
document.body ? initCallback() : document.addEventListener( 'DOMContentLoaded', function initWrapper(){
	initCallback()
	document.removeEventListener('DOMContentLoaded',initWrapper,false)
}, false );
