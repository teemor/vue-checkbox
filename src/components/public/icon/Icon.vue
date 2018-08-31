<template>
    <svg>
        <use :xlink:href="`#${name}`"></use>
    </svg>
</template>

<script>
  export default {
    name: 'icon',
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  }
</script>