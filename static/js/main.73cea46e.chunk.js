(window["webpackJsonpmedat-training"]=window["webpackJsonpmedat-training"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e){e.exports=JSON.parse('["Bundesliga","Verteidiger","Abstimmung","Interessen","Bedingungen","Schumacher","Erwartungen","Finanzkrise","Kooperation","Gesellschaft","Schwierigkeiten","Integration","Mannschaft","Jahrzehnten","Vielleicht","Erwartungen","Management","Veranstaltung","Konkurrenten","Smartphone","Bundeskanzlerin","Zentralbank","Zuschauern","Forderungen","Investoren","Kommunikation","Ergebnisse","Informationen","Staatsanwaltschaft","Investitionen","Ausstellung","Nachrichtenagentur","Afghanistan","International","Informationen","Ausbildung","Energiewende","Pressekonferenz","Verantwortlichen","Geschichte","Ministerpr\xe4sident","Mitglieder","Gesellschaft","Hauptstadt","Bundeskanzlerin Angela Merkel","Wettbewerb","Nationalspieler","Wochenende","Fortschritte","Bundeskanzlerin","Schwierigkeiten","Angesichts","Kommission","Abstimmung","Wettbewerb","Schuldenkrise","Deutschlands","Opposition","Temperaturen","Verhandlungen","Verletzungen"]')},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),l=n.n(c),o=(n(12),n(1)),i=(n(13),function(e){return e.split("").sort(function(){return.5-Math.random()}).join("")}),u=function(e){var t=e.word,n=e.onNextClick,c=Object(r.useMemo)(function(){return i(t).toUpperCase()},[t]),l=Object(r.useMemo)(function(){return function(e){var t=e[0].toUpperCase(),n=i(e).toUpperCase(),r=t;for(var a in n){if(r.length>=4)break;r.includes(n[a])||(r+=n[a])}return r}(t)},[t]),u=Object(r.useMemo)(function(){return i(l)},[l]),s=Object(r.useState)(u[0]),m=Object(o.a)(s,2),d=m[0],f=m[1],E=Object(r.useState)(!1),g=Object(o.a)(E,2),b=g[0],v=g[1];return a.a.createElement("div",{className:"mt-de-word-quiz-card"},a.a.createElement("h2",null,c),a.a.createElement("p",null,"Dieses Wort beginnt mit dem Buchstaben:"),a.a.createElement("ul",null,u.split("").map(function(e){return a.a.createElement("li",{key:e,onClick:function(){return f(e)}},a.a.createElement("input",{type:"radio",name:"quiz-char",checked:e===d,onChange:function(){return f(e)}}),a.a.createElement("span",null,e))})),b&&a.a.createElement("h3",null,t),!b&&a.a.createElement(h,{onClick:function(){return v(!0)}},"L\xf6sung"),!b&&a.a.createElement(h,{className:"mt-de-word-quiz-card-skip-button",onClick:function(){return n()}},"Skip"),b&&a.a.createElement(h,{onClick:function(){return n(d)}},"N\xe4chstes Wort"))};n(14);var s=function(e){var t=e.solutions,n=e.sequence,c=(e.difs,e.correctSolution),l=e.handleNextClick,i=Object(r.useMemo)(function(){return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}(t)},[t]),u=Object(r.useState)(0),s=Object(o.a)(u,2),m=s[0],d=s[1],f=Object(r.useState)(!1),E=Object(o.a)(f,2),g=E[0],b=E[1];return a.a.createElement("div",{className:"ltn-de-sqc"},a.a.createElement("div",{className:"ltn-de-sqc-sequence"},n.map(function(e){return a.a.createElement("h2",null,e)})),a.a.createElement("p",null,"Diese Folge kann mit folgenden Zahlen erweitert werden:"),a.a.createElement("ul",null,i.map(function(e,t){var n=Object(o.a)(e,2),r=n[0],c=n[1];return a.a.createElement("li",{onClick:function(){return d(t)}},a.a.createElement("input",{type:"radio",name:"quiz-char",checked:t===m,onChange:function(){return d(t)}}),"[",r,", ",c,"]")})),g&&a.a.createElement("h3",null,"[",c[0],", ",c[1],"]"),!g&&a.a.createElement(h,{onClick:function(){b(!0)}},"L\xf6sung"),!g&&a.a.createElement(h,{onClick:function(){l()},className:"mt-de-sequence-quiz-card-skip-button"},"Skip"),g&&a.a.createElement(h,{onClick:function(){l(i[m]),b(!1)}},"N\xe4chste Folge"))},m=(n(15),function(){return a.a.createElement("div",{className:"mt-de-navbar"},a.a.createElement("h2",null,"aufgabenmed.at"))}),d=n(6),h=(n(16),function(e){var t=e.className,n=Object(d.a)(e,["className"]);return a.a.createElement("button",Object.assign({className:"mt-de-button ".concat(t||"")},n),n.children)}),f=n(17),E="SKIPPED",g="CORRECT",b="WRONG",v={PLUS:"PLUS",TIMES:"TIMES"},p={PERIODIC:"PERIODIC",SEQUENTIAL:"SEQUENTIAL"},w=(n(18),E),O=g,k=b,y=function(e){var t=e.elements,n=void 0===t?[]:t,c=e.handleElementClick,l=e.isWords,i=e.isSequences,u=Object(r.useState)(10),s=Object(o.a)(u,2),m=s[0],d=s[1],f=Object(r.useState)(),E=Object(o.a)(f,2),g=E[0],b=E[1],v=n.length<=m,p=v?0:n.length-m,y=n.reduce(function(e,t){var n=e.correct,r=e.wrong,a=e.skipped;return{correct:t.status===O?n+1:n,wrong:t.status===k?r+1:r,skipped:t.status===w?a+1:a}},{correct:0,wrong:0,skipped:0});return a.a.createElement("div",{className:"mt-de-history"},a.a.createElement("div",{className:"mt-de-history-header"},a.a.createElement("h2",null,"History"),a.a.createElement("h2",null,y.correct,"/",y.correct+y.wrong)),a.a.createElement("ul",{className:"mt-de-history-list"},n.slice(p).reverse().map(function(e,t){var n=e.status,r=g===t;return a.a.createElement("li",{className:"mt-de-history-list-item mt-de-history-list-item-".concat(n.toLowerCase()),onMouseOver:function(){return b(t)},onMouseLeave:function(){return b()},onClick:function(){document.location.href="#",c(e)}},l&&a.a.createElement("span",null,e.word),i&&a.a.createElement("div",null,e.sequence.map(function(e){return a.a.createElement("span",{className:"mt-de-history-list-item-sequence-number"},e)})),a.a.createElement("div",{className:"mt-de-history-list-item-icon"},!r&&n===w&&a.a.createElement(S.Skipped,null),!r&&n===k&&a.a.createElement(S.Failed,null),!r&&n===O&&a.a.createElement(S.Check,null),r&&a.a.createElement(S.Retry,null)))})),!v&&a.a.createElement(h,{className:"mt-de-history-more-button",onClick:function(){return d(m+10)}},"Mehr"))},S={Check:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),a.a.createElement("path",{d:"M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"}))},Failed:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},Retry:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),a.a.createElement("path",{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93-.32.67.04 1.47.75 1.71.59.2 1.23-.08 1.5-.64 1.3-2.66 4.03-4.5 7.19-4.5 1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z"}))},Skipped:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{d:"M19 13H5v-2h14v2z"}),a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},Insta:function(){return a.a.createElement("svg",{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{height:"100%",width:"100%"}},a.a.createElement("g",null,a.a.createElement("path",{d:"M336,96c21.2,0,41.3,8.4,56.5,23.5S416,154.8,416,176v160c0,21.2-8.4,41.3-23.5,56.5S357.2,416,336,416H176 c-21.2,0-41.3-8.4-56.5-23.5S96,357.2,96,336V176c0-21.2,8.4-41.3,23.5-56.5S154.8,96,176,96H336 M336,64H176 c-61.6,0-112,50.4-112,112v160c0,61.6,50.4,112,112,112h160c61.6,0,112-50.4,112-112V176C448,114.4,397.6,64,336,64L336,64z"}),a.a.createElement("g",null,a.a.createElement("path",{d:"M360,176c-13.3,0-24-10.7-24-24s10.7-24,24-24c13.2,0,24,10.7,24,24S373.2,176,360,176z"})),a.a.createElement("path",{d:"M256,192c35.3,0,64,28.7,64,64c0,35.3-28.7,64-64,64c-35.3,0-64-28.7-64-64C192,220.7,220.7,192,256,192 M256,160 c-53,0-96,43-96,96s43,96,96,96c53,0,96-43,96-96S309,160,256,160L256,160z"})))},Home:function(){return a.a.createElement("svg",{viewBox:"0 0 512 512",style:{width:"100%",height:"100%"}},a.a.createElement("g",null,a.a.createElement("path",{d:"M258.5,104.1c-1.5-1.2-3.5-1.2-5,0l-156,124.8c-0.9,0.8-1.5,1.9-1.5,3.1v230c0,1.1,0.9,2,2,2h108c1.1,0,2-0.9,2-2V322 c0-1.1,0.9-2,2-2h92c1.1,0,2,0.9,2,2v140c0,1.1,0.9,2,2,2h108c1.1,0,2-0.9,2-2V232c0-1.2-0.6-2.4-1.5-3.1L258.5,104.1z"}),a.a.createElement("path",{d:"M458.7,204.2l-189-151.4C265.9,49.7,261,48,256,48c-5,0-9.9,1.7-13.7,4.8L160,119.7V77.5c0-1.1-0.9-2-2-2H98 c-1.1,0-2,0.9-2,2v92.2l-42.7,35.1c-3.1,2.5-5.1,6.2-5.3,10.2c-0.2,4,1.3,7.9,4.1,10.7c2.6,2.6,6.1,4.1,9.9,4.1 c3.2,0,6.3-1.1,8.8-3.1l183.9-148c0.5-0.4,0.9-0.4,1.3-0.4s0.8,0.1,1.3,0.4l183.9,147.4c2.5,2,5.6,3.1,8.8,3.1 c3.7,0,7.2-1.4,9.9-4.1c2.9-2.8,4.4-6.7,4.2-10.7C463.8,210.4,461.9,206.7,458.7,204.2z"})))},Medical:function(){return a.a.createElement("svg",{viewBox:"0 0 448 512",style:{width:"100%",height:"100%"}},a.a.createElement("path",{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z",class:""}))}},j=(n(19),function(e){var t=e.setSelectedQuiz;return a.a.createElement("div",{className:"mt-de-bottom-bar"},a.a.createElement("div",null,a.a.createElement(h,{className:"mt-de-bottom-bar-button mt-de-bottom-bar-sequences-button",onClick:function(){return t("sequence")}},"Folgen"),a.a.createElement(h,{className:"mt-de-bottom-bar-button mt-de-bottom-bar-words-button ",onClick:function(){return t("words")}},"W\xf6rter")),a.a.createElement("div",null,a.a.createElement(h,{className:"mt-de-bottom-bar-button mt-de-bottom-bar-icon-button",onClick:function(){return t("none")}},a.a.createElement(S.Home,null))),a.a.createElement("div",null,a.a.createElement(h,{className:"mt-de-bottom-bar-button mt-de-bottom-bar-icon-button",onClick:function(){return t("sequence")}},a.a.createElement(S.Insta,null))))}),N=function(){var e=Object(r.useState)("none"),t=Object(o.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",null,a.a.createElement(m,{selectedQuiz:n}),"none"===n&&a.a.createElement(Z,{setSelectedQuiz:c}),"words"===n&&a.a.createElement(L,null),"sequence"===n&&a.a.createElement(G,null),a.a.createElement(j,{setSelectedQuiz:c}))},M=n(3),C=n(2),z=function(e,t){var n=Object(r.useState)(function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}}),a=Object(o.a)(n,2),c=a[0],l=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;l(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]};n(20);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var P=E,I=g,x=b,L=function(){var e=z("wordsSolved",[]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(),i=Object(o.a)(l,2),s=i[0],m=i[1],d=n.length;return a.a.createElement("div",{className:"mt-de-words-page"},a.a.createElement("h1",null,"W\xf6rter"),a.a.createElement("div",null,!s&&f&&f.length&&f.length>d&&a.a.createElement(u,{word:f[d],key:f[d],onNextClick:function(e){var t=f[d],r=P;e&&(r=e===t[0]?I:x),c(n.concat([{word:t,id:d,charPicked:e,status:r}]))}}),s&&a.a.createElement(u,{word:s.word,key:s.id,onNextClick:function(e){var t=P;e&&(t=e===s.word[0]?I:x);var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(n,!0).forEach(function(t){Object(C.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},s,{charPicked:e,status:t}),a=Object(M.a)(n);a[s.id]=r,c(a),m()}}),n&&a.a.createElement(y,{isWords:!0,elements:n,handleElementClick:function(e){return m(e)}})))},A=v.PLUS,V=v.TIMES,W=p.SEQUENTIAL,B=p.PERIODIC;function D(e,t){return t.type===V?e*t.number:t.type===A?e+t.number:t.number}var H=function(e){return Math.round(Math.random()*e-e/2)};function F(e,t,n,r){if(console.log(e,t,n,r),r===W){var a=D(e[e.length-1],t);return[a,D(a,n)]}return r===B?[D(e[e.length-3],t),D(e[e.length-2],n)]:null}var T=function(){for(var e=Object.keys(v)[Math.floor(Math.random()*Object.keys(v).length)],t=H(e===A?100:10);e===V&&0===t;)t=H(10);return{type:e,number:t}};function J(){var e=[],t=Object.keys(p)[Math.floor(2*Math.random())],n=H(100);e.push(n);for(var r=function(e,t){for(var n=[],r=0;r<t;r++)n.push(e());return n}(T,3),a=0;a<6;a++)t===W?e.push(D(e[a],r[a%3])):a<2?e.push(H(100)):e.push(D(e[a-2],r[a%3]));for(var c=F(e,r[0],r[1],t),l=[c],o=function(){return Math.floor(3*Math.random())},i=["0;1"],u=0;u<3;){var s="".concat(o(),";").concat(o());if(console.log(i,i.indexOf(s),s),i.indexOf(s)<0){var m=s.split(";");i.push(s),l.push(F(e,r[Number(m[0])],r[Number(m[1])],t)),u++}}return{sequence:e,difs:r,sequenceType:t,solutions:l,correctSolution:c}}n(21);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var K=E,Q=g,R=b,G=function(){var e=z("sequencesSolved",[]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(),i=Object(o.a)(l,2),u=i[0],m=i[1],d=Object(r.useMemo)(J,[n]),h=d.sequence,f=d.difs,E=d.sequenceType,g=d.solutions,b=d.correctSolution;return a.a.createElement("div",{className:"mt-de-sequence-page"},a.a.createElement("h1",null,"Folgen"),a.a.createElement("div",null,u&&a.a.createElement(s,Object.assign({},u,{handleNextClick:function(e){var t=K;e&&(t=JSON.stringify(e)===JSON.stringify(u.correctSolution)?Q:R);var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(C.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u,{solutionPicked:e,status:t}),a=Object(M.a)(n);a[r.id]=r,c(a),m()}})),!u&&a.a.createElement(s,Object.assign({sequence:h,difs:f,solutions:g,correctSolution:b},{handleNextClick:function(e){var t=K;e&&(t=JSON.stringify(e)===JSON.stringify(b)?Q:R),c(n.concat({sequence:h,solutions:g,difs:f,sequenceType:E,correctSolution:b,id:n.length,status:t}))}})),a.a.createElement(y,{isSequences:!0,elements:n,handleElementClick:m})))},Z=(n(22),function(e){var t=e.setSelectedQuiz;return a.a.createElement("div",{className:"mt-de-home"},a.a.createElement("div",{className:"mt-de-home-header"},a.a.createElement("div",{className:"mt-de-home-header-content"},a.a.createElement("h1",null,"Kostenlose Aufgaben f\xfcr den Medizintest in \xd6sterreich"),a.a.createElement("p",null,"Auf dieser Webseite findest du kostenlos Aufgaben f\xfcr deine Medizin Aufnahmepr\xfcfung. Aktuell kannst du Zahlenfolgen und vermischte W\xf6rter \xfcben.",a.a.createElement("br",null),a.a.createElement("br",null),"W\xe4hle eine der Kategorien aus um mit den Aufagben zu beginnen oder scroll nach unten, um zu erfahren wie alles funktioniert.")),a.a.createElement("div",{className:"mt-de-home-header-icon"},a.a.createElement(S.Medical,null))),a.a.createElement("div",{className:"mt-de-home-categories-section"},a.a.createElement("h2",null,"Kategorien"),a.a.createElement("div",null,a.a.createElement(h,{className:"mt-de-home-words-button",onClick:function(){return t("words")}},"W\xf6rter"),a.a.createElement(h,{className:"mt-de-home-sequences-button",onClick:function(){return t("sequence")}},"Folgen"))))});var $=function(){return a.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.73cea46e.chunk.js.map