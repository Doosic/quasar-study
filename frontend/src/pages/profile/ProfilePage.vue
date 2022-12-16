<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
        <q-avatar size="150px">
          <q-img src="/logo.jpg" />
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">doosic.gram</span>
          <q-space />
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집1" />
            <q-btn outline color="secondary" label="프로필 편집2" />
            <q-btn outline color="secondary" label="프로필 편집3" />
            <q-btn flat color="secondary" icon="more_horiz" />
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 234</span>
          <span>팔로워 2,3000</span>
          <span>팔로우 2,4103</span>
        </div>
        <div>
          <div>귀요미</div>
          <div>#INTP 인스타 안해요</div>
          <div>LINKTR.LOL/doo</div>
        </div>
      </div>
    </section>
    <section>
      <q-scroll-area style="height: 100px; max-width: auto">
        <div class="row no-wrap q-col-gutter-x-xl">
          <div class="col-auto" v-for="n in 15" :key="n">
            <article>
              <q-avatar size="70px">
                <q-img src="/logo.jpg" />
              </q-avatar>
              <div class="text-center q-mt-sm">제목</div>
            </article>
          </div>
        </div>
      </q-scroll-area>
    </section>
    <section class="q-mt-xl">
      <q-tabs
        class="q-md-lg"
        v-model="tab"
        inline-label
        switch-indicator
        indicator-color="primary"
      >
        <q-route-tab
          :ripple="false"
          icon="edit"
          to="/profile"
          label="게시글"
          exact
        />
        <q-route-tab
          :ripple="false"
          icon="bookmark_border"
          to="/profile/saved"
          label="저장됨"
          exact
        />
        <q-route-tab
          :ripple="false"
          label="태그됨"
          to="/profile/tagged"
          icon="local_offer"
          exact
        />
      </q-tabs>
      <router-view />
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('mails');
</script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
