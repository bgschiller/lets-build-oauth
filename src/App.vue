<template>
  <div id="app">
    <div class="eg-slideshow">
      <slide>
        <h1>Let's Build OAuth</h1>
        <p class="pullquote">
          "That which I cannot create, I do not understand"
        </p>
        <div class="attribution">
          &ndash;Richard Feynman
        </div>
        <span v-if="isParent">
          Speaker notes appear here
        </span>
      </slide>
      <slide class="title-only">
        <p>slides at:</p>
        <h2>brianschiller.com/lets-build-oauth/</h2>
      </slide>

      <slide :steps="3">
        <h2>Authentication vs Authorization</h2>
        <ul class="unbulleted left-align">
          <li v-if="step >= 1"><strong>Authentication:</strong> This is who I am</li>
          <li v-if="step >= 2"><strong>Authorization:</strong> I am allowed to perform this action/see this data/etc</li>
        </ul>
        <p class="nota-buena" v-if="step >= 3">
          nb: Authorization HTTP header is really about authentication.
        </p>
      </slide>

      <slide class="title-only">
        <h2>A bit of history</h2>
      </slide>

      <slide :steps="2" class="vertical-center">
        <div class="blockquote">
          I can no longer be associated with the OAuth 2.0 standard.
          <div class="attribution">
            &ndash;Eran Hammer
          </div>
          <div class="attribution" v-visible="step >= 2">
            (The creator of OAuth)
          </div>

        </div>
      </slide>

      <slide steps="2">
        <h2>Oauth is for...</h2>
        <div v-if="step == 1">
          <h3>Authentication</h3>
          <p>
            eg, Login w/ Twitter says "I am the owner of the @bgschiller handle, and you can trust that b/c twitter says so"
          </p>
        </div>
        <div v-if="step == 2">
          <h3>Delegated Authorization</h3>
          <p>
            "I give permission for HootSuite to post tweets on my behalf".
          </p>
          <p>
            You're giving some other entity (a program or website) the authority to act as if they were you.
          </p>
        </div>
      </slide>

      <slide class="title-only">
        <h2>Cast of Characters</h2>
      </slide>

      <slide class="vertical-center">
        <h2>Alice</h2>
        <img src="/lets-build-oauth/media/alice.png">
      </slide>

      <slide class="vertical-center">
        <h2>TravisCI</h2>
        <img src="/lets-build-oauth/media/travisci.png">
      </slide>

      <slide class="vertical-center">
        <h2>GitHub</h2>
        <img src="/lets-build-oauth/media/octocat.png">
      </slide>

      <slide class="vertical-center">
        <h2>Attacker</h2>
        <img src="/lets-build-oauth/media/sneakytom.jpg">
      </slide>

      <slide class="vertical-center">
        <h2>Google</h2>
        <img src="/lets-build-oauth/media/google-logo.png">
      </slide>

      <slide :steps="2">
        <h2>So, <span v-visible="step >= 2">let's build OAuth from scratch</span></h2>
      </slide>

      <slide>
        <h2>
          <span class="small">Share your password</span>
          Please?
        </h2>
        <video src="/lets-build-oauth/media/pretty-please.mp4" autoplay loop></video>
      </slide>

      <slide>
        <div class="img-contain" style="background-image: url(/lets-build-oauth/media/mint.png)" />
      </slide>
      <slide>
        <div class="img-contain" style="background-image: url(/lets-build-oauth/media/yelp.png)" />
        <span v-if="isParent">circa 2008, to be fair</span>
      </slide>

      <slide :steps="5">
        <h2>Drawbacks</h2>
        <ul class="center-list">
          <li v-visible="step >= 2">
            All or nothing.
            <span v-if="isParent">
              The app might really only need to read your tweets, but this permits posting, following, etc.
            </span>
          </li>
          <li v-visible="step >= 3">
            Tempting attack surface.
            <span v-if="isParent">
              A hacker gaining access to our db would get _actual passwords_, not just hashes.
            </span>
          </li>
          <li v-visible="step >= 4">
            Passwords can change.
            <span v-if="isParent">
              When this happens, access to every third-party service is cut off.
            </span>
          </li>
          <li v-visible="step >= 5">
            Encourages phishing attacks.
            <span v-if="isParent">
              We'd like to train users that they should only enter their google password on google sites, twitter password on twitter sites, etc.
            </span>
          </li>
        </ul>
      </slide>
      <slide :steps="3">
        <h2>Benefits</h2>
        <ul class="center-list">
          <li v-visible="step >= 2">
            Requires no coordination with provider service.
          </li>
          <li v-visible="step >=3">
            Simple UI and mental model.
          </li>
        </ul>
      </slide>

      <slide>
        <h2>Personal access tokens</h2>
        <video src="/lets-build-oauth/media/lucille_wink.mp4" autoplay loop></video>
      </slide>

      <slide>
        <div class="img-contain" style="background-image: url(/lets-build-oauth/media/personal_access_token_mockup.png)" />
      </slide>

      <slide>
        <div class="img-contain" style="background-image: url(/lets-build-oauth/media/homebrew.png)" />
      </slide>

      <slide>
        <div class="title-only">
          <h2>
            <a href="https://github.com/bgschiller/alfred-clipbox#logging-in-to-trello">
              alfred-clipbox trello
            </a>
          </h2>
        </div>
      </slide>

      <slide :steps="3">
        <h2>Benefits</h2>
        <ul class="center-list">
          <li v-visible="step >= 2">
            Can be individually revoked
          </li>
          <li v-visible="step >= 3">
            Able to limit scope
          </li>
        </ul>
      </slide>

      <slide :steps="3">
        <h2>Drawbacks</h2>
        <ul class="center-list">
          <li v-visible="step >= 2">
            UX headache
          </li>
          <li v-visible="step >= 3">
            Requires coordination with provider service
          </li>
        </ul>
      </slide>

      <slide>
        <h2>Who uses personal access tokens?</h2>
        <ul class="center-list">
          <li>GitHub, Trello, Twitter, many others</li>
          <li>Mostly targeted at developers</li>
        </ul>
        <span v-if="isParent">These are actually a solid step towards OAuth!</span>
      </slide>

      <PersonalAccessToken />

      <slide :steps="4">
        <h2>Tell him yourself!</h2>
        <span v-if="isParent">
          What would it look like ... talk amongst themselves rather than making the user mediate it.
        </span>
        <ul class="center-list">
          <li v-visible="step>=2">TravisCI → GitHub: "I need these scopes"</li>
          <li v-visible="step>=3">GitHub → User: "Do you trust TravisCI?"</li>
          <li v-visible="step>=4">GitHub → TravisCI: "Here's a token"</li>
        </ul>
        <span v-if="isParent">
          Usually we do first and last w/ HTTP redirect and query params.
          Here's how that might look.
        </span>
      </slide>

      <OAuthFirstDraft />

      <slide class="title-only">
        <h2>Vulnerabilities and Mitigations</h2>
      </slide>

      <slide class="title-only">
        <h2>Attack! hijack the request_uri</h2>
      </slide>

      <OAuthHijackRedirect />

      <slide class="title-only">
        <h2>Mitigation: Pre-register with the provider</h2>
      </slide>

      <PreRegisteredURI />

      <slide class="title-only">
        <h2>Attack! steal token from URL</h2>
      </slide>

      <SniffTokenFromUrl />

      <slide class="title-only">
        <h2>Mitigation: make those tokens worthless</h2>
      </slide>

      <AuthorizationToAccessExchange />

      <slide class="title-only">
        <h2>Attack! connect to attacker's account</h2>
      </slide>

      <CsrfAttack />

      <slide class="title-only">
        Mitigation: Ensure the logged-in user is originator of request
      </slide>

      <WithState />

      <slide :steps="6">
        <h2>How to build the state param</h2>
        <ul v-if="step < 6" class="center-list">
          <li v-visible="step >= 2">Identify the user</li>
          <li v-visible="step >= 3">Timestamped</li>
          <li v-visible="step >= 4">Bonus: which service?</li>
          <li v-visible="step >= 5">Signed</li>
        </ul>
        <eg-code-block v-if="step>= 6" lang="js">
