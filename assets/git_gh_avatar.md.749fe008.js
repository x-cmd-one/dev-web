import{_ as o,D as l,o as t,c as n,G as a,R as p}from"./chunks/framework.c8605957.js";const u=JSON.parse('{"title":"x gh avatar","description":"","frontmatter":{},"headers":[],"relativePath":"git/gh/avatar.md","filePath":"git/gh/avatar.md"}'),e={name:"git/gh/avatar.md"},r=p(`<h1 id="x-gh-avatar" tabindex="-1">x gh avatar <a class="header-anchor" href="#x-gh-avatar" aria-label="Permalink to &quot;x gh avatar&quot;">​</a></h1><p>user addressbook management</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Add the user &lt;user_path&gt; to the addressbook of the current session Using &lt;key&gt; recorded in the address book &lt;user_path&gt; to add the user as a repository collaborator</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">user_pat</span><span style="color:#E1E4E8;">h</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">collaborator</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner_rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">ke</span><span style="color:#E1E4E8;">y</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">user_pat</span><span style="color:#24292E;">h</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">collaborator</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner_rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">ke</span><span style="color:#24292E;">y</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gh-avatar-ls">x gh avatar ls</a></td><td>List all address books for the current session record</td></tr><tr><td><a href="#x-gh-avatar-add">x gh avatar add</a></td><td>Add or Edit the key and value in the address book</td></tr><tr><td><a href="#x-gh-avatar-get">x gh avatar get</a></td><td>Get the value of the address book record by key</td></tr></tbody></table></div><h3 id="x-gh-avatar-ls" tabindex="-1">x gh avatar ls <a class="header-anchor" href="#x-gh-avatar-ls" aria-label="Permalink to &quot;x gh avatar ls&quot;">​</a></h3><p>List all address books for the current session record</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [FLAGS]</span></span></code></pre></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--raw</code></td><td>output format as key=value</td></tr></tbody></table></div><h3 id="x-gh-avatar-add" tabindex="-1">x gh avatar add <a class="header-anchor" href="#x-gh-avatar-add" aria-label="Permalink to &quot;x gh avatar add&quot;">​</a></h3><p>Add or Edit the key and value in the address book</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">put</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;address book key&quot;</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;address book value&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">put</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;address book key&quot;</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">2</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;address book value&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gh-avatar-get" tabindex="-1">x gh avatar get <a class="header-anchor" href="#x-gh-avatar-get" aria-label="Permalink to &quot;x gh avatar get&quot;">​</a></h3><p>Get the value of the address book record by key</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">avatar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;address book key&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">avatar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;address book key&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>`,23);function c(y,d,E,h,i,F){const s=l("FooterAds");return t(),n("div",null,[r,a(s),a(s)])}const v=o(e,[["render",c]]);export{u as __pageData,v as default};
