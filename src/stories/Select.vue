<template>
  <div>
    <label for="country">请选择喜欢的国家:</label>
    <input
      id="country"
      list="countries"
      name="country"
    >
    <datalist id="countries">
      <option value="UK" />
      <option value="Germany" />
      <option value="USA" />
      <option value="Japan" />
      <option value="India" />
      <option value="“China”" />
    </datalist>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
