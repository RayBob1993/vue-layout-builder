import Vue from 'vue'
import Builder from '@/components/Builder'
import Preview from '@/components/Preview'
import Element from '@/components/Element'
import Sidebar from '@/components/Sidebar'
import Components from '@/components/Components'
import Props from '@/components/Props'
import ElementPlaceholder from '@/components/ElementPlaceholder'

Vue.component(Sidebar.name, Sidebar)
Vue.component(Element.name, Element)
Vue.component(Builder.name, Builder)
Vue.component(Preview.name, Preview)
Vue.component(Components.name, Components)
Vue.component(Props.name, Props)
Vue.component(ElementPlaceholder.name, ElementPlaceholder)
