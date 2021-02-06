import './util/init-mympd.js'
import initCallback from './util/initCallback.js'
import removeDataAPI from './util/removeDataAPI.js'
import componentsInit from './util/componentsInit.js'
import {version as Version} from './../package.json'

import Button from './components/button-native.js'
import Carousel from './components/carousel-native.js'
import Collapse from './components/collapse-native.js'
import Dropdown from './components/dropdown-native.js'
import Modal from './components/modal-native.js'
import Popover from './components/popover-native.js'
import Tab from './components/tab-native.js'

export default {
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  Tab,

  initCallback,
  removeDataAPI,
  componentsInit,
  Version
}