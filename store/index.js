import _ from 'lodash'
import StructureModel from '@/models/StructureModel'

export const state = () => ({
  elements: [
    {
      title: 'Демо',
      components: [
        {
          type: 'Box',
          title: 'Блок',
          props: {},
        },
      ],
    },
    {
      title: 'Сетка',
      components: [
        {
          type: 'Container',
          title: 'Контейнер',
          props: {},
        },
        {
          type: 'Col',
          title: 'Колонка',
          props: {},
        },
      ],
    },
  ],
  components: [],
  structure: [],
  activeSidebarTab: 'Components', // Components || Props
  activeElementId: null,
})

export const getters = {
  model: state => {
    const tree = Object.fromEntries(state.components.map(item => {
      return [
        item.id,
        {
          ...item,
          elements: []
        }
      ]
    }));

    state.structure
      .filter(item => item.parentId !== null)
      .forEach(item => tree[item.parentId].elements.push(tree[item.id]))

    return state.structure
      .filter(item => item.parentId === null)
      .map(item => tree[item.id])
  }
}

export const actions = {}

export const mutations = {
  updateComponents: (state, value) => {
    state.components = _.unionBy(state.components, value, 'id')
  },
  updateStructure: (state, { id, parentId }) => {
    const structureHasId = state.structure.find(item => item.id === id)

    if (!structureHasId) {
      state.structure.push(new StructureModel({
        id,
        parentId,
      }))
    }

    if (parentId) {
      state.structure.forEach(item => {
        if (item.id === id) {
          item.parentId = parentId
        }
      })
    }
  },
  deleteById: (state, id) => {
    state.components = state.components.filter(item => item.id !== id)
  },
  setActiveElementId: (state, id) => {
    state.activeElementId = id
  },
  setActiveSidebarTab: (state, name) => {
    state.activeSidebarTab = name
  },
}
