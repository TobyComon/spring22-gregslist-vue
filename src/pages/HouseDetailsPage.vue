<template>
    <div class="container-fluid">
        <div v-if="house">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <img :src="house.img" alt="" class="img-fluid"/>
                    <div class="p-2" v-if="house.creatorId === account.id">
                        <i
                        class="mdi mdi-pencil selectable"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-house-modal"
                        ></i>
                        <i class="mdi mdi-delete md-2 selectable" @click="deleteHouse()"></i>
                    </div>
                    <div class="d-flex justify-content-between p-2">
                        <h5>{{house.bedrooms}}</h5>
                        <h5>{{house.bathrooms}}</h5>
                        <h5>{{house.levels}}</h5>
                        <h5>{{house.price}}</h5>
                        <div class="d-flex p-2">
                        <p>{{house.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div v-else>
                <h1>...Loading</h1>
            </div>
    </div>

    <Modal id="edit-house-modal">
        <template #modal-title-slot>
            <h3>Edit House!</h3>
        </template>
        <template #modal-body-slot>
            <HouseForm :house="house" />
        </template>
    </Modal>
</template>


<script>
import { computed } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'

export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>