payload = JSON.stringify({
  issued_at: Date.now(),
  user_id: session.user_id,
  login_with: 'twitter',
});

signature = hmac(SECRET_KEY, payload);

state = (
  urlSafeBase64(payload) + '.' +
  urlSafeBase64(signature)
);
        </eg-code-block>
      </slide>

      <slide>
        <h2>References</h2>
        <ul class="center-list">
          <li><a href="https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2">
            www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
          </a></li>
          <li><a href="https://hueniverse.com/introducing-oauth-2-0-b5681da60ce2">
            hueniverse.com/introducing-oauth-2-0-b5681da60ce2
          </a></li>
          <li><a href="https://hueniverse.com/oauth-2-0-and-the-road-to-hell-8eec45921529">
            hueniverse.com/oauth-2-0-and-the-road-to-hell-8eec45921529
          </a></li>
          <li><a href="https://ict.ken.be/oauth-20-vocabulary">
            ict.ken.be/oauth-20-vocabulary
          </a></li>
          <li><a href="https://auth0.com/blog/everything-you-wanted-to-know-about-oauth-2-but-were-too-afraid-to-ask/">
            auth0.com/blog/everything-you-wanted-to-know-about-oauth-2-but-were-too-afraid-to-ask/
          </a></li>
          <li><a href="https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type">
            developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type
          </a></li>
          <li><a href="https://dhavalkapil.com/blogs/Attacking-the-OAuth-Protocol/">
            dhavalkapil.com/blogs/Attacking-the-OAuth-Protocol/
          </a></li>
        </ul>
      </slide>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import PersonalAccessToken from './components/PersonalAccessToken.vue'
