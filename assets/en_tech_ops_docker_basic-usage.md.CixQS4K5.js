import{_ as s,c as i,a1 as e,o as t}from"./chunks/framework.B0TIX6-Q.js";const c=JSON.parse('{"title":"Docker 基础使用教程","description":"Docker 容器技术入门，从安装到基本操作","frontmatter":{"title":"Docker 基础使用教程","description":"Docker 容器技术入门，从安装到基本操作"},"headers":[],"relativePath":"en/tech/ops/docker/basic-usage.md","filePath":"en/tech/ops/docker/basic-usage.md"}'),h={name:"en/tech/ops/docker/basic-usage.md"};function n(l,a,r,p,o,k){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="docker-基础使用教程" tabindex="-1">Docker 基础使用教程 <a class="header-anchor" href="#docker-基础使用教程" aria-label="Permalink to &quot;Docker 基础使用教程&quot;">​</a></h1><h2 id="docker-是什么" tabindex="-1">Docker 是什么？ <a class="header-anchor" href="#docker-是什么" aria-label="Permalink to &quot;Docker 是什么？&quot;">​</a></h2><p>Docker 是一个开源的容器化平台，用于开发、部署和运行应用程序。</p><h2 id="安装-docker" tabindex="-1">安装 Docker <a class="header-anchor" href="#安装-docker" aria-label="Permalink to &quot;安装 Docker&quot;">​</a></h2><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre></div><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>下载 Docker Desktop 并安装</p><h2 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-label="Permalink to &quot;基本命令&quot;">​</a></h2><h3 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-label="Permalink to &quot;拉取镜像&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><h3 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-label="Permalink to &quot;运行容器&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><h3 id="查看运行中的容器" tabindex="-1">查看运行中的容器 <a class="header-anchor" href="#查看运行中的容器" aria-label="Permalink to &quot;查看运行中的容器&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span></span></code></pre></div><h2 id="dockerfile-示例" tabindex="-1">Dockerfile 示例 <a class="header-anchor" href="#dockerfile-示例" aria-label="Permalink to &quot;Dockerfile 示例&quot;">​</a></h2><div class="language-dockerfile vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> python:3.9</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">WORKDIR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COPY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . /app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RUN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pip install -r requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CMD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;app.py&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="常用操作" tabindex="-1">常用操作 <a class="header-anchor" href="#常用操作" aria-label="Permalink to &quot;常用操作&quot;">​</a></h2><ul><li>构建镜像</li><li>推送到仓库</li><li>容器编排</li></ul>`,19)]))}const g=s(h,[["render",n]]);export{c as __pageData,g as default};
