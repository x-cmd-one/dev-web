import{_ as e,D as o,o as l,c as t,G as a,R as n}from"./chunks/framework.c8605957.js";const F=JSON.parse('{"title":"x hub share","description":"","frontmatter":{},"headers":[],"relativePath":"basic/hub/share.md","filePath":"basic/hub/share.md"}'),p={name:"basic/hub/share.md"},r=n('<h1 id="x-hub-share" tabindex="-1">x hub share <a class="header-anchor" href="#x-hub-share" aria-label="Permalink to &quot;x hub share&quot;">​</a></h1><p>Share management, you can share or public a file/dir to other people</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">share</span><span style="color:#929292;"> [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">share</span><span style="color:#6C6C6C;"> [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Delete the share &lt;path&gt; in the cloud of the current user</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">share</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">share</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-hub-share-ls">x hub share ls</a></td><td>List all shares under the specified folder of the current user in the cloud, the default is the root directory</td></tr><tr><td><a href="#x-hub-share-add">x hub share add</a></td><td>Share a file/folder to other people</td></tr><tr><td><a href="#x-hub-share-rm">x hub share rm</a></td><td>Delete the share in the cloud of the current user</td></tr></tbody></table></div><h3 id="x-hub-share-ls" tabindex="-1">x hub share ls <a class="header-anchor" href="#x-hub-share-ls" aria-label="Permalink to &quot;x hub share ls&quot;">​</a></h3><p>List all shares under the specified folder of the current user in the cloud, the default is the root directory</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">share</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">share</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><h3 id="x-hub-share-add" tabindex="-1">x hub share add <a class="header-anchor" href="#x-hub-share-add" aria-label="Permalink to &quot;x hub share add&quot;">​</a></h3><p>Share a file/folder to other people</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">share</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#929292;"> [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">share</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#6C6C6C;"> [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--public</code>, <code>-P</code></td><td>Public share</td></tr><tr><td><code>--expire</code>, <code>-e</code></td><td>Share expiration time</td></tr><tr><td><code>--password</code>, <code>-p</code></td><td>Share password</td></tr><tr><td><code>--max-downloads</code>, <code>-m</code></td><td>Maximum number of downloads</td></tr></tbody></table></div><h3 id="x-hub-share-rm" tabindex="-1">x hub share rm <a class="header-anchor" href="#x-hub-share-rm" aria-label="Permalink to &quot;x hub share rm&quot;">​</a></h3><p>Delete the share in the cloud of the current user</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hub</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">share</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#F97583;">1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hub</span><span style="color:#24292E;"> </span><span style="color:#032F62;">share</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#D73A49;">1&gt;</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',25);function c(h,d,i,y,u,E){const s=o("FooterAds");return l(),t("div",null,[r,a(s),a(s)])}const g=e(p,[["render",c]]);export{F as __pageData,g as default};
