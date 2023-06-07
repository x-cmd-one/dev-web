import{_ as o,D as a,o as n,c as e,G as t,R as l}from"./chunks/framework.c8605957.js";const F=JSON.parse('{"title":"x gt config","description":"","frontmatter":{},"headers":[],"relativePath":"git/gt/config.md","filePath":"git/gt/config.md"}'),p={name:"git/gt/config.md"},c=l('<h1 id="x-gt-config" tabindex="-1">x gt config <a class="header-anchor" href="#x-gt-config" aria-label="Permalink to &quot;x gt config&quot;">​</a></h1><p>manage configuration for gt</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Get Gitee access token: <a href="https://gitee.com/profile/personal_access_tokens" target="_blank" rel="noreferrer">https://gitee.com/profile/personal_access_tokens</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When you need to switch between the config and profile, Need to use <code>current</code> to switch</p><p><code>x gt current &lt;config|profile&gt;=&lt;switch_val&gt;</code></p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">cfg</span><span style="color:#929292;"> [SUB_COMMAND]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#n:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;token=|owner=|endpoint=&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">cfg</span><span style="color:#6C6C6C;"> [SUB_COMMAND]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#n:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;token=|owner=|endpoint=&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Setup Gitee access token for default initialization</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">token=</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">toke</span><span style="color:#E1E4E8;">n</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">token=</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">toke</span><span style="color:#24292E;">n</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gt-config-set">x gt config set</a></td><td>Setting Gitee config</td></tr><tr><td><a href="#x-gt-config-get">x gt config get</a></td><td>Output Gitee config</td></tr></tbody></table></div><h3 id="x-gt-config-set" tabindex="-1">x gt config set <a class="header-anchor" href="#x-gt-config-set" aria-label="Permalink to &quot;x gt config set&quot;">​</a></h3><p>Setting Gitee config</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">set</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#n:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;token=|owner=|endpoint=&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">set</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#n:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;token=|owner=|endpoint=&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--config</code> &lt;path&gt;</td><td></td><td>config file path. empty use default</td></tr><tr><td><code>--profile</code> &lt;name&gt;</td><td></td><td>config profile name. empty use default</td></tr></tbody></table></div><h3 id="x-gt-config-get" tabindex="-1">x gt config get <a class="header-anchor" href="#x-gt-config-get" aria-label="Permalink to &quot;x gt config get&quot;">​</a></h3><p>Output Gitee config</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">cfg</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;token|owner|endpoint&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">cfg</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;token|owner|endpoint&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--config</code> &lt;path&gt;</td><td></td><td>config file path. empty use default</td></tr><tr><td><code>--profile</code> &lt;name&gt;</td><td></td><td>config profile name. empty use default</td></tr></tbody></table></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',25);function r(i,d,g,y,h,E){const s=a("FooterAds");return n(),e("div",null,[c,t(s),t(s)])}const f=o(p,[["render",r]]);export{F as __pageData,f as default};
