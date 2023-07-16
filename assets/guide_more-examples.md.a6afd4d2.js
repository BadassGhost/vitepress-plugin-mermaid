import{_ as r,E as i,o as a,c,b as e,w as s,a2 as l,U as t,J as o,a as p}from"./chunks/framework.155df519.js";const b=JSON.parse('{"title":"A more complex example","description":"","frontmatter":{"mermaidTheme":"forest","title":"A more complex example"},"headers":[],"relativePath":"guide/more-examples.md","filePath":"guide/more-examples.md","lastUpdated":1689486704000}'),C={name:"guide/more-examples.md"},A=t(`<h1 id="frontmatter-setup" tabindex="-1">Frontmatter Setup <a class="header-anchor" href="#frontmatter-setup" aria-label="Permalink to &quot;Frontmatter Setup&quot;">​</a></h1><p>💡 The theme for each page can be set in the frontmatter mermaidTheme parameter! But is only valid is light mode...</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">mermaidTheme: forest</span></span>
<span class="line"><span style="color:#A6ACCD;">title: A more complex example</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span></code></pre></div><h1 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h1><p>Images and links can be used as well..</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should place your image files in the public folder! In case you set an base you should prefix images with it.</p></div><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">graph</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">LR</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    K</span><span style="color:#89DDFF;font-style:italic;">([</span><span style="color:#C3E88D;">...........&lt;img src</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;/vitepress</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">mermaid/K.png&#39; width</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;60&#39; &gt;...........</span><span style="color:#89DDFF;font-style:italic;">])-.-&gt;</span><span style="color:#A6ACCD;">G</span><span style="color:#89DDFF;font-style:italic;">((</span><span style="color:#C3E88D;">...........&lt;img id</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;git&#39; src</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;/vitepress</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">mermaid/Octocat.png&#39; width</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;50&#39; &gt;...........</span><span style="color:#89DDFF;font-style:italic;">))</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    H</span><span style="color:#89DDFF;font-style:italic;">([</span><span style="color:#C3E88D;">...........&lt;img id</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;helm&#39; src</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;/vitepress</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">mermaid/helm.png&#39; width</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;60&#39; &gt;...........</span><span style="color:#89DDFF;font-style:italic;">])-.-&gt;</span><span style="color:#A6ACCD;">G</span></span>
<span class="line"><span style="color:#A6ACCD;">    G</span><span style="color:#89DDFF;font-style:italic;">--&gt;</span><span style="color:#A6ACCD;">A;</span></span>
<span class="line"><span style="color:#A6ACCD;">    A</span><span style="color:#89DDFF;font-style:italic;">(</span><span style="color:#C3E88D;">...........&lt;img src</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;/vitepress</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">mermaid/argo</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">cd.png&#39; width</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;60&#39; &gt;...........</span><span style="color:#89DDFF;font-style:italic;">)--&gt;</span><span style="color:#A6ACCD;">D</span><span style="color:#89DDFF;font-style:italic;">(</span><span style="color:#C3E88D;">...........&lt;img src</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;/vitepress</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;">-</span><span style="color:#C3E88D;">mermaid/ocp.png&#39; width</span><span style="color:#A6ACCD;">=</span><span style="color:#C3E88D;">&#39;60&#39; &gt;...........</span><span style="color:#89DDFF;font-style:italic;">)</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">classDef img fill:none,color:transparent,stroke:none,borderRadius:50px</span></span>
<span class="line"><span style="color:#A6ACCD;">class G,D,A,K,H,B img</span></span>
<span class="line"><span style="color:#A6ACCD;">click K &quot;https://kustomize.io/&quot; _blank</span></span>
<span class="line"><span style="color:#A6ACCD;">click G &quot;http://www.github.com&quot; &quot;This is a link&quot; _blank</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Isolated images are nor rendering while using mermaid bigger than 9.1 <a href="https://github.com/mermaid-js/mermaid/issues/4023" target="_blank" rel="noreferrer">see the issue on github</a>.<br> The transparent wrapper <code>...........</code> is a workaround until it is fixed.</p></div><h1 id="render" tabindex="-1">Render <a class="header-anchor" href="#render" aria-label="Permalink to &quot;Render&quot;">​</a></h1><p>In light mode the arrows are green since we are using forest here<br> Kustomize and github are links in here!</p>`,10),d=t(`<h2 id="mindmap-supported" tabindex="-1">Mindmap supported <a class="header-anchor" href="#mindmap-supported" aria-label="Permalink to &quot;Mindmap supported&quot;">​</a></h2><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">mindmap</span></span>
<span class="line"><span style="color:#A6ACCD;">  root((mindmap))</span></span>
<span class="line"><span style="color:#A6ACCD;">    Origins</span></span>
<span class="line"><span style="color:#A6ACCD;">      Long history</span></span>
<span class="line"><span style="color:#A6ACCD;">      ::icon(fa fa-book)</span></span>
<span class="line"><span style="color:#A6ACCD;">      Popularisation</span></span>
<span class="line"><span style="color:#A6ACCD;">        British popular psychology author Tony Buzan</span></span>
<span class="line"><span style="color:#A6ACCD;">    Research</span></span>
<span class="line"><span style="color:#A6ACCD;">      On effectiveness&lt;br/&gt;and features</span></span>
<span class="line"><span style="color:#A6ACCD;">      On Automatic creation</span></span>
<span class="line"><span style="color:#A6ACCD;">        Uses</span></span>
<span class="line"><span style="color:#A6ACCD;">            Creative techniques</span></span>
<span class="line"><span style="color:#A6ACCD;">            Strategic planning</span></span>
<span class="line"><span style="color:#A6ACCD;">            Argument mapping</span></span>
<span class="line"><span style="color:#A6ACCD;">    Tools</span></span>
<span class="line"><span style="color:#A6ACCD;">      Pen and paper</span></span>
<span class="line"><span style="color:#A6ACCD;">      Mermaid</span></span></code></pre></div>`,2),m=t(`<h2 id="pie" tabindex="-1">Pie <a class="header-anchor" href="#pie" aria-label="Permalink to &quot;Pie&quot;">​</a></h2><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">pie</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Pets adopted by volunteers</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;"> &quot;Dogs&quot; </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 386</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;"> &quot;Cats&quot; </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 85</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;"> &quot;Rats&quot; </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> 15</span></span></code></pre></div>`,2);function D(y,u,g,h,_,f){const n=i("Mermaid");return a(),c("div",null,[A,(a(),e(l,null,{default:s(()=>[o(n,{id:"mermaid-30",graph:"graph%20LR%3B%0A%20%20%20%20K(%5B...........%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2FK.png'%20width%3D'60'%20%3E...........%5D)-.-%3EG((...........%3Cimg%20id%3D'git'%20src%3D'%2Fvitepress-plugin-mermaid%2FOctocat.png'%20width%3D'50'%20%3E...........))%3B%0A%20%20%20%20H(%5B...........%3Cimg%20id%3D'helm'%20src%3D'%2Fvitepress-plugin-mermaid%2Fhelm.png'%20width%3D'60'%20%3E...........%5D)-.-%3EG%0A%20%20%20%20G--%3EA%3B%0A%20%20%20%20A(...........%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2Fargo-cd.png'%20width%3D'60'%20%3E...........)--%3ED(...........%3Cimg%20src%3D'%2Fvitepress-plugin-mermaid%2Focp.png'%20width%3D'60'%20%3E...........)%3B%0AclassDef%20img%20fill%3Anone%2Ccolor%3Atransparent%2Cstroke%3Anone%2CborderRadius%3A50px%0Aclass%20G%2CD%2CA%2CK%2CH%2CB%20img%0Aclick%20K%20%22https%3A%2F%2Fkustomize.io%2F%22%20_blank%0Aclick%20G%20%22http%3A%2F%2Fwww.github.com%22%20%22This%20is%20a%20link%22%20_blank%0A"})]),fallback:s(()=>[p(" Loading... ")]),_:1})),d,(a(),e(l,null,{default:s(()=>[o(n,{id:"mermaid-36",graph:"mindmap%0A%20%20root((mindmap))%0A%20%20%20%20Origins%0A%20%20%20%20%20%20Long%20history%0A%20%20%20%20%20%20%3A%3Aicon(fa%20fa-book)%0A%20%20%20%20%20%20Popularisation%0A%20%20%20%20%20%20%20%20British%20popular%20psychology%20author%20Tony%20Buzan%0A%20%20%20%20Research%0A%20%20%20%20%20%20On%20effectiveness%3Cbr%2F%3Eand%20features%0A%20%20%20%20%20%20On%20Automatic%20creation%0A%20%20%20%20%20%20%20%20Uses%0A%20%20%20%20%20%20%20%20%20%20%20%20Creative%20techniques%0A%20%20%20%20%20%20%20%20%20%20%20%20Strategic%20planning%0A%20%20%20%20%20%20%20%20%20%20%20%20Argument%20mapping%0A%20%20%20%20Tools%0A%20%20%20%20%20%20Pen%20and%20paper%0A%20%20%20%20%20%20Mermaid%0A"})]),fallback:s(()=>[p(" Loading... ")]),_:1})),m,(a(),e(l,null,{default:s(()=>[o(n,{id:"mermaid-41",graph:"pie%20title%20Pets%20adopted%20by%20volunteers%0A%20%20%22Dogs%22%20%3A%20386%0A%20%20%22Cats%22%20%3A%2085%0A%20%20%22Rats%22%20%3A%2015%0A"})]),fallback:s(()=>[p(" Loading... ")]),_:1}))])}const E=r(C,[["render",D]]);export{b as __pageData,E as default};
