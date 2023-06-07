import{_ as o,D as n,o as e,c as l,G as a,R as t}from"./chunks/framework.c8605957.js";const k=JSON.parse('{"title":"x hub token","description":"","frontmatter":{},"headers":[],"relativePath":"basic/hub/token.md","filePath":"basic/hub/token.md"}'),p={name:"basic/hub/token.md"},r=t('<h1 id="x-hub-token" tabindex="-1">x hub token <a class="header-anchor" href="#x-hub-token" aria-label="Permalink to &quot;x hub token&quot;">​</a></h1><p>Token management, set token permissions or generate tokens</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Generate a new token and set the permissions of the token</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--policy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">prefi</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ac</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--policy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">prefi</span><span style="color:#E1E4E8;">x</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ac</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--policy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">prefi</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ac</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--policy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">prefi</span><span style="color:#24292E;">x</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ac</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-hub-token-info">x hub token info</a></td><td>Get the information of the current token</td></tr><tr><td><a href="#x-hub-token-ls">x hub token ls</a></td><td>List all tokens of the current account</td></tr><tr><td><a href="#x-hub-token-rm">x hub token rm</a></td><td>Remove the specified token from your account</td></tr><tr><td><a href="#x-hub-token-clear">x hub token clear</a></td><td>Clear all tokens except the current token of the current user</td></tr><tr><td><a href="#x-hub-token-gen">x hub token gen</a></td><td>Generate a token with the specified permissions</td></tr></tbody></table></div><h3 id="x-hub-token-info" tabindex="-1">x hub token info <a class="header-anchor" href="#x-hub-token-info" aria-label="Permalink to &quot;x hub token info&quot;">​</a></h3><p>Get the information of the current token</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span></span></code></pre></div><h3 id="x-hub-token-ls" tabindex="-1">x hub token ls <a class="header-anchor" href="#x-hub-token-ls" aria-label="Permalink to &quot;x hub token ls&quot;">​</a></h3><p>List all tokens of the current account</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre></div><h3 id="x-hub-token-rm" tabindex="-1">x hub token rm <a class="header-anchor" href="#x-hub-token-rm" aria-label="Permalink to &quot;x hub token rm&quot;">​</a></h3><p>Remove the specified token from your account</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;token&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;token&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-hub-token-clear" tabindex="-1">x hub token clear <a class="header-anchor" href="#x-hub-token-clear" aria-label="Permalink to &quot;x hub token clear&quot;">​</a></h3><p>Clear all tokens except the current token of the current user</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clear</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clear</span></span></code></pre></div><h3 id="x-hub-token-gen" tabindex="-1">x hub token gen <a class="header-anchor" href="#x-hub-token-gen" aria-label="Permalink to &quot;x hub token gen&quot;">​</a></h3><p>Generate a token with the specified permissions</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gen</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gen</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',29);function c(i,h,y,d,E,u){const s=n("FooterAds");return e(),l("div",null,[r,a(s),a(s)])}const F=o(p,[["render",c]]);export{k as __pageData,F as default};
