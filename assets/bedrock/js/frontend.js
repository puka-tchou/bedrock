import jQuery from 'jquery'
import 'bootstrap'
// We will be refactoring this, also it causes problems with installation.
// import './frontend/async-thumbnail-builder'

// Let us use Vue with our theme JS
import VueManager from '../../../assets/cms/js/vue/Manager'
VueManager.bindToWindow(window)

window.$ = window.jQuery = jQuery
