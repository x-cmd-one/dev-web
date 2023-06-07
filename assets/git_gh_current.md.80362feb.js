import{_ as r,D as e,o as t,c as l,G as s,R as n}from"./chunks/framework.c8605957.js";const _=JSON.parse('{"title":"x gh current","description":"","frontmatter":{},"headers":[],"relativePath":"git/gh/current.md","filePath":"git/gh/current.md"}'),c={name:"git/gh/current.md"},p=n('<h1 id="x-gh-current" tabindex="-1">x gh current <a class="header-anchor" href="#x-gh-current" aria-label="Permalink to &quot;x gh current&quot;">​</a></h1><p>current session default value management</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">current</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">cur</span><span style="color:#929292;"> [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#n:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;profile=|repo=|owner=|config=&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">current</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">cur</span><span style="color:#6C6C6C;"> [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#n:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;profile=|repo=|owner=|config=&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2>',5),i=n('<h3 id="x-gh-current-clear" tabindex="-1">x gh current clear <a class="header-anchor" href="#x-gh-current-clear" aria-label="Permalink to &quot;x gh current clear&quot;">​</a></h3><p>Clear all setting default in the current session and reback the default value of the config record</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">current</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">cur</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clear</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">current</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">cur</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clear</span></span></code></pre></div><h3 id="x-gh-current-ls" tabindex="-1">x gh current ls <a class="header-anchor" href="#x-gh-current-ls" aria-label="Permalink to &quot;x gh current ls&quot;">​</a></h3><p>List all current value in the session</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">current</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">cur</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">current</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">cur</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',10);function u(h,d,g,y,E,F){const o=e("DocsGroupTable"),a=e("FooterAds");return t(),l("div",null,[p,s(o,{header:'["Name","Description"]',group:'{"Main":{"active":true,"data":[{"name":"[x gh current profile=](#x-gh-current-profile)","desc":"switch config profile name in current session"},{"name":"[x gh current config=](#x-gh-current-config)","desc":"switch config in current session"},{"name":"[x gh current repo=](#x-gh-current-repo)","desc":"switch default repo in current session"},{"name":"[x gh current owner=](#x-gh-current-owner)","desc":"switch default owner in current session"}]},"Management":{"active":true,"data":[{"name":"[x gh current ls](#x-gh-current-ls)","desc":"List all current value in the session"},{"name":"[x gh current clear](#x-gh-current-clear)","desc":"Clear all setting default in the current session and reback the default value of the config record"}]},"$NotGroup":{"active":true,"data":[]}}'}),i,s(a),s(a)])}const C=r(c,[["render",u]]);export{_ as __pageData,C as default};
