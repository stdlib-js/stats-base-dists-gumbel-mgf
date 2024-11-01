// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,v,g,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,E(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,g=t.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+m(y):m(y)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Math.floor;function L(r){return C(r)===r}var P=Number.NEGATIVE_INFINITY;function M(r){return Math.abs(r)}var R=2147483647,Z=2146435072;var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Y.call(r);n=r[B],a=B,e=null!=(i=r)&&q.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return t=Y.call(r),e?r[B]=n:delete r[B],t}:function(r){return Y.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,n;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(J&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,nr="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var ir,ar="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),n=e,r=(nr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var cr,sr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),n=e,r=(ur&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=cr,pr="function"==typeof Uint16Array;var vr="function"==typeof Uint16Array?Uint16Array:null;var gr,yr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(pr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var dr,hr={uint16:gr,uint8:lr};(dr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(dr.buffer)[0],br=!0===wr?1:0,mr=new or(1),Ar=new er(mr.buffer);function _r(r){return mr[0]=r,Ar[br]}function Er(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Nr=-.16666666666666632,Ur=.00833333333332249,Sr=-.0001984126982985795,Ir=27557313707070068e-22,kr=-2.5050760253406863e-8,xr=1.58969099521155e-10;function Fr(r,e){var n,t,i;return n=Ur+(i=r*r)*(Sr+i*Ir)+i*(i*i)*(kr+i*xr),t=i*r,0===e?r+t*(Nr+i*n):r-(i*(.5*e-t*n)-e-t*Nr)}var jr,Tr,Or=1048575,Vr=!0===wr?0:1,$r=new or(1),Gr=new er($r.buffer);!0===wr?(jr=1,Tr=0):(jr=0,Tr=1);var Hr={HIGH:jr,LOW:Tr},Wr=new or(1),Cr=new er(Wr.buffer),Lr=Hr.HIGH,Pr=Hr.LOW;function Mr(r,e){return Cr[Lr]=r,Cr[Pr]=e,Wr[0]}var Rr=Number.POSITIVE_INFINITY,Zr=1023,Xr=1023,Yr=-1023,qr=-1074;function zr(r){return r===Rr||r===P}var Br,Dr,Jr=2147483648;!0===wr?(Br=1,Dr=0):(Br=0,Dr=1);var Kr={HIGH:Br,LOW:Dr},Qr=new or(1),re=new er(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e,n,t){return Qr[0]=r,e[t]=re[ee],e[t+n]=re[ne],e}function ie(r){return te(r,[0,0],1,0)}H(ie,"assign",te);var ae=[0,0];function oe(r,e){var n,t;return ie.assign(r,ae,1,0),n=ae[0],n&=R,t=_r(e),Mr(n|=t&=Jr,ae[1])}var ue=22250738585072014e-324,fe=4503599627370496;function ce(r,e,n,t){return W(r)||zr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&M(r)<ue?(e[t]=r*fe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=2220446049250313e-31,le=2148532223,pe=[0,0],ve=[0,0];function ge(r,e){var n,t;return 0===e||0===r||W(r)||zr(r)?r:(ce(r,pe,1,0),r=pe[0],e+=pe[1],e+=function(r){var e=_r(r);return(e=(e&Z)>>>20)-Zr|0}(r),e<qr?oe(0,r):e>Xr?r<0?P:Rr:(e<=Yr?(e+=52,t=se):t=1,ie.assign(r,ve,1,0),n=ve[0],n&=le,t*Mr(n|=e+Zr<<20,ve[1])))}function ye(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],he=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],we=16777216,be=5.960464477539063e-8,me=ye(20),Ae=ye(20),_e=ye(20),Ee=ye(20);function Ne(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,g,y,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=be*h|0,Ee[v]=h-we*s|0,h=t[d-1]+s,d-=1;if(h=ge(h,i),h-=8*C(.125*h),h-=y=0|h,l=0,i>0?(y+=v=Ee[n-1]>>24-i,Ee[n-1]-=v<<24-i,l=Ee[n-1]>>23-i):0===i?l=Ee[n-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<n;v++)d=Ee[v],0===c?0!==d&&(c=1,Ee[v]=16777216-d):Ee[v]=16777215-d;if(i>0)switch(i){case 1:Ee[n-1]&=8388607;break;case 2:Ee[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=ge(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=Ee[v];if(0===d){for(g=1;0===Ee[a-g];g++);for(v=n+1;v<=n+g;v++){for(f[u+v]=de[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return Ne(r,e,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===Ee[n];)n-=1,i-=24;else(h=ge(h,-i))>=we?(s=be*h|0,Ee[n]=h-we*s|0,i+=24,Ee[n+=1]=s):Ee[n]=0|h;for(s=ge(1,i),v=n;v>=0;v--)t[v]=s*Ee[v],s*=be;for(v=n;v>=0;v--){for(s=0,g=0;g<=p&&g<=n-v;g++)s+=he[g]*t[v+g];_e[n-v]=s}for(s=0,v=n;v>=0;v--)s+=_e[v];for(e[0]=0===l?s:-s,s=_e[0]-s,v=1;v<=n;v++)s+=_e[v];return e[1]=0===l?s:-s,7&y}function Ue(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)me[f]=c<0?0:de[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*me[o+(f-c)];Ae[f]=i}return 4,Ne(r,e,4,Ae,u,4,a,o,me)}var Se=Math.round,Ie=.6366197723675814,ke=1.5707963267341256,xe=6077100506506192e-26,Fe=6077100506303966e-26,je=20222662487959506e-37,Te=20222662487111665e-37,Oe=84784276603689e-45,Ve=2047;function $e(r,e,n){var t,i,a,o,u;return a=r-(t=Se(r*Ie))*ke,o=t*xe,u=e>>20|0,n[0]=a-o,u-(_r(n[0])>>20&Ve)>16&&(o=t*je-((i=a)-(a=i-(o=t*Fe))-o),n[0]=a-o,u-(_r(n[0])>>20&Ve)>49&&(o=t*Oe-((i=a)-(a=i-(o=t*Te))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ge=0,He=16777216,We=1.5707963267341256,Ce=6077100506506192e-26,Le=2*Ce,Pe=3*Ce,Me=4*Ce,Re=598523,Ze=1072243195,Xe=1073928572,Ye=1074752122,qe=1074977148,ze=1075183036,Be=1075388923,De=1075594811,Je=1094263291,Ke=[0,0,0],Qe=[0,0];function rn(r,e){var n,t,i,a,o,u,f;if((i=_r(r)&R|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Ye)return(i&Or)===Re?$e(r,i,e):i<=Xe?r>0?(f=r-We,e[0]=f-Ce,e[1]=f-e[0]-Ce,1):(f=r+We,e[0]=f+Ce,e[1]=f-e[0]+Ce,-1):r>0?(f=r-2*We,e[0]=f-Le,e[1]=f-e[0]-Le,2):(f=r+2*We,e[0]=f+Le,e[1]=f-e[0]+Le,-2);if(i<=De)return i<=ze?i===qe?$e(r,i,e):r>0?(f=r-3*We,e[0]=f-Pe,e[1]=f-e[0]-Pe,3):(f=r+3*We,e[0]=f+Pe,e[1]=f-e[0]+Pe,-3):i===Be?$e(r,i,e):r>0?(f=r-4*We,e[0]=f-Me,e[1]=f-e[0]-Me,4):(f=r+4*We,e[0]=f+Me,e[1]=f-e[0]+Me,-4);if(i<Je)return $e(r,i,e);if(i>=Z)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return $r[0]=r,Gr[Vr]}(r),f=Mr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ke[o]=0|f,f=(f-Ke[o])*He;for(Ke[2]=f,a=3;Ke[a-1]===Ge;)a-=1;return u=Ue(Ke,Qe,t,a),r<0?(e[0]=-Qe[0],e[1]=-Qe[1],-u):(e[0]=Qe[0],e[1]=Qe[1],u)}var en=1072243195,nn=1045430272,tn=[0,0];var an=3.141592653589793,on=2.5066282746310007;function un(r){return L(r/2)}function fn(r){return un(r>0?r-1:r+1)}var cn=Math.sqrt,sn=!0===wr?0:1,ln=new or(1),pn=new er(ln.buffer);function vn(r,e){return ln[0]=r,pn[sn]=e>>>0,ln[0]}function gn(r){return 0|r}var yn=1072693247,dn=1e300,hn=1e-300;var wn=!0===wr?1:0,bn=new or(1),mn=new er(bn.buffer);function An(r,e){return bn[0]=r,mn[wn]=e>>>0,bn[0]}var _n=1048575,En=1048576,Nn=1072693248,Un=536870912,Sn=524288,In=20,kn=9007199254740992,xn=.9617966939259756,Fn=.9617967009544373,jn=-7.028461650952758e-9,Tn=[1,1.5],On=[0,.5849624872207642],Vn=[0,1.350039202129749e-8];var $n=1.4426950408889634,Gn=1.4426950216293335,Hn=1.9259629911266175e-8;var Wn=.6931471805599453;var Cn=1048576,Ln=1071644672,Pn=20,Mn=.6931471824645996,Rn=-1.904654299957768e-9;var Zn=1072693247,Xn=1105199104,Yn=1139802112,qn=1083179008,zn=1072693248,Bn=1083231232,Dn=3230714880,Jn=31,Kn=1e300,Qn=1e-300,rt=8008566259537294e-32,et=[0,0],nt=[0,0];function tt(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,g,y;if(W(r)||W(e))return NaN;if(ie.assign(e,et,1,0),o=et[0],0===et[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return cn(r);if(-.5===e)return 1/cn(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(zr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:M(r)<1==(e===Rr)?0:Rr}(r,e)}if(ie.assign(r,et,1,0),a=et[0],0===et[1]){if(0===a)return function(r,e){return e===P?Rr:e===Rr?0:e>0?fn(e)?r:0:fn(e)?oe(Rr,r):Rr}(r,e);if(1===r)return 1;if(-1===r&&fn(e))return-1;if(zr(r))return r===P?tt(-0,-e):e<0?0:Rr}if(r<0&&!1===L(e))return(r-r)/(r-r);if(i=M(r),n=a&R|0,t=o&R|0,f=o>>>Jn|0,u=(u=a>>>Jn|0)&&fn(e)?-1:1,t>Xn){if(t>Yn)return function(r,e){return(_r(r)&R)<=yn?e<0?dn*dn:hn*hn:e>0?dn*dn:hn*hn}(r,e);if(n<Zn)return 1===f?u*Kn*Kn:u*Qn*Qn;if(n>zn)return 0===f?u*Kn*Kn:u*Qn*Qn;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Hn-a*$n)-((t=vn(t=(o=Gn*i)+u,0))-o),r[0]=t,r[1]=n,r}(nt,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,_,E;return m=0,n<En&&(m-=53,n=_r(e*=kn)),m+=(n>>In)-Zr|0,n=(A=n&_n|0)|Nn|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=En),o=vn(i=(w=(e=An(e,n))-(c=Tn[_]))*(b=1/(e+c)),0),t=(n>>1|Un)+Sn,f=An(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=vn(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=vn(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Fn*l,y=(v=jn*l+(b-(l-w))*xn+Vn[_])-((g=vn(g=p+v+(s=On[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(nt,i,n);if(v=(l=(e-(c=vn(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ie.assign(v,et,1,0),g=gn(et[0]),y=gn(et[1]),g>=qn){if(0!=(g-qn|y))return u*Kn*Kn;if(l+rt>v-s)return u*Kn*Kn}else if((g&R)>=Bn){if(0!=(g-Dn|y))return u*Qn*Qn;if(l<=v-s)return u*Qn*Qn}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&R|0)>>Pn)-Zr|0,c=0,s>Ln&&(i=An(0,((c=r+(Cn>>l+1)>>>0)&~(Or>>(l=((c&R)>>Pn)-Zr|0)))>>>0),c=(c&Or|Cn)>>Pn-l>>>0,r<0&&(c=-c),e-=i),r=gn(r=_r(f=1-((f=(a=(i=vn(i=n+e,0))*Mn)+(o=(n-(i-e))*Wn+i*Rn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Pn>>>0)>>Pn<=0?ge(f,c):An(f,r)}(g,s,l),u*v}var it=Math.ceil;function at(r){return r<0?it(r):C(r)}var ot=.6931471803691238,ut=1.9082149292705877e-10,ft=1.4426950408889634,ct=709.782712893384,st=-745.1332191019411,lt=1/(1<<28),pt=-lt;function vt(r){var e;return W(r)||r===Rr?r:r===P?0:r>ct?Rr:r<st?0:r>pt&&r<lt?1+r:function(r,e,n){var t,i,a,o;return ge(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=at(r<0?ft*r-.5:ft*r+.5))*ot,e*ut,e)}var gt=143.01608;function yt(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=vt(r),n=r>gt?(t=tt(r,.5*r-.25))*(t/n):tt(r,r-.5)/n,on*n*e}var dt=.5772156649015329;function ht(r,e){return e/((1+dt*r)*r)}function wt(r){var e,n,t,i;if(L(r)&&r<0||r===P||W(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===P}(r)?P:Rr;if(r>171.61447887182297)return Rr;if(r<-170.5674972726612)return 0;if((n=M(r))>33)return r>=0?yt(r):(e=0==(1&(t=C(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*function(r){var e;if(e=_r(r),(e&=R)<=en)return e<nn?r:Fr(r,0);if(e>=Z)return NaN;switch(3&rn(r,tn)){case 0:return Fr(tn[0],tn[1]);case 1:return Er(tn[0],tn[1]);case 2:return-Fr(tn[0],tn[1]);default:return-Er(tn[0],tn[1])}}(an*i),e*an/(M(i)*yt(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ht(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ht(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}function bt(r,e,n){return W(r)||W(e)||W(n)||n<=0||r>=1/n?NaN:wt(1-n*r)*vt(e*r)}function mt(r,e){return W(r)||W(e)||e<=0?(n=NaN,function(){return n}):function(n){if(n>=1/e)return NaN;return wt(1-e*n)*vt(r*n)};var n}H(bt,"factory",mt);export{bt as default,mt as factory};
//# sourceMappingURL=mod.js.map
