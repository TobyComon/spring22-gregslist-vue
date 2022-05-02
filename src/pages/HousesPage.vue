<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2"></div>
        </div>
        <div class="row p-2">
            <House v-for="h in houses" :key="h.id" :house="h" />
        </div>
    </div>

    <Modal id="create-house-modal">
        <template #modal-title-slot>
            <h3>Create a House!</h3>
        </template>
        <template #modal-body-slot>
            <HouseForm />
        </template>
    </Modal>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
export default {
    setup(){
        onMounted(async () => {
            try {
              await housesService.getHouses();
            } catch (error) {
              logger.error(error)
              Pop.toast(error.message, 'error')
            }
        })
        return {
            houses: computed(() => AppState.houses),
        }
    }
}
</script>


<style lang="scss" scoped>

</style>