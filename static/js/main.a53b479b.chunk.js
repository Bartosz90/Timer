(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/alarm.87dc6e28.mp3"},,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),c=n.n(s),l=(n(15),n(3)),o=n(4),i=n(7),m=n(5),u=n(8),h=(n(16),n(17),function(e){var t=e.change,n=e.mins,a=e.secs,s=e.click;return r.a.createElement("form",{className:"form",onSubmit:s},r.a.createElement("input",{type:"number",name:"quantity",min:"0",max:"59",value:n,onChange:function(e){return t(e,"min")}}),r.a.createElement("input",{type:"number",name:"quantity",min:"0",max:"59",value:a,onChange:function(e){return t(e,"sec")}}),r.a.createElement("button",{type:"submit",onClick:s},"Set Alarm"))}),d=(n(18),function(e){var t=e.sound,n=e.click,a=e.play;return r.a.createElement("div",{className:"speaker"},r.a.createElement("i",{className:"fas fa-volume-down"}),r.a.createElement("audio",{src:t,loop:a,autoPlay:a}),r.a.createElement("button",{onClick:n},r.a.createElement("span",null),r.a.createElement("span",null)))}),p=n(6),f=n.n(p),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={seconds:0,minutes:0,alarmMins:0,alarmSecs:0,alarm:!1},n.handleTimer=function(e){"start"===e?n.counter=setInterval(function(){n.setState({seconds:n.state.seconds+1})},1e3):"stop"===e?clearInterval(n.counter):(clearInterval(n.counter),n.setState({seconds:0,minutes:0}))},n.handleAlarmSetting=function(e,t){"min"===t?n.setState({alarmMins:e.target.value}):n.setState({alarmSecs:e.target.value})},n.handleAlarm=function(e){e.preventDefault(),console.log("klik")},n.playAlarm=function(){n.setState({alarm:!n.state.alarm})},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.state.seconds>=60&&this.setState({seconds:0,minutes:this.state.minutes+1})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"0",this.state.minutes," :"," ",this.state.seconds>=10?this.state.seconds:"0"+this.state.seconds),r.a.createElement("button",{onClick:function(){return e.handleTimer("start")}},"start"),r.a.createElement("button",{onClick:function(){return e.handleTimer("stop")}},"stop"),r.a.createElement("button",{onClick:function(){return e.handleTimer("reset")}},"reset")),r.a.createElement(h,{change:this.handleAlarmSetting,secs:this.state.alarmSecs,mins:this.state.alarmMins,click:this.handleAlarm}),r.a.createElement(d,{sound:f.a,click:this.playAlarm,play:this.state.alarm}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a53b479b.chunk.js.map