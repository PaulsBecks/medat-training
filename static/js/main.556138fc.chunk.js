(window["webpackJsonpmedat-training"]=window["webpackJsonpmedat-training"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e){e.exports=JSON.parse('["Bundesliga","Verteidiger","Abstimmung","Interessen","Bedingungen","Schumacher","Erwartungen","Finanzkrise","Kooperation","Gesellschaft","Schwierigkeiten","Integration","Mannschaft","Jahrzehnten","Vielleicht","Erwartungen","Management","Veranstaltung","Konkurrenten","Smartphone","Bundeskanzlerin","Zentralbank","Zuschauern","Forderungen","Investoren","Kommunikation","Ergebnisse","Informationen","Staatsanwaltschaft","Investitionen","Ausstellung","Nachrichtenagentur","Afghanistan","International","Informationen","Ausbildung","Energiewende","Pressekonferenz","Verantwortlichen","Geschichte","Ministerpr\xe4sident","Mitglieder","Gesellschaft","Hauptstadt","Bundeskanzlerin Angela Merkel","Wettbewerb","Nationalspieler","Wochenende","Fortschritte","Bundeskanzlerin","Schwierigkeiten","Angesichts","Kommission","Abstimmung","Wettbewerb","Schuldenkrise","Deutschlands","Opposition","Temperaturen","Verhandlungen","Verletzungen"]')},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),i=t.n(o),c=(t(9),t(1)),u=function(e){return e.split("").sort(function(){return.5-Math.random()}).join("")},l=function(e){var n=e.word,t=e.onNextClick,o=Object(r.useMemo)(function(){return u(n).toLowerCase()},[n]),i=Object(r.useMemo)(function(){return function(e){var n=e[0].toLowerCase(),t=u(e).toLowerCase(),r=n;for(var a in t){if(r.length>=4)break;r.includes(t[a])||(r+=t[a])}return r}(n)},[n]),l=Object(r.useMemo)(function(){return u(i)},[i]),s=Object(r.useState)(l[0]),d=Object(c.a)(s,2),m=d[0],g=d[1],h=Object(r.useState)(!1),f=Object(c.a)(h,2),w=f[0],b=f[1];return a.a.createElement("div",null,a.a.createElement("h2",null,o),a.a.createElement("p",null,"Dieses Wort beginnt mit dem Buchstaben:"),a.a.createElement("ul",null,l.split("").map(function(e){return a.a.createElement("li",{key:e},a.a.createElement("input",{type:"radio",name:"quiz-char",checked:e===m,onChange:function(){return g(e)}}),e)})),w&&a.a.createElement("h3",null,n),a.a.createElement("button",{onClick:function(){return b(!0)}},"L\xf6sung"),a.a.createElement("button",{onClick:function(){return t(m)}},"N\xe4chstes"))},s=(t(10),function(e){e.selectedQuiz;var n=e.setSelectedQuiz;return a.a.createElement("div",{className:"mt-de-navbar"},a.a.createElement("h2",null,"Medat Training"),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return n("sequence")}},"Folgen"),a.a.createElement("button",{onClick:function(){return n("words")}},"W\xf6rter")))}),d=function(){var e=Object(r.useState)("words"),n=Object(c.a)(e,2),t=n[0],o=n[1];return a.a.createElement("div",null,a.a.createElement(s,{selectedQuiz:t,setSelectedQuiz:o}),"words"===t&&a.a.createElement(g,null))},m=t(11),g=(t(12),function(){var e=function(e,n){var t=Object(r.useState)(function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(r){return console.log(r),n}}),a=Object(c.a)(t,2),o=a[0],i=a[1];return[o,function(n){try{var t=n instanceof Function?n(o):n;i(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(r){console.log(r)}}]}("wordsSolved",[]),n=Object(c.a)(e,2),t=n[0],o=n[1],i=t.length;return console.log(t,i),a.a.createElement("div",{className:"mt-de-words-page"},m&&m.length&&m.length>i&&a.a.createElement(l,{word:m[i],key:m[i],onNextClick:function(e){o(t.concat([{word:m[i],id:i,charPicked:e}]))}}))});var h=function(){return a.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.556138fc.chunk.js.map