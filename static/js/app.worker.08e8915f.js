(()=>{"use strict";const t=t=>{const e={};return t.forEach((t=>{const{year:o,id:s}=t;e[o]||(e[o]={}),e[o]={...e[o],[s]:t}})),e},e={GROUP_MOVIES_BY_YEAR:"GROUP_MOVIES_BY_YEAR",GROUPED_MOVIES:"GROUPED_MOVIES"};class o{static isDev(){return!this._isHttps()}static isTest(){return void 0!=={NODE_ENV:"production",PUBLIC_URL:"/movieApp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MOVIE_SERVICE_API_KEY:"8ea39b15",REACT_APP_MOVIE_SERVICE_ENDPOINT:"https://www.omdbapi.com"}.JEST_WORKER_ID}static _isHttps(){return"https:"===window.location.protocol}}class s{static log(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];s.logWithLevel(console.log,...e)}static warn(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];s.logWithLevel(console.warn,...e)}static error(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];s.logWithLevel(console.error,...e)}static logWithLevel(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),r=1;r<e;r++)s[r-1]=arguments[r];o.isDev()&&!o.isTest()&&t(...s)}}self.onmessage=function(o){const r=o.data;if(r.type===e.GROUP_MOVIES_BY_YEAR){const{movies:o}=r.payload;self.postMessage({type:e.GROUPED_MOVIES,payload:t(o)})}else s.warn("Unknown message type:",r.type)}})();
//# sourceMappingURL=app.worker.08e8915f.js.map