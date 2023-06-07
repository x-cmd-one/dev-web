import{_ as l,D as t,o as p,c as n,G as s,R as a}from"./chunks/framework.c8605957.js";const v=JSON.parse('{"title":"x gh pr","description":"","frontmatter":{},"headers":[],"relativePath":"git/gh/pr.md","filePath":"git/gh/pr.md"}'),r={name:"git/gh/pr.md"},c=a('<h1 id="x-gh-pr" tabindex="-1">x gh pr <a class="header-anchor" href="#x-gh-pr" aria-label="Permalink to &quot;x gh pr&quot;">​</a></h1><p>repo pull request management</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>List &lt;owner/repo&gt; state is open PR</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Squash Merge &lt;pr_number&gt; PR on &lt;owner/repo&gt;</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--merge_method</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">squash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">pr_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--merge_method</span><span style="color:#24292E;"> </span><span style="color:#032F62;">squash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">pr_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gh-pr-ls">x gh pr ls</a></td><td>List pull requests</td></tr><tr><td><a href="#x-gh-pr-info">x gh pr info</a></td><td>Show pull request info</td></tr><tr><td><a href="#x-gh-pr-create">x gh pr create</a></td><td>Create pull request</td></tr><tr><td><a href="#x-gh-pr-edit">x gh pr edit</a></td><td>Edit pull request</td></tr><tr><td><a href="#x-gh-pr-merge">x gh pr merge</a></td><td>Merge pull request</td></tr></tbody></table></div><h3 id="x-gh-pr-ls" tabindex="-1">x gh pr ls <a class="header-anchor" href="#x-gh-pr-ls" aria-label="Permalink to &quot;x gh pr ls&quot;">​</a></h3><p>List pull requests</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',14),d=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><ul><li><strong>Examples</strong> :</li></ul><p>List state is open pull requests</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gh-pr-info" tabindex="-1">x gh pr info <a class="header-anchor" href="#x-gh-pr-info" aria-label="Permalink to &quot;x gh pr info&quot;">​</a></h3><p>Show pull request info</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;PR number&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;PR number&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--repo</code>, <code>-r</code> &lt;owner/repo&gt;</td><td></td><td>&lt;owner_path&gt;/&lt;repo_path&gt;</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-pr-create" tabindex="-1">x gh pr create <a class="header-anchor" href="#x-gh-pr-create" aria-label="Permalink to &quot;x gh pr create&quot;">​</a></h3><p>Create pull request</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',18),i=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--draft</code></td><td>set pr as draft</td></tr><tr><td><code>--no_maintainer_modify</code></td><td>Not allow maintainers modify the pull request</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-pr-edit" tabindex="-1">x gh pr edit <a class="header-anchor" href="#x-gh-pr-edit" aria-label="Permalink to &quot;x gh pr edit&quot;">​</a></h3><p>Edit pull request</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">ed</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;PR number&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ed</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;PR number&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',7),y=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--no_maintainer_modify</code></td><td>Not allow maintainers modify the pull request</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gh-pr-merge" tabindex="-1">x gh pr merge <a class="header-anchor" href="#x-gh-pr-merge" aria-label="Permalink to &quot;x gh pr merge&quot;">​</a></h3><p>Merge pull request</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#929292;"> [OPTIONS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;PR number&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#6C6C6C;"> [OPTIONS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;PR number&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',7),h=a('<ul><li><strong>Examples</strong> :</li></ul><p>Squash Merge &lt;pr_number&gt; PR on &lt;owner/repo&gt;</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pr</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--repo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--merge_method</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">squash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">pr_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pr</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--repo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--merge_method</span><span style="color:#24292E;"> </span><span style="color:#032F62;">squash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">pr_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',5);function E(u,g,F,m,C,b){const e=t("DocsGroupTable"),o=t("FooterAds");return p(),n("div",null,[c,s(e,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"`--repo`, `-r` <owner/repo>","default":"","desc":"<owner_path>/<repo_path>"}]},"Optional":{"active":true,"data":[{"name":"`--base` <branch>","default":"","desc":"Filter pulls by base branch name"},{"name":"`--head` <ref>","default":"","desc":"Filter pulls by base branch name"},{"name":"`--state` <state>","default":"`\\"open\\"` ","desc":"Filter pulls by state"},{"name":"`--sort` <way>","default":"`\\"created\\"` ","desc":"Sort pull requests"},{"name":"`--direction` <direction>","default":"`\\"desc\\"` ","desc":"Sort pull requests"},{"name":"`--page` <num>","default":"`\\"1\\"` ","desc":"target page"},{"name":"`--per_page` <num>","default":"`\\"30\\"` ","desc":"per_page data number"}]},"$NotGroup":{"active":true,"data":[]}}'}),d,s(e,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"`--repo`, `-r` <owner/repo>","default":"","desc":"<owner_path>/<repo_path>"},{"name":"`--title` <title>","default":"","desc":"pull request title"},{"name":"`--head` <branch>","default":"","desc":"source branch"},{"name":"`--base` <branch>","default":"","desc":"target branch"}]},"Optional":{"active":true,"data":[{"name":"`--body` <content>","default":"","desc":"pull request content"},{"name":"`--issue` <issue>","default":"","desc":"association issue"}]},"$NotGroup":{"active":true,"data":[]}}'}),i,s(e,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"`--repo`, `-r` <owner/repo>","default":"","desc":"<owner_path>/<repo_path>"},{"name":"`--state` <open,closed>","default":"","desc":"pr state"}]},"Optional":{"active":true,"data":[{"name":"`--title` <title>","default":"","desc":"pull request title"},{"name":"`--base` <branch>","default":"","desc":"target branch"},{"name":"`--body` <content>","default":"","desc":"pull request content"}]},"$NotGroup":{"active":true,"data":[]}}'}),y,s(e,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"`--repo`, `-r` <owner/repo>","default":"","desc":"<owner_path>/<repo_path>"}]},"Optional":{"active":true,"data":[{"name":"`--merge_method` <merge_method>","default":"`\\"merge\\"` ","desc":"merge method"},{"name":"`--commit_title` <title>","default":"","desc":"Title for the automatic commit message"},{"name":"`--commit_message` <body>","default":"","desc":"Extra detail to append to automatic commit message"}]},"$NotGroup":{"active":true,"data":[]}}'}),h,s(o),s(o)])}const x=l(r,[["render",E]]);export{v as __pageData,x as default};
