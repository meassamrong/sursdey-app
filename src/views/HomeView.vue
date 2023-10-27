<template>
  <!-- Navication-header -->
  <div class="control-nav-headers">
    <NavicationHeaders />
  </div>
  <!-- People and chating panel -->
  <div class="peple-chating">
    <div class="container-fluid">
      <div class="row">
        <div class="col-1"></div>
        <div class="people-chat-panel col-3">
          <PoepleChatPanels />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavicationHeaders from '../components/NavicationHeaders.vue'
import PoepleChatPanels from '../components/ChatPeople.vue'
export default {
  components: {
    NavicationHeaders,
    PoepleChatPanels
  }
}
</script>