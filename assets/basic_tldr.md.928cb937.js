import{_ as t,D as e,o,c as l,G as a,R as n}from"./chunks/framework.c8605957.js";const m=JSON.parse('{"title":"x tldr","description":"","frontmatter":{},"headers":[],"relativePath":"basic/tldr.md","filePath":"basic/tldr.md"}'),p={name:"basic/tldr.md"},r=n('<h1 id="x-tldr" tabindex="-1">x tldr <a class="header-anchor" href="#x-tldr" aria-label="Permalink to &quot;x tldr&quot;">​</a></h1><p>Collaborative cheatsheets for console commands</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tldr</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Command name&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tldr</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Command name&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--list</code>, <code>-l</code></td><td></td><td>List all possible commandse</td></tr><tr><td><code>--lang</code>, <code>-L</code></td><td></td><td>Set Prefered language or show languange candidates</td></tr><tr><td><code>--cat</code></td><td></td><td>Displays the tldr document of command</td></tr><tr><td><code>--app</code></td><td></td><td>Displays the tldr document of command with app</td></tr></tbody></table></div><h2 id="flags" tabindex="-1">Flags <a class="header-anchor" href="#flags" aria-label="Permalink to &quot;Flags&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--version</code>, <code>-v</code></td><td>Show the current version of tldr</td></tr><tr><td><code>--update</code>, <code>-u</code></td><td>Update tldr resource file</td></tr><tr><td><code>--help</code>, <code>-h</code></td><td>Show help</td></tr></tbody></table></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>Using the tldr tool, display the usage of the tar command</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tldr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tldr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tar</span></span></code></pre></div><p>Using the tldr app tool, display all usage related to 7z commands in the current resource file</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tldr</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">7z</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tldr</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">7z</span></span></code></pre></div><p>List all files in Markdown format in the system and display them in categories</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tldr</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tldr</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list</span></span></code></pre></div><p>Set Simplified Chinese as the preferred language for the tldr tool</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tldr</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--lang</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">zh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tldr</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--lang</span><span style="color:#24292E;"> </span><span style="color:#032F62;">zh</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',19);function c(d,i,h,y,E,u){const s=e("FooterAds");return o(),l("div",null,[r,a(s),a(s)])}const F=t(p,[["render",c]]);export{m as __pageData,F as default};
