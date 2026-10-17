/**
 * Sahil Kumar portfolio content inside the original DreamOS composition.
 * Source layout credit: Mahri — https://codepen.io/mahricodes/pen/azpyVgW
 * Content from the supplied resume and user's existing portfolio source.
 * Original DOM IDs/classes retained for DreamOS runtime interactions.
 */
export const dreamOSMarkup = String.raw`<!-- Sahil Kumar profile based on original DreamOS CodePen layout by Mahri. -->

<!--
═══════════════════════════════════════════════════════════════════

HOW TO CHANGE THE THEME

This profile supports multiple built-in themes.

Simply change

<div class="wrap">

to one of the following:

----------------------------------------------------

DREAMCORE (Default)

<div class="wrap">

----------------------------------------------------

OCEAN MEMORY

<div class="wrap theme-ocean">

----------------------------------------------------

FOREST SPIRIT

<div class="wrap theme-forest">

----------------------------------------------------

BLOOD CHERRY

<div class="wrap theme-bloodcherry">

----------------------------------------------------

Crimson Candy

<div class="wrap theme-crimsoncandy">

----------------------------------------------------

WINDOWS 98

<div class="wrap theme-win98">

----------------------------------------------------

CYBER

<div class="wrap theme-cyber">


═══════════════════════════════════════════════════════════════════

Want your own colors?

Simply edit the :root section at the very top of the CSS.

Every color used in the layout is controlled there.

No need to search through the entire CSS.

═══════════════════════════════════════════════════════════════════
-->
<div class="wrap theme-graphite">
<div class="wrapTop">sahil_kumar_portfolio.exe <button onclick="mahriShowDialog()" title="Get in touch">✉</button>
</div>
<div class="aura auraone"></div>
<div class="aura auratwo"></div>
<div class="aura aurathree"></div>
<!-- === PLAYER / MUSIC === -->
<div class="player">
<div class="top">focus_radio.exe <span>dev.radio</span>
</div>
<div class="playerbody">
<div class="coverbox">
<img id="mahriCover" data-fallback="/projects/avatar.svg" src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/e5/9e/47e59ebf-2447-b275-bdfb-d1c3bdf3ae2c/cover.jpg/300x300bb.jpg"/>
</div>
<div class="songinfo">
<b id="mahriTitle">same place</b>
<span id="mahriArtist">JOY.</span>
<small><a id="mahriAlbum" href="https://music.apple.com/us/song/1588294195" target="_blank" rel="noopener noreferrer" title="Listen to full song on Apple Music">30s preview · full song ↗</a></small>
</div>
</div>
<audio id="mahriAudio" preload="metadata" src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a8/65/ad/a865ad20-28fd-4ba9-6506-1ac721a75044/mzaf_15898949387203645057.plus.aac.p.m4a"></audio>
<div class="visualizer">
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
<i></i>
</div>
<div class="seekbox">
<span id="mahriCurrent">00:00</span>
<input id="mahriSeek" min="0" step="1" type="range" value="0"/>
<span id="mahriDuration">00:00</span>
</div>
<div class="controls">
<button onclick="mahriPrev()">‹</button>
<button class="play" id="mahriButton" onclick="mahriPlay()">▶</button>
<button onclick="mahriNext()">›</button>
<button id="mahriMute" onclick="mahriMute()">♡</button>
</div>
<div class="volumebox">
<span>volume</span>
<input id="mahriVolume" max="1" min="0" step="0.01" type="range" value="0.2"/>
</div>
<div class="miniplaylist">
<b>playlist · Apple Music previews</b>
<button class="track" data-title="same place" data-artist="JOY." data-album="Same Place · 2016" data-cover="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/47/e5/9e/47e59ebf-2447-b275-bdfb-d1c3bdf3ae2c/cover.jpg/300x300bb.jpg" data-src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a8/65/ad/a865ad20-28fd-4ba9-6506-1ac721a75044/mzaf_15898949387203645057.plus.aac.p.m4a" data-full-url="https://music.apple.com/us/song/1588294195" data-pet="neptune" data-pet-extra="" data-pet-status="status: in the same place ♫" data-mouth="ᴗ" data-msn-mood="dreamy" data-msn-away="late-night build session · same place">01 same place</button>
<button class="track" data-title="renegade" data-artist="Aaryan Shah" data-album="The Arrival · 2020" data-cover="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b1/32/0c/b1320cc6-adc2-858e-e0fc-f5f77ad74061/197580239323.jpg/300x300bb.jpg" data-src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0b/97/48/0b9748c7-002a-c43c-02b8-b97730f1b87d/mzaf_5447878732324022627.plus.aac.p.m4a" data-full-url="https://music.apple.com/us/song/1781271649" data-pet="lithium" data-pet-extra="" data-pet-status="status: night shift energy ✦" data-mouth="﹏" data-msn-mood="midnight" data-msn-away="coding after dark · renegade">02 renegade</button>
<button class="track" data-title="sdp interlude" data-artist="Travis Scott" data-album="Birds in the Trap · 2016" data-cover="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/50/f7/a3/50f7a39d-3bd5-28e9-0264-532f08b5b810/886446074726.jpg/300x300bb.jpg" data-src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/26/5b/c0/265bc0dc-893d-c8f6-61c0-4d60a2e6a11a/mzaf_1631400767345722059.plus.aac.p.m4a" data-full-url="https://music.apple.com/us/song/1150135880" data-pet="iris" data-pet-extra="" data-pet-status="status: lost in the interlude ☾" data-mouth="‿" data-msn-mood="immersed" data-msn-away="lost inside the interlude · coding">03 sdp interlude</button>
</div>
</div>
<!-- === DESKTOP ICONS / NAVIGATION === -->
<div class="desktopicons">
<button onclick="mahriOpenWindow('aboutWindow')" title="Open about.exe">
<span>♡</span>
<b>about.exe</b>
</button>
<button onclick="mahriOpenWindow('dreamWindow')" title="Open experience.exe">
<span>⌘</span>
<b>experience.exe</b>
</button>
<button onclick="mahriOpenWindow('lookbookWindow')" title="Open skills.exe">
<span>✧</span>
<b>skills.exe</b>
</button>
<button onclick="mahriOpenWindow('relationsWindow')" title="Open projects.exe">
<span>▣</span>
<b>projects.exe</b>
</button>
</div>
<div class="msnstatus">
<div class="notetop">contact_status.exe</div>
<div class="msnbody"><div class="msnline"><span class="msnonline">● available to connect</span> · sahil</div>
<div class="msnline">♫ <span id="mahriMsnSong">neptune mood</span></div>
<div class="msnline">mood: <span id="mahriMsnMood">building</span></div>
<div class="msnaway">quick links:<br/><a href="mailto:sahils.0903@gmail.com">✉ email me</a> · <a href="https://linkedin.com/in/sahilkumar-webdev" rel="noopener noreferrer" target="_blank">↗ linkedin</a><br/><span id="mahriMsnAway">open to web projects</span></div></div>
</div>
<!-- === MAIN MEMORY VIEWER === -->
<div class="main">
<div class="top">portfolio_viewer.exe <span id="mahriEpisodeFile">divine_events_tours.project</span>
</div>
<div class="episodeviewer">
<div class="episode active" data-file="divine_events_tours.project">
<div class="episodeimage">
<button class="slidebutton prev" onclick="mahriEpisode(-1)">‹</button>
<img alt="Divine Events &amp; Tours website preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/divine-events-tours-preview.jpg" data-placeholder="/projects/divine-events-tours-preview.svg" loading="eager" src="/projects/original/divine-events-tours-preview.jpg"/>
<div class="scanbar"></div>
<div class="bubble" style="--x:18px;--y:230px;--w:190px;--tail-x:28px;">destinations / journeys / travel</div>
<div class="bubble" style="--x:205px;--y:290px;--w:230px;--tail-x:110px;">crafted for discovery &amp; enquiries</div>
<div class="caption">featured project 01 · Divine Events &amp; Tours · WordPress Web Developer</div>
<button class="slidebutton next" onclick="mahriEpisode(1)">›</button>
</div>
<div class="dreamlog"><b>project log</b>
<div><span>project</span><em>Divine Events &amp; Tours</em></div>
<div><span>role</span><em>WordPress Web Developer</em></div>
<div><span>category</span><em>WordPress / Travel</em></div>
<div><span>stack</span><em>WordPress · CSS · Responsive UI</em></div>
<div class="lognote"><strong>my contribution</strong><p>Built travel-package sections and responsive layouts with destination showcases and enquiry-focused user journeys.</p>
<a class="portfolio-link" href="https://divineeventstours.com/" rel="noopener noreferrer" target="_blank">↗ view live project</a></div></div>
</div>
<div class="episode" data-file="myastrotell.project">
<div class="episodeimage">
<button class="slidebutton prev" onclick="mahriEpisode(-1)">‹</button>
<img alt="MyAstroTell website preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/myastrotell.jpg" data-placeholder="/projects/myastrotell.svg" loading="lazy" src="/projects/original/myastrotell.jpg"/>
<div class="scanbar"></div>
<div class="bubble" style="--x:22px;--y:235px;--w:185px;--tail-x:26px;">astrology / design to code</div>
<div class="bubble" style="--x:245px;--y:45px;--w:172px;--tail-x:70px;">interfaces guided by the stars ✦</div>
<div class="caption">featured project 02 · MyAstroTell · Frontend Developer</div>
<button class="slidebutton next" onclick="mahriEpisode(1)">›</button>
</div>
<div class="dreamlog"><b>project log</b>
<div><span>project</span><em>MyAstroTell</em></div>
<div><span>role</span><em>Frontend Developer</em></div>
<div><span>category</span><em>WordPress / API-driven UI</em></div>
<div><span>stack</span><em>Elementor · Figma · CSS · API UI</em></div>
<div class="lognote"><strong>my contribution</strong><p>Translated design references into responsive pages and refined styling for API-powered astrology reports.</p>
<a class="portfolio-link" href="https://myastrotell.com/" rel="noopener noreferrer" target="_blank">↗ view live project</a></div></div>
</div>
<div class="episode" data-file="chanteur_designs.project">
<div class="episodeimage">
<button class="slidebutton prev" onclick="mahriEpisode(-1)">‹</button>
<img alt="Chanteur Designs website preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/chanteur-designs.jpg" data-placeholder="/projects/chanteur-designs.svg" loading="lazy" src="/projects/original/chanteur-designs.jpg"/>
<div class="scanbar"></div>
<div class="bubble" style="--x:230px;--y:40px;--w:190px;--tail-x:35px;">commerce / campaigns / automation</div>
<div class="bubble" style="--x:30px;--y:255px;--w:205px;--tail-x:35px;">details that work behind the scenes</div>
<div class="caption">featured project 03 · Chanteur Designs · Shopify Developer</div>
<button class="slidebutton next" onclick="mahriEpisode(1)">›</button>
</div>
<div class="dreamlog"><b>project log</b>
<div><span>project</span><em>Chanteur Designs</em></div>
<div><span>role</span><em>Shopify Developer</em></div>
<div><span>category</span><em>Shopify / eCommerce</em></div>
<div><span>stack</span><em>Liquid · Apps Script · Klaviyo</em></div>
<div class="lognote"><strong>my contribution</strong><p>Built Shopify campaign pages, UGC upload flows and automations for tracking, coupons and customer follow-ups.</p>
<a class="portfolio-link" href="https://chanteurdesigns.com/" rel="noopener noreferrer" target="_blank">↗ view live project</a></div></div>
</div>
<div class="episodearchive" id="mahriEpisodeArchive">
<button class="active" onclick="mahriEpisodeGo(0)">01 <span>divine events</span></button>
<button class="" onclick="mahriEpisodeGo(1)">02 <span>myastrotell</span></button>
<button class="" onclick="mahriEpisodeGo(2)">03 <span>chanteur</span></button>
</div>
</div>
</div>
<!-- === DREAM PET === -->
<div class="side">
<div class="top">pixel_pet.exe <span>pixel</span>
</div>
<div class="petbox">
<div class="pet" id="mahriPet" onclick="mahriPetAction('pet')">
<div class="cloudpart c1"></div>
<div class="cloudpart c2"></div>
<div class="cloudpart c3"></div>
<div class="cloudpart c4"></div>
<div class="face">
<span class="eye eyeleft"></span>
<span class="eye eyeright"></span>
<span class="blush blushleft"></span>
<span class="blush blushright"></span>
<b id="mahriMouth">‿</b>
</div>
<div class="petfx fxone">✧</div>
<div class="petfx fxtwo">☾</div>
<div class="petfx fxthree">♡</div>
</div>
<div class="petname">PIXEL</div>
<div class="petstatus" id="mahriPetStatus">status: shipping little details ✧</div>
<div class="petbar">
<span>mood</span>
<i>
<b id="mahriMood" style="width:78%;"></b>
</i>
</div>
<div class="petbar">
<span>energy</span>
<i>
<b id="mahriEnergy" style="width:64%;"></b>
</i>
</div>
<div class="petbar">
<span>bond</span>
<i>
<b id="mahriBond" style="width:35%;"></b>
</i>
</div>
<div class="petbuttons">
<button onclick="mahriPetAction('pet')">pet</button>
<button onclick="mahriPetAction('feed')">feed</button>
<button onclick="mahriPetAction('sleep')">sleep</button>
<button onclick="mahriPetAction('music')">music</button>
<button onclick="mahriPetAction('dream')">idea</button>
<button onclick="mahriShowDialog()">???</button>
</div>
<div class="petnote" id="mahriPetNote">click idea to discover a bit of my workflow.</div>
<div class="dreamlines" id="mahriDreamLines"><span>I love turning Figma screens into responsive, usable interfaces.</span><span>I build WordPress and Shopify experiences as well as React frontends.</span><span>Tiny hover interactions can make an interface feel alive.</span><span>Good websites need careful mobile QA, not just desktop polish.</span><span>My workflow spans frontend delivery, automation and deployments.</span></div>
</div>
</div>
<!-- === GALLERY STRIP === -->
<div class="fragments">
<div class="top">project_archive.exe <span>select to preview</span>
</div>
<button class="arrow left" onclick="mahriCarousel(-1)">‹</button>
<div class="viewport">
<div class="polas" id="mahriPolas"><button aria-label="Preview Zenith X" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/zenith-x.png" data-quote="Cinematic product showcase with scroll-driven canvas animations, preloading and responsive storytelling." data-title="Zenith X" data-url="https://zenith-x-delta.vercel.app" type="button"><img alt="Zenith X" data-fallback="/projects/zenith-x.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/zenith-x.png"/><span>zenith x</span></button><button aria-label="Preview Coirfed" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/coirfed.jpg" data-quote="Contributed to an eCommerce site and dashboard, responsive UI, navigation and production support." data-title="Coirfed" data-url="https://coirfed.in/" type="button"><img alt="Coirfed" data-fallback="/projects/coirfed.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/coirfed.jpg"/><span>coirfed</span></button><button aria-label="Preview Chanteur Designs" class="galleryitem" data-img="/projects/original/chanteur-designs.jpg" data-quote="Shopify campaign pages, UGC forms, upload tracking, coupon automation and customer follow-ups." data-title="Chanteur Designs" data-url="https://chanteurdesigns.com/" type="button"><img alt="Chanteur Designs" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/chanteur-designs.jpg" data-placeholder="/projects/chanteur-designs.svg" loading="lazy" src="/projects/original/chanteur-designs.jpg"/><span>chanteur designs</span></button><button aria-label="Preview Smile Dental Clinic" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/smile-dental-clinic-preview.jpg" data-quote="Clinic site with treatment guides, dentist profiles, FAQs, testimonials and appointment pathways." data-title="Smile Dental Clinic" data-url="https://smiledentalpkl.com/" type="button"><img alt="Smile Dental Clinic" data-fallback="/projects/smile-dental-clinic-preview.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/smile-dental-clinic-preview.jpg"/><span>smile dental cli</span></button><button aria-label="Preview Divine Events &amp; Tours" class="galleryitem" data-img="/projects/original/divine-events-tours-preview.jpg" data-quote="Tourism website with destination packages, booking assistance and enquiry-focused navigation." data-title="Divine Events &amp; Tours" data-url="https://divineeventstours.com/" type="button"><img alt="Divine Events &amp; Tours" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/divine-events-tours-preview.jpg" data-placeholder="/projects/divine-events-tours-preview.svg" loading="lazy" src="/projects/original/divine-events-tours-preview.jpg"/><span>divine events &amp; </span></button><button aria-label="Preview Agyle Studio" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/agyle-studio.jpg" data-quote="Service pages, Elementor sections, responsive UI, hover effects and interactive agency website elements." data-title="Agyle Studio" data-url="https://agylestudio.com/" type="button"><img alt="Agyle Studio" data-fallback="/projects/agyle-studio.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/agyle-studio.jpg"/><span>agyle studio</span></button><button aria-label="Preview MyAstroTell" class="galleryitem" data-img="/projects/original/myastrotell.jpg" data-quote="Responsive frontend interfaces and styling for API-generated astrology report content." data-title="MyAstroTell" data-url="https://myastrotell.com/" type="button"><img alt="MyAstroTell" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/myastrotell.jpg" data-placeholder="/projects/myastrotell.svg" loading="lazy" src="/projects/original/myastrotell.jpg"/><span>myastrotell</span></button><button aria-label="Preview VoteBridge" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/votebridge.jpg" data-quote="Political consulting site with structured content, interactive leader carousel and hover detail views." data-title="VoteBridge" data-url="https://votebridge.in/" type="button"><img alt="VoteBridge" data-fallback="/projects/votebridge.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/votebridge.jpg"/><span>votebridge</span></button><button aria-label="Preview Wordsmith Kaur" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/wordsmith-kaur.jpg" data-quote="Blog navigation, editorial layouts, responsive presentation and SEO-oriented site structure." data-title="Wordsmith Kaur" data-url="https://wordsmithkaur.com/" type="button"><img alt="Wordsmith Kaur" data-fallback="/projects/wordsmith-kaur.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/wordsmith-kaur.jpg"/><span>wordsmith kaur</span></button><button aria-label="Preview Subtle Events" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/subtle-events.jpg" data-quote="Hospitality website with service pages, galleries, blogs and responsive layouts." data-title="Subtle Events" data-url="https://subtleevents.co.uk/" type="button"><img alt="Subtle Events" data-fallback="/projects/subtle-events.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/subtle-events.jpg"/><span>subtle events</span></button><button aria-label="Preview GameVerse" class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/gameverse.png" data-quote="Gaming and esports landing experience with interactive particles and animated statistics." data-title="GameVerse" data-url="https://gaming-site-liart.vercel.app" type="button"><img alt="GameVerse" data-fallback="/projects/gameverse.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/gameverse.png"/><span>gameverse</span></button><button aria-label="Preview Chic &amp; Co." class="galleryitem" data-img="https://sahil-kumar-webdev.vercel.app/assets/projects/chic-and-co.png" data-quote="Fashion storefront with category navigation, product variants, cart and checkout frontend flows." data-title="Chic &amp; Co." data-url="https://chic-and-co-clothing-ecommerce.vercel.app" type="button"><img alt="Chic &amp; Co." data-fallback="/projects/chic-and-co.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/chic-and-co.png"/><span>chic &amp; co.</span></button></div>
</div>
<button class="arrow right" onclick="mahriCarousel(1)">›</button>
</div>
<div class="gallerywindow" id="mahriGalleryWindow">
<div class="windowtop">project_preview.exe <button onclick="mahriCloseGallery()">x</button>
</div>
<div class="windowbody">
<div class="windowimage">
<img alt="Selected project website preview" id="mahriGalleryImage" src=""/>
</div>
<div class="windowtext"><b id="mahriGalleryTitle">project</b><span id="mahriGalleryQuote">project details</span><a class="portfolio-link gallery-visit" href="#" id="mahriGalleryLink" rel="noopener noreferrer" target="_blank">↗ visit project website</a></div>
</div>
</div>
<!-- === ABOUT PAGE === -->
<div class="popupwindow aboutwindow" id="aboutWindow">
<div class="windowtop">about_sahil.exe <button onclick="mahriCloseWindow('aboutWindow')">x</button>
</div>
<div class="aboutbody">
<div class="aboutmain">
<h2>hello, i’m Sahil Kumar</h2>
<div class="aboutmeter">
<span>wordpress / cms</span>
<i>
<b style="width:90%;"></b>
</i>
<em>90%</em>
</div>
<div class="aboutmeter">
<span>frontend / ui</span>
<i>
<b style="width:85%;"></b>
</i>
<em>85%</em>
</div>
<div class="aboutmeter">
<span>shopify / commerce</span>
<i>
<b style="width:80%;"></b>
</i>
<em>80%</em>
</div>
<div class="abouttext"><b>about me · web developer</b>
<p>I'm a web developer based in Panchkula, Haryana, building responsive websites, online stores, campaign pages and interactive web experiences. I work across WordPress, WooCommerce, Shopify and React.</p>
<p>From translating Figma designs into polished frontend interfaces to handling forms, custom interactions and API-driven sections, I enjoy the details that make a site feel intuitive.</p>
<p>I also support launches, hosting and migrations, troubleshoot live websites, and automate repetitive workflows with Google Apps Script, Sheets, Drive and Klaviyo.</p>
<p><a class="portfolio-link" href="mailto:sahils.0903@gmail.com">✉ let's work together</a>   <a class="portfolio-link" href="https://linkedin.com/in/sahilkumar-webdev" rel="noopener noreferrer" target="_blank">↗ LinkedIn</a></p></div>
</div>
<div class="aboutside">
<div class="aboutphoto">
<img alt="Sahil Kumar portfolio avatar" data-fallback="/projects/avatar.svg" src="https://sahil-kumar-webdev.vercel.app/assets/profile/my-avatar.png"/>
</div>
<div class="aboutcard">
<span>name</span>
<b>Sahil Kumar</b>
</div>
<div class="aboutcard">
<span>role</span>
<b>Web Developer</b>
</div>
<div class="aboutcard">
<span>location</span>
<b>Panchkula, Haryana</b>
</div>
<div class="aboutcard">
<span>education</span>
<b>BCA · May 2024</b>
</div>
<div class="aboutnote"><a href="https://sahil-kumar-webdev.vercel.app/" rel="noopener noreferrer" target="_blank">↗ original portfolio</a><br/><a href="https://github.com/SahilSingh-kk" rel="noopener noreferrer" target="_blank">↗ GitHub</a></div>
</div>
</div>
</div>
<!-- === LOOKBOOK PAGE === -->
<div class="popupwindow lookbookwindow" id="lookbookWindow">
<div class="windowtop">skills_and_tools.exe <button onclick="mahriCloseWindow('lookbookWindow')">×</button>
</div>
<div class="lookwrap">
<div class="lookleft">
<div class="lookportrait">
<img alt="Zenith X website preview" data-fallback="/projects/zenith-x.svg" id="mahriLookPreviewMain" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/zenith-x.png"/>
<div class="lookfiles">
<span>wordpress.php</span>
<span>shopify.liquid</span>
<span>react.tsx</span>
<span>automation.gs</span>
</div>
</div>
<div class="lookminis">
<div class="lookmini">
<img alt="Coirfed website preview" data-fallback="/projects/coirfed.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/coirfed.jpg"/>
</div>
<div class="lookmini">
<img alt="Chanteur Designs website preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/chanteur-designs.jpg" data-placeholder="/projects/chanteur-designs.svg" loading="lazy" src="/projects/original/chanteur-designs.jpg"/>
</div>
</div>
<div class="lookquote"><span>design to code.<br/>code to experience.<br/>details matter.</span><small>responsive by default · built with care</small></div>
</div>
<div class="looktitle">
<small>technical profile · developer toolkit</small>
<h2>development toolkit</h2>
<p>A practical mix of frontend engineering, CMS/eCommerce development, automation and day-to-day site operations.</p>
</div>
<div class="looksections">
<div class="lookcard"><h3>cms &amp; commerce</h3><p>WordPress, Elementor, Astra, WooCommerce, Dokan, Shopify and Shopify Liquid.</p></div>
<div class="lookcard"><h3>frontend</h3><p>ReactJS, Vite, HTML5, CSS3, JavaScript, jQuery, Bootstrap and responsive design.</p></div>
<div class="lookcard"><h3>interfaces</h3><p>GSAP, CSS/SVG animations, forms, sliders, carousels, hover states and mobile-first QA.</p></div>
<div class="lookcard"><h3>automation &amp; APIs</h3><p>Google Apps Script, Sheets, Drive, Klaviyo, API integrations and data-driven UI styling.</p></div>
<div class="lookcard lookwide"><h3>delivery &amp; support</h3><p>Hostinger, GoDaddy, cPanel, DNS, migrations, deployment support, backups, cache and troubleshooting.</p></div>
</div>
<div class="lookside">
<div class="looksidebox">
<h3>UI design notes</h3>
<p>Design-sensitive frontend work: spacing, hierarchy, subtle motion and consistent polish.</p>
<div class="lookpalette">
<span class="swatch-pink"></span>
<span class="swatch-pearl"></span>
<span class="swatch-aqua"></span>
<span class="swatch-lilac"></span>
<span class="swatch-blue"></span>
<span class="swatch-extra"></span>
</div>
</div>
</div>
<div class="lookstrip">
<b>visual projects</b>
<span class="lookref" data-file="Zenith X" onmouseenter="mahriLookPreview(this)">
<img alt="Zenith X website preview" data-fallback="/projects/zenith-x.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/zenith-x.png"/>
</span>
<span class="lookref" data-file="Coirfed" onmouseenter="mahriLookPreview(this)">
<img alt="Coirfed website preview" data-fallback="/projects/coirfed.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/coirfed.jpg"/>
</span>
<span class="lookref" data-file="Chanteur Designs" onmouseenter="mahriLookPreview(this)">
<img alt="Chanteur Designs website preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/chanteur-designs.jpg" data-placeholder="/projects/chanteur-designs.svg" loading="lazy" src="/projects/original/chanteur-designs.jpg"/>
</span>
<span class="lookref" data-file="GameVerse" onmouseenter="mahriLookPreview(this)">
<img alt="GameVerse website preview" data-fallback="/projects/gameverse.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/gameverse.png"/>
</span>
<span class="lookref" data-file="Chic &amp; Co." onmouseenter="mahriLookPreview(this)">
<img alt="Chic &amp; Co. website preview" data-fallback="/projects/chic-and-co.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/chic-and-co.png"/>
</span>
</div>
</div>
</div>
<!-- === DREAMS PAGE === -->
<div class="popupwindow dreamwindow" id="dreamWindow">
<div class="windowtop">career_timeline.exe <button onclick="mahriCloseWindow('dreamWindow')">x</button>
</div>
<div class="dreambody">
<div class="dreamtop">
<div class="dreammeter">
<span>wordpress</span>
<i>
<b style="width:90%;"></b>
</i>
<em>90%</em>
</div>
<div class="dreammeter">
<span>react / UI</span>
<i>
<b style="width:85%;"></b>
</i>
<em>85%</em>
</div>
</div>
<div class="dreamlayout">
<div class="dreamleft">
<div class="dreamcard comfort"><h3>what i do</h3><ul>
<li>Responsive websites</li><li>eCommerce storefronts</li><li>Figma to frontend</li><li>Interactive UI</li><li>Campaign landing pages</li><li>Integrations</li><li>Site launches</li><li>Technical handovers</li></ul></div>
<div class="dreamcard wish"><h3>education</h3><p>BCA · DAV College, Chandigarh</p><span>completed May 2024</span></div>
</div>
<div class="dreamright">
<div class="dreamrow">
<div class="dreamcard"><h3>2026 → now</h3><p><b>Dizz2Bizz Solutions</b><br/>Web Developer · Frontend / Backend. Building responsive client sites, handling updates, launches, fixes and automations.</p></div>
<div class="dreamcard"><h3>2025 → 2026</h3><p><b>Agyle Studio</b><br/>Web Developer · Frontend / Backend. WordPress, Shopify, React, WooCommerce, responsive UI and hosting support.</p></div>
<div class="dreamcard"><h3>2024</h3><p><b>PROPEERS</b><br/>Frontend Developer Intern. Responsive HTML, CSS, JavaScript, jQuery and cross-browser layouts.</p></div>
</div>
<div class="dreamarchive">
<h3>experience + learning archive</h3>
<div class="dreamphotos">
<div class="dreamphoto">
<img alt="Agyle Studio website preview" data-fallback="/projects/agyle-studio.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/agyle-studio.jpg"/>
<b>01</b>
<p>WordPress sites</p>
</div>
<div class="dreamphoto">
<img alt="Zenith X website preview" data-fallback="/projects/zenith-x.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/zenith-x.png"/>
<b>02</b>
<p>React frontends</p>
</div>
<div class="dreamphoto">
<img alt="Chanteur Designs website preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/chanteur-designs.jpg" data-placeholder="/projects/chanteur-designs.svg" loading="lazy" src="/projects/original/chanteur-designs.jpg"/>
<b>03</b>
<p>Shopify stores</p>
</div>
<div class="dreamphoto">
<img alt="Coirfed website preview" data-fallback="/projects/coirfed.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/coirfed.jpg"/>
<b>04</b>
<p>Automations</p>
</div>
<div class="dreamphoto">
<img alt="GameVerse website preview" data-fallback="/projects/gameverse.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/gameverse.png"/>
<b>05</b>
<p>UI interactions</p>
</div>
<div class="dreamphoto">
<img alt="Chic &amp; Co. website preview" data-fallback="/projects/chic-and-co.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/chic-and-co.png"/>
<b>06</b>
<p>Deployment</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- === RELATIONS PAGE === -->
<div class="popupwindow relationswindow" id="relationsWindow">
<div class="windowtop">selected_projects.exe <button onclick="mahriCloseWindow('relationsWindow')">x</button>
</div>
<div class="relationsbody"><div class="relationitem"><div class="relationphotos"><img alt="Zenith X preview" data-fallback="/projects/zenith-x.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/zenith-x.png"/><img alt="Zenith X screenshot" data-fallback="/projects/zenith-x.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/zenith-x.png"/><span>↗</span></div>
<div class="relationinfo"><h3>01. Zenith X</h3><b>Next.js Developer</b>
<div class="relationtags"><span>React / Personal</span></div><p><span>stack:</span> Next.js, React, TypeScript, Tailwind, Framer Motion</p>
<a class="portfolio-link" href="https://zenith-x-delta.vercel.app" rel="noopener noreferrer" target="_blank">↗ visit website</a> <a href="https://github.com/SahilSingh-kk/zenith-x" rel="noopener noreferrer" target="_blank">GitHub ↗</a></div>
<div class="relationtext">Cinematic product showcase with scroll-driven canvas animations, preloading and responsive storytelling.<div class="project-meta">Interactive experience</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Coirfed preview" data-fallback="/projects/coirfed.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/coirfed.jpg"/><img alt="Coirfed screenshot" data-fallback="/projects/coirfed.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/coirfed.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>02. Coirfed</h3><b>React Frontend Developer</b>
<div class="relationtags"><span>React / eCommerce</span></div><p><span>stack:</span> ReactJS, Vite, eCommerce, deployment support</p>
<a class="portfolio-link" href="https://coirfed.in/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Contributed to an eCommerce site and dashboard, responsive UI, navigation and production support.<div class="project-meta">Storefront and dashboard</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Chanteur Designs preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/chanteur-designs.jpg" data-placeholder="/projects/chanteur-designs.svg" loading="lazy" src="/projects/original/chanteur-designs.jpg"/><img alt="Chanteur Designs screenshot" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/chanteur-designs.jpg" data-placeholder="/projects/chanteur-designs.svg" loading="lazy" src="/projects/original/chanteur-designs.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>03. Chanteur Designs</h3><b>Shopify Developer</b>
<div class="relationtags"><span>Shopify / Automation</span></div><p><span>stack:</span> Shopify Liquid, Google Apps Script, Sheets, Klaviyo</p>
<a class="portfolio-link" href="https://chanteurdesigns.com/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Shopify campaign pages, UGC forms, upload tracking, coupon automation and customer follow-ups.<div class="project-meta">Automation and campaigns</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Smile Dental Clinic preview" data-fallback="/projects/smile-dental-clinic-preview.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/smile-dental-clinic-preview.jpg"/><img alt="Smile Dental Clinic screenshot" data-fallback="/projects/smile-dental-clinic-preview.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/smile-dental-clinic-preview.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>04. Smile Dental Clinic</h3><b>WordPress Developer</b>
<div class="relationtags"><span>WordPress / Services</span></div><p><span>stack:</span> WordPress, Responsive Design, CSS</p>
<a class="portfolio-link" href="https://smiledentalpkl.com/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Clinic site with treatment guides, dentist profiles, FAQs, testimonials and appointment pathways.<div class="project-meta">Healthcare website</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Divine Events &amp; Tours preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/divine-events-tours-preview.jpg" data-placeholder="/projects/divine-events-tours-preview.svg" loading="lazy" src="/projects/original/divine-events-tours-preview.jpg"/><img alt="Divine Events &amp; Tours screenshot" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/divine-events-tours-preview.jpg" data-placeholder="/projects/divine-events-tours-preview.svg" loading="lazy" src="/projects/original/divine-events-tours-preview.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>05. Divine Events &amp; Tours</h3><b>WordPress Developer</b>
<div class="relationtags"><span>WordPress / Travel</span></div><p><span>stack:</span> WordPress, Responsive Design, CSS</p>
<a class="portfolio-link" href="https://divineeventstours.com/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Tourism website with destination packages, booking assistance and enquiry-focused navigation.<div class="project-meta">Travel and enquiries</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Agyle Studio preview" data-fallback="/projects/agyle-studio.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/agyle-studio.jpg"/><img alt="Agyle Studio screenshot" data-fallback="/projects/agyle-studio.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/agyle-studio.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>06. Agyle Studio</h3><b>Web Developer</b>
<div class="relationtags"><span>WordPress / Agency</span></div><p><span>stack:</span> WordPress, Elementor, CSS, JavaScript</p>
<a class="portfolio-link" href="https://agylestudio.com/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Service pages, Elementor sections, responsive UI, hover effects and interactive agency website elements.<div class="project-meta">Agency website</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="MyAstroTell preview" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/myastrotell.jpg" data-placeholder="/projects/myastrotell.svg" loading="lazy" src="/projects/original/myastrotell.jpg"/><img alt="MyAstroTell screenshot" data-fallback="https://raw.githubusercontent.com/SahilSingh-kk/sahil-kumar-portfolio/main/public/assets/projects/myastrotell.jpg" data-placeholder="/projects/myastrotell.svg" loading="lazy" src="/projects/original/myastrotell.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>07. MyAstroTell</h3><b>Frontend Developer</b>
<div class="relationtags"><span>WordPress / API</span></div><p><span>stack:</span> WordPress, Figma, CSS, API report styling</p>
<a class="portfolio-link" href="https://myastrotell.com/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Responsive frontend interfaces and styling for API-generated astrology report content.<div class="project-meta">API-powered UI</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="VoteBridge preview" data-fallback="/projects/votebridge.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/votebridge.jpg"/><img alt="VoteBridge screenshot" data-fallback="/projects/votebridge.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/votebridge.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>08. VoteBridge</h3><b>Frontend Developer</b>
<div class="relationtags"><span>WordPress / Interactive</span></div><p><span>stack:</span> WordPress, HTML, CSS, JavaScript</p>
<a class="portfolio-link" href="https://votebridge.in/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Political consulting site with structured content, interactive leader carousel and hover detail views.<div class="project-meta">Content and carousels</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Wordsmith Kaur preview" data-fallback="/projects/wordsmith-kaur.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/wordsmith-kaur.jpg"/><img alt="Wordsmith Kaur screenshot" data-fallback="/projects/wordsmith-kaur.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/wordsmith-kaur.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>09. Wordsmith Kaur</h3><b>WordPress Developer</b>
<div class="relationtags"><span>WordPress / Publishing</span></div><p><span>stack:</span> WordPress, WPBakery, CSS, SEO</p>
<a class="portfolio-link" href="https://wordsmithkaur.com/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Blog navigation, editorial layouts, responsive presentation and SEO-oriented site structure.<div class="project-meta">Editorial website</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Subtle Events preview" data-fallback="/projects/subtle-events.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/subtle-events.jpg"/><img alt="Subtle Events screenshot" data-fallback="/projects/subtle-events.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/subtle-events.jpg"/><span>↗</span></div>
<div class="relationinfo"><h3>10. Subtle Events</h3><b>WordPress Developer</b>
<div class="relationtags"><span>WordPress / Hospitality</span></div><p><span>stack:</span> WordPress, Elementor, CSS, SEO</p>
<a class="portfolio-link" href="https://subtleevents.co.uk/" rel="noopener noreferrer" target="_blank">↗ visit website</a></div>
<div class="relationtext">Hospitality website with service pages, galleries, blogs and responsive layouts.<div class="project-meta">Services and booking</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="GameVerse preview" data-fallback="/projects/gameverse.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/gameverse.png"/><img alt="GameVerse screenshot" data-fallback="/projects/gameverse.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/gameverse.png"/><span>↗</span></div>
<div class="relationinfo"><h3>11. GameVerse</h3><b>React Frontend Developer</b>
<div class="relationtags"><span>React / Personal</span></div><p><span>stack:</span> React, Vite, Bootstrap, AOS, tsParticles</p>
<a class="portfolio-link" href="https://gaming-site-liart.vercel.app" rel="noopener noreferrer" target="_blank">↗ visit website</a> <a href="https://github.com/SahilSingh-kk/gaming-site" rel="noopener noreferrer" target="_blank">GitHub ↗</a></div>
<div class="relationtext">Gaming and esports landing experience with interactive particles and animated statistics.<div class="project-meta">Interactive landing page</div></div></div><div class="relationitem"><div class="relationphotos"><img alt="Chic &amp; Co. preview" data-fallback="/projects/chic-and-co.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/chic-and-co.png"/><img alt="Chic &amp; Co. screenshot" data-fallback="/projects/chic-and-co.svg" loading="lazy" src="https://sahil-kumar-webdev.vercel.app/assets/projects/chic-and-co.png"/><span>↗</span></div>
<div class="relationinfo"><h3>12. Chic &amp; Co.</h3><b>React Developer</b>
<div class="relationtags"><span>React / eCommerce</span></div><p><span>stack:</span> React, TypeScript, Vite, React Router, Tailwind</p>
<a class="portfolio-link" href="https://chic-and-co-clothing-ecommerce.vercel.app" rel="noopener noreferrer" target="_blank">↗ visit website</a> <a href="https://github.com/SahilSingh-kk/chic-and-co-clothing-ecommerce" rel="noopener noreferrer" target="_blank">GitHub ↗</a></div>
<div class="relationtext">Fashion storefront with category navigation, product variants, cart and checkout frontend flows.<div class="project-meta">Fashion storefront</div></div></div><div class="relationsfooter">✦ additional client work: AuszLink · Basantē · Aican · Patna Press · Anil Bhai Rakhi Wala · Odontokart ✦</div></div>
</div>
<!-- === SMALL SYSTEM DIALOG  === -->
<div class="dreamdialog" id="mahriDialog">
<div class="windowtop">contact_sahil.exe <button onclick="mahriCloseDialog()">x</button>
</div>
<div class="dialogbody">
<b>let’s build something?</b>
<p id="mahriDialogText">Have a WordPress, Shopify, React or frontend project in mind? Email me and let’s talk.</p>
<div class="dialogbuttons">
<button onclick="mahriDialogYes()">email me</button>
<button onclick="mahriDialogNo()">maybe later</button>
</div>
</div>
</div>
<div class="toast" id="mahriToast">
<div class="toasttop">portfolio notification</div>
<div class="toastbody" id="mahriToastText">Explore the project archive below.</div>
</div>
<div class="footer"><span>SAHIL KUMAR · WEB DEVELOPER</span>   ✦   <a href="mailto:sahils.0903@gmail.com">EMAIL</a>   /   <a href="https://linkedin.com/in/sahilkumar-webdev" rel="noopener noreferrer" target="_blank">LINKEDIN</a>   /   <a href="https://github.com/SahilSingh-kk" rel="noopener noreferrer" target="_blank">GITHUB</a></div>
</div>
<div class="credits">Made by <strong>Sahil Kumar</strong></div>`;