import OAuthFirstDraft from './components/OAuthFirstDraft.vue'
import OAuthHijackRedirect from './components/OAuthHijackRedirect.vue';
import PreRegisteredURI from './components/PreRegisteredURI.vue';
import SniffTokenFromUrl from './components/SniffTokenFromUrl.vue';
import AuthorizationToAccessExchange from './components/AuthorizationToAccessExchange.vue';
import CsrfAttack from './components/CsrfAttack.vue';
import WithState from './components/WithState.vue';
import AllTogetherNow from './components/AllTogetherNow.vue';

export default {
  mixins: [eagle.slideshow],
  name: 'app',
  components: {
    PersonalAccessToken,
    OAuthFirstDraft,
    OAuthHijackRedirect,
    PreRegisteredURI,
    SniffTokenFromUrl,
    AuthorizationToAccessExchange,
    CsrfAttack,
    WithState,
    AllTogetherNow,
  },
  methods: {
     updateSlides: function () {
      this.currentSlideIndex = +this.$route.params.slide
      const step = +this.$route.params.step;
      this.$nextTick(() => {
        this.step = step;
      })
    },
    updateURL: function () {
      this.$router.push(`/${this.currentSlideIndex}/${this.step}`)
    }
  },
  mounted() {
    this.updateSlides();
  },
  watch: {
    step: 'updateURL',
    currentSlideIndex: 'updateURL',
  },
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  width: 100%;
}
#app .eg-slideshow {
  background-color: white;
}

.blockquote {
  justify-self: center;
  .attribution {
    width: 100%;
    text-align: right;
  }
}
.vertical-center {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100vh;
}


.eg-slide {
  // background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/lets-build-oauth/media/skyline_sketch.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
body {
  margin: 0;
}
p {
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
}

.unbulleted {
  list-style: none;
  max-width: 90vw;
  li {
    margin-bottom: 1rem;
  }
}

.center-list {
  width: fit-content;
  margin-left: auto;
  margin-right:auto;
  text-align: left;
}
.img-contain {
  background-repeat: no-repeat;
  background-position: center;
  background-size:contain;
  width: 100vw;
  height: 100vh;
  max-width: 100vw !important;
}
svg.img-contain {
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
}

.left-align {
  text-align: left;
}

.title-only {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.white-back {
  background-color: white;
}
.speaker-note {
  color: black;
  background: wheat;
  &.absolute-note {
    position: absolute;
    bottom: 4px;
    right: 40px;
  }
}


</style>
