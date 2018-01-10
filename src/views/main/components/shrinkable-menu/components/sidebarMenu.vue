<style lang="less">
    @import '../styles/menu.less';
</style>

<template>
    <Menu ref="sideMenu" :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
        <template v-for="item in menuList">
            <MenuItem v-if="item.children.length==1" :name="item.children[0].name" :key="item.name">
                <!-- <Icon :type="item.icon" :size="iconSize" :key="item.id"></Icon> -->
                <IconFont :type="item.icon" :size="iconSize" :key="item.id"></IconFont>
                <span class="layout-text" :key="item.path">{{ itemTitle(item) }}</span>
            </MenuItem>

            <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.path">
                <template slot="title">
                    <!-- <Icon :type="item.icon" :size="iconSize"></Icon> -->
                    <IconFont :type="item.icon" :size="iconSize"></IconFont>
                    <span class="layout-text">{{ itemTitle(item) }}</span>
                </template>
                <template v-for="child in item.children">
                    <MenuItem :name="child.name" :key="child.name">
                        <!-- <Icon :type="child.icon" :size="iconSize" :key="child.id"></Icon> -->
                        <IconFont :type="child.icon" :size="iconSize" :key="child.id"></IconFont>
                        <span class="layout-text" :key="child.id">{{ itemTitle(child) }}</span>
                    </MenuItem>
                </template>
            </Submenu>
        </template>
    </Menu>
</template>

<script>
import IconFont from '@/components/IconFont.vue'
export default {
  name: 'sidebarMenu',
  props: {
    menuList: Array,
    iconSize: Number,
    menuTheme: {
      type: String,
      default: 'dark'
    },
    openNames: {
      type: Array
    }
  },
  components: {
    IconFont
  },
  methods: {
    changeMenu (active) {
      this.$emit('on-change', active)
    },
    itemTitle (item) {
      if (typeof item.title === 'object') {
        return this.$t(item.title.i18n)
      } else {
        return item.title
      }
    }
  },
  updated () {
    this.$nextTick(() => {
      if (this.$refs.sideMenu) {
        this.$refs.sideMenu.updateOpened()
      }
    })
  }

}
</script>
