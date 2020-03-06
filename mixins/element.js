import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    elements: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    localModel: [],
    isMouseover: false,
    dragOptions: {
      group: {
        name: 'builder',
        pull: false,
        put: true,
      },
      sort: true,
    },
  }),
  computed: {
    ...mapState([
      'activeElementId',
    ]),
    isActive () {
      return this.activeElementId === this.id
    },
  },
  watch: {
    localModel (value) {
      this.$store.commit('updateComponents', value)
    },
  },
  methods: {
    ...mapMutations([
      'setActiveElementId',
      'setActiveSidebarTab',
    ]),
    onUpdate (action) {
      const actionType = action.added || action.moved

      this.$store.commit('updateStructure', {
        parentId: this.id,
        id: actionType.element.id,
      })

      if (Object.prototype.hasOwnProperty.call(action, 'added')) {
        this.setActiveSidebarTab('Props')
      }
    },
    onMouseover () {
      this.isMouseover = true
    },
    onMouseout () {
      this.isMouseover = false
    },
    onClick () {
      this.setActiveElementId(this.id)
      this.setActiveSidebarTab('Props')
    },
  }
}
