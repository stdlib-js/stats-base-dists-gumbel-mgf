// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,f=t.__lookupGetter__,i=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),v="get"in a,y="set"in a,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,n,a.get),y&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var v=Math.floor;function y(r){return v(r)===r}var p=Number.NEGATIVE_INFINITY;function b(r){return Math.abs(r)}var w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var s=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var d=w&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return s.call(r);t=r[_],o=_,n=null!=(u=r)&&A.call(u,o);try{r[_]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[_]=t:delete r[_],e}:function(r){return s.call(r)},m="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var h,U="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j=h,g="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var O,S="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var T,G="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,M="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var V,W="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(M&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,x={uint16:V,uint8:P};(k=new x.uint16(1))[0]=4660;var Y=52===new x.uint8(k.buffer)[0],q=!0===Y?1:0,C=new E(1),z=new j(C.buffer);function B(r){return C[0]=r,z[q]}function D(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var J=-.16666666666666632;function K(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(J+u*t):r-(u*(.5*n-e*t)-n-e*J)}var Q,R,X=!0===Y?0:1,Z=new E(1),$=new j(Z.buffer);!0===Y?(Q=1,R=0):(Q=0,R=1);var rr={HIGH:Q,LOW:R},nr=new E(1),tr=new j(nr.buffer),er=rr.HIGH,ur=rr.LOW;function or(r,n){return tr[er]=r,tr[ur]=n,nr[0]}var fr,ir,ar=Number.POSITIVE_INFINITY;function cr(r){return r===ar||r===p}!0===Y?(fr=1,ir=0):(fr=0,ir=1);var lr={HIGH:fr,LOW:ir},vr=new E(1),yr=new j(vr.buffer),pr=lr.HIGH,br=lr.LOW;function wr(r,n){return vr[0]=n,r[0]=yr[pr],r[1]=yr[br],r}function sr(r,n){return 1===arguments.length?wr([0,0],r):wr(r,n)}var Ar=[0,0];function _r(r,n){var t,e;return sr(Ar,r),t=Ar[0],t&=2147483647,e=B(n),or(t|=e&=2147483648,Ar[1])}function dr(r,n,t,e){return l(r)||cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&b(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return dr(r,[0,0],1,0)}),"assign",dr);var mr=[0,0],Nr=[0,0];function hr(r,n){var t,e;return 0===n||0===r||l(r)||cr(r)?r:(dr(r,mr,1,0),n+=mr[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-1023|0}(r=mr[0]),n<-1074?_r(0,r):n>1023?r<0?p:ar:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,sr(Nr,r),t=Nr[0],t&=2148532223,e*or(t|=n+1023<<20,Nr[1])))}function Ur(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var jr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ir=5.960464477539063e-8,Or=Ur(20),Sr=Ur(20),Er=Ur(20),Fr=Ur(20);function Hr(r,n,t,e,u,o,f,i,a){var c,l,y,p,b,w,s,A,_;for(p=o,_=e[t],A=t,b=0;A>0;b++)l=Ir*_|0,Fr[b]=_-16777216*l|0,_=e[A-1]+l,A-=1;if(_=hr(_,u),_-=8*v(.125*_),_-=s=0|_,y=0,u>0?(s+=b=Fr[t-1]>>24-u,Fr[t-1]-=b<<24-u,y=Fr[t-1]>>23-u):0===u?y=Fr[t-1]>>23:_>=.5&&(y=2),y>0){for(s+=1,c=0,b=0;b<t;b++)A=Fr[b],0===c?0!==A&&(c=1,Fr[b]=16777216-A):Fr[b]=16777215-A;if(u>0)switch(u){case 1:Fr[t-1]&=8388607;break;case 2:Fr[t-1]&=4194303}2===y&&(_=1-_,0!==c&&(_-=hr(1,u)))}if(0===_){for(A=0,b=t-1;b>=o;b--)A|=Fr[b];if(0===A){for(w=1;0===Fr[o-w];w++);for(b=t+1;b<=t+w;b++){for(a[i+b]=jr[f+b],l=0,A=0;A<=i;A++)l+=r[A]*a[i+(b-A)];e[b]=l}return Hr(r,n,t+=w,e,u,o,f,i,a)}}if(0===_)for(t-=1,u-=24;0===Fr[t];)t-=1,u-=24;else(_=hr(_,-u))>=16777216?(l=Ir*_|0,Fr[t]=_-16777216*l|0,u+=24,Fr[t+=1]=l):Fr[t]=0|_;for(l=hr(1,u),b=t;b>=0;b--)e[b]=l*Fr[b],l*=Ir;for(b=t;b>=0;b--){for(l=0,w=0;w<=p&&w<=t-b;w++)l+=gr[w]*e[b+w];Er[t-b]=l}for(l=0,b=t;b>=0;b--)l+=Er[b];for(n[0]=0===y?l:-l,l=Er[0]-l,b=1;b<=t;b++)l+=Er[b];return n[1]=0===y?l:-l,7&s}function Tr(r,n,t,e){var u,o,f,i,a,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),l=f+4,a=0;a<=l;a++)Or[a]=c<0?0:jr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Or[f+(a-c)];Sr[a]=u}return 4,Hr(r,n,4,Sr,i,4,o,f,Or)}var Gr=Math.round;function Pr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(B(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(B(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Mr=1.5707963267341256,Lr=6077100506506192e-26,Vr=2*Lr,Wr=4*Lr,kr=[0,0,0],xr=[0,0];function Yr(r,n){var t,e,u,o,f,i,a;if((u=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Pr(r,u,n):u<=1073928572?r>0?(a=r-Mr,n[0]=a-Lr,n[1]=a-n[0]-Lr,1):(a=r+Mr,n[0]=a+Lr,n[1]=a-n[0]+Lr,-1):r>0?(a=r-2*Mr,n[0]=a-Vr,n[1]=a-n[0]-Vr,2):(a=r+2*Mr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Pr(r,u,n):r>0?(a=r-3*Mr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Mr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Pr(r,u,n):r>0?(a=r-4*Mr,n[0]=a-Wr,n[1]=a-n[0]-Wr,4):(a=r+4*Mr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-4);if(u<1094263291)return Pr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Z[0]=r,$[X]}(r),a=or(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)kr[f]=0|a,a=16777216*(a-kr[f]);for(kr[2]=a,o=3;0===kr[o-1];)o-=1;return i=Tr(kr,xr,e,o),r<0?(n[0]=-xr[0],n[1]=-xr[1],-i):(n[0]=xr[0],n[1]=xr[1],i)}var qr=[0,0];var Cr=3.141592653589793;function zr(r){return y(r/2)}function Br(r){return zr(r>0?r-1:r+1)}var Dr=Math.sqrt,Jr=!0===Y?0:1,Kr=new E(1),Qr=new j(Kr.buffer);function Rr(r,n){return Kr[0]=r,Qr[Jr]=n>>>0,Kr[0]}function Xr(r){return 0|r}var Zr=!0===Y?1:0,$r=new E(1),rn=new j($r.buffer);function nn(r,n){return $r[0]=r,rn[Zr]=n>>>0,$r[0]}var tn=[1,1.5],en=[0,.5849624872207642],un=[0,1.350039202129749e-8];var on=1e300,fn=1e-300,an=[0,0],cn=[0,0];function ln(r,n){var t,e,u,o,f,i,a,c,v,w,s,A,_,d;if(l(r)||l(n))return NaN;if(sr(an,n),f=an[0],0===an[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Dr(r);if(-.5===n)return 1/Dr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(cr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:b(r)<1==(n===ar)?0:ar}(r,n)}if(sr(an,r),o=an[0],0===an[1]){if(0===o)return function(r,n){return n===p?ar:n===ar?0:n>0?Br(n)?r:0:Br(n)?_r(ar,r):ar}(r,n);if(1===r)return 1;if(-1===r&&Br(n))return-1;if(cr(r))return r===p?ln(-0,-n):n<0?0:ar}if(r<0&&!1===y(n))return(r-r)/(r-r);if(u=b(r),t=2147483647&o|0,e=2147483647&f|0,a=f>>>31|0,i=(i=o>>>31|0)&&Br(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&B(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?i*on*on:i*fn*fn;if(t>1072693248)return 0===a?i*on*on:i*fn*fn;s=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=Rr(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(cn,u)}else s=function(r,n,t){var e,u,o,f,i,a,c,l,v,y,p,b,w,s,A,_,d,m,N,h,U;return m=0,t<1048576&&(m-=53,t=B(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?h=0:N<767610?h=1:(h=0,m+=1,t-=1048576),f=Rr(u=(_=(n=nn(n,t))-(c=tn[h]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=nn(0,e+=h<<18),A=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Rr(a=3+(o=f*f)+(A+=(i=d*(_-f*a-f*(n-(a-c))))*(f+u)),0),w=(p=-7.028461650952758e-9*(v=Rr(v=(_=f*a)+(d=i*a+(A-(a-3-o))*u),0))+.9617966939259756*(d-(v-_))+un[h])-((b=Rr(b=(y=.9617967009544373*v)+p+(l=en[h])+(s=m),0))-s-l-y),r[0]=b,r[1]=w,r}(cn,u,t);if(w=(n-(c=Rr(n,0)))*s[0]+n*s[1],v=c*s[0],sr(an,A=w+v),_=Xr(an[0]),d=Xr(an[1]),_>=1083179008){if(0!=(_-1083179008|d))return i*on*on;if(w+8008566259537294e-32>A-v)return i*on*on}else if((2147483647&_)>=1083231232){if(0!=(_-3230714880|d))return i*fn*fn;if(w<=A-v)return i*fn*fn}return A=function(r,n,t){var e,u,o,f,i,a,c,l,v,y,p;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=nn(0,e)),r=Xr(r=B(c=1-((c=(f=.6931471824645996*(o=Rr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(u=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=i-(c-f))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?hr(c,l):nn(c,r)}(_,v,w),i*A}var vn=Math.ceil;function yn(r){return r<0?vn(r):v(r)}function pn(r){var n;return l(r)||r===ar?r:r===p?0:r>709.782712893384?ar:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,o,f;return hr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=yn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function bn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=pn(r),2.5066282746310007*(t=r>143.01608?(e=ln(r,.5*r-.25))*(e/t):ln(r,r-.5)/t)*n}function wn(r,n){return n/((1+.5772156649015329*r)*r)}function sn(r){var n,t,e,u;if(y(r)&&r<0||r===p||l(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===p}(r)?p:ar;if(r>171.61447887182297)return ar;if(r<-170.5674972726612)return 0;if((t=b(r))>33)return r>=0?bn(r):(n=0==(1&(e=v(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*function(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:K(r,0);if(n>=2146435072)return NaN;switch(3&Yr(r,qr)){case 0:return K(qr[0],qr[1]);case 1:return D(qr[0],qr[1]);case 2:return-K(qr[0],qr[1]);default:return-D(qr[0],qr[1])}}(Cr*u),n*Cr/(b(u)*bn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return wn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return wn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function An(r,n,t){return l(r)||l(n)||l(t)||t<=0||r>=1/t?NaN:sn(1-t*r)*pn(n*r)}function _n(r,n){return l(r)||l(n)||n<=0?(t=NaN,function(){return t}):function(t){if(t>=1/n)return NaN;return sn(1-n*t)*pn(r*t)};var t}c(An,"factory",_n);export{An as default,_n as factory};
//# sourceMappingURL=mod.js.map
