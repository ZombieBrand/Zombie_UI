<template>
  <div>
    <label for="country">请选择喜欢的国家:</label>
    <input id="country" list="countries" name="country" />
    <datalist id="countries">
      <option value="UK"></option>
      <option value="Germany"></option>
      <option value="USA"></option>
      <option value="Japan"></option>
      <option value="India"></option>
      <option value="“China”"></option>
    </datalist>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
