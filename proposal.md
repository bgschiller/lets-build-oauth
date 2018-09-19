# Let's Build OAuth

When it comes to OAuth, most of us find ourselves tabbing between the provider documentation, code samples, and editor, confused and frustrated...there must be a better way!

After attending this talk, you'll have a more intuitive understanding of OAuth. Instead of a jumble of disconnected pieces, you'll understand why we have both a client id and a client secret, what the "state" parameter is for, and why we're forced to exchange a grant token for an access token before doing anything useful.

We'll build oauth from scratch, starting with "just share your password with me", and moving towards OAuth incrementally. Each step of the way will be motivated by a potential attack vector. Rather than memorizing rules, we'll see how each new addition to the structure mitigates a particular security vulnerability.

# Joyful APIs

We think hard about how to make user interfaces intuitive and easy to understand. APIs are the UIs that programmers interact with, and they deserve thought too!

A good API is a joy to use.  A bad one can be tear- and swear word-inducing. We'll look at examples of each, and develop some guidelines for how to build a joyful API, including:

- Suffer for your art
- Pull complexity downward
- Orient around use, not internals
- Different intents want different functions
- Design the API you wish you had, then make that

Above all, a joyful API requires empathy for the programmers who will be using your library.
