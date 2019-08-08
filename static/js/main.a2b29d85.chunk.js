(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/alarm.87dc6e28.mp3"},,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),l=a.n(r),c=(a(16),a(4)),o=a(5),i=a(8),m=a(6),u=a(9),h=(a(17),a(1),function(e){var t=e.change,a=e.mins,n=e.secs,r=e.click,l=e.reset;return s.a.createElement("div",{className:"settings"},s.a.createElement("p",null,"min:")," ",s.a.createElement("button",{onClick:function(){return t("min","sub")},className:"formBtn"},"-"),s.a.createElement("p",{className:"number"},a),s.a.createElement("button",{onClick:function(){return t("min","add")},className:"formBtn"},"+"),s.a.createElement("p",null,"sec:")," ",s.a.createElement("button",{onClick:function(){return t("sec","sub")},className:"formBtn"},"-"),s.a.createElement("p",{className:"number"},n),s.a.createElement("button",{onClick:function(){return t("sec","add")},className:"formBtn"},"+"),s.a.createElement("button",{onClick:r,className:"submit"},"Set Alarm"),s.a.createElement("button",{onClick:l,className:"submit"},"reset"))}),d=(a(18),function(e){var t=e.sound,a=e.click,n=e.soundOn;return s.a.createElement("div",{className:"speaker"},s.a.createElement("i",{className:"fas fa-volume-down",style:{animation:"".concat(n?"shake .5s linear infinite":"none")}}),s.a.createElement("button",{onClick:a,style:{animation:"".concat(n?"shadow .5s linear infinite":"none")}},s.a.createElement("span",null),s.a.createElement("span",null)),n&&s.a.createElement("audio",{src:t,loop:!0,autoPlay:!0}))}),S=a(7),f=a.n(S),E=function(e){var t=e.mins,a=e.secs,n=e.soundOn;return s.a.createElement(s.a.Fragment,null,n?s.a.createElement("h1",{className:"counter",style:{animation:"".concat(n?"blink .5s infinite":"none")}},"ALERT!"):s.a.createElement("h1",{className:"counter"},t<10?"0"+t:t," : ",a<10?"0"+a:a))},C=function(e){var t=e.click,a=e.alert1,n=e.alert2;return s.a.createElement("div",{className:"alert"},s.a.createElement("h1",null,a),s.a.createElement("p",null,n),s.a.createElement("button",{onClick:t},"ok"))},v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={seconds:0,minutes:0,hours:0,alarmMins:0,alarmSecs:0,soundOn:!1,alarmSet:!1,alarmCounterMins:0,alarmCounterSecs:0,alarmSetAlert:!1,alert:{head:"",content:""}},a.handleTimer=function(e){"start"===e?a.counter=setInterval(function(){a.setState({seconds:a.state.seconds+1})},1e3):"stop"===e?clearInterval(a.counter):(clearInterval(a.counter),a.setState({seconds:0,minutes:0,hours:0}))},a.handleAlarmSetting=function(e,t){"min"===e&&0===a.state.alarmMins&&"sub"===t||"sec"===e&&0===a.state.alarmSecs&&"sub"===t?a.setState({alert:{head:"Alert!",content:"Range is 0-59"},alarmSetAlert:!0}):"min"===e&&59===a.state.alarmMins&&"add"===t||"sec"===e&&59===a.state.alarmSecs&&"add"===t?a.setState({alert:{head:"Alert!",content:"Range is 0-59"},alarmSetAlert:!0}):"min"===e?"sub"===t?a.setState({alarmMins:a.state.alarmMins-1}):a.setState({alarmMins:a.state.alarmMins+1}):"sub"===t?a.setState({alarmSecs:a.state.alarmSecs-1}):a.setState({alarmSecs:a.state.alarmSecs+1})},a.handleAlarm=function(e){if(e.preventDefault(),a.state.alarmSet)a.setState({alarmSetAlert:!0,alert:{head:"Alarm already set!",content:"Press RESET button to start new one."}});else{var t=6e4*a.state.alarmMins+1e3*a.state.alarmSecs;a.setState({alarmCounterMins:a.state.alarmMins,alarmCounterSecs:a.state.alarmSecs,alarmMins:0,alarmSecs:0,alarmSet:!0});var n=setInterval(function(){a.state.alarmCounterSecs>0?a.setState({alarmCounterSecs:a.state.alarmCounterSecs-1}):0===a.state.alarmCounterSecs&&0!==a.state.alarmCounterMins?a.setState({alarmCounterSecs:59,alarmCounterMins:a.state.alarmCounterMins-1}):(a.setState({alarmCounterSecs:0,alarmCounterMins:0}),clearInterval(n))},1e3);a.alarmCounter=setTimeout(function(){a.setState({soundOn:!0})},t)}},a.stopAlarm=function(){a.state.soundOn&&a.setState({soundOn:!1,alarmSet:!1})},a.resetAlarmCounter=function(){clearInterval(a.alarmCounter),a.setState({alarmMins:0,alarmSecs:0,soundOn:!1,alarmSet:!1,alarmCounterMins:0,alarmCounterSecs:0})},a.handleAlertRemove=function(){a.setState({alarmSetAlert:!1})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.state.seconds>=60&&this.setState({seconds:0,minutes:this.state.minutes+1}),this.state.minutes>=60&&this.setState({minutes:0,hours:this.state.hours+1})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"timer"},s.a.createElement("h1",null,this.state.hours>=10?this.state.hours:"0"+this.state.hours," ")," ",":",s.a.createElement("h1",null,this.state.minutes>=10?this.state.minutes:"0"+this.state.minutes),":"," ",s.a.createElement("h1",null,this.state.seconds>=10?this.state.seconds:"0"+this.state.seconds)),s.a.createElement("button",{onClick:function(){return e.handleTimer("start")}},"start"),s.a.createElement("button",{onClick:function(){return e.handleTimer("stop")}},"stop"),s.a.createElement("button",{onClick:function(){return e.handleTimer("reset")}},"reset")),s.a.createElement(h,{change:this.handleAlarmSetting,secs:this.state.alarmSecs,mins:this.state.alarmMins,click:this.handleAlarm,reset:this.resetAlarmCounter}),s.a.createElement(d,{sound:f.a,click:this.stopAlarm,soundOn:this.state.soundOn}),this.state.alarmSet&&s.a.createElement(E,{mins:this.state.alarmCounterMins,secs:this.state.alarmCounterSecs,soundOn:this.state.soundOn}),this.state.alarmSetAlert&&s.a.createElement(C,{click:this.handleAlertRemove,alert1:this.state.alert.head,alert2:this.state.alert.content}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.a2b29d85.chunk.js.map