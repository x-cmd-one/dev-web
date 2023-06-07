import{_ as t,D as l,o as n,c as p,G as s,R as a}from"./chunks/framework.c8605957.js";const v=JSON.parse('{"title":"x gt issue","description":"","frontmatter":{},"headers":[],"relativePath":"git/gt/issue.md","filePath":"git/gt/issue.md"}'),r={name:"git/gt/issue.md"},c=a('<h1 id="x-gt-issue" tabindex="-1">x gt issue <a class="header-anchor" href="#x-gt-issue" aria-label="Permalink to &quot;x gt issue&quot;">​</a></h1><p>issue management</p><h2 id="sub-commands" tabindex="-1">Sub Commands <a class="header-anchor" href="#sub-commands" aria-label="Permalink to &quot;Sub Commands&quot;">​</a></h2><div class="table-wrap"><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#x-gt-issue-ls">x gt issue ls</a></td><td>List issue</td></tr><tr><td><a href="#x-gt-issue-info">x gt issue info</a></td><td>Get issue info</td></tr><tr><td><a href="#x-gt-issue-create">x gt issue create</a></td><td>Create issue</td></tr><tr><td><a href="#x-gt-issue-edit">x gt issue edit</a></td><td>Edit issue</td></tr></tbody></table></div><h3 id="x-gt-issue-ls" tabindex="-1">x gt issue ls <a class="header-anchor" href="#x-gt-issue-ls" aria-label="Permalink to &quot;x gt issue ls&quot;">​</a></h3><p>List issue by owner</p><p><code>x gt issue ls</code> is multi-command merge sugar to conveniently use</p><ul><li><code>x gt user issue</code></li><li><code>x gt repo issue ls</code></li><li><code>x gt enterprise issue ls</code></li></ul><p>If you need more control options or using in script, Please use them</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;owner path(enterprise|owner/repo) [optional: use current user]&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;owner path(enterprise|owner/repo) [optional: use current user]&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',12),i=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><ul><li><strong>Examples</strong> :</li></ul><p>List current user issues</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span></code></pre></div><p>List &lt;owner/repo&gt; repo issues</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owner/rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owner/rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>List &lt;enterprise_address&gt; enterprise issues</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gt-issue-info" tabindex="-1">x gt issue info <a class="header-anchor" href="#x-gt-issue-info" aria-label="Permalink to &quot;x gt issue info&quot;">​</a></h3><p>Get issue info</p><p><code>x gt issue info</code> is multi-command merge sugar to conveniently use</p><ul><li><code>x gt repo issue info</code></li><li><code>x gt enterprise issue info</code></li></ul><p>If you need more control options or using in script, Please use them</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;issue number(Case sensitive.Not with #)&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;issue number(Case sensitive.Not with #)&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>--owner</code> &lt;owner_path&gt;</td><td></td><td>owner path(repo path or enterprise)</td></tr></tbody></table></div><ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><ul><li><strong>Examples</strong> :</li></ul><p>Get &lt;issue_number&gt; issue information from &lt;owner&gt;/&lt;repo&gt; repo</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--owner</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owne</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--owner</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owne</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Get &lt;issue_number&gt; issue information from &lt;owner&gt;/&lt;repo&gt; repo</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">owne</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">rep</span><span style="color:#E1E4E8;">o</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">owne</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">rep</span><span style="color:#24292E;">o</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Get &lt;issue_number&gt; issue information from &lt;enterprise_address&gt; enterprise</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--owner</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--owner</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><p>Get &lt;issue_number&gt; issue information from &lt;enterprise_address&gt; enterprise</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">info</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">info</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><h3 id="x-gt-issue-create" tabindex="-1">x gt issue create <a class="header-anchor" href="#x-gt-issue-create" aria-label="Permalink to &quot;x gt issue create&quot;">​</a></h3><p>Create issue</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',34),d=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--security</code></td><td>Mark private issue</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr></tbody></table></div><h3 id="x-gt-issue-edit" tabindex="-1">x gt issue edit <a class="header-anchor" href="#x-gt-issue-edit" aria-label="Permalink to &quot;x gt issue edit&quot;">​</a></h3><p>Edit issue</p><ul><li><strong>Usage</strong> :</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#F97583;">|</span><span style="color:#9ECBFF;">ed</span><span style="color:#929292;"> [OPTIONS] [FLAGS]</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">#</span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;issue number(Case sensitive.Not with #)&quot;</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ed</span><span style="color:#6C6C6C;"> [OPTIONS] [FLAGS]</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">#</span><span style="color:#005CC5;">1</span><span style="color:#032F62;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;issue number(Case sensitive.Not with #)&quot;</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><ul><li><strong>Options</strong> :</li></ul>',7),y=a('<ul><li><strong>Flags</strong> :</li></ul><div class="table-wrap"><table><thead><tr><th>Name, Shorthand</th><th>Description</th></tr></thead><tbody><tr><td><code>--security</code></td><td>Mark private issue</td></tr><tr><td><code>--json</code>, <code>-j</code></td><td>output raw JSON data</td></tr><tr><td><code>--type</code> &lt;issue_type&gt;</td><td>custom issue type</td></tr></tbody></table></div><ul><li><strong>Examples</strong> :</li></ul><p>Change &lt;enterprise_address&gt; enterprise &lt;issue_number&gt; issue state to progressing</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">issue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--owner</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">enterprise_addres</span><span style="color:#E1E4E8;">s</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--state</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">progressing</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">issue_numbe</span><span style="color:#E1E4E8;">r</span><span style="color:#F97583;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">issue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--owner</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">enterprise_addres</span><span style="color:#24292E;">s</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--state</span><span style="color:#24292E;"> </span><span style="color:#032F62;">progressing</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">issue_numbe</span><span style="color:#24292E;">r</span><span style="color:#D73A49;">&gt;</span></span></code></pre></div><br><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In interactive terminal( zsh, bash ... ), Can use <kbd>Tab</kbd> to get completion information</p><p>Run <code>CMD SUBCOMMAND --help</code> for more information on a command</p></div>',7);function u(E,F,g,h,C,m){const e=l("DocsGroupTable"),o=l("FooterAds");return n(),p("div",null,[c,s(e,{header:'["Name, Shorthand","Default","Description"]',group:'{"Optional":{"active":true,"data":[{"name":"`--direction` <asc,desc>","default":"`\\"desc\\"` ","desc":"sort direction"},{"name":"`--state` <open,progressing,closed,rejected>","default":"`\\"open\\"` ","desc":"issue state"},{"name":"`--labels` <label(separator ,)>","default":"","desc":"labels filter"},{"name":"`--page` <num>","default":"`\\"1\\"` ","desc":"target page"},{"name":"`--per_page` <num>","default":"`\\"20\\"` ","desc":"per_page data number"}]},"$NotGroup":{"active":true,"data":[]}}'}),i,s(e,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"`--title` <title>","default":"","desc":"issue title"},{"name":"`--owner` <path>","default":"","desc":"Provide owner name(enterprise,ownerPath/RepoPath)"}]},"Optional":{"active":true,"data":[{"name":"`--body` <str>","default":"","desc":"issue describe (support markdown)"},{"name":"`--repo`, `-r`","default":"","desc":""},{"name":"`--type` <issue_type>","default":"","desc":"custom issue type"},{"name":"`--assignee` <user_login>","default":"","desc":"issue assignee"},{"name":"`--collaborators` <user_login(separator ,)>","default":"","desc":"issue collaborators"},{"name":"`--milestone` <id>","default":"","desc":"milestone ID"},{"name":"`--labels` <label(separator ,)>","default":"","desc":"issue labels"},{"name":"`--program` <id>","default":"","desc":"project ID"}]},"$NotGroup":{"active":true,"data":[]}}'}),d,s(e,{header:'["Name, Shorthand","Default","Description"]',group:'{"Required":{"active":true,"data":[{"name":"`--owner` <path>","default":"","desc":"Provide owner name(enterprise,ownerPath/RepoPath)"},{"name":"`--state` <open,progressing,closed>","default":"","desc":"issue state"}]},"Optional":{"active":true,"data":[{"name":"`--title` <title>","default":"","desc":"issue title"},{"name":"`--body` <str>","default":"","desc":"issue describe (support markdown)"},{"name":"`--repo`, `-r`","default":"","desc":""},{"name":"`--type` <issue_type>","default":"","desc":"custom issue type"},{"name":"`--assignee` <user_login>","default":"","desc":"issue assignee"},{"name":"`--collaborators` <user_login(separator ,)>","default":"","desc":"issue collaborators"},{"name":"`--milestone` <id>","default":"","desc":"milestone ID"},{"name":"`--labels` <label(separator ,)>","default":"","desc":"issue labels"},{"name":"`--program` <id>","default":"","desc":"project ID"}]},"$NotGroup":{"active":true,"data":[]}}'}),y,s(o),s(o)])}const _=t(r,[["render",u]]);export{v as __pageData,_ as default};
