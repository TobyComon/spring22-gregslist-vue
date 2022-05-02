<template>
    <form @submit.prevent="handleSubmit()">

    <div class="form-group">
        
        <label for="description" class="form-label">Description:</label>
        <textarea type="text" class="form-control" id="description" v-model="editable.description"/>
    </div>
    <div class="form-group">
      <label for="year" class="form-label">Year:</label>
      <input
        type="text"
        class="form-control"
        id="year"
        v-model="editable.year"
      />
    </div>
    <div class="form-group">
      <label for="levels" class="form-label">Levels:</label>
      <input
        type="text"
        class="form-control"
        id="levels"
        v-model="editable.level"
      />
    </div>
    <div class="form-group">
      <label for="price" class="form-label">Price:</label>
      <input
        type="number"
        class="form-control"
        id="price"
        v-model="editable.price"
      />
    </div>
    <div class="form-group">
      <label for="img" class="form-label">Image:</label>
      <input
        type="text"
        class="form-control"
        id="img"
        v-model="editable.img"
      />
    </div>
    <div class="form-group">
      <label for="bedrooms" class="form-label">Bedrooms:</label>
      <input
        type="text"
        class="form-control"
        id="bedrooms"
        v-model="editable.bedroom"
      />
    </div>
    <div class="form-group">
      <label for="bathrooms" class="form-label">Bathrooms:</label>
      <input
        type="text"
        class="form-control"
        id="bathrooms"
        v-model="editable.bathroom"
      />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
  
    </form>
</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>