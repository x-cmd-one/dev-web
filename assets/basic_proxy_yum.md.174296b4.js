import{_ as o,D as l,o as p,c as e,G as a,R as t}from"./chunks/framework.c8605957.js";const m=JSON.parse('{"title":"x proxy yum","description":"","frontmatter":{},"headers":[],"relativePath":"basic/proxy/yum.md","filePath":"basic/proxy/yum.md"}'),n={name:"basic/proxy/yum.md"},r=t('<h1 id="x-proxy-yum" tabindex="-1">x proxy yum <a class="header-anchor" href="#x-proxy-yum" aria-label="Permalink to &quot;x proxy yum&quot;">​</a></h1><p>setting the yum mirror for centos/redhat</p><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-proxy-yum-url">x proxy yum url</a></td><td>Provide url of mirror candidates</td></tr><tr><td><a href="#x-proxy-yum-replace">x proxy yum replace</a></td><td>Replace the download mirror</td></tr><tr><td><a href="#x-proxy-yum-rollback">x proxy yum rollback</a></td><td>Rollback the download mirror</td></tr><tr><td><a href="#x-proxy-yum-get">x proxy yum get</a></td><td>Get the current mirror source url</td></tr><tr><td><a href="#x-proxy-yum-set">x proxy yum set</a></td><td>Set the mirror source, select one from the current mirror source and then set it (TODO: support custom mirror source)</td></tr><tr><td><a href="#x-proxy-yum-unset">x proxy yum unset</a></td><td>Reset the source to the original official</td></tr></tbody></table></div><h3 id="x-proxy-yum-url" tabindex="-1">x proxy yum url <a class="header-anchor" href="#x-proxy-yum-url" aria-label="Permalink to &quot;x proxy yum url&quot;">​</a></h3><p>Provide url of mirror candidates</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ustc|tuna|official&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ustc|tuna|official&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-proxy-yum-replace" tabindex="-1">x proxy yum replace <a class="header-anchor" href="#x-proxy-yum-replace" aria-label="Permalink to &quot;x proxy yum replace&quot;">​</a></h3><p>Replace the download mirror</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">replace</span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">set</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ustc|tuna|official&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">replace</span><span style="color:#D73A49;">|</span><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ustc|tuna|official&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-proxy-yum-rollback" tabindex="-1">x proxy yum rollback <a class="header-anchor" href="#x-proxy-yum-rollback" aria-label="Permalink to &quot;x proxy yum rollback&quot;">​</a></h3><p>Rollback the download mirror</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollback</span><span style="color:#929292;"> [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;use the selected file to rollback&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollback</span><span style="color:#6C6C6C;"> [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;use the selected file to rollback&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Sub Commands</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-proxy-yum-rollback-ls">x proxy yum rollback ls</a></td><td>list all file you can rollback</td></tr></tbody></table></div><h3 id="x-proxy-yum-rollback-ls" tabindex="-1">x proxy yum rollback ls <a class="header-anchor" href="#x-proxy-yum-rollback-ls" aria-label="Permalink to &quot;x proxy yum rollback ls&quot;">​</a></h3><p>list all file you can rollback</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rollback</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rollback</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre></div><h3 id="x-proxy-yum-get" tabindex="-1">x proxy yum get <a class="header-anchor" href="#x-proxy-yum-get" aria-label="Permalink to &quot;x proxy yum get&quot;">​</a></h3><p>Get the current mirror source url</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span></span></code></pre></div><h3 id="x-proxy-yum-set" tabindex="-1">x proxy yum set <a class="header-anchor" href="#x-proxy-yum-set" aria-label="Permalink to &quot;x proxy yum set&quot;">​</a></h3><p>Set the mirror source, select one from the current mirror source and then set it (TODO: support custom mirror source)</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span></span></code></pre></div><h3 id="x-proxy-yum-unset" tabindex="-1">x proxy yum unset <a class="header-anchor" href="#x-proxy-yum-unset" aria-label="Permalink to &quot;x proxy yum unset&quot;">​</a></h3><p>Reset the source to the original official</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">proxy</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unset</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">proxy</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unset</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',36);function c(y,i,u,d,h,E){const s=l("FooterAds");return p(),e("div",null,[r,a(s),a(s)])}const F=o(n,[["render",c]]);export{m as __pageData,F as default};
