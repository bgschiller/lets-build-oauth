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

      <slide>
        <h2>So, let's build OAuth from scratch</h2>
      </slide>

      <slide>
        <h2>
          <span class="small">Share your password</span>
          Please?
        </h2>
        <video src="/media/pretty-please.mp4" autoplay loop></video>
      </slide>

      <slide>
        <div class="img-contain" style="background-image: url(/media/mint.png)" />
      </slide>
      <slide>
        <div class="img-contain" style="background-image: url(/media/yelp.png)" />
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
        <video src="/media/lucille_wink.mp4" autoplay loop></video>
      </slide>

      <slide>
        <div class="img-contain" style="background-image: url(/media/personal_access_token_mockup.png)" />
      </slide>

      <slide>
        <div class="img-contain" style="background-image: url(/media/homebrew.png)" />
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


export default {
  mixins: [eagle.slideshow],
  name: 'app',
  components: {
    PersonalAccessToken,
    OAuthFirstDraft,
    OAuthHijackRedirect,
    PreRegisteredURI,
    SniffTokenFromUrl,
    AuthorizationToAccessExchange
  },
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  width: 100%;
}

.eg-slide {
  // background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/media/skyline_sketch.jpg);
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
