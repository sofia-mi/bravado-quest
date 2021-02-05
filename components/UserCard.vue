<template>
  <div id="container">
    <article class="user-card">
      <div class="post-image">
        <img :src="user.avatar"/>
      </div>
      <div class="article-details">
        <div class="user-info">
          <h3 class="name" v-bind:class="resizeText(user.name, 'small-tame')">
            <text-highlight :queries="queries">{{user.name}}</text-highlight>
          </h3>
          <span class="title">
            <text-highlight :queries="queries" v-bind:class="resizeText(user.name, 'small-title')">
              {{user.title}}
            </text-highlight>
          </span>
          <span class="description">
            <text-highlight :queries="queries">{{user.address}}, </text-highlight>
            <text-highlight :queries="queries">{{user.city}}</text-highlight>
          </span>
        </div>
        <p class="email" v-bind:class="resizeText(user.email, 'small-email')">
          <text-highlight :queries="queries">{{user.email}}</text-highlight>
        </p>
      </div>
      <div class="btn">
        Mark as suitable
      </div>
    </article>
    <div class="filler-bottom"></div>
  </div>
</template>


<script>
    export default {
        name: "UserCard",
        props: {
            user: Object,
            search: String,
        },
        methods: {
            resizeText(text, className) {
                if (text.length > 20) {
                    return className;
                }
            }
        },
        computed: {
            queries() {
                return this.search ? this.search.split(/\s+/) : "";
            }
        }
    }
</script>


<style scoped lang="scss">
  body {
    font-family: Roboto, sans-serif;
    background: #EEEEEE;
  }

  .filler-bottom {
    min-height: 20px;
  }

  .user-card {
    display: grid;
    grid-template-columns: 134px 2fr 1fr;
    grid-template-rows: 1fr auto;
    border-radius: 3px;
    background: #FAFAFA;
    grid-template-areas: "a b b" "a b b" "a c c";
    width: 524px;

    .post-image {
      background-color: rgba(0, 0, 0, 0.25);
      grid-area: a;
      display: grid;
    }

    .post-image img {
      overflow: hidden;
      width: 100%;
    }

    .article-details {
      padding: 10px 10px 10px 30px;
      display: grid;
      grid-template-columns: 1fr auto;
      grid-area: b;
    }

    .name {
      font-size: 24px;
      font-weight: 400;
      margin: 0;
      color: rgba(0, 0, 0, 0.87);
      line-height: 32px;
    }

    .small-name {
      font-size: 20px;
    }

    .title .description {
      font-size: 14px;
      margin: 0;
      color: rgba(0, 0, 0, 0.543846);
      line-height: 20px;
      font-style: normal;
      font-weight: bold;
    }

    .title {
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0;
      text-align: left;
    }

    .small-title {
      font-size: 12px;
    }

    .description::before {
      content: '\A';
      white-space: pre;
    }

    .description {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0;
      text-align: left;
    }

    .email {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.54);
      word-wrap: break-word;
      max-width: 124px;
    }

    .small-email {
      font-size: 13px;
    }

    .btn {
      grid-area: c;
      color: #009688;
      line-height: 40px;
      border-top: 1px solid rgba(0, 0, 0, 0.12);
      font-weight: 500;
      text-transform: uppercase;
      padding-left: 40px;
      font-size: 14px;
    }

    #container {
      align-content: center;
    }

  }

  @media (max-width: 620px) {
    .user-card {
      grid-template-columns: max-content;
      width: 430px;
    }
    .post-image img {
      display: none;
    }
  }

</style>
