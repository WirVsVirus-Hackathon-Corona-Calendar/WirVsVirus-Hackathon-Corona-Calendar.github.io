(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],d=0,g=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&g.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(g.length)g.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/imfundfirus-frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02d6":function(e,t,a){"use strict";var n=a("7b9c"),r=a.n(n);r.a},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"06ba":function(e,t,a){"use strict";var n=a("f7a5"),r=a.n(n);r.a},"11ae":function(e,t,a){},"1b68":function(e,t,a){"use strict";var n=a("8430"),r=a.n(n);r.a},"276d":function(e,t,a){},3507:function(e,t,a){"use strict";var n=a("59a9"),r=a.n(n);r.a},"450a":function(e,t,a){"use strict";var n=a("11ae"),r=a.n(n);r.a},"558e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",style:{backgroundImage:"url('"+e.todaysChallenge.icon_url+"')"},attrs:{id:"todaysChallengeContainer"}},[a("div",{staticClass:"box"},[a("h1",{staticClass:"text",attrs:{id:"todaysChallengeText"}},[e._v(" Dein heutiges Abenteuer: "+e._s(e.todaysChallenge.titel)+" ")])]),a("button",{attrs:{id:"clickHereButton"},on:{click:e.startChallenge}},[e._v(" Hier klicken ")])])},i=[],o=(a("d3b7"),a("25f0"),a("4de4"),a("caad"),a("2532"),a("d4ec")),l=a("bee2"),c=a("ade3"),u=a("bc3a"),d=a.n(u),g=void 0,h=function(){function e(){Object(o["a"])(this,e),Object(c["a"])(this,"baseUrl","https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges")}return Object(l["a"])(e,[{key:"getById",value:function(e){return this.all.then((function(t){return t.filter((function(t){return t.id===e}))[0]}))}},{key:"completeChallenge",value:function(e){var t=JSON.parse(window.localStorage.getItem("completedChallenges")||"[]");t.push(e),window.localStorage.setItem("completedChallenges",JSON.stringify(t))}},{key:"all",get:function(){return d.a.get("https://e3bzj7x3ck.execute-api.eu-west-1.amazonaws.com/v1/challenges").then((function(e){return e.data})).then((function(e){return e}))}},{key:"incomplete",get:function(){var e=JSON.parse(window.localStorage.getItem("completedChallenges")||"[]");return this.all.then((function(t){return t.filter((function(t){return!e.includes(t.id)}))}))}},{key:"next",get:function(){return this.incomplete.then((function(e){return e.sort((function(e,t){return e.order>t.order}))[0]}))}}],[{key:"instance",get:function(){return void 0==g&&(g=new e),g}}]),e}(),m=h,f={name:"TodaysChallengeView",data:function(){return{todaysChallenge:null}},created:function(){this.fetchChallenge()},methods:{fetchChallenge:function(){var e=this;m.instance.next.then((function(t){e.todaysChallenge=t}))},startChallenge:function(){de.push("/challenges/"+this.todaysChallenge.id.toString()+"/before")}}},p=f,_=(a("8fb4"),a("2877")),v=Object(_["a"])(p,s,i,!1,null,null,null),b=v.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v(e._s(e.challenge.titel))]),a("h2",{staticClass:"spaced"},[e._v("Das brauchst du")]),a("ul",{staticClass:"list",attrs:{id:"material"}},e._l(e.challenge.material,(function(t){return a("li",{key:t},[e._v(e._s(t))])})),0),a("h2",{staticClass:"spaced"},[e._v("Anleitung")]),a("ul",{staticClass:"list",attrs:{id:"anleitung"}},e._l(e.challenge.anleitung,(function(t){return a("li",{key:t},[e._v(e._s(t))])})),0),a("div",{attrs:{id:"attachment-container"}},e._l(e.challenge.attachments,(function(e){return a("img",{key:e,staticClass:"attachment",attrs:{src:e}})})),0),a("button",{attrs:{id:"done-button"},on:{click:e.completeChallenge}},[e._v("Fertig!")])])},y=[],k={name:"ChallengeView",props:["challengeId"],data:function(){return{challenge:void 0}},created:function(){var e=this;m.instance.getById(this.challengeId).then((function(t){e.challenge=t}))},methods:{completeChallenge:function(){m.instance.completeChallenge(this.challenge.id),de.push("/challenges/"+this.challengeId.toString()+"/after")}}},w=k,x=(a("7551"),Object(_["a"])(w,C,y,!1,null,"7b93a27d",null)),S=x.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v(e._s(e.challenge.titel))]),a("p",[e._v(e._s(e.challenge.story_before))]),a("button",{staticClass:"margined",on:{click:e.startChallenge}},[e._v(" Zum Abenteuer! ")])])},I=[],O={name:"StoryBeforeView",props:["challengeId"],data:function(){return{challenge:void 0}},created:function(){var e=this;m.instance.getById(this.challengeId).then((function(t){e.challenge=t}))},methods:{startChallenge:function(){de.push("/challenges/"+this.challengeId.toString())}}},E=O,L=(a("1b68"),Object(_["a"])(E,j,I,!1,null,"718dea34",null)),P=L.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v(e._s(e.challenge.titel))]),a("p",[e._v(e._s(e.challenge.story_after))]),a("button",{staticClass:"margined",on:{click:e.onDoneClicked}},[e._v(" Zurück zur Übersicht ")])])},$=[],A={name:"StoryAfter",props:["challengeId"],data:function(){return{challenge:void 0}},created:function(){var e=this;m.instance.getById(this.challengeId).then((function(t){e.challenge=t}))},methods:{onDoneClicked:function(){de.push("/today")}}},N=A,T=(a("3507"),Object(_["a"])(N,z,$,!1,null,"0a6a6c2a",null)),F=T.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"LandingPage"},[a("landing-page-banner",{attrs:{img_banner:e.imageForest}}),a("LandingPageText",{attrs:{img_left:"https://media.discordapp.net/attachments/690951465443000360/697084572218949702/Wald.png?width=506&height=899",header:"Imf & Firus",header_sub:"Eine App für jeden!",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}),a("div",{staticClass:"spacer"}),a("LandingPageText",{attrs:{img_right:"https://cdn.discordapp.com/attachments/690951465443000360/697084541294084137/Schlossinnen_Imf_Hamster_iPhoneX.png",header:"Imf & Firus",header_sub:"Eine App für jeden!",text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}}),a("div",{staticClass:"spacer"})],1)},H=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lp_textfield"},[e.img_left?a("img",{staticClass:"image image_left",attrs:{src:e.img_left}}):e._e(),a("div",{staticClass:"text_space"},[a("div",{staticClass:"header_cont"},[a("h1",[e._v(" "+e._s(e.header)+" ")]),a("h5",[e._v(" "+e._s(e.header_sub)+" ")])]),a("div",{staticClass:"text_cont"},[e._v(" "+e._s(e.text)+" ")])]),e.img_right?a("img",{staticClass:"image image_right",attrs:{src:e.img_right}}):e._e()])},J=[],M={name:"LandingPageText",props:{img_left:String,img_right:String,header:String,header_sub:String,text:String}},q=M,V=(a("02d6"),Object(_["a"])(q,D,J,!1,null,"045bbde1",null)),G=V.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lp_banner"},[e.img_banner?a("img",{staticClass:"image image_banner",attrs:{src:e.img_banner}}):e._e(),a("a",{staticClass:"lp_banner_play",attrs:{href:"/today"}},[e._v(" Jetzt Spielen! ")])])},W=[],Z={name:"LandingPageBanner",props:{img_banner:String}},X=Z,K=(a("450a"),Object(_["a"])(X,U,W,!1,null,"e3246cf6",null)),Q=K.exports,R={name:"LandingPage",components:{LandingPageText:G,LandingPageBanner:Q},props:{},data:function(){return{imageForest:a("9eb1")}}},Y=R,ee=(a("06ba"),Object(_["a"])(Y,B,H,!1,null,"51890060",null)),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Einstellungen")]),a("div",{attrs:{id:"snackbar"}},[e._v("Spielstand wurde zurückgesetzt")]),a("button",{staticClass:"margined",on:{click:e.resetGame}},[e._v(" Spielstand zurücksetzen ")])])},ne=[],re=(a("ac1f"),a("5319"),{name:"SettingsView",methods:{resetGame:function(){window.localStorage.setItem("completedChallenges",[]);var e=document.getElementById("snackbar");e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)}}}),se=re,ie=(a("af57"),Object(_["a"])(se,ae,ne,!1,null,null,null)),oe=ie.exports,le=[{path:"/challenges/:challengeId/before",component:P,props:!0},{path:"/challenges/:challengeId/after",component:F,props:!0},{path:"/challenges/:challengeId",component:S,props:!0},{path:"/today",component:b},{path:"/settings",component:oe},{path:"/",component:te}],ce=le,ue=new r["a"]({mode:"history",base:"/imfundfirus-frontend/",routes:ce}),de=ue,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{attrs:{language:"Deutsch",language_short:"DE"}}),a("router-view"),a("Footer")],1)},he=[],me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[e._m(0),a("img",{staticClass:"header_burger",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"},on:{click:e.toggleNavbar}}),a("div",{staticClass:"header_right_container"},[a("a",{staticClass:"header_right header_settings",attrs:{href:"/settings"}},[e._v("Einstellungen")]),a("a",{staticClass:"header_right header_contact",attrs:{href:"/contact"}},[e._v("Contact")]),a("a",{staticClass:"header_right header_aboutus",attrs:{href:"/about"}},[e._v("About Us")]),a("a",{staticClass:"header_right header_language",attrs:{href:"?lang=de"}},[e._v("◍ "+e._s(e.language)+" ("+e._s(e.language_short)+")")])])])},fe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"header_home",attrs:{href:"/"}},[n("img",{staticClass:"header_logo",attrs:{src:a("cf05")}}),e._v(" Imf & Firus ")])}],pe={name:"Header",props:{language:String,language_short:String},methods:{toggleNavbar:function(){var e=document.querySelector(".header_right_container");"header_right_container"===e.className?e.className+=" active":e.className="header_right_container"}}},_e=pe,ve=(a("8c28"),Object(_["a"])(_e,me,fe,!1,null,"036f9d6a",null)),be=ve.exports,Ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ye=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer_social_cont"},[a("a",{staticClass:"footer_social footer_instagram",attrs:{target:"_blank",href:"https://www.instagram.com/imffirus/"}}),a("a",{staticClass:"footer_social footer_twitter",attrs:{target:"_blank",href:"https://twitter.com/imffirus"}})]),a("a",{staticClass:"footer_link",attrs:{href:"/impressum"}},[e._v(" Impressum ")]),e._v(" • "),a("a",{staticClass:"footer_link",attrs:{href:"/nutzung"}},[e._v(" Nutzungsbedingungen ")]),e._v(" • "),a("a",{staticClass:"footer_link",attrs:{href:"/datenschutz"}},[e._v(" Datenschutz ")]),a("p",[e._v("© 2020 Imf & Firus. Licensed under the MIT License")])])}],ke={name:"Footer",props:{}},we=ke,xe=(a("65da"),Object(_["a"])(we,Ce,ye,!1,null,"39f549cd",null)),Se=xe.exports,je={name:"App",components:{Header:be,Footer:Se}},Ie=je,Oe=(a("034f"),Object(_["a"])(Ie,ge,he,!1,null,null,null)),Ee=Oe.exports;n["a"].config.productionTip=!1,n["a"].use(r["a"]),new n["a"]({render:function(e){return e(Ee)},router:de}).$mount("#app")},"59a9":function(e,t,a){},"65da":function(e,t,a){"use strict";var n=a("558e"),r=a.n(n);r.a},"690f":function(e,t,a){},7551:function(e,t,a){"use strict";var n=a("276d"),r=a.n(n);r.a},"7b9c":function(e,t,a){},8430:function(e,t,a){},"85ec":function(e,t,a){},"8c28":function(e,t,a){"use strict";var n=a("e8e0"),r=a.n(n);r.a},"8fb4":function(e,t,a){"use strict";var n=a("690f"),r=a.n(n);r.a},"9eb1":function(e,t,a){e.exports=a.p+"img/Wald_SM_Header.58f862a7.png"},af57:function(e,t,a){"use strict";var n=a("c394"),r=a.n(n);r.a},c394:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.c7de406e.png"},e8e0:function(e,t,a){},f7a5:function(e,t,a){}});
//# sourceMappingURL=app.6e7a5d91.js.map