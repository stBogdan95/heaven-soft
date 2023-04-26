(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.dI(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.dJ(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bs(b)
return new t(c,this)}:function(){if(t===null)t=A.bs(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bs(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={bh:function bh(){},aO:function aO(a){this.a=a},a9:function a9(){},
ce(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ee(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
h(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ay(a)
return t},
am(a){var t,s=$.bK
if(s==null)s=$.bK=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
aT(a){return A.cz(a)},
cz(a){var t,s,r,q
if(a instanceof A.i)return A.k(A.aw(a),null)
t=J.I(a)
if(t===B.n||t===B.q||u.o.b(a)){s=B.c(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.k(A.aw(a),null)},
bt(a,b){var t,s="index"
if(!A.c3(b))return new A.A(!0,b,s,null)
t=J.bz(a)
if(b<0||b>=t)return A.ct(b,t,a,s)
return new A.an(null,null,!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.aS()
t=new Error()
t.dartException=a
s=A.dK
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
dK(){return J.ay(this.dartException)},
bw(a){throw A.d(a)},
dH(a){throw A.d(A.K(a))},
dG(a){if(a==null||typeof a!="object")return J.ax(a)
else return A.am(a)},
dq(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=a.length
for(t=0;t<i;){s=t+1
r=a[t]
t=s+1
q=a[s]
if(typeof r=="string"){p=b.b
if(p==null){o=Object.create(null)
o["<non-identifier-key>"]=o
delete o["<non-identifier-key>"]
b.b=o
p=o}n=p[r]
if(n==null)p[r]=b.u(r,q)
else n.b=q}else if(typeof r=="number"&&(r&0x3fffffff)===r){m=b.c
if(m==null){o=Object.create(null)
o["<non-identifier-key>"]=o
delete o["<non-identifier-key>"]
b.c=o
m=o}n=m[r]
if(n==null)m[r]=b.u(r,q)
else n.b=q}else{l=b.d
if(l==null){o=Object.create(null)
o["<non-identifier-key>"]=o
delete o["<non-identifier-key>"]
b.d=o
l=o}k=J.ax(r)&0x3fffffff
j=l[k]
if(j==null)l[k]=[b.u(r,q)]
else{s=b.S(j,r)
if(s>=0)j[s].b=q
else j.push(b.u(r,q))}}}return b},
dA(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.b_("Unsupported number of arguments for wrapped closure"))},
dm(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.dA)
a.$identity=t
return t},
cr(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aV().constructor.prototype):Object.create(new A.J(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bF(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cn(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bF(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cn(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cl)}throw A.d("Error in functionType of tearoff")},
co(a,b,c,d){var t=A.bE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bF(a,b,c,d){var t,s
if(c)return A.cq(a,b,d)
t=b.length
s=A.co(t,d,a,b)
return s},
cp(a,b,c,d){var t=A.bE,s=A.cm
switch(b?-1:a){case 0:throw A.d(new A.aU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
cq(a,b,c){var t,s
if($.bC==null)$.bC=A.bB("interceptor")
if($.bD==null)$.bD=A.bB("receiver")
t=b.length
s=A.cp(t,c,a,b)
return s},
bs(a){return A.cr(a)},
cl(a,b){return A.b2(v.typeUniverse,A.aw(a.a),b)},
bE(a){return a.a},
cm(a){return a.b},
bB(a){var t,s,r,q=new A.J("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.d(A.cj("Field name "+a+" not found."))},
dI(a){throw A.d(new A.aD(a))},
du(a){return v.getIsolateTag(a)},
dn(a){var t,s=[]
if(a==null)return s
if(Array.isArray(a)){for(t=0;t<a.length;++t)s.push(String(a[t]))
return s}s.push(String(a))
return s},
dC(a){var t,s,r,q,p,o=$.c9.$1(a),n=$.b6[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bb[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.c5.$2(a,o)
if(r!=null){n=$.b6[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bb[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.be(t)
$.b6[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bb[o]=t
return t}if(q==="-"){p=A.be(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.cb(a,t)
if(q==="*")throw A.d(A.bQ(o))
if(v.leafTags[o]===true){p=A.be(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.cb(a,t)},
cb(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bv(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
be(a){return J.bv(a,!1,null,!!a.$ibi)},
dE(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.be(t)
else return J.bv(t,c,null,null)},
dx(){if(!0===$.bu)return
$.bu=!0
A.dy()},
dy(){var t,s,r,q,p,o,n,m
$.b6=Object.create(null)
$.bb=Object.create(null)
A.dw()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.cc.$1(p)
if(o!=null){n=A.dE(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dw(){var t,s,r,q,p,o,n=B.h()
n=A.H(B.i,A.H(B.j,A.H(B.d,A.H(B.d,A.H(B.k,A.H(B.l,A.H(B.m(B.c),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.c9=new A.b8(q)
$.c5=new A.b9(p)
$.cc=new A.ba(o)},
H(a,b){return a(b)||b},
cx(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw A.d(new A.aI("Illegal RegExp pattern ("+String(o)+")",a))},
B:function B(){},
aA:function aA(){},
aW:function aW(){},
aV:function aV(){},
J:function J(a,b){this.a=a
this.b=b},
aU:function aU(a){this.a=a},
M:function M(){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0},
aP:function aP(a,b){this.a=a
this.b=b
this.c=null},
ai:function ai(a){this.a=a},
aj:function aj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b8:function b8(a){this.a=a},
b9:function b9(a){this.a=a},
ba:function ba(a){this.a=a},
aN:function aN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bN(a,b){var t=b.c
return t==null?b.c=A.bn(a,b.y,!0):t},
bM(a,b){var t=b.c
return t==null?b.c=A.Z(a,"bG",[b.y]):t},
bO(a){var t=a.x
if(t===6||t===7||t===8)return A.bO(a.y)
return t===12||t===13},
cC(a){return a.at},
dr(a){return A.bo(v.typeUniverse,a,!1)},
u(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.u(a,t,c,a0)
if(s===t)return b
return A.bX(a,s,!0)
case 7:t=b.y
s=A.u(a,t,c,a0)
if(s===t)return b
return A.bn(a,s,!0)
case 8:t=b.y
s=A.u(a,t,c,a0)
if(s===t)return b
return A.bW(a,s,!0)
case 9:r=b.z
q=A.a1(a,r,c,a0)
if(q===r)return b
return A.Z(a,b.y,q)
case 10:p=b.y
o=A.u(a,p,c,a0)
n=b.z
m=A.a1(a,n,c,a0)
if(o===p&&m===n)return b
return A.bl(a,o,m)
case 12:l=b.y
k=A.u(a,l,c,a0)
j=b.z
i=A.dh(a,j,c,a0)
if(k===l&&i===j)return b
return A.bV(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.a1(a,h,c,a0)
p=b.y
o=A.u(a,p,c,a0)
if(g===h&&o===p)return b
return A.bm(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.a6("Attempted to substitute unexpected RTI kind "+d))}},
a1(a,b,c,d){var t,s,r,q,p=b.length,o=A.b3(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.u(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
di(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.b3(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.u(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
dh(a,b,c,d){var t,s=b.a,r=A.a1(a,s,c,d),q=b.b,p=A.a1(a,q,c,d),o=b.c,n=A.di(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.ar()
t.a=r
t.b=p
t.c=n
return t},
dl(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.dv(s)
t=a.$S()
return t}return null},
ca(a,b){var t
if(A.bO(b))if(a instanceof A.B){t=A.dl(a)
if(t!=null)return t}return A.aw(a)},
aw(a){var t
if(a instanceof A.i){t=a.$ti
return t!=null?t:A.bp(a)}if(Array.isArray(a))return A.cY(a)
return A.bp(J.I(a))},
cY(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
G(a){var t=a.$ti
return t!=null?t:A.bp(a)},
bp(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.d6(a,t)},
d6(a,b){var t=a instanceof A.B?a.__proto__.__proto__.constructor:b,s=A.cW(v.typeUniverse,t.name)
b.$ccache=s
return s},
dv(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bo(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
d5(a){var t,s,r,q,p=this
if(p===u.K)return A.F(p,a,A.da)
if(!A.r(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.F(p,a,A.de)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.c3
else if(s===u.i||s===u.H)r=A.d9
else if(s===u.N)r=A.dc
else r=s===u.y?A.bq:null
if(r!=null)return A.F(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.dB)){p.r="$i"+q
if(q==="C")return A.F(p,a,A.d8)
return A.F(p,a,A.dd)}}else if(t===7)return A.F(p,a,A.d3)
return A.F(p,a,A.d1)},
F(a,b,c){a.b=c
return a.b(b)},
d4(a){var t,s=this,r=A.d0
if(!A.r(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.d_
else if(s===u.K)r=A.cZ
else{t=A.a2(s)
if(t)r=A.d2}s.a=r
return s.a(a)},
av(a){var t,s=a.x
if(!A.r(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.av(a.y)))t=s===8&&A.av(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
d1(a){var t=this
if(a==null)return A.av(t)
return A.f(v.typeUniverse,A.ca(a,t),null,t,null)},
d3(a){if(a==null)return!0
return this.y.b(a)},
dd(a){var t,s=this
if(a==null)return A.av(s)
t=s.r
if(a instanceof A.i)return!!a[t]
return!!J.I(a)[t]},
d8(a){var t,s=this
if(a==null)return A.av(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.i)return!!a[t]
return!!J.I(a)[t]},
d0(a){var t,s=this
if(a==null){t=A.a2(s)
if(t)return a}else if(s.b(a))return a
A.c0(a,s)},
d2(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.c0(a,t)},
c0(a,b){throw A.d(A.cL(A.bR(a,A.ca(a,b),A.k(b,null))))},
bR(a,b,c){var t=A.aH(a)
return t+": type '"+A.k(b==null?A.aw(a):b,null)+"' is not a subtype of type '"+c+"'"},
cL(a){return new A.as("TypeError: "+a)},
j(a,b){return new A.as("TypeError: "+A.bR(a,null,b))},
da(a){return a!=null},
cZ(a){if(a!=null)return a
throw A.d(A.j(a,"Object"))},
de(a){return!0},
d_(a){return a},
bq(a){return!0===a||!1===a},
e_(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.j(a,"bool"))},
e1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.j(a,"bool"))},
e0(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.j(a,"bool?"))},
e2(a){if(typeof a=="number")return a
throw A.d(A.j(a,"double"))},
e4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"double"))},
e3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"double?"))},
c3(a){return typeof a=="number"&&Math.floor(a)===a},
e5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.j(a,"int"))},
e7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.j(a,"int"))},
e6(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.j(a,"int?"))},
d9(a){return typeof a=="number"},
e8(a){if(typeof a=="number")return a
throw A.d(A.j(a,"num"))},
ea(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"num"))},
e9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.j(a,"num?"))},
dc(a){return typeof a=="string"},
eb(a){if(typeof a=="string")return a
throw A.d(A.j(a,"String"))},
ed(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.j(a,"String"))},
ec(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.j(a,"String?"))},
c4(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.k(a[r],b)
return t},
dg(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.c4(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.k(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
c1(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", "
if(a4!=null){t=a4.length
if(a3==null){a3=[]
s=null}else s=a3.length
r=a3.length
for(q=t;q>0;--q)a3.push("T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a1){n=B.a.U(n+m,a3[a3.length-1-q])
l=a4[q]
k=l.x
if(!(k===2||k===3||k===4||k===5||l===p))if(!(l===o))j=!1
else j=!0
else j=!0
if(!j)n+=" extends "+A.k(l,a3)}n+=">"}else{n=""
s=null}p=a2.y
i=a2.z
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.k(p,a3)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.k(h[q],a3)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.k(f[q],a3)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.k(d[q+2],a3)+" "+d[q]}a+="}"}if(s!=null){a3.toString
a3.length=s}return n+"("+a+") => "+b},
k(a,b){var t,s,r,q,p,o,n=a.x
if(n===5)return"erased"
if(n===2)return"dynamic"
if(n===3)return"void"
if(n===1)return"Never"
if(n===4)return"any"
if(n===6){t=A.k(a.y,b)
return t}if(n===7){s=a.y
t=A.k(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(n===8)return"FutureOr<"+A.k(a.y,b)+">"
if(n===9){q=A.dj(a.y)
p=a.z
return p.length>0?q+("<"+A.c4(p,b)+">"):q}if(n===11)return A.dg(a,b)
if(n===12)return A.c1(a,b,null)
if(n===13)return A.c1(a.y,b,a.z)
if(n===14){o=a.y
return b[b.length-1-o]}return"?"},
dj(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cX(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cW(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bo(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a_(a,5,"#")
r=A.b3(t)
for(q=0;q<t;++q)r[q]=s
p=A.Z(a,b,r)
o[b]=p
return p}else return n},
cU(a,b){return A.bY(a.tR,b)},
cT(a,b){return A.bY(a.eT,b)},
bo(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bU(A.bS(a,null,b,c))
s.set(b,t)
return t},
b2(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bU(A.bS(a,b,c,!0))
r.set(c,s)
return s},
cV(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.bl(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
q(a,b){b.a=A.d4
b.b=A.d5
return b},
a_(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.l(null,null)
t.x=b
t.at=c
s=A.q(a,t)
a.eC.set(c,s)
return s},
bX(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cQ(a,b,s,c)
a.eC.set(s,t)
return t},
cQ(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.r(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.l(null,null)
r.x=6
r.y=b
r.at=c
return A.q(a,r)},
bn(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cP(a,b,s,c)
a.eC.set(s,t)
return t},
cP(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.r(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.a2(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.a2(r.y))return r
else return A.bN(a,b)}}q=new A.l(null,null)
q.x=7
q.y=b
q.at=c
return A.q(a,q)},
bW(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cN(a,b,s,c)
a.eC.set(s,t)
return t},
cN(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.r(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.Z(a,"bG",[b])
else if(b===u.P||b===u.T)return u.O}r=new A.l(null,null)
r.x=8
r.y=b
r.at=c
return A.q(a,r)},
cR(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.l(null,null)
t.x=14
t.y=b
t.at=r
s=A.q(a,t)
a.eC.set(r,s)
return s},
Y(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
cM(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
Z(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.Y(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.l(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.q(a,s)
a.eC.set(q,r)
return r},
bl(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.Y(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.l(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.q(a,p)
a.eC.set(r,o)
return o},
cS(a,b,c){var t,s,r="+"+(b+"("+A.Y(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.l(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.q(a,t)
a.eC.set(r,s)
return s},
bV(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.Y(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.Y(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cM(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.l(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.q(a,q)
a.eC.set(s,p)
return p},
bm(a,b,c,d){var t,s=b.at+("<"+A.Y(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cO(a,b,c,s,d)
a.eC.set(s,t)
return t},
cO(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.b3(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.u(a,b,s,0)
n=A.a1(a,c,s,0)
return A.bm(a,o,n,c!==n)}}m=new A.l(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.q(a,m)},
bS(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bU(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.cH(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bT(a,s,k,j,!1)
else if(r===46)s=A.bT(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.t(a.u,a.e,j.pop()))
break
case 94:j.push(A.cR(a.u,j.pop()))
break
case 35:j.push(A.a_(a.u,5,"#"))
break
case 64:j.push(A.a_(a.u,2,"@"))
break
case 126:j.push(A.a_(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.bk(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.Z(q,o,p))
else{n=A.t(q,a.e,o)
switch(n.x){case 12:j.push(A.bm(q,n,p,a.n))
break
default:j.push(A.bl(q,n,p))
break}}break
case 38:A.cI(a,j)
break
case 42:q=a.u
j.push(A.bX(q,A.t(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.bn(q,A.t(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.bW(q,A.t(q,a.e,j.pop()),a.n))
break
case 40:j.push(-3)
j.push(a.p)
a.p=j.length
break
case 41:A.cG(a,j)
break
case 91:j.push(a.p)
a.p=j.length
break
case 93:p=j.splice(a.p)
A.bk(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-1)
break
case 123:j.push(a.p)
a.p=j.length
break
case 125:p=j.splice(a.p)
A.cK(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-2)
break
case 43:m=k.indexOf("(",s)
j.push(k.substring(s,m))
j.push(-4)
j.push(a.p)
a.p=j.length
s=m+1
break
default:throw"Bad character "+r}}}l=j.pop()
return A.t(a.u,a.e,l)},
cH(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bT(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.cX(t,p.y)[q]
if(o==null)A.bw('No "'+q+'" in "'+A.cC(p)+'"')
d.push(A.b2(t,p,o))}else d.push(q)
return n},
cG(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.cF(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.t(n,a.e,m)
p=new A.ar()
p.a=r
p.b=t
p.c=s
b.push(A.bV(n,q,p))
return
case-4:b.push(A.cS(n,b.pop(),r))
return
default:throw A.d(A.a6("Unexpected state under `()`: "+A.h(m)))}},
cI(a,b){var t=b.pop()
if(0===t){b.push(A.a_(a.u,1,"0&"))
return}if(1===t){b.push(A.a_(a.u,4,"1&"))
return}throw A.d(A.a6("Unexpected extended operation "+A.h(t)))},
cF(a,b){var t=b.splice(a.p)
A.bk(a.u,a.e,t)
a.p=b.pop()
return t},
t(a,b,c){if(typeof c=="string")return A.Z(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cJ(a,b,c)}else return c},
bk(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.t(a,b,c[t])},
cK(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.t(a,b,c[t])},
cJ(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.a6("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.a6("Bad index "+c+" for "+b.h(0)))},
f(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.r(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.r(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.f(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.f(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.f(a,b.y,c,d,e)
if(s===6)return A.f(a,b.y,c,d,e)
return s!==7}if(s===6)return A.f(a,b.y,c,d,e)
if(q===6){t=A.bN(a,d)
return A.f(a,b,c,t,e)}if(s===8){if(!A.f(a,b.y,c,d,e))return!1
return A.f(a,A.bM(a,b),c,d,e)}if(s===7){t=A.f(a,u.P,c,d,e)
return t&&A.f(a,b.y,c,d,e)}if(q===8){if(A.f(a,b,c,d.y,e))return!0
return A.f(a,b,c,A.bM(a,d),e)}if(q===7){t=A.f(a,b,c,u.P,e)
return t||A.f(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
p=b.z
o=d.z
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!A.f(a,l,c,k,e)||!A.f(a,k,e,l,c))return!1}return A.c2(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.c2(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.d7(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.db(a,b,c,d,e)
return!1},
c2(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.f(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.f(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.f(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.f(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.f(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
d7(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.b2(a,b,s[p])
return A.bZ(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.bZ(a,o,null,c,n,e)},
bZ(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.f(a,s,d,r,f))return!1}return!0},
db(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.f(a,s[t],c,r[t],e))return!1
return!0},
a2(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.r(a))if(s!==7)if(!(s===6&&A.a2(a.y)))t=s===8&&A.a2(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
dB(a){var t
if(!A.r(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
r(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
bY(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
b3(a){return a>0?new Array(a):v.typeUniverse.sEA},
l:function l(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
ar:function ar(){this.c=this.b=this.a=null},
aZ:function aZ(){},
as:function as(a){this.a=a},
cy(a){return A.dq(a,new A.M())},
bI(a){return new A.T(a.L("T<0>"))},
bj(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
cE(a,b){var t=new A.U(a,b)
t.c=a.e
return t},
cu(a,b,c){var t,s
if(A.br(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.z.push(a)
try{A.df(a,t)}finally{$.z.pop()}s=A.bP(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
bg(a,b,c){var t,s
if(A.br(a))return b+"..."+c
t=new A.ap(b)
$.z.push(a)
try{s=t
s.a=A.bP(s.a,a,", ")}finally{$.z.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
br(a){var t,s
for(t=$.z.length,s=0;s<t;++s)if(a===$.z[s])return!0
return!1},
df(a,b){var t,s,r,q,p,o,n,m=a.gm(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.j())return
t=A.h(m.gk())
b.push(t)
l+=t.length+2;++k}if(!m.j()){if(k<=5)return
s=b.pop()
r=b.pop()}else{q=m.gk();++k
if(!m.j()){if(k<=4){b.push(A.h(q))
return}s=A.h(q)
r=b.pop()
l+=s.length+2}else{p=m.gk();++k
for(;m.j();q=p,p=o){o=m.gk();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
l-=b.pop().length+2;--k}b.push("...")
return}}r=A.h(q)
s=A.h(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
bJ(a){var t,s={}
if(A.br(a))return"{...}"
t=new A.ap("")
try{$.z.push(a)
t.a+="{"
s.a=!0
a.p(0,new A.aR(s,t))
t.a+="}"}finally{$.z.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
T:function T(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
b1:function b1(a){this.a=a
this.c=this.b=null},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ak:function ak(){},
N:function N(){},
aR:function aR(a,b){this.a=a
this.b=b},
y:function y(){},
Q:function Q(){},
P:function P(){},
W:function W(){},
X:function X(){},
a0:function a0(){},
cs(a){if(a instanceof A.B)return a.h(0)
return"Instance of '"+A.aT(a)+"'"},
cB(a){return new A.aN(a,A.cx(a,!1,!0,!1,!1,!1))},
bP(a,b,c){var t=J.by(b)
if(!t.j())return a
if(c.length===0){do a+=A.h(t.gk())
while(t.j())}else{a+=A.h(t.gk())
for(;t.j();)a=a+c+A.h(t.gk())}return a},
aH(a){if(typeof a=="number"||A.bq(a)||a==null)return J.ay(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cs(a)},
a6(a){return new A.az(a)},
cj(a){return new A.A(!1,null,null,a)},
ck(a,b,c){return new A.A(!0,a,b,c)},
bL(a,b,c,d,e){return new A.an(b,c,!0,a,d,"Invalid value")},
cA(a,b,c){if(0>a||a>c)throw A.d(A.bL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.bL(b,a,c,"end",null))
return b}return c},
ct(a,b,c,d){return new A.aJ(b,!0,a,d,"Index out of range")},
cD(a){return new A.aY(a)},
bQ(a){return new A.aX(a)},
K(a){return new A.aB(a)},
aG:function aG(){},
az:function az(a){this.a=a},
aS:function aS(){},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aJ:function aJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aY:function aY(a){this.a=a},
aX:function aX(a){this.a=a},
aB:function aB(a){this.a=a},
aD:function aD(a){this.a=a},
b_:function b_(a){this.a=a},
aI:function aI(a,b){this.a=a
this.b=b},
ae:function ae(){},
O:function O(){},
i:function i(){},
ap:function ap(a){this.a=a},
b:function b(){},
a3:function a3(){},
a4:function a4(){},
m:function m(){},
aE:function aE(){},
aF:function aF(){},
v:function v(){},
a:function a(){},
aa:function aa(){},
ac:function ac(){},
e:function e(){},
ao:function ao(){},
S:function S(){},
V:function V(){},
aq:function aq(a){this.a=a},
ad:function ad(){},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
at:function at(){},
au:function au(){},
c_(a){var t
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.bq(a))return a
if(u.f.b(a))return A.c6(a)
if(u.j.b(a)){t=[]
J.ci(a,new A.b4(t))
a=t}return a},
c6(a){var t={}
a.p(0,new A.b5(t))
return t},
b4:function b4(a){this.a=a},
b5:function b5(a){this.a=a},
a8:function a8(){},
aC:function aC(a){this.a=a},
a7:function a7(a){this.a=a},
c:function c(){},
dD(a){B.f.D(window,"scroll",new A.bd())
A.cd("whatWeDo")
A.cd("implementedProjects")},
cd(a){var t=document.querySelector("#"+a)
if(t!=null)J.ch(t,"click",new A.bf(a))},
bd:function bd(){},
bc:function bc(){},
bf:function bf(a){this.a=a},
dJ(a){return A.bw(new A.aO("Field '"+a+"' has been assigned during initialization."))}},J={
bv(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b7(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bu==null){A.dx()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.bQ("Return interceptor for "+A.h(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.b0
if(p==null)p=$.b0=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dC(a)
if(q!=null)return q
if(typeof a=="function")return B.p
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.b0
if(p==null)p=$.b0=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.b,enumerable:false,writable:true,configurable:true})
return B.b}return B.b},
bH(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
cv(a,b){var t,s
for(t=a.length;b<t;){s=B.a.J(a,b)
if(s!==32&&s!==13&&!J.bH(s))break;++b}return b},
cw(a,b){var t,s
for(;b>0;b=t){t=b-1
s=B.a.R(a,t)
if(s!==32&&s!==13&&!J.bH(s))break}return b},
I(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aL.prototype
return J.aM.prototype}if(typeof a=="string")return J.w.prototype
if(a==null)return J.af.prototype
if(typeof a=="boolean")return J.aK.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.p.prototype
return a}if(a instanceof A.i)return a
return J.b7(a)},
ds(a){if(typeof a=="string")return J.w.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.p.prototype
return a}if(a instanceof A.i)return a
return J.b7(a)},
c7(a){if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.p.prototype
return a}if(a instanceof A.i)return a
return J.b7(a)},
dt(a){if(typeof a=="string")return J.w.prototype
if(a==null)return a
if(!(a instanceof A.i))return J.E.prototype
return a},
c8(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.p.prototype
return a}if(a instanceof A.i)return a
return J.b7(a)},
bx(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).t(a,b)},
ch(a,b,c){return J.c8(a).D(a,b,c)},
ci(a,b){return J.c7(a).p(a,b)},
ax(a){return J.I(a).gl(a)},
by(a){return J.c7(a).gm(a)},
bz(a){return J.ds(a).gi(a)},
ay(a){return J.I(a).h(a)},
bA(a){return J.dt(a).a5(a)},
L:function L(){},
aK:function aK(){},
af:function af(){},
n:function n(){},
x:function x(){},
al:function al(){},
E:function E(){},
p:function p(){},
o:function o(){},
ah:function ah(){},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ag:function ag(){},
aL:function aL(){},
aM:function aM(){},
w:function w(){}},B={}
var w=[A,J,B]
var $={}
A.bh.prototype={}
J.L.prototype={
t(a,b){return a===b},
gl(a){return A.am(a)},
h(a){return"Instance of '"+A.aT(a)+"'"}}
J.aK.prototype={
h(a){return String(a)},
gl(a){return a?519018:218159}}
J.af.prototype={
t(a,b){return null==b},
h(a){return"null"},
gl(a){return 0}}
J.n.prototype={}
J.x.prototype={
gl(a){return 0},
h(a){return String(a)}}
J.al.prototype={}
J.E.prototype={}
J.p.prototype={
h(a){var t=a[$.cg()]
if(t==null)return this.Z(a)
return"JavaScript function for "+J.ay(t)}}
J.o.prototype={
p(a,b){var t,s=a.length
for(t=0;t<s;++t){b.$1(a[t])
if(a.length!==s)throw A.d(A.K(a))}},
h(a){return A.bg(a,"[","]")},
gm(a){return new J.a5(a,a.length)},
gl(a){return A.am(a)},
gi(a){return a.length},
$iC:1}
J.ah.prototype={}
J.a5.prototype={
gk(){var t=this.d
return t==null?A.G(this).c.a(t):t},
j(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.dH(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.ag.prototype={
a4(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.cD(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911}}
J.aL.prototype={}
J.aM.prototype={}
J.w.prototype={
R(a,b){if(b<0)throw A.d(A.bt(a,b))
if(b>=a.length)A.bw(A.bt(a,b))
return a.charCodeAt(b)},
J(a,b){if(b>=a.length)throw A.d(A.bt(a,b))
return a.charCodeAt(b)},
U(a,b){return a+b},
X(a,b,c){return a.substring(b,A.cA(b,c,a.length))},
a5(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.J(q,0)===133){t=J.cv(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.R(q,s)===133?J.cw(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
h(a){return a},
gl(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gi(a){return a.length},
$iR:1}
A.aO.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.a9.prototype={}
A.B.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.ce(s==null?"unknown":s)+"'"},
ga6(){return this},
$C:"$1",
$R:1,
$D:null}
A.aA.prototype={$C:"$2",$R:2}
A.aW.prototype={}
A.aV.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.ce(t)+"'"}}
A.J.prototype={
t(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.J))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.dG(this.a)^A.am(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aT(this.a)+"'")}}
A.aU.prototype={
h(a){return"RuntimeError: "+this.a}}
A.M.prototype={
gi(a){return this.a},
gT(){return new A.ai(this)},
V(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.a3(b)},
a3(a){var t,s,r=this.d
if(r==null)return null
t=r[J.ax(a)&0x3fffffff]
s=this.S(t,a)
if(s<0)return null
return t[s].b},
p(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw A.d(A.K(t))
s=s.c}},
u(a,b){var t=this,s=new A.aP(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&1073741823
return s},
S(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bx(a[s].a,b))return s
return-1},
h(a){return A.bJ(this)}}
A.aP.prototype={}
A.ai.prototype={
gi(a){return this.a.a},
gm(a){var t=this.a,s=new A.aj(t,t.r)
s.c=t.e
return s}}
A.aj.prototype={
gk(){return this.d},
j(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.d(A.K(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
A.b8.prototype={
$1(a){return this.a(a)}}
A.b9.prototype={
$2(a,b){return this.a(a,b)}}
A.ba.prototype={
$1(a){return this.a(a)}}
A.aN.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags}}
A.l.prototype={
L(a){return A.b2(v.typeUniverse,this,a)},
a7(a){return A.cV(v.typeUniverse,this,a)}}
A.ar.prototype={}
A.aZ.prototype={
h(a){return this.a}}
A.as.prototype={}
A.T.prototype={
gm(a){var t=new A.U(this,this.r)
t.c=this.e
return t},
gi(a){return this.a},
n(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.I(t==null?r.b=A.bj():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.I(s==null?r.c=A.bj():s,b)}else return r.a_(b)},
a_(a){var t,s,r=this,q=r.d
if(q==null)q=r.d=A.bj()
t=r.K(a)
s=q[t]
if(s==null)q[t]=[r.C(a)]
else{if(r.M(s,a)>=0)return!1
s.push(r.C(a))}return!0},
v(a,b){var t
if(b!=="__proto__")return this.a2(this.b,b)
else{t=this.a1(b)
return t}},
a1(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.K(a)
s=o[t]
r=p.M(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.O(q)
return!0},
I(a,b){if(a[b]!=null)return!1
a[b]=this.C(b)
return!0},
a2(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.O(t)
delete a[b]
return!0},
N(){this.r=this.r+1&1073741823},
C(a){var t,s=this,r=new A.b1(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.N()
return r},
O(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.N()},
K(a){return J.ax(a)&1073741823},
M(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bx(a[s].a,b))return s
return-1}}
A.b1.prototype={}
A.U.prototype={
gk(){var t=this.d
return t==null?A.G(this).c.a(t):t},
j(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.K(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
A.ak.prototype={
p(a,b){var t,s=a.length
for(t=0;t<s;++t){b.$1(a[t])
if(s!==a.length)throw A.d(A.K(a))}},
h(a){return A.bg(a,"[","]")}}
A.N.prototype={}
A.aR.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.h(a)
s.a=t+": "
s.a+=A.h(b)}}
A.y.prototype={
p(a,b){var t,s,r,q
for(t=J.by(this.gT()),s=A.G(this).L("y.V");t.j();){r=t.gk()
q=this.V(0,r)
b.$2(r,q==null?s.a(q):q)}},
gi(a){return J.bz(this.gT())},
h(a){return A.bJ(this)},
$iaQ:1}
A.Q.prototype={
h(a){return A.bg(this,"{","}")},
G(a,b){var t,s,r,q=this.gm(this)
if(!q.j())return""
if(b===""){t=A.G(q).c
s=""
do{r=q.d
s+=A.h(r==null?t.a(r):r)}while(q.j())
t=s}else{t=q.d
t=""+A.h(t==null?A.G(q).c.a(t):t)
for(s=A.G(q).c;q.j();){r=q.d
t=t+b+A.h(r==null?s.a(r):r)}}return t.charCodeAt(0)==0?t:t}}
A.P.prototype={$iD:1}
A.W.prototype={$iD:1}
A.X.prototype={}
A.a0.prototype={}
A.aG.prototype={}
A.az.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aH(t)
return"Assertion failed"}}
A.aS.prototype={
h(a){return"Throw of null."}}
A.A.prototype={
gB(){return"Invalid argument"+(!this.a?"(s)":"")},
gA(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gB()+r+p
if(!t.a)return o
return o+t.gA()+": "+A.aH(t.gF())},
gF(){return this.b}}
A.an.prototype={
gF(){return this.b},
gB(){return"RangeError"},
gA(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.h(r):""
else if(r==null)t=": Not greater than or equal to "+A.h(s)
else if(r>s)t=": Not in inclusive range "+A.h(s)+".."+A.h(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.h(s)
return t}}
A.aJ.prototype={
gF(){return this.b},
gB(){return"RangeError"},
gA(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gi(a){return this.f}}
A.aY.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aX.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aB.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aH(t)+"."}}
A.aD.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.b_.prototype={
h(a){return"Exception: "+this.a}}
A.aI.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=B.a.X(r,0,75)+"..."
return s+"\n"+r}}
A.ae.prototype={
gi(a){var t,s=this.gm(this)
for(t=0;s.j();)++t
return t},
h(a){return A.cu(this,"(",")")}}
A.O.prototype={
gl(a){return A.i.prototype.gl.call(this,this)},
h(a){return"null"}}
A.i.prototype={$ii:1,
t(a,b){return this===b},
gl(a){return A.am(this)},
h(a){return"Instance of '"+A.aT(this)+"'"},
toString(){return this.h(this)}}
A.ap.prototype={
gi(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.b.prototype={}
A.a3.prototype={
h(a){return String(a)}}
A.a4.prototype={
h(a){return String(a)}}
A.m.prototype={
gi(a){return a.length}}
A.aE.prototype={
h(a){return String(a)}}
A.aF.prototype={
gi(a){return a.length}}
A.v.prototype={
gE(a){return new A.aq(a)},
h(a){return a.localName}}
A.a.prototype={$ia:1}
A.aa.prototype={
D(a,b,c){this.a0(a,b,c,null)},
a0(a,b,c,d){return a.addEventListener(b,A.dm(c,1),d)}}
A.ac.prototype={
gi(a){return a.length}}
A.e.prototype={
h(a){var t=a.nodeValue
return t==null?this.Y(a):t},
$ie:1}
A.ao.prototype={
gi(a){return a.length}}
A.S.prototype={
W(a,b,c,d){a.scrollTo(b,c,A.c6(d))
return}}
A.V.prototype={
gi(a){return a.length},
$ibi:1,
$iC:1}
A.aq.prototype={
q(){var t,s,r,q,p=A.bI(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.bA(t[r])
if(q.length!==0)p.n(0,q)}return p},
H(a){this.a.className=a.G(0," ")},
gi(a){return this.a.classList.length},
n(a,b){var t=this.a.classList,s=t.contains(b)
t.add(b)
return!s},
v(a,b){var t=this.a.classList,s=t.contains(b)
t.remove(b)
return s}}
A.ad.prototype={
gm(a){return new A.ab(a,a.length)}}
A.ab.prototype={
j(){var t=this,s=t.c+1,r=t.b
if(s<r){t.d=t.a[s]
t.c=s
return!0}t.d=null
t.c=r
return!1},
gk(){var t=this.d
return t==null?A.G(this).c.a(t):t}}
A.at.prototype={}
A.au.prototype={}
A.b4.prototype={
$1(a){this.a.push(A.c_(a))}}
A.b5.prototype={
$2(a,b){this.a[a]=A.c_(b)}}
A.a8.prototype={
P(a){var t=$.cf().b
if(t.test(a))return a
throw A.d(A.ck(a,"value","Not a valid class token"))},
h(a){return this.q().G(0," ")},
gm(a){var t=this.q()
return A.cE(t,t.r)},
gi(a){return this.q().a},
n(a,b){var t,s
this.P(b)
t=this.q()
s=new A.aC(b).$1(t)
this.H(t)
return s==null?!1:s},
v(a,b){var t,s
this.P(b)
t=this.q()
s=t.v(0,b)
this.H(t)
return s}}
A.aC.prototype={
$1(a){return a.n(0,this.a)}}
A.a7.prototype={
q(){var t,s,r,q,p=this.a.getAttribute("class"),o=A.bI(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.bA(t[r])
if(q.length!==0)o.n(0,q)}return o},
H(a){this.a.setAttribute("class",a.G(0," "))}}
A.c.prototype={
gE(a){return new A.a7(a)}}
A.bd.prototype={
$1(a){var t,s=document.querySelector(".upButton")
if(s!=null){t=J.c8(s)
t.D(s,"click",new A.bc())
if(B.o.a4(window.pageYOffset)>100)t.gE(s).n(0,"show")
else t.gE(s).v(0,"show")}}}
A.bc.prototype={
$1(a){B.f.W(window,0,0,A.cy(["behavior","smooth"]))}}
A.bf.prototype={
$1(a){var t,s=document.querySelector("."+this.a)
if(s!=null){t=!!s.scrollIntoViewIfNeeded
s.scrollIntoView(!0)}}};(function aliases(){var t=J.L.prototype
t.Y=t.h
t=J.x.prototype
t.Z=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.i,null)
r(A.i,[A.bh,J.L,J.a5,A.aG,A.ae,A.B,A.y,A.aP,A.aj,A.aN,A.l,A.ar,A.a0,A.b1,A.U,A.ak,A.Q,A.X,A.b_,A.aI,A.O,A.ap,A.ad,A.ab])
r(J.L,[J.aK,J.af,J.n,J.o,J.ag,J.w])
r(J.n,[J.x,A.aa,A.aE,A.aF,A.a,A.at])
r(J.x,[J.al,J.E,J.p])
s(J.ah,J.o)
r(J.ag,[J.aL,J.aM])
r(A.aG,[A.aO,A.aU,A.aZ,A.az,A.aS,A.A,A.aY,A.aX,A.aB,A.aD])
s(A.a9,A.ae)
r(A.B,[A.aA,A.aW,A.b8,A.ba,A.b4,A.aC,A.bd,A.bc,A.bf])
r(A.aW,[A.aV,A.J])
s(A.N,A.y)
s(A.M,A.N)
s(A.ai,A.a9)
r(A.aA,[A.b9,A.aR,A.b5])
s(A.as,A.aZ)
s(A.W,A.a0)
s(A.T,A.W)
s(A.P,A.X)
r(A.A,[A.an,A.aJ])
r(A.aa,[A.e,A.S])
r(A.e,[A.v,A.m])
r(A.v,[A.b,A.c])
r(A.b,[A.a3,A.a4,A.ac,A.ao])
s(A.au,A.at)
s(A.V,A.au)
s(A.a8,A.P)
r(A.a8,[A.aq,A.a7])
t(A.X,A.Q)
t(A.a0,A.Q)
t(A.at,A.ak)
t(A.au,A.ad)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{dz:"int",dp:"double",dF:"num",R:"String",dk:"bool",O:"Null",C:"List"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cU(v.typeUniverse,JSON.parse('{"al":"x","E":"x","p":"x","dM":"a","dS":"a","dL":"c","dU":"c","dN":"b","dX":"b","dV":"e","dR":"e","dO":"m","dZ":"m","dW":"v","o":{"C":["1"]},"ah":{"C":["1"]},"w":{"R":[]},"M":{"aQ":["1","2"],"y.V":"2"},"T":{"D":["1"]},"N":{"aQ":["1","2"]},"y":{"aQ":["1","2"]},"P":{"D":["1"]},"W":{"D":["1"]},"b":{"e":[]},"a3":{"e":[]},"a4":{"e":[]},"m":{"e":[]},"v":{"e":[]},"ac":{"e":[]},"ao":{"e":[]},"V":{"C":["e"],"bi":["e"]},"aq":{"D":["R"]},"a8":{"D":["R"]},"a7":{"D":["R"]},"c":{"e":[]}}'))
A.cT(v.typeUniverse,JSON.parse('{"o":1,"ah":1,"a5":1,"a9":1,"M":2,"ai":1,"aj":1,"U":1,"ak":1,"N":2,"y":2,"Q":1,"P":1,"W":1,"X":1,"a0":1,"ae":1,"ad":1,"ab":1}'))
var u=(function rtii(){var t=A.dr
return{Z:t("dT"),b:t("o<@>"),T:t("af"),g:t("p"),p:t("bi<@>"),j:t("C<@>"),f:t("aQ<@,@>"),P:t("O"),K:t("i"),L:t("dY"),N:t("R"),o:t("E"),y:t("dk"),i:t("dp"),S:t("dz"),A:t("0&*"),_:t("i*"),O:t("bG<O>?"),X:t("i?"),H:t("dF")}})();(function constants(){B.n=J.L.prototype
B.o=J.ag.prototype
B.a=J.w.prototype
B.p=J.p.prototype
B.q=J.n.prototype
B.e=J.al.prototype
B.b=J.E.prototype
B.f=A.S.prototype
B.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.h=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.m=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.i=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.j=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.k=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.d=function(hooks) { return hooks; }
})();(function staticFields(){$.b0=null
$.bK=null
$.bD=null
$.bC=null
$.c9=null
$.c5=null
$.cc=null
$.b6=null
$.bb=null
$.bu=null
$.z=[]})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dQ","cg",()=>A.du("_$dart_dartClosure"))
t($,"dP","cf",()=>A.cB("^\\S+$"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.n,MediaError:J.n,NavigatorUserMediaError:J.n,OverconstrainedError:J.n,PositionError:J.n,GeolocationPositionError:J.n,HTMLAudioElement:A.b,HTMLBRElement:A.b,HTMLBaseElement:A.b,HTMLBodyElement:A.b,HTMLButtonElement:A.b,HTMLCanvasElement:A.b,HTMLContentElement:A.b,HTMLDListElement:A.b,HTMLDataElement:A.b,HTMLDataListElement:A.b,HTMLDetailsElement:A.b,HTMLDialogElement:A.b,HTMLDivElement:A.b,HTMLEmbedElement:A.b,HTMLFieldSetElement:A.b,HTMLHRElement:A.b,HTMLHeadElement:A.b,HTMLHeadingElement:A.b,HTMLHtmlElement:A.b,HTMLIFrameElement:A.b,HTMLImageElement:A.b,HTMLInputElement:A.b,HTMLLIElement:A.b,HTMLLabelElement:A.b,HTMLLegendElement:A.b,HTMLLinkElement:A.b,HTMLMapElement:A.b,HTMLMediaElement:A.b,HTMLMenuElement:A.b,HTMLMetaElement:A.b,HTMLMeterElement:A.b,HTMLModElement:A.b,HTMLOListElement:A.b,HTMLObjectElement:A.b,HTMLOptGroupElement:A.b,HTMLOptionElement:A.b,HTMLOutputElement:A.b,HTMLParagraphElement:A.b,HTMLParamElement:A.b,HTMLPictureElement:A.b,HTMLPreElement:A.b,HTMLProgressElement:A.b,HTMLQuoteElement:A.b,HTMLScriptElement:A.b,HTMLShadowElement:A.b,HTMLSlotElement:A.b,HTMLSourceElement:A.b,HTMLSpanElement:A.b,HTMLStyleElement:A.b,HTMLTableCaptionElement:A.b,HTMLTableCellElement:A.b,HTMLTableDataCellElement:A.b,HTMLTableHeaderCellElement:A.b,HTMLTableColElement:A.b,HTMLTableElement:A.b,HTMLTableRowElement:A.b,HTMLTableSectionElement:A.b,HTMLTemplateElement:A.b,HTMLTextAreaElement:A.b,HTMLTimeElement:A.b,HTMLTitleElement:A.b,HTMLTrackElement:A.b,HTMLUListElement:A.b,HTMLUnknownElement:A.b,HTMLVideoElement:A.b,HTMLDirectoryElement:A.b,HTMLFontElement:A.b,HTMLFrameElement:A.b,HTMLFrameSetElement:A.b,HTMLMarqueeElement:A.b,HTMLElement:A.b,HTMLAnchorElement:A.a3,HTMLAreaElement:A.a4,CDATASection:A.m,CharacterData:A.m,Comment:A.m,ProcessingInstruction:A.m,Text:A.m,DOMException:A.aE,DOMTokenList:A.aF,MathMLElement:A.v,Element:A.v,AbortPaymentEvent:A.a,AnimationEvent:A.a,AnimationPlaybackEvent:A.a,ApplicationCacheErrorEvent:A.a,BackgroundFetchClickEvent:A.a,BackgroundFetchEvent:A.a,BackgroundFetchFailEvent:A.a,BackgroundFetchedEvent:A.a,BeforeInstallPromptEvent:A.a,BeforeUnloadEvent:A.a,BlobEvent:A.a,CanMakePaymentEvent:A.a,ClipboardEvent:A.a,CloseEvent:A.a,CompositionEvent:A.a,CustomEvent:A.a,DeviceMotionEvent:A.a,DeviceOrientationEvent:A.a,ErrorEvent:A.a,Event:A.a,InputEvent:A.a,SubmitEvent:A.a,ExtendableEvent:A.a,ExtendableMessageEvent:A.a,FetchEvent:A.a,FocusEvent:A.a,FontFaceSetLoadEvent:A.a,ForeignFetchEvent:A.a,GamepadEvent:A.a,HashChangeEvent:A.a,InstallEvent:A.a,KeyboardEvent:A.a,MediaEncryptedEvent:A.a,MediaKeyMessageEvent:A.a,MediaQueryListEvent:A.a,MediaStreamEvent:A.a,MediaStreamTrackEvent:A.a,MessageEvent:A.a,MIDIConnectionEvent:A.a,MIDIMessageEvent:A.a,MouseEvent:A.a,DragEvent:A.a,MutationEvent:A.a,NotificationEvent:A.a,PageTransitionEvent:A.a,PaymentRequestEvent:A.a,PaymentRequestUpdateEvent:A.a,PointerEvent:A.a,PopStateEvent:A.a,PresentationConnectionAvailableEvent:A.a,PresentationConnectionCloseEvent:A.a,ProgressEvent:A.a,PromiseRejectionEvent:A.a,PushEvent:A.a,RTCDataChannelEvent:A.a,RTCDTMFToneChangeEvent:A.a,RTCPeerConnectionIceEvent:A.a,RTCTrackEvent:A.a,SecurityPolicyViolationEvent:A.a,SensorErrorEvent:A.a,SpeechRecognitionError:A.a,SpeechRecognitionEvent:A.a,SpeechSynthesisEvent:A.a,StorageEvent:A.a,SyncEvent:A.a,TextEvent:A.a,TouchEvent:A.a,TrackEvent:A.a,TransitionEvent:A.a,WebKitTransitionEvent:A.a,UIEvent:A.a,VRDeviceEvent:A.a,VRDisplayEvent:A.a,VRSessionEvent:A.a,WheelEvent:A.a,MojoInterfaceRequestEvent:A.a,ResourceProgressEvent:A.a,USBConnectionEvent:A.a,IDBVersionChangeEvent:A.a,AudioProcessingEvent:A.a,OfflineAudioCompletionEvent:A.a,WebGLContextEvent:A.a,EventTarget:A.aa,HTMLFormElement:A.ac,Document:A.e,DocumentFragment:A.e,HTMLDocument:A.e,ShadowRoot:A.e,XMLDocument:A.e,Attr:A.e,DocumentType:A.e,Node:A.e,HTMLSelectElement:A.ao,Window:A.S,DOMWindow:A.S,NamedNodeMap:A.V,MozNamedAttrMap:A.V,SVGAElement:A.c,SVGAnimateElement:A.c,SVGAnimateMotionElement:A.c,SVGAnimateTransformElement:A.c,SVGAnimationElement:A.c,SVGCircleElement:A.c,SVGClipPathElement:A.c,SVGDefsElement:A.c,SVGDescElement:A.c,SVGDiscardElement:A.c,SVGEllipseElement:A.c,SVGFEBlendElement:A.c,SVGFEColorMatrixElement:A.c,SVGFEComponentTransferElement:A.c,SVGFECompositeElement:A.c,SVGFEConvolveMatrixElement:A.c,SVGFEDiffuseLightingElement:A.c,SVGFEDisplacementMapElement:A.c,SVGFEDistantLightElement:A.c,SVGFEFloodElement:A.c,SVGFEFuncAElement:A.c,SVGFEFuncBElement:A.c,SVGFEFuncGElement:A.c,SVGFEFuncRElement:A.c,SVGFEGaussianBlurElement:A.c,SVGFEImageElement:A.c,SVGFEMergeElement:A.c,SVGFEMergeNodeElement:A.c,SVGFEMorphologyElement:A.c,SVGFEOffsetElement:A.c,SVGFEPointLightElement:A.c,SVGFESpecularLightingElement:A.c,SVGFESpotLightElement:A.c,SVGFETileElement:A.c,SVGFETurbulenceElement:A.c,SVGFilterElement:A.c,SVGForeignObjectElement:A.c,SVGGElement:A.c,SVGGeometryElement:A.c,SVGGraphicsElement:A.c,SVGImageElement:A.c,SVGLineElement:A.c,SVGLinearGradientElement:A.c,SVGMarkerElement:A.c,SVGMaskElement:A.c,SVGMetadataElement:A.c,SVGPathElement:A.c,SVGPatternElement:A.c,SVGPolygonElement:A.c,SVGPolylineElement:A.c,SVGRadialGradientElement:A.c,SVGRectElement:A.c,SVGScriptElement:A.c,SVGSetElement:A.c,SVGStopElement:A.c,SVGStyleElement:A.c,SVGElement:A.c,SVGSVGElement:A.c,SVGSwitchElement:A.c,SVGSymbolElement:A.c,SVGTSpanElement:A.c,SVGTextContentElement:A.c,SVGTextElement:A.c,SVGTextPathElement:A.c,SVGTextPositioningElement:A.c,SVGTitleElement:A.c,SVGUseElement:A.c,SVGViewElement:A.c,SVGGradientElement:A.c,SVGComponentTransferFunctionElement:A.c,SVGFEDropShadowElement:A.c,SVGMPathElement:A.c})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMTokenList:true,MathMLElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,Window:true,DOMWindow:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=function(b){return A.dD(A.dn(b))}
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=script.js.map
