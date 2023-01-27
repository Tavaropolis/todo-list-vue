(function(){"use strict";var t={5845:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var s=n(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Tarefas")]),t._v(" "),n("TaskProgress",{attrs:{progress:t.progress}}),t._v(" "),n("NewTask",{on:{taskAdded:t.addTask}}),t._v(" "),n("TaskGrid",{attrs:{tasks:t.tasks},on:{taskDelete:t.deleteTask,taskStateChange:t.toggleTaskState}})],1)},r=[],i=(n(8309),n(7327),n(1539),n(7658),n(561),n(8862),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-progress"},[n("span",{staticClass:"progress-value"},[t._v(t._s(t.progress)+"%")]),t._v(" "),n("div",{staticClass:"progress-bar",style:{width:t.progress+"%"}})])}),o=[],u=(n(9653),{props:{progress:{type:Number,default:0}}}),l=u,c=n(3736),f=(0,c.Z)(l,i,o,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-grid"},[t.tasks.length?t._l(t.tasks,(function(e,s){return n("Task",{key:e.name,attrs:{task:e},on:{taskDelete:function(e){t.$emit("taskDelete",s)},taskStateChange:function(e){t.$emit("taskStateChange",s)}}})})):n("p",{staticClass:"no-task"},[t._v("Sua vida está em dia :)")])],2)},k=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task",class:t.stateClass,on:{click:function(e){t.$emit("taskStateChange",t.task)}}},[n("span",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.$emit("taskDelete",t.task)}}},[t._v("x")]),t._v(" "),n("p",[t._v(t._s(t.task.name))])])},h=[],g={props:{task:{type:Object,required:!0}},computed:{stateClass:function(){return{pending:this.task.pending,done:!this.task.pending}}}},m=g,_=(0,c.Z)(m,v,h,!1,null,null,null),C=_.exports,b={components:{Task:C},props:{tasks:{type:Array,required:!0}}},y=b,T=(0,c.Z)(y,d,k,!1,null,null,null),w=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-task"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-element",attrs:{type:"text",placeholder:"Nova tarefa ?"},domProps:{value:t.name},on:{keydown:function(e){return!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("button",{staticClass:"form-element",on:{click:t.add}},[t._v("+")])])},x=[],S={data:function(){return{name:""}},methods:{add:function(){this.$emit("taskAdded",{name:this.name,pending:!0}),this.name=""}}},$=S,j=(0,c.Z)($,O,x,!1,null,null,null),E=j.exports,N={components:{TaskGrid:w,NewTask:E,TaskProgress:p},data:function(){return{tasks:[{name:"Lavar a louça",pending:!1},{name:"Comprar blusa",pending:!0}]}},methods:{addTask:function(t){var e=function(e){return e.name===t.name},n=0==this.tasks.filter(e).length;n&&this.tasks.push(t)},deleteTask:function(t){this.tasks.splice(t,1)},toggleTaskState:function(t){this.tasks[t].pending=!this.tasks[t].pending}},computed:{progress:function(){var t=this.tasks.length,e=this.tasks.filter((function(t){return 0==t.pending})).length,n=Math.round(e/t*100);return n||0}},watch:{tasks:{deep:!0,handler:function(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}}},created:function(){var t=localStorage.getItem("tasks");this.tasks=JSON.parse(t)||[]}},Z=N,P=(0,c.Z)(Z,a,r,!1,null,null,null),D=P.exports;s.Z.config.productionTip=!1,new s.Z({render:function(t){return t(D)}}).$mount("#app")}},e={};function n(s){var a=e[s];if(void 0!==a)return a.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,a,r){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],r=t[c][2];for(var o=!0,u=0;u<s.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(o=!1,r<i&&(i=r));if(o){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,a,r]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,r,i=s[0],o=s[1],u=s[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(u)var c=u(n)}for(e&&e(s);l<i.length;l++)r=i[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},s=self["webpackChunktarefas"]=self["webpackChunktarefas"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(5845)}));s=n.O(s)})();
//# sourceMappingURL=app-legacy.5e9d7be9.js.map