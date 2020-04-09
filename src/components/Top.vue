<template>
  <main>
    <article>
      <div class="entry-header">
        <h1 class="entry-title">Qiita API サンプル</h1>
      </div>
      <div class="entry-content">
        <p>
          検索ワード：<input type="text" v-model="keyword" />
        </p>
        <p>
          {{message}}
        </p>
        <ul>
          <li v-for="(e, index) in items" :key="index">
            <a v-bind:href="e.url" target="_blank" > {{ e.title }}</a> Likes:{{ e.likes_count }}
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      items: null,
      message: '',
      keyword: ''
    }
  },
  created() {
    // this.keyword = 'Javascript';
    // this.getAnswer();
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      console.log(newKeyword, oldKeyword);
      this.message = 'Waiting for your to stop typing...';
      this.debouncedGetAnswer();
    }
  },
  methods: {
    getAnswer: function() {
      if (this.keyword === '') {
        this.item = null;
        this.message = '';
        return;
      }
      this.message = 'Loading...';
      var vm = this;
      var params = {page: 1, per_page: 20, query: this.keyword};
      this.$store.dispatch('getQiitaList', params)
      .then(function(response) {
        //console.log(response);
        vm.items = response.data;
      })
      .catch(function(error) {
        vm.message = 'Error!' + error;
      })
      .finally(function() {
        vm.message = '';
      });
    }
  }
}
</script>

