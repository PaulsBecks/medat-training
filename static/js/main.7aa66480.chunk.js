(window["webpackJsonpmedat-training"]=window["webpackJsonpmedat-training"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e){e.exports=JSON.parse('["Bundesliga","Verteidiger","Abstimmung","Interessen","Bedingungen","Schumacher","Erwartungen","Finanzkrise","Kooperation","Gesellschaft","Schwierigkeiten","Integration","Mannschaft","Jahrzehnten","Vielleicht","Erwartungen","Management","Veranstaltung","Konkurrenten","Smartphone","Bundeskanzlerin","Zentralbank","Zuschauern","Forderungen","Investoren","Kommunikation","Ergebnisse","Informationen","Staatsanwaltschaft","Investitionen","Ausstellung","Nachrichtenagentur","Afghanistan","International","Informationen","Ausbildung","Energiewende","Pressekonferenz","Verantwortlichen","Geschichte","Ministerpr\xe4sident","Mitglieder","Gesellschaft","Hauptstadt","Bundeskanzlerin Angela Merkel","Wettbewerb","Nationalspieler","Wochenende","Fortschritte","Bundeskanzlerin","Schwierigkeiten","Angesichts","Kommission","Abstimmung","Wettbewerb","Schuldenkrise","Deutschlands","Opposition","Temperaturen","Verhandlungen","Verletzungen"]')},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),i=(n(11),n(1)),l=(n(12),function(e){return e.split("").sort(function(){return.5-Math.random()}).join("")}),u=function(e){var t=e.word,n=e.onNextClick,c=Object(r.useMemo)(function(){return l(t).toUpperCase()},[t]),o=Object(r.useMemo)(function(){return function(e){var t=e[0].toUpperCase(),n=l(e).toUpperCase(),r=t;for(var a in n){if(r.length>=4)break;r.includes(n[a])||(r+=n[a])}return r}(t)},[t]),u=Object(r.useMemo)(function(){return l(o)},[o]),s=Object(r.useState)(u[0]),m=Object(i.a)(s,2),d=m[0],f=m[1],g=Object(r.useState)(!1),p=Object(i.a)(g,2),E=p[0],v=p[1];return a.a.createElement("div",{className:"mt-de-word-quiz-card"},a.a.createElement("h2",null,c),a.a.createElement("p",null,"Dieses Wort beginnt mit dem Buchstaben:"),a.a.createElement("ul",null,u.split("").map(function(e){return a.a.createElement("li",{key:e,onClick:function(){return f(e)}},a.a.createElement("input",{type:"radio",name:"quiz-char",checked:e===d,onChange:function(){return f(e)}}),a.a.createElement("span",null,e))})),E&&a.a.createElement("h3",null,t),!E&&a.a.createElement(h,{onClick:function(){return v(!0)}},"L\xf6sung"),!E&&a.a.createElement(h,{onClick:function(){return n()}},"Skip"),E&&a.a.createElement(h,{onClick:function(){return n(d)}},"N\xe4chstes Wort"))};n(13);var s=function(e){var t=e.solutions,n=e.sequence,c=(e.difs,e.correctSolution),o=e.handleNextClick,l=Object(r.useMemo)(function(){return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}(t)},[t]),u=Object(r.useState)(0),s=Object(i.a)(u,2),m=s[0],d=s[1],f=Object(r.useState)(!1),g=Object(i.a)(f,2),p=g[0],E=g[1];return a.a.createElement("div",{className:"ltn-de-sqc"},a.a.createElement("div",{className:"ltn-de-sqc-sequence"},n.map(function(e){return a.a.createElement("h2",null,e)})),a.a.createElement("p",null,"Diese Folge kann mit folgenden Zahlen erweitert werden:"),a.a.createElement("ul",null,l.map(function(e,t){var n=Object(i.a)(e,2),r=n[0],c=n[1];return a.a.createElement("li",{onClick:function(){return d(t)}},a.a.createElement("input",{type:"radio",name:"quiz-char",checked:t===m,onChange:function(){return d(t)}}),"[",r,", ",c,"]")})),p&&a.a.createElement("h3",null,"[",c[0],", ",c[1],"]"),!p&&a.a.createElement(h,{onClick:function(){E(!0)}},"L\xf6sung"),!p&&a.a.createElement(h,{onClick:function(){o()}},"Skip"),p&&a.a.createElement(h,{onClick:function(){o(l[m]),E(!1)}},"N\xe4chste Folge"))},m=(n(14),function(e){e.selectedQuiz;var t=e.setSelectedQuiz;return a.a.createElement("div",{className:"mt-de-navbar"},a.a.createElement("h2",null,"Medat Training"),a.a.createElement("div",null,a.a.createElement(h,{onClick:function(){return t("sequence")}},"Folgen"),a.a.createElement(h,{onClick:function(){return t("words")}},"W\xf6rter")))}),h=(n(15),function(e){return a.a.createElement("button",Object.assign({className:"mt-de-button"},e),e.children)}),d=n(16),f="SKIPPED",g="CORRECT",p="WRONG",E={PLUS:"PLUS",TIMES:"TIMES"},v={PERIODIC:"PERIODIC",SEQUENTIAL:"SEQUENTIAL"},b=(n(17),f),w=g,O=p,k=function(e){var t=e.elements,n=void 0===t?[]:t,c=e.handleElementClick,o=e.isWords,l=e.isSequences,u=Object(r.useState)(10),s=Object(i.a)(u,2),m=s[0],d=s[1],f=Object(r.useState)(),g=Object(i.a)(f,2),p=g[0],E=g[1],v=n.length<=m,k=v?0:n.length-m,j=n.reduce(function(e,t){var n=e.correct,r=e.wrong,a=e.skipped;return{correct:t.status===w?n+1:n,wrong:t.status===O?r+1:r,skipped:t.status===b?a+1:a}},{correct:0,wrong:0,skipped:0});return a.a.createElement("div",{className:"mt-de-history"},a.a.createElement("div",{className:"mt-de-history-header"},a.a.createElement("h2",null,"History"),a.a.createElement("h2",null,j.correct,"/",j.correct+j.wrong)),a.a.createElement("ul",{className:"mt-de-history-list"},n.slice(k).reverse().map(function(e,t){var n=e.status,r=p===t;return a.a.createElement("li",{className:"mt-de-history-list-item mt-de-history-list-item-".concat(n.toLowerCase()),onMouseOver:function(){return E(t)},onMouseLeave:function(){return E()},onClick:function(){return c(e)}},o&&a.a.createElement("span",null,e.word),l&&a.a.createElement("div",null,e.sequence.map(function(e){return a.a.createElement("span",{className:"mt-de-history-list-item-sequence-number"},e)})),a.a.createElement("div",{className:"mt-de-history-list-item-icon"},!r&&n===b&&a.a.createElement(y.Skipped,null),!r&&n===O&&a.a.createElement(y.Failed,null),!r&&n===w&&a.a.createElement(y.Check,null),r&&a.a.createElement(y.Retry,null)))})),!v&&a.a.createElement(h,{onClick:function(){return d(m+10)}},"Mehr"))},y={Check:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),a.a.createElement("path",{d:"M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"}))},Failed:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},Retry:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),a.a.createElement("path",{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.16 0-7.74 2.42-9.44 5.93-.32.67.04 1.47.75 1.71.59.2 1.23-.08 1.5-.64 1.3-2.66 4.03-4.5 7.19-4.5 1.95 0 3.73.72 5.12 1.88l-1.91 1.91c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1V9.41c0-.89-1.08-1.34-1.71-.71l-1.89 1.9z"}))},Skipped:function(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"100%",height:"100%"}},a.a.createElement("path",{d:"M19 13H5v-2h14v2z"}),a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}},j=function(){var e=Object(r.useState)("words"),t=Object(i.a)(e,2),n=t[0],c=t[1];return a.a.createElement("div",null,a.a.createElement(m,{selectedQuiz:n,setSelectedQuiz:c}),"words"===n&&a.a.createElement(z,null),"sequence"===n&&a.a.createElement(Q,null))},S=n(3),M=n(2),N=function(e,t){var n=Object(r.useState)(function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),t}}),a=Object(i.a)(n,2),c=a[0],o=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]};n(18);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var P=f,I=g,q=p,z=function(){var e=N("wordsSolved",[]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(),l=Object(i.a)(o,2),s=l[0],m=l[1],h=n.length;return a.a.createElement("div",{className:"mt-de-words-page"},a.a.createElement("h1",null,"W\xf6rter"),a.a.createElement("div",null,!s&&d&&d.length&&d.length>h&&a.a.createElement(u,{word:d[h],key:d[h],onNextClick:function(e){var t=d[h],r=P;e&&(r=e===t[0]?I:q),c(n.concat([{word:t,id:h,charPicked:e,status:r}]))}}),s&&a.a.createElement(u,{word:s.word,key:s.id,onNextClick:function(e){var t=P;e&&(t=e===s.word[0]?I:q);var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(M.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},s,{charPicked:e,status:t}),a=Object(S.a)(n);a[s.id]=r,c(a),m()}}),n&&a.a.createElement(k,{isWords:!0,elements:n,handleElementClick:function(e){return m(e)}})))},x=E.PLUS,D=E.TIMES,L=v.SEQUENTIAL,B=v.PERIODIC;function T(e,t){return t.type===D?e*t.number:t.type===x?e+t.number:t.number}var W=function(e){return Math.round(Math.random()*e-e/2)};function A(e,t,n,r){if(console.log(e,t,n,r),r===L){var a=T(e[e.length-1],t);return[a,T(a,n)]}return r===B?[T(e[e.length-3],t),T(e[e.length-2],n)]:null}var F=function(){for(var e=Object.keys(E)[Math.floor(Math.random()*Object.keys(E).length)],t=W(e===x?100:10);e===D&&0===t;)t=W(10);return{type:e,number:t}};function J(){var e=[],t=Object.keys(v)[Math.floor(2*Math.random())],n=W(100);e.push(n);for(var r=function(e,t){for(var n=[],r=0;r<t;r++)n.push(e());return n}(F,3),a=0;a<6;a++)t===L?e.push(T(e[a],r[a%3])):a<2?e.push(W(100)):e.push(T(e[a-2],r[a%3]));for(var c=A(e,r[0],r[1],t),o=[c],i=function(){return Math.floor(3*Math.random())},l=["0;1"],u=0;u<3;){var s="".concat(i(),";").concat(i());if(console.log(l,l.indexOf(s),s),l.indexOf(s)<0){var m=s.split(";");l.push(s),o.push(A(e,r[Number(m[0])],r[Number(m[1])],t)),u++}}return{sequence:e,difs:r,sequenceType:t,solutions:o,correctSolution:c}}n(19);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var V=f,H=g,R=p,Q=function(){var e=N("sequencesSolved",[]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(),l=Object(i.a)(o,2),u=l[0],m=l[1],h=Object(r.useMemo)(J,[n]),d=h.sequence,f=h.difs,g=h.sequenceType,p=h.solutions,E=h.correctSolution;return a.a.createElement("div",{className:"mt-de-sequence-page"},a.a.createElement("h1",null,"Folgen"),a.a.createElement("div",null,u&&a.a.createElement(s,Object.assign({},u,{handleNextClick:function(e){var t=V;e&&(t=JSON.stringify(e)===JSON.stringify(u.correctSolution)?H:R);var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(M.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u,{solutionPicked:e,status:t}),a=Object(S.a)(n);a[r.id]=r,c(a),m()}})),!u&&a.a.createElement(s,Object.assign({sequence:d,difs:f,solutions:p,correctSolution:E},{handleNextClick:function(e){var t=V;e&&(t=JSON.stringify(e)===JSON.stringify(E)?H:R),c(n.concat({sequence:d,solutions:p,difs:f,sequenceType:g,correctSolution:E,id:n.length,status:t}))}})),a.a.createElement(k,{isSequences:!0,elements:n,handleElementClick:m})))};var K=function(){return a.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.7aa66480.chunk.js.map