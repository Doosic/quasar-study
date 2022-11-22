<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Donec quam felis</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
            Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Donec quam felis</p>
    </div>
</template>

/* 
    <script setup></script> 은 문법적 설탕이다.(읽는 사람 또는 작성하는 사람이 편하게 디자인 된 문법)
    setup()과는 다르게 return 하는 부분이 사라졌다.
    장점
    1.더 적은 상용구로 더 간결한 코드 작성
    2.타입 스크립트를 사용해 props와 emmited value 선언 가능
    3.런타임 성능의 향상 (템플릿이 <script setup/>과 같은 스코프에 있는 render 함수로 컴파일 되므로
    프록시가 필요 없다.)
    4. 더 뛰어난 IDE타입 추론 성능 (language server가 코드로부터 타입을 추론해내는데 비용이 덜 든다.) 
*/
<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>