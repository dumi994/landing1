(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports={hbutton:"PillButton_hbutton__-rWwT",fbutton:"PillButton_fbutton__XwhJ1",cbutton:"PillButton_cbutton__2UhMf",fbuttonCont:"PillButton_fbuttonCont__1X0O3"}},function(e,t,a){e.exports={infoForm:"Contacts_infoForm__3A6tl",contacts:"Contacts_contacts__3wTTf","form-control":"Contacts_form-control__1ey7J",info:"Contacts_info___v5yX",orari:"Contacts_orari__focL4",primoDiv:"Contacts_primoDiv__2Dizq"}},,function(e,t,a){e.exports={sidebar:"Menu_sidebar__1775C",deskMenu:"Menu_deskMenu__ZreqP",menuIcon:"Menu_menuIcon__x4A9D",jumbotronH:"Menu_jumbotronH__26PEk",jumboImgContainer:"Menu_jumboImgContainer__qBaW1"}},,function(e,t,a){},,function(e,t,a){e.exports={teamImg:"Team_teamImg__2Vz-h",teamCard:"Team_teamCard__6rQuO"}},,function(e,t,a){e.exports=a.p+"static/media/studio-legale.86f2d09d.jpg"},function(e,t,a){e.exports={iconContainer:"Card_iconContainer__1cwn8",card:"Card_card__3yiLO"}},function(e,t,a){e.exports=a.p+"static/media/avvocato.c6bb3062.jpg"},,,,function(e,t,a){e.exports={cardHeight:"ChiSiamo_cardHeight__fwLhj",layer:"ChiSiamo_layer__1vLFe"}},,,,function(e,t,a){e.exports=a.p+"static/media/studio-legale.86f2d09d.jpg"},function(e,t,a){e.exports={toTopArrow:"ToTopArrow_toTopArrow__3GXRM"}},function(e,t,a){e.exports={body:"Body_body__3VVny"}},function(e,t,a){e.exports=a.p+"static/media/avvocati.f86db21d.jpg"},function(e,t,a){e.exports={layer:"Layer_layer__3k-wP"}},function(e,t,a){e.exports={cta:"CTA_cta__1ljWL",cbutton:"CTA_cbutton__bXSF6"}},function(e,t,a){e.exports={counter:"Counter_counter__1uTFM"}},function(e,t,a){e.exports={phylosphyCard:"Phylosophy_phylosphyCard__1DQ3L"}},function(e,t,a){e.exports=a(58)},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(21),l=a.n(c),o=(a(9),a(3));var r=function(e,t){Object(n.useEffect)(function(){function a(a){e.current&&!e.current.contains(a.target)&&t()}return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}},[e,t])},s=(a(22),a(40),a(13)),m=a.n(s),u=function(e){return i.a.createElement("a",{href:e.href,className:" col-12 w-100"},i.a.createElement("div",{className:"".concat(e.className),value:e.value,type:e.type},e.children))},d=a(4),f=a.n(d),E=(m.a,a(7)),p=a.n(E),v=[{url:"#",name:"Home"},{url:"#about",name:"Chi Siamo"},{url:"#servizi",name:"Servizi"},{url:"#contacts",name:"Contatti"}],g=function(){return i.a.createElement("nav",{className:"".concat(p.a.deskMenu," ").concat(p.a.navbar,"  navbar-dark bg-dark")},v.map(function(e,t){return i.a.createElement("a",{key:t,href:e.url},e.name)}))},b=[{url:"#",name:"Home"},{url:"#about",name:"Chi Siamo"},{url:"#servizi",name:"Servizi"},{url:"#contacts",name:"Contatti"}],N=function(e){var t=Object(n.useState)(window.innerWidth),a=Object(o.a)(t,2),c=(a[0],a[1]);Object(n.useEffect)(function(){var e=function(){c(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);var l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=s[0],u=s[1],d=function(){u(!m)},f=Object(n.useRef)(null);return r(f,function(){u(!1)}),i.a.createElement("div",{ref:f},i.a.createElement("div",{className:p.a.menuIcon,style:{marginLeft:"50% "},onClick:function(){return d()}},i.a.createElement("i",{className:"".concat(m?"fa-sharp fa-solid fa-x":"fa-solid fa-bars")})),m&&i.a.createElement("div",{className:p.a.sidebar},i.a.createElement("div",{className:"".concat(p.a.menu," mt-5")},b.map(function(e,t){return i.a.createElement("a",{key:t,href:e.url,onClick:function(){return d()}},e.name)}))))},h=a(23),w=a.n(h).a,_=function(){var e=Object(n.useState)(window.innerWidth),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){var e=function(){c(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]),i.a.createElement("div",{className:"".concat(a>900?p.a.jumbotronH:"")},i.a.createElement("div",{className:"".concat(p.a.jumboImgContainer," "),style:{backgroundImage:"url(".concat(w,")")}},i.a.createElement("div",{className:"layer d-flex align-items-center"},i.a.createElement("div",{className:" container row "},i.a.createElement("div",{className:"col-md-6 col-sm-12 my-auto d-flex flex-column"},i.a.createElement("h1",{className:"titleStyle"},"Pier Francesco Angelini "),i.a.createElement("h1",{className:"titleStyle"},"Studio legale "),i.a.createElement("p",{className:"pStyle mY-5"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit."),i.a.createElement(u,{href:"#servizi",className:f.a.hbutton},"Scopri di pi\xf9"))))))},y=a(24),x=a.n(y);var C=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];function l(){window.pageYOffset>300?c(!0):c(!1)}return i.a.useEffect(function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l)}},[]),i.a.createElement("div",{style:{display:a?"block":"none"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"".concat(x.a.toTopArrow)},i.a.createElement("span",null,i.a.createElement("i",{class:"fa-solid fa-chevron-up"})))},z=function(){var e=Object(n.useState)(window.innerWidth),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){var e=function(){c(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}},[]);var l=Object(n.useState)(!1),s=Object(o.a)(l,2),m=(s[0],s[1]),u=Object(n.useRef)(null);return r(u,function(){m(!1)}),i.a.createElement(i.a.Fragment,null,a<900?i.a.createElement(N,null):i.a.createElement(g,null),i.a.createElement(_,null))},j=a(25),k=a.n(j),L=a(19),S=a.n(L),I=a(14),O=a.n(I),A=function(e){return i.a.createElement("div",{style:e.style,className:"".concat(O.a.iconContainer,"  ").concat(e.customClass," d-flex align-items-center justify-content-center")},e.children)},T=function(e){return i.a.createElement("div",{className:"col-xl-4 col-md-6 col-lg-6 col-sm-12 mt-4"},i.a.createElement("div",{className:"".concat(O.a.card," ").concat(e.customClass," ").concat(e.class),style:{backgroundImage:"url(".concat(e.bgImg,")"),backgroundSize:"cover",backgroundColor:e.bgColor}},e.children))},q=a(26),F=a.n(q),P=a(15),M=a.n(P),D=a(27),R=a.n(D),B=function(e){return i.a.createElement("div",{style:{backgroundColor:e.bgc},className:"".concat(R.a.layer," ").concat(e.className)},e.children)},H=[{id:1,title:"Esperienza",bgImg:F.a,icon:"fa-solid fa-book",text:"Lo studio Legale PFA dispone di una struttura organizzativa altamente efficiente e dinamica capace di fornire un\u2019adeguata tutela ai propri assistiti a 360 gradi fornendo una consulenza trasversale in ogni ambito del diritto, avvalendosi altres\xec dell\u2019apporto di professionisti altamente specializzati in ogni materia."},{id:2,title:"Riservatezza",bgColor:"#F0AD0D",class:"backBlack",icon:"fa-regular fa-hand",text:"Lo Studio Legale PFA difende ed assiste i propri assistiti mediante un contatto personale e diretto, in quanto reputa essenziale, ai fini del raggiungimento del miglior risultato, avere con essi un rapporto diretto e fondato sulla fiducia reciproca, anche in considerazione delle delicate tematiche trattate."},{id:2,title:"Risultati effettivi",bgImg:M.a,icon:"fa-solid fa-square-poll-vertical",text:"Lo Studio Legale PFA volge particolare attenzione al costante aggiornamento professionale ed al continuo approfondimento dello studio giuridico. Ci\xf2 al fine di fornire sempre una difesa aggiornata e di livello elevato nelle tematiche di volta in volta affrontate."}],W=function(e){return i.a.createElement("div",{className:"container py-5 ",id:"about"},i.a.createElement("div",{className:"".concat(S.a.title_container," my-5")},i.a.createElement("h1",{className:"my-4"},"Lo Studio Legale Pier Francesco Angelini nasce nel 1999 a Grosseto"),i.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum voluptas distinctio nostrum dignissimos dolorem soluta alias, suscipit sequi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto similique voluptatem incidunt quasi tempore ipsum voluptas distinctio nostrum dignissimos dolorem soluta alias, suscipit sequi.")),i.a.createElement("div",{className:"row d-flex justify-content-center my-5"},H.map(function(e,t){return i.a.createElement(T,{key:t,icon:e.icon,bgColor:e.bgColor,bgImg:e.bgImg,customClass:S.a.cardHeight},i.a.createElement(B,{bgc:e.bgColor&&e.bgColor,className:"p-4"},i.a.createElement(A,{customClass:e.class},i.a.createElement("i",{className:e.icon})),i.a.createElement("h3",{className:"my-3"},e.title),i.a.createElement("p",null,e.text)))})))},V=a(28),X=a.n(V),J=function(){return i.a.createElement("div",{className:X.a.cta},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row "},i.a.createElement("div",{className:"d-flex align-items-center col-sm-12 col-md-8"},i.a.createElement("h1",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit.")),i.a.createElement("div",{className:"d-flex align-items-center col-sm-12 col-md-4 my-3"},i.a.createElement(u,{className:f.a.cbutton,href:"tel:3274142131"},"Chiamaci")))))},G=a(29),Q=a.n(G);var U=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(function(){var t=function(){if(document.getElementById("counter").getBoundingClientRect().bottom<window.innerHeight){var t=setInterval(function(){l(function(a){return a>=e.count?(clearInterval(t),e.count):a+1})},e.time);return function(){return clearInterval(t)}}};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}},[]),i.a.createElement("div",{className:Q.a.counter},i.a.createElement("p",null,c),i.a.createElement("h4",null,e.element))},Y=[{icon:"fa-regular fa-copyright",title:"Tutela del marchio",txt:"Lo studio segue il marchio dalla registrazione alla tutela stragiudiziale e giudiziaria in caso di contraffazione."},{icon:"fa-regular fa-eye",title:"Stalking",txt:"Si seguono fin dalle fasi iniziali le attivita\u0300 ipotizzate come stalking a carico della vittima."},{icon:"fa-regular fa-comments",title:"Diffamazione",txt:"Lo studio segue le vittime di reati di diffamazione sia a mezzo stampa che su social network."},{icon:"fa-solid fa-laptop",title:"Reati informatici",txt:"Assistenza giudiziaria nel caso, tra i tanti, di intrusioni nei sistemi informatici, diffamazione a mezzo social network, diffamazione on-line e sostituzione di persona, phishing, truffe informatiche."},{icon:"fa-solid fa-car-burst",title:"Lesioni ed omicidio stradale",txt:"Assistenza giudiziaria nel caso, tra i tanti, di intrusioni nei sistemi informatici, diffamazione a mezzo social network, diffamazione on-line e sostituzione di persona, phishing, truffe informatiche."},{icon:"fa-solid fa-fire",title:"Incendi dolosi e colposi",txt:"Tutela legale per tutti i casi di incendio sia doloso che colposo."}],Z=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container row d-flex justify-content-around my-5 text-center",id:"servizi"},i.a.createElement("h2",{className:"my-4 "},"Perch\xe9 scegliere Lo studio legale PFA?"),Y.map(function(e,t){return i.a.createElement(T,{key:t,icon:e.icon,customClass:"p-3"},i.a.createElement(A,{style:{margin:"20px auto"}},i.a.createElement("i",{className:e.icon})),i.a.createElement("h3",{className:"text-left"},e.title),i.a.createElement("p",{className:"mt-3 mb-3 text-left"}," ",e.txt))})),i.a.createElement("div",{className:" container d-flex justify-content-center row mb-4"},i.a.createElement("h2",{className:"text-center"},"I nostri successi"),i.a.createElement("div",{className:"col-sm-12 col-md-4"},i.a.createElement(U,{element:"Clienti soddisfatti",time:50,count:30})),i.a.createElement("div",{className:"col-sm-12 col-md-4"},i.a.createElement(U,{element:"Processi vinti",time:80,count:42})),i.a.createElement("div",{id:"counter"})))},K=a(30),$=a.n(K),ee=[{title:"Riccardo Bacchelli",txt:" La libert\xe0 non \xe8 un lusso degli uomini colti, ma il diritto di tutti gli uomini. "},{title:" Charles de Montesquieu",txt:"La legge non \xe8 giusta perch\xe9 \xe8 legge, ma diventa legge perch\xe9 \xe8 giusta. "}],te=function(){return i.a.createElement("div",{className:"",style:{backgroundImage:"url(".concat(m.a,")"),backgroundSize:"cover"}},i.a.createElement(B,null,i.a.createElement("div",{className:"container row pt-5 pb-5"},i.a.createElement("div",{className:"col-sm-12 col-12 col-md-12 col-xl-6 my-5 d-flex align-items-center"},i.a.createElement("p",{style:{lineHeight:"40px",fontSize:"18px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")),i.a.createElement("div",{className:"col-sm-12 col-12 col-md-12 col-xl-6 "},ee.map(function(e,t){return i.a.createElement("div",{className:"".concat($.a.phylosphyCard," col-12 my-5 "),key:t},i.a.createElement("h2",null,i.a.createElement("i",{class:"fa-sharp fa-solid fa-quote-left"}),i.a.createElement("br",null),e.txt),i.a.createElement("h5",null,i.a.createElement("strong",null,e.title)))})))))},ae=a(11),ne=a.n(ae),ie=[{nome:"Mario Rossi",img:"../../../assets/img/avvocato.jpg",socials:[{url:"https://www.facebook.com",icon:"fa-brands fa-facebook-f"},{url:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{url:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]}],ce=function(){return i.a.createElement("div",{className:"container p-5 row"},ie.map(function(e,t){return i.a.createElement("div",{className:"".concat(ne.a.teamCard," col-md-4 my-5 m-auto")},i.a.createElement("div",{className:"d-flex align-items-center flex-column"},i.a.createElement("div",{className:ne.a.teamImg,style:{backgroundImage:"url(".concat(M.a,")"),backgroundSize:"cover"}}),i.a.createElement("h5",{className:"m-2"},e.nome)),i.a.createElement("div",{className:"d-flex justify-content-center m-1"},i.a.createElement("ul",{className:"d-flex justify-content-center",style:{listStyleType:"none",padding:"0"}},e.socials.map(function(e,t){return i.a.createElement("li",{className:"mx-3",key:t},i.a.createElement("a",{target:"_blank",href:e.url},i.a.createElement("i",{className:e.icon})))}))))}))},le=a(5),oe=a.n(le),re=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"".concat(oe.a.info," text-center col-md-12 col-lg-6 my-5 px-4    ")},i.a.createElement("div",{className:" row"},i.a.createElement("div",{className:"".concat(oe.a.orari," col-md-6 col-sm-12")},i.a.createElement("h4",null," ",i.a.createElement("i",{class:"fa-solid fa-location-dot"})," GROSSETO"),i.a.createElement("p",null,"Via Lorem Ipsum 12"),i.a.createElement("div",{className:"".concat(oe.a.primoDiv," my-4")},i.a.createElement("h4",null,i.a.createElement("i",{class:"fa-solid fa-clock"})," Orari di apertura"),i.a.createElement("div",{className:"row d-flex alig-items-center my-4"},i.a.createElement("div",{className:"col-5 m-auto"},"Lun-Ven:"),i.a.createElement("div",{className:"col-7 "},i.a.createElement("p",null," 8:00 - 12:00"),i.a.createElement("p",null," 15:00 - 18:00"))),i.a.createElement("hr",null),i.a.createElement("div",{className:"row d-flex alig-items-center"},i.a.createElement("div",{className:"col-5  "},"Sab:"),i.a.createElement("div",{className:"col-7 "},i.a.createElement("p",null,"8:00 - 12:00"))),i.a.createElement("div",{className:"row d-flex alig-items-center"},i.a.createElement("div",{className:"col-5  "},"Dom:"),i.a.createElement("div",{className:"col-7 "},i.a.createElement("p",null,"Chiuso"))))),i.a.createElement("div",{className:"".concat(oe.a.orari," col-md-6 col-sm-12")},i.a.createElement("h4",null," ",i.a.createElement("i",{class:"fa-solid fa-location-dot"})," FIRENZE"),i.a.createElement("p",null,"Via Lorem Ipsum 12"),i.a.createElement("div",{className:"".concat(oe.a.primoDiv," my-4")},i.a.createElement("h4",null,i.a.createElement("i",{class:"fa-solid fa-clock"})," Orari di apertura"),i.a.createElement("div",{className:"row d-flex alig-items-center my-4"},i.a.createElement("div",{className:"col-5 m-auto"},"Lun-Ven:"),i.a.createElement("div",{className:"col-7 "},i.a.createElement("p",null," 8:00 - 12:00"),i.a.createElement("p",null," 15:00 - 18:00"))),i.a.createElement("hr",null),i.a.createElement("div",{className:"row d-flex alig-items-center"},i.a.createElement("div",{className:"col-5  "},"Sab:"),i.a.createElement("div",{className:"col-7 "},i.a.createElement("p",null,"8:00 - 12:00"))),i.a.createElement("div",{className:"row d-flex alig-items-center"},i.a.createElement("div",{className:"col-5  "},"Dom:"),i.a.createElement("div",{className:"col-7 "},i.a.createElement("p",null,"Chiuso"))))))))},se=(a(60),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"".concat(oe.a.info," d-flex justify-content-center col-md-12 col-lg-6  ")},i.a.createElement("div",{className:"justify-content-center align-items-center d-flex flex-column w-100"},i.a.createElement("div",{className:"".concat(f.a.fbuttonCont," mb-5")},i.a.createElement(u,{className:"".concat(f.a.fbutton)},i.a.createElement("a",{href:"tel:3913449739"},i.a.createElement("i",{class:"fa-solid fa-phone"}),i.a.createElement("span",null," 3913449739")))),i.a.createElement("div",{className:"".concat(f.a.fbuttonCont)},i.a.createElement(u,{className:f.a.fbutton},i.a.createElement("a",{href:"mailto:mail@example.it"},i.a.createElement("i",{class:"fa-solid fa-envelope"}),i.a.createElement("span",null," mail@example.com")))))))}),me=function(){return i.a.createElement("div",{className:"".concat(oe.a.contacts),id:"contacts"},i.a.createElement(B,{className:"mt-4"},i.a.createElement("h2",{className:"text-center pt-5"},"Contattaci"),i.a.createElement("div",{className:"container row"},i.a.createElement(se,null),i.a.createElement(re,null))))},ue={nome:"Mario Rossi",img:"../../../assets/img/avvocato.jpg",socials:[{url:"https://www.facebook.com",icon:"fa-brands fa-facebook-f"},{url:"https://www.instagram.com",icon:"fa-brands fa-instagram"},{url:"https://www.twitter.com",icon:"fa-brands fa-twitter"}]},de=function(){return i.a.createElement("section",{className:"footer"},i.a.createElement("div",{className:"my-5 container d-flex justify-content-center text-center row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("h4",null,"Studio Legale Pier Francesco Angelini")),i.a.createElement("div",{className:"col-12"},i.a.createElement("p",null,"P.IVA 102318203101"))),i.a.createElement("hr",null),i.a.createElement("div",{className:"".concat(ne.a.teamCard," container d-flex justify-content-center text-center row")},i.a.createElement("ul",{className:"d-flex justify-content-center",style:{listStyleType:"none",padding:"0"}},ue.socials.map(function(e,t){return i.a.createElement("li",{className:"mx-3",key:t},i.a.createElement("a",{target:"_blank",href:e.url},i.a.createElement("i",{className:e.icon})))}))))},fe=function(){return i.a.createElement("div",{className:k.a.body},i.a.createElement(W,null),i.a.createElement(J,null),i.a.createElement(Z,null),i.a.createElement(te,null),i.a.createElement(ce,null),i.a.createElement(me,null),i.a.createElement(de,null),i.a.createElement(C,null))};var Ee=function(){return i.a.createElement("div",null,i.a.createElement(z,null),i.a.createElement(fe,null))};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(Ee,null))}],[[31,2,1]]]);
//# sourceMappingURL=main.3525678c.chunk.js.map