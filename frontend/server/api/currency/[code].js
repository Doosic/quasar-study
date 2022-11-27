export default defineEventHandler(async (event) => {

    const { code } = event.context.params

    const uri = ``

    const { data } = await $fetch(uri)

    return data
})