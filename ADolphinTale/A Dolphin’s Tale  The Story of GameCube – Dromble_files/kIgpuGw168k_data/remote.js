(function(g){var window=this;var gAa=function(a,b){var c=[];g.aj(b,function(a){try{var b=g.GD.prototype.o.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.sa(b)?g.FD(b)&&c.push(a):c.push(a)},a);
return c},hAa=function(a,b){var c=gAa(a,b);
(0,g.F)(c,function(a){g.GD.prototype.remove.call(this,a)},a)},iAa=function(){var a=g.AH;
hAa(a,a.g.Vd(!0))},P7=function(a,b){g.P0.call(this,g.U("YTP_MDX_TITLE"),0,a,b);
this.R=a;this.F={};this.P(a,"onMdxReceiversChange",this.I);this.P(a,"presentingplayerstatechange",this.I);this.I()},jAa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},kAa=function(a,b){var c=new window.XMLHttpRequest;
c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}},Q7=function(){var a=jAa();
a&&a(!1,"No cast extension found")},R7=function(a,b,c){var d=window.document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(window.document.head||window.document.documentElement).appendChild(d)},S7=function(a){if(a>=g.Rsa.length)Q7();
else{var b=g.Rsa[a],c="chrome-extension://"+b+g.Osa;0<=g.j2.indexOf(b)?kAa(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,R7(c,Q7)):S7(a+1)}):R7(c,function(){S7(a+1)})}},T7=function(a){return 0<=window.navigator.userAgent.indexOf(a)},lAa=function(){if(g.Psa){var a=2,b=jAa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;R7("//web.archive.org/web/20171008131837/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",Q7,c)}},mAa=function(){if(T7("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;
if(a){lAa();a({command:"cast.sender.init"});return}}if(!window.chrome||T7("Edge"))Q7();else if(lAa(),T7("Android")&&T7("Chrome/")&&window.navigator.presentation){a="";var b=g.Oh();55<=b?a="55":50<=b&&(a="50");R7("//web.archive.org/web/20171008131837/https://www.gstatic.com/eureka/clank"+a+g.Osa,Q7)}else S7(0)},nAa=function(a){g.TG[a]&&(a=g.TG[a],(0,g.F)(a,function(a){g.RG[a]&&delete g.RG[a]}),a.length=0)},oAa=function(a){var b=g.QG();
if(b)if(b.clear(a),a)nAa(a);else for(var c in g.TG)nAa(c)},pAa=function(a){this.port=this.domain="";
this.g="/api/lounge";this.o=!0;a=a||window.document.location.href;var b=g.Gg(a)||"";b&&(this.port=":"+b);this.domain=g.Fg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Za(a,"10.0")&&(this.o=!1))},qAa=function(a){return(0,g.H)(a,function(a){return{key:a.id,
name:a.name}})},rAa=function(){var a=window.document.createElement("a");
g.Xc(a,"https://web.archive.org/web/20171008131837/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js");a=a.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+g.$a(a)},sAa=function(a,b){var c=g.Bd("SCRIPT");
c.id=a;c.onload=function(){b&&(0,window.setTimeout)(b,0)};
c.onreadystatechange=function(){switch(c.readyState){case "loaded":case "complete":c.onload()}};
g.Yc(c,g.ae("https://web.archive.org/web/20171008131837/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"));var d=window.document.getElementsByTagName("head")[0]||window.document.body;d.insertBefore(c,d.firstChild);return c},tAa=function(){var a=rAa(),b=window.document.getElementById(a),c=b&&g.fG(b,"loaded");
c||b&&!c||(b=sAa(a,function(){g.fG(b,"loaded")||(g.eG(b,"loaded","true"),g.XG(a),g.dF(g.Ea(oAa,a),0))}))},uAa=function(){var a=0<=g.Ib.search(/\ (CrMo|Chrome|CriOS)\//);
return g.IL||a},U7=function(a){g.QH("cloudview",a)},V7=function(a){g.va("yt.mdx.remote.cloudview.initializing_",a,void 0)},W7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},vAa=function(a,b,c,d){var e=!1;
W7()||(a=new g.RI(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(a){g.CH("yt-remote-cast-available",a);g.YG("yt-remote-cast2-availability-change",a)}),a.subscribe("yt-remote-cast2-receiver-selected",function(a){U7("onReceiverSelected: "+a.friendlyName);
g.CH("yt-remote-cast-receiver",a);g.YG("yt-remote-cast2-receiver-selected",a)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(a){U7("onReceiverResumed: "+a.friendlyName);
g.CH("yt-remote-cast-receiver",a)}),a.subscribe("yt-remote-cast2-session-change",function(a){U7("onSessionChange: "+g.YH(a));
a||g.EH("yt-remote-cast-receiver");g.YG("yt-remote-cast2-session-change",a)}),g.va("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
U7("cloudview.createSingleton_: "+e);return e},wAa=function(a){U7("setApiReady_ "+a);
g.va("yt.mdx.remote.cloudview.apiReady_",a,void 0)},xAa=function(){U7("dispose");
var a=W7();a&&a.dispose();g.va("yt.mdx.remote.cloudview.instance_",null,void 0);wAa(!1);g.VG(X7);X7.length=0},Y7=function(){return!!g.DH("yt-remote-cast-installed")},yAa=function(){var a=g.DH("yt-remote-cast-receiver");
return a?a.friendlyName:null},zAa=function(){U7("clearCurrentReceiver");
g.EH("yt-remote-cast-receiver")},Z7=function(a){g.QH("cloudview",a)},AAa=function(){return Y7()?W7()?W7().getCastSession():(Z7("getCastSelector: Cast is not initialized."),null):(Z7("getCastSelector: Cast API is not installed!"),null)},$7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},a8=function(){Y7()?W7()?$7()?(U7("Requesting cast selector."),W7().requestSession()):(U7("Wait for cast API to be ready to request the session."),X7.push(g.UG("yt-remote-cast2-api-ready",a8))):Z7("requestCastSelector: Cast is not initialized."):
Z7("requestCastSelector: Cast API is not installed!")},b8=function(a,b){$7()?W7().setConnectedScreenStatus(a,b):Z7("setConnectedScreenStatus called before ready.")},c8=function(a){U7("setCastInstalled_ "+a);
g.CH("yt-remote-cast-installed",a)},BAa=function(a,b){W7().init(a,b)},CAa=function(a,b){c8(!0);
V7(!1);BAa(a,function(a){a?(wAa(!0),g.XG("yt-remote-cast2-api-ready")):(Z7("Failed to initialize cast API."),c8(!1),g.EH("yt-remote-cast-available"),g.EH("yt-remote-cast-receiver"),xAa());b(a)})},DAa=function(a,b,c,d,e,f,k){uAa()?vAa(b,e,f,k)&&(V7(!0),window.chrome&&window.chrome.cast&&window.chrome.cast.isAvailable?CAa(a,c):(window.__onGCastApiAvailable=function(b,d){b?CAa(a,c):(Z7("Failed to load cast API: "+d),c8(!1),V7(!1),g.EH("yt-remote-cast-available"),g.EH("yt-remote-cast-receiver"),xAa(),
c(!1))},d?window.spf?window.spf.script.load("https://web.archive.org/web/20171008131837/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js","",void 0):tAa():mAa())):U7("Cannot initialize because not running Chrome")},e8=function(a,b){g.HG.call(this);
this.g=0;this.B=a;this.D=[];this.C=new g.UB;this.A=this.o=null;this.I=(0,g.y)(this.hO,this);this.F=(0,g.y)(this.pl,this);this.G=(0,g.y)(this.gO,this);this.J=(0,g.y)(this.uO,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.nu,this),EAa(this))):c=3;0!=c&&(b?this.nu(c):g.dF((0,g.y)(function(){this.nu(c)},this),0));
var d=AAa();d&&d8(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},f8=function(a){return new g.XI(a.B.getPlayerContextData())},EAa=function(a){(0,g.F)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(a){this.D.push(this.B.subscribe(a,g.Ea(this.yQ,a),this))},a)},FAa=function(a){(0,g.F)(a.D,function(a){this.B.unsubscribeByKey(a)},a);
a.D.length=0},g8=function(a,b){50>a.C.Ic()&&g.WB(a.C,b)},i8=function(a,b,c){var d=f8(a);
g.$I(d,c);-1E3!=d.g&&(d.g=b);h8(a,d)},j8=function(a,b,c){a.B.sendMessage(b,c)},h8=function(a,b){FAa(a);
a.B.setPlayerContextData(g.cJ(b));EAa(a)},d8=function(a,b){a.A&&(a.A.removeUpdateListener(a.I),a.A.removeMediaListener(a.F),a.pl(null));
a.A=b;a.A&&(k8("Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.I),a.A.addMediaListener(a.F),a.A.media.length&&a.pl(a.A.media[0]))},GAa=function(a){var b=a.o.media,c=a.o.customData;
if(b&&c){var d=f8(a);b.contentId!=d.videoId&&k8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.g=c.playerState;g.$I(d,a.o.getEstimatedTime());h8(a,d)}else k8("No cast media video. Ignoring state update.")},k8=function(a){g.QH("CP",a)},l8=function(a,b,c){return(0,g.y)(function(a){this.Zb("Failed to "+b+" with cast v2 channel. Error code: "+a.code);
a.code!=window.chrome.cast.ErrorCode.TIMEOUT&&(this.Zb("Retrying "+b+" using MDx browser channel."),j8(this,b,c))},a)},m8=function(a){g.cI.call(this,"ScreenServiceProxy");
this.bd=a;this.o=[];this.o.push(this.bd.$_s("screenChange",(0,g.y)(this.QT,this)));this.o.push(this.bd.$_s("onlineScreenChange",(0,g.y)(this.eQ,this)))},n8=function(){return g.w("yt.mdx.remote.currentScreenId_")},o8=function(a){g.QH("remote",a)},p8=function(a){g.va("yt.mdx.remote.connectData_",a,void 0)},q8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},HAa=function(){var a=q8();
if(g.Yb(a)){a=g.iI();var b=g.DH("yt-remote-session-name")||"",c=g.DH("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};g.va("yt.mdx.remote.channelParams_",a,void 0)}},IAa=function(a){a?(g.CH("yt-remote-session-app",a.app),g.CH("yt-remote-session-name",a.name)):(g.EH("yt-remote-session-app"),g.EH("yt-remote-session-name"));
g.va("yt.mdx.remote.channelParams_",a,void 0)},r8=function(){return g.w("yt.mdx.remote.connection_")},s8=function(){var a=r8();
return!!a&&3!=a.getProxyState()},JAa=function(){return g.w("yt.mdx.remote.connectData_")},u8=function(){if(!t8){var a=g.w("yt.mdx.remote.screenService_");
t8=a?new m8(a):null}return t8},v8=function(){var a=g.jI();
if(!a)return null;var b=u8().ee();return g.bI(b,a)},w8=function(){var a=n8();
if(!a)return null;var b=u8().ee();return g.bI(b,a)},KAa=function(){var a=u8().bd.$_gos();
var b=w8();b&&r8()&&(g.aI(a,b)||a.push(b));return qAa(a)},LAa=function(){var a=KAa(),b=w8();
b||(b=v8());return g.gb(a,function(a){return b&&g.VH(b,a.key)?!0:!1})},x8=function(){var a=LAa();
!a&&Y7()&&yAa()&&(a={key:"cast-selector-receiver",name:yAa()});return a},MAa=function(){var a=KAa();
Y7()&&g.DH("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},NAa=function(a){g.va("yt.mdx.remote.currentScreenId_",a,void 0)},z8=function(a){var b=r8();
p8(null);a||NAa("");g.va("yt.mdx.remote.connection_",a,void 0);y8&&((0,g.F)(y8,function(b){b(a)}),y8.length=0);
b&&!a?g.YG("yt-remote-connection-change",!1):!b&&a&&g.YG("yt-remote-connection-change",!0)},B8=function(a,b){w8()&&w8();
NAa(a.id);var c=new g.iJ(A8,a,q8());c.connect(b,JAa());c.subscribe("beforeDisconnect",function(a){g.YG("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){r8()&&z8(null)});
z8(c)},OAa=function(){var a=v8();
a?(o8("Resume connection to: "+g.YH(a)),B8(a,0)):(g.qI(),zAa(),o8("Skipping connecting because no session screen found."))},C8=function(){$7()?W7().stopSession():Z7("stopSession called before API ready.");
var a=r8();a&&(a.disconnect(1),z8(null))},PAa=function(a){o8("remote.onCastSessionChange_: "+g.YH(a));
if(a){var b=w8();b&&b.id==a.id?b8(b.id,"YouTube TV"):(b&&C8(),B8(a,1))}else r8()&&C8()},QAa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.vE("MDX_CONFIG")||b;g.AH&&iAa();g.kI();A8||(A8=new pAa(b?b.loungeApiHost:void 0),g.sI()&&(A8.g="/api/loungedev"));y8||(y8=g.w("yt.mdx.remote.deferredProxies_")||[],g.va("yt.mdx.remote.deferredProxies_",y8,void 0));HAa();var c=u8();if(!c){var d=new g.DI(A8);g.va("yt.mdx.remote.screenService_",d,void 0);c=u8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);DAa(a,d,function(a){a?n8()&&b8(n8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){g.YG("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.va("yt.mdx.remote.initialized_",!0,void 0),o8("Initializing: "+g.xg(b)),D8.push(g.UG("yt-remote-cast2-availability-change",function(){g.YG("yt-remote-receiver-availability-change")})),D8.push(g.UG("yt-remote-cast2-receiver-selected",function(){p8(null);
g.YG("yt-remote-auto-connect","cast-selector-receiver")})),D8.push(g.UG("yt-remote-cast2-receiver-resumed",function(){g.YG("yt-remote-receiver-resumed","cast-selector-receiver")})),D8.push(g.UG("yt-remote-cast2-session-change",PAa)),D8.push(g.UG("yt-remote-connection-change",function(a){a?b8(n8(),"YouTube TV"):v8()||(b8(null,null),zAa())})),a=q8(),b.isAuto&&(a.id+="#dial"),g.LF("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),o8(" -- with channel params: "+
g.xg(a)),IAa(a),c.start(),n8()||OAa())},E8=function(a,b,c){g.L.call(this);
this.D=null!=c?(0,g.y)(a,c):a;this.sc=b;this.C=(0,g.y)(this.xH,this);this.g=!1;this.o=0;this.A=this.Aa=null;this.B=[]},F8=function(a,b,c){g.L.call(this);
this.F=a;this.R=b;this.o=new g.EG(this);g.M(this,this.o);this.o.P(b,"onCaptionsTrackListChanged",this.xP);this.o.P(b,"captionschanged",this.fO);this.o.P(b,"captionssettingschanged",this.pC);this.o.P(b,"videoplayerreset",this.ro);this.o.P(b,"mdxautoplaycancel",this.FG);this.O=this.o.P(b,"onVolumeChange",this.IA);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.VA,this);c.subscribe("remotePlayerChange",this.rl,this);c.subscribe("remoteQueueChange",this.ro,this);c.subscribe("autoplayUpNext",this.uA,
this);c.subscribe("previousNextChange",this.SA,this);c.subscribe("nowAutoplaying",this.KA,this);c.subscribe("autoplayDismissed",this.tA,this);this.suggestion=null;this.G=new g.mR(64);this.A=new g.It(this.kC,500,this);g.M(this,this.A);this.B=new g.It(this.lC,1E3,this);g.M(this,this.B);this.J=new E8(this.pT,0,this);g.M(this,this.J);this.C={};this.L=new g.It(this.NC,1E3,this);g.M(this,this.L);this.I=new g.Dk(this.SK,1E3,this);g.M(this,this.I);this.N=g.x;this.pC();this.ro();this.rl()},G8=function(a,b){var c=
a.F,d=a.R.ga().lengthSeconds;
c.I=b||0;c.g.U("progresssync",b,d)},RAa=function(a){G8(a,0);
a.A.stop();H8(a,new g.mR(64))},J8=function(a,b){if(I8(a)&&!a.D){var c=null;
b&&(c={style:a.R.oi()},g.ec(c,b));a.g.cC(a.R.ga(1).videoId,c);a.C=f8(a.g).o}},K8=function(a,b){var c=a.R.Rf();
if(c){var d=c.ae();var e=c.listId.toString()}var f=a.R.ga(1);c=a.g;var k=f.videoId,l=d;d=f.playerParams;f=f.pj;var m=f8(c),n=e||m.listId;l=l||0;var q={videoId:k,currentIndex:l};g.bJ(m,k,l);g.sa(b)&&(g.$I(m,b),q.currentTime=b);g.sa(n)&&(q.listId=n);null!=d&&(q.playerParams=d);null!=f&&(q.clickTrackingParams=f);j8(c,"setPlaylist",q);e||h8(c,m);H8(a,new g.mR(1))},SAa=function(a,b){if(b){var c=a.R.xc("captions","tracklist",{ay:1});
c&&c.length?(a.R.Fd("captions","track",b),a.D=!1):(a.R.bl("captions"),a.D=!0)}else a.R.Fd("captions","track",{})},I8=function(a){return f8(a.g).videoId==a.R.ga(1).videoId},H8=function(a,b){a.B.stop();
var c=a.G;if(!g.tR(c,b)){var d=g.W(b,2);d!=g.W(a.G,2)&&g.SW(a.R,d);a.G=b;TAa(a.F,c,b)}},L8=function(a){g.Y.call(this,{H:"div",
M:"ytp-remote",K:[{H:"div",M:"ytp-remote-display-status",K:[{H:"div",M:"ytp-remote-display-status-icon",K:[g.AE()]},{H:"div",M:"ytp-remote-display-status-text",K:["{{statustext}}"]}]}]});this.o=new g.HX(this,250);g.M(this,this.o);this.A=a;this.P(a,"presentingplayerstatechange",this.B);UAa(this,g.PW(a))},UAa=function(a,b){if(3==a.A.Qa()){var c={RECEIVER_NAME:a.A.xc("remote","currentReceiver").name};
c=g.W(b,128)?g.U("YTP_MDX_STATUS_ERROR_2",c):b.ib()||g.W(b,4)?g.U("YTP_MDX_STATUS_PLAYING_2",c):g.U("YTP_MDX_STATUS_CONNECTED_2",c);a.updateValue("statustext",c);a.o.show()}else a.o.hide()},M8=function(a){g.AX.call(this,a);
this.A={key:g.$H(),name:g.U("YTP_MDX_MY_COMPUTER")};this.C=null;this.D=[];this.J=this.o=null;this.G=[this.A];this.B=this.A;this.F=new g.mR(64);this.I=0;var b=g.IW(a).G;b&&(b=b.A&&b.A.g)&&(b=new P7(a,b),g.M(this,b));b=new L8(a);g.M(this,b);g.eX(a,b.element,4)},TAa=function(a,b,c){a.F=c;
a.g.U("presentingplayerstatechange",new g.zR(c,b))},N8=function(a,b){if(b.key!=a.B.key)if(b.key==a.A.key)C8();
else{a.B=b;var c=a.g.getPlaylistId();var d=a.g.ga(1),e=d.videoId;if(c||e){var f=a.g.Rf();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.fc(l).videoId}else k=[e];f=a.g.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.pj,index:Math.max(a.g.kz(),0),currentTime:0==f?void 0:f}}else c=null;o8("Connecting to: "+g.xg(b));"cast-selector-receiver"==b.key?(p8(c||null),$7()?W7().setLaunchParams(c||null):Z7("setLaunchParams called before ready.")):!c&&
s8()&&n8()==b.key?g.YG("yt-remote-connection-change",!0):(C8(),p8(c||null),c=u8().ee(),(c=g.bI(c,b.key))&&B8(c,1))}};
g.p(P7,g.P0);P7.prototype.I=function(){var a=this.R.xc("remote","receivers");a&&1<a.length&&!this.R.xc("remote","quickCast")?(this.F=g.Hb(a,this.B,this),g.Q0(this,(0,g.H)(a,this.B)),a=this.R.xc("remote","currentReceiver"),this.kf(this.B(a)),this.enable(!0)):this.enable(!1)};
P7.prototype.B=function(a){return a.key};
P7.prototype.jf=function(a){return"cast-selector-receiver"==a?g.U("YTP_MDX_CAST_SELECTOR"):this.F[a].name};
P7.prototype.rd=function(a){g.P0.prototype.rd.call(this,a);this.R.Fd("remote","currentReceiver",this.F[a]);this.A.Mb()};
g.h=pAa.prototype;g.h.Yh=function(a){var b=this.g;if(g.sa(void 0)?0:this.o)b="https://"+this.domain+this.port+this.g;return g.Pg(b+a,{})};
g.h.lu=function(a,b,c,d){c={format:"JSON",method:"POST",context:this,timeout:5E3,withCredentials:!1,Eb:g.Ea(this.KT,c,!0),onError:g.Ea(this.JT,d),sd:g.Ea(this.LT,d)};b&&(c.Ob=b,c.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.tF(a,c)};
g.h.KT=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g.h.JT=function(a,b){a(Error("Request error: "+b.status))};
g.h.LT=function(a){a(Error("request timed out"))};
var X7=[];g.z(e8,g.HG);g.h=e8.prototype;g.h.play=function(){1==this.g?(this.o?this.o.play(null,g.x,l8(this,"play")):j8(this,"play"),i8(this,1,g.aJ(f8(this))),this.U("remotePlayerChange")):g8(this,this.play)};
g.h.pause=function(){1==this.g?(this.o?this.o.pause(null,g.x,l8(this,"pause")):j8(this,"pause"),i8(this,2,g.aJ(f8(this))),this.U("remotePlayerChange")):g8(this,this.pause)};
g.h.YC=function(a){if(1==this.g){if(this.o){var b=f8(this),c=new window.chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=b.ib()||3==b.g?window.chrome.cast.media.ResumeState.PLAYBACK_START:window.chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.o.seek(c,g.x,l8(this,"seekTo",{newTime:a}))}else j8(this,"seekTo",{newTime:a});i8(this,3,a);this.U("remotePlayerChange")}else g8(this,g.Ea(this.YC,a))};
g.h.stop=function(){if(1==this.g){this.o?this.o.stop(null,g.x,l8(this,"stopVideo")):j8(this,"stopVideo");var a=f8(this);a.index=-1;a.videoId="";g.YI(a);h8(this,a);this.U("remotePlayerChange")}else g8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=f8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.y)(function(){k8("set receiver volume: "+d)},this),(0,g.y)(function(){this.Zb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.y)(function(){k8("set receiver muted: "+b)},this),(0,g.y)(function(){this.Zb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);j8(this,"setVolume",e)}c.muted=b;c.volume=a;h8(this,c)}else g8(this,g.Ea(this.setVolume,a,b))};
g.h.cC=function(a,b){if(1==this.g){var c=f8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,format:b.format,kind:b.kind},d.style=g.xg(b.style),g.ec(d,c.o));j8(this,"setSubtitlesTrack",d);h8(this,c)}else g8(this,g.Ea(this.cC,a,b))};
g.h.mu=function(a,b){if(1==this.g){j8(this,"setAudioTrack",{videoId:a,audioTrackId:b.Oc.id});var c=f8(this);c.audioTrackId=b.Oc.id;h8(this,c)}else g8(this,g.Ea(this.mu,a,b))};
g.h.XC=function(a,b){if(1==this.g){if(a&&b){var c=f8(this);g.bJ(c,a,b);h8(this,c)}j8(this,"previous")}else g8(this,g.Ea(this.XC,a,b))};
g.h.WC=function(a,b){if(1==this.g){if(a&&b){var c=f8(this);g.bJ(c,a,b);h8(this,c)}j8(this,"next")}else g8(this,g.Ea(this.WC,a,b))};
g.h.uw=function(){1==this.g?j8(this,"dismissAutoplay"):g8(this,this.uw)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.U("proxyStateChange",a,this.g)}e8.Z.dispose.call(this)};
g.h.X=function(){FAa(this);this.B=null;this.C.clear();d8(this,null);e8.Z.X.call(this)};
g.h.nu=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.U("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)g.XB(this.C).apply(this);else 3==a&&this.dispose()}};
g.h.yQ=function(a,b){this.U(a,b)};
g.h.hO=function(a){if(!a)this.pl(null),d8(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=f8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)k8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,h8(this,b)}};
g.h.pl=function(a){k8("Cast media: "+!!a);this.o&&this.o.removeUpdateListener(this.G);if(this.o=a)this.o.addUpdateListener(this.G),GAa(this),this.U("remotePlayerChange")};
g.h.gO=function(a){a?(GAa(this),this.U("remotePlayerChange")):this.pl(null)};
g.h.uO=function(){var a=AAa();a&&d8(this,a)};
g.h.Zb=function(a){g.QH("CP",a)};
g.z(m8,g.cI);g.h=m8.prototype;g.h.ee=function(a){return this.bd.$_gs(a)};
g.h.contains=function(a){return!!this.bd.$_c(a)};
g.h.get=function(a){return this.bd.$_g(a)};
g.h.start=function(){this.bd.$_st()};
g.h.add=function(a,b,c){this.bd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.bd.$_r(a,b,c)};
g.h.Zo=function(a,b,c,d){this.bd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.o.length;a<b;++a)this.bd.$_ubk(this.o[a]);this.o.length=0;this.bd=null;m8.Z.X.call(this)};
g.h.QT=function(){this.U("screenChange")};
g.h.eQ=function(){this.U("onlineScreenChange")};
var A8=null,y8=null,D8=[],t8=null;g.z(E8,g.L);g.h=E8.prototype;g.h.wH=function(a){this.B=arguments;this.g=!1;this.Aa?this.A=(0,g.D)()+this.sc:this.Aa=g.rg(this.C,this.sc)};
g.h.stop=function(){this.Aa&&(g.sg(this.Aa),this.Aa=null);this.A=null;this.g=!1;this.B=[]};
g.h.pause=function(){++this.o};
g.h.resume=function(){this.o&&(--this.o,!this.o&&this.g&&(this.g=!1,this.D.apply(null,this.B)))};
g.h.X=function(){this.stop();E8.Z.X.call(this)};
g.h.xH=function(){this.A?(this.Aa=g.rg(this.C,this.A-(0,g.D)()),this.A=null):(this.Aa=null,this.o?this.g=!0:(this.g=!1,this.D.apply(null,this.B)))};g.p(F8,g.L);g.h=F8.prototype;
g.h.X=function(){g.L.prototype.X.call(this);this.A.stop();this.B.stop();this.J.stop();this.N();this.g.unsubscribe("proxyStateChange",this.VA,this);this.g.unsubscribe("remotePlayerChange",this.rl,this);this.g.unsubscribe("remoteQueueChange",this.ro,this);this.g.unsubscribe("autoplayUpNext",this.uA,this);this.g.unsubscribe("previousNextChange",this.SA,this);this.g.unsubscribe("nowAutoplaying",this.KA,this);this.g.unsubscribe("autoplayDismissed",this.tA,this);this.g=this.F=null};
g.h.az=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(I8(this)){if(1081!=f8(this.g).g||"control_seek"!=a)switch(a){case "control_toggle_play_pause":f8(this.g).ib()?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.dj(c[0],c[1]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.g.mu(this.R.ga(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.R.getCurrentTime();K8(this,0==c?void 0:c);break;case "control_seek":K8(this,c[0]);break;case "control_subtitles_set_track":J8(this,c[0]);break;case "control_set_audio_track":c=c[0],I8(this)&&this.g.mu(this.R.ga(1).videoId,c)}};
g.h.fO=function(a){this.J.wH(a)};
g.h.pT=function(a){this.az("control_subtitles_set_track",g.Yb(a)?null:a)};
g.h.pC=function(){var a=this.R.xc("captions","track");g.Yb(a)||J8(this,a)};
g.h.IA=function(a){if(I8(this)){this.g.unsubscribe("remotePlayerChange",this.rl,this);var b=Math.round(a.volume);a=!!a.muted;var c=f8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.L.start();this.g.subscribe("remotePlayerChange",this.rl,this)}};
g.h.xP=function(){g.Yb(this.C)||SAa(this,this.C);this.D=!1};
g.h.VA=function(a,b){this.B.stop();2==b&&this.lC()};
g.h.rl=function(){if(I8(this)){this.A.stop();var a=f8(this.g);switch(a.g){case 1081:case 1:H8(this,new g.mR(8));this.kC();break;case 1085:case 3:H8(this,new g.mR(9));break;case 0:H8(this,new g.mR(2));this.I.stop();G8(this,this.R.ga().lengthSeconds);break;case 1084:H8(this,new g.mR(4));break;case 2:H8(this,new g.mR(4));G8(this,g.aJ(a));break;case -1:H8(this,new g.mR(64));break;case -1E3:a={errorCode:"mdx.remoteerror",message:g.U("YTP_MDX_PLAYER_ERROR")},H8(this,new g.mR(128,a))}a=f8(this.g).o;var b=
this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.format==b.format&&a.kind==b.kind:1)||(this.C=a,SAa(this,a));a=f8(this.g);-1==a.volume||Math.round(this.R.getVolume())==a.volume&&this.R.isMuted()==a.muted||this.L.isActive()||this.NC()}else RAa(this)};
g.h.SA=function(){this.R.U("mdxpreviousnextchange")};
g.h.ro=function(){I8(this)||RAa(this)};
g.h.FG=function(){this.g.uw()};
g.h.uA=function(a){a&&(a=g.tF("/watch_queue_ajax",{method:"GET",Xc:{action_get_watch_queue_item:1,video_id:a},Eb:(0,g.y)(this.xR,this)}))&&(this.N=(0,g.y)(a.abort,a))};
g.h.xR=function(a,b){var c=new g.nQ({videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.R.U("mdxautoplayupnext",c)};
g.h.KA=function(a){(0,window.isNaN)(a)||this.R.U("mdxnowautoplaying",a)};
g.h.tA=function(){this.R.U("mdxautoplaycanceled")};
g.h.SK=function(a,b){-1==f8(this.g).g?K8(this,a):b&&this.g.YC(a)};
g.h.NC=function(){if(I8(this)){var a=f8(this.g);this.o.Ca(this.O);a.muted?this.R.mute():this.R.Sf();this.R.setVolume(a.volume);this.O=this.o.P(this.R,"onVolumeChange",this.IA)}};
g.h.kC=function(){this.A.stop();if(!this.g.ka()){var a=f8(this.g);a.ib()&&H8(this,new g.mR(8));G8(this,g.aJ(a));this.A.start()}};
g.h.lC=function(){this.B.stop();this.A.stop();var a=this.g.B.getReconnectTimeout();2==this.g.g&&!(0,window.isNaN)(a)&&this.B.start()};g.p(L8,g.Y);L8.prototype.B=function(a){UAa(this,a.state)};g.p(M8,g.AX);g.h=M8.prototype;g.h.create=function(){QAa(g.pO(g.X(this.g)));this.D.push(g.UG("yt-remote-before-disconnect",this.bO,this));this.D.push(g.UG("yt-remote-connection-change",this.HQ,this));this.D.push(g.UG("yt-remote-receiver-availability-change",this.TA,this));this.D.push(g.UG("yt-remote-auto-connect",this.FQ,this));this.D.push(g.UG("yt-remote-receiver-resumed",this.EQ,this));this.TA()};
g.h.load=function(){this.g.Up();g.AX.prototype.load.call(this);this.C=new F8(this,this.g,this.o);var a=JAa();a=a?a.currentTime:0;var b=s8()?new e8(r8(),void 0):null;0==a&&b&&(a=g.aJ(f8(b)));0!=a&&(this.I=a||0,this.g.U("progresssync",a,void 0));TAa(this,this.F,this.F);g.K1(this.g.app,6)};
g.h.unload=function(){this.g.U("mdxautoplaycanceled");this.B=this.A;g.Xe(this.C,this.o);this.o=this.C=null;g.AX.prototype.unload.call(this);g.K1(this.g.app,5)};
g.h.X=function(){g.VG(this.D);g.AX.prototype.X.call(this)};
g.h.Vk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.C.az.apply(this.C,[].concat([a],g.pa(c)))};
g.h.sH=function(){return this.loaded?this.C.suggestion:null};
g.h.Hf=function(){return this.o?f8(this.o).Hf:!1};
g.h.hasNext=function(){return this.o?f8(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.I};
g.h.vK=function(){var a=f8(this.o),b=this.g.ga();return{allowSeeking:this.g.cd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.D?a.B+g.ZI(a):a.B,isPeggedToLive:1>=(a.D?a.A+g.ZI(a):a.A)-this.getCurrentTime(),loaded:a.J,seekableEnd:a.D?a.A+g.ZI(a):a.A,seekableStart:0<a.C?a.C+g.ZI(a):a.C}};
g.h.wK=function(){this.o&&this.o.WC()};
g.h.xK=function(){this.o&&this.o.XC()};
g.h.bO=function(a){1==a&&(this.J=this.o?f8(this.o):null)};
g.h.HQ=function(){var a=s8()?new e8(r8(),void 0):null;if(a){var b=this.B;this.loaded&&this.unload();this.o=a;this.J=null;b.key!=this.A.key&&(this.B=b,this.load())}else g.We(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.J)&&a.videoId==this.g.ga().videoId&&this.g.iz(a.videoId,g.aJ(a)));this.g.U("videodatachange","newdata",this.g.ga(),3)};
g.h.TA=function(){this.G=[this.A].concat(MAa());var a=x8()||this.A;N8(this,a);this.g.va("onMdxReceiversChange")};
g.h.FQ=function(){var a=x8();N8(this,a)};
g.h.EQ=function(){this.B=x8()};
g.h.uK=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.G;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?a8():N8(this,b)),this.loaded?this.B:this.A;case "quickCast":return 2==this.G.length&&"cast-selector-receiver"==this.G[1].key?(b&&a8(),!0):!1}};
g.h.yK=function(){j8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.ud=function(){return!1};g.TZ.remote=M8;})(_yt_player);

/*
     FILE ARCHIVED ON 13:18:37 Oct 08, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:26:46 Dec 29, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/