(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"2Ycm":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},K3UI:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, OnDestroy } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { Subject } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs\'</span>;\n<span class="hljs-keyword">import</span> { takeUntil, startWith, tap } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent <span class="hljs-keyword">implements</span> OnDestroy {\n  onDestroy$ = <span class="hljs-keyword">new</span> Subject&lt;<span class="hljs-built_in">void</span>&gt;();\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = { sport: <span class="hljs-string">\'1\'</span> };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n        ],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'team\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Team\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function">(<span class="hljs-params">field</span>) =&gt;</span> {\n          <span class="hljs-keyword">const</span> teams = [\n            { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Real Madrid\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Cleveland\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Miami\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n          ];\n\n          <span class="hljs-keyword">const</span> form = field.parent.formControl;\n          form.get(<span class="hljs-string">\'sport\'</span>).valueChanges.pipe(\n            takeUntil(<span class="hljs-keyword">this</span>.onDestroy$),\n            startWith(form.get(<span class="hljs-string">\'sport\'</span>).value),\n            tap(<span class="hljs-function"><span class="hljs-params">sportId</span> =&gt;</span> {\n              field.formControl.setValue(<span class="hljs-literal">null</span>);\n              field.templateOptions.options = teams.filter(<span class="hljs-function"><span class="hljs-params">team</span> =&gt;</span> team.sportId === sportId);\n            }),\n          ).subscribe();\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'player\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Player\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function">(<span class="hljs-params">field</span>) =&gt;</span> {\n          <span class="hljs-keyword">const</span> players = [\n            { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 1)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 2)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 1)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 2)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'5\'</span>, name: <span class="hljs-string">\'Cleveland (Player 1)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n            { id: <span class="hljs-string">\'6\'</span>, name: <span class="hljs-string">\'Cleveland (Player 2)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n            { id: <span class="hljs-string">\'7\'</span>, name: <span class="hljs-string">\'Miami (Player 1)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n            { id: <span class="hljs-string">\'8\'</span>, name: <span class="hljs-string">\'Miami (Player 2)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n          ];\n\n          <span class="hljs-keyword">const</span> form = field.parent.formControl;\n          form.get(<span class="hljs-string">\'team\'</span>).valueChanges.pipe(\n            takeUntil(<span class="hljs-keyword">this</span>.onDestroy$),\n            startWith(form.get(<span class="hljs-string">\'team\'</span>).value),\n            tap(<span class="hljs-function"><span class="hljs-params">sportId</span> =&gt;</span> {\n              field.formControl.setValue(<span class="hljs-literal">null</span>);\n              field.templateOptions.options = players.filter(<span class="hljs-function"><span class="hljs-params">team</span> =&gt;</span> team.teamId === sportId);\n            }),\n          ).subscribe();\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n\n  ngOnDestroy(): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">this</span>.onDestroy$.next();\n    <span class="hljs-keyword">this</span>.onDestroy$.complete();\n  }\n}\n'},XmLa:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},gzZu:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},n8kb:function(n,s){n.exports="import { Component, OnDestroy } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\nimport { Subject } from 'rxjs';\nimport { takeUntil, startWith, tap } from 'rxjs/operators';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent implements OnDestroy {\n  onDestroy$ = new Subject<void>();\n  form = new FormGroup({});\n  model: any = { sport: '1' };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: [\n          { id: '1', name: 'Soccer' },\n          { id: '2', name: 'Basketball' },\n        ],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n    {\n      key: 'team',\n      type: 'select',\n      templateOptions: {\n        label: 'Team',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      hooks: {\n        onInit: (field) => {\n          const teams = [\n            { id: '1', name: 'Bayern Munich', sportId: '1' },\n            { id: '2', name: 'Real Madrid', sportId: '1' },\n            { id: '3', name: 'Cleveland', sportId: '2' },\n            { id: '4', name: 'Miami', sportId: '2' },\n          ];\n\n          const form = field.parent.formControl;\n          form.get('sport').valueChanges.pipe(\n            takeUntil(this.onDestroy$),\n            startWith(form.get('sport').value),\n            tap(sportId => {\n              field.formControl.setValue(null);\n              field.templateOptions.options = teams.filter(team => team.sportId === sportId);\n            }),\n          ).subscribe();\n        },\n      },\n    },\n    {\n      key: 'player',\n      type: 'select',\n      templateOptions: {\n        label: 'Player',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      hooks: {\n        onInit: (field) => {\n          const players = [\n            { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },\n            { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },\n            { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },\n            { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },\n            { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },\n            { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },\n            { id: '7', name: 'Miami (Player 1)', teamId: '4' },\n            { id: '8', name: 'Miami (Player 2)', teamId: '4' },\n          ];\n\n          const form = field.parent.formControl;\n          form.get('team').valueChanges.pipe(\n            takeUntil(this.onDestroy$),\n            startWith(form.get('team').value),\n            tap(sportId => {\n              field.formControl.setValue(null);\n              field.templateOptions.options = players.filter(team => team.teamId === sportId);\n            }),\n          ).subscribe();\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n\n  ngOnDestroy(): void {\n    this.onDestroy$.next();\n    this.onDestroy$.complete();\n  }\n}\n"},poKV:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),o=a("gIcY"),t=a("K9Ia"),e=a("ny24"),p=a("p0Sj"),r=a("xMyE"),i=function(){function n(){var n=this;this.onDestroy$=new t.a,this.form=new o.FormGroup({}),this.model={sport:"1"},this.options={},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}],valueProp:"id",labelProp:"name"}},{key:"team",type:"select",templateOptions:{label:"Team",options:[],valueProp:"id",labelProp:"name"},hooks:{onInit:function(s){var a=[{id:"1",name:"Bayern Munich",sportId:"1"},{id:"2",name:"Real Madrid",sportId:"1"},{id:"3",name:"Cleveland",sportId:"2"},{id:"4",name:"Miami",sportId:"2"}],l=s.parent.formControl;l.get("sport").valueChanges.pipe(Object(e.a)(n.onDestroy$),Object(p.a)(l.get("sport").value),Object(r.a)(function(n){s.formControl.setValue(null),s.templateOptions.options=a.filter(function(s){return s.sportId===n})})).subscribe()}}},{key:"player",type:"select",templateOptions:{label:"Player",options:[],valueProp:"id",labelProp:"name"},hooks:{onInit:function(s){var a=[{id:"1",name:"Bayern Munich (Player 1)",teamId:"1"},{id:"2",name:"Bayern Munich (Player 2)",teamId:"1"},{id:"3",name:"Real Madrid (Player 1)",teamId:"2"},{id:"4",name:"Real Madrid (Player 2)",teamId:"2"},{id:"5",name:"Cleveland (Player 1)",teamId:"3"},{id:"6",name:"Cleveland (Player 2)",teamId:"3"},{id:"7",name:"Miami (Player 1)",teamId:"4"},{id:"8",name:"Miami (Player 2)",teamId:"4"}],l=s.parent.formControl;l.get("team").valueChanges.pipe(Object(e.a)(n.onDestroy$),Object(p.a)(l.get("team").value),Object(r.a)(function(n){s.formControl.setValue(null),s.templateOptions.options=a.filter(function(s){return s.teamId===n})})).subscribe()}}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n.prototype.ngOnDestroy=function(){this.onDestroy$.next(),this.onDestroy$.complete()},n}(),m={examples:[{title:"Cascaded Select (using observable)",description:"",component:i,files:[{file:"app.component.html",content:a("XmLa"),filecontent:a("gzZu")},{file:"app.component.ts",content:a("K3UI"),filecontent:a("n8kb")},{file:"app.module.ts",content:a("2Ycm"),filecontent:a("zrqq")}]}]},c=function(){return function(){}}(),d=a("NcP4"),u=a("AcC/"),h=a("htty"),f=a("YBPd"),g=a("zBy/"),j=a("Fcep"),y=a("Pg8L"),b=a("tXyE"),v=a("bv0N"),k=a("JotH"),C=a("YET7"),I=a("pMnS"),M=a("4o01"),w=a("Dl9q"),P=a("UcnZ"),F=a("DAbo"),O=a("9Glx"),x=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var o=!0,t=n.component;return"submit"===s&&(o=!1!==l["\u0275nov"](n,2).onSubmit(a)&&o),"reset"===s&&(o=!1!==l["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===s&&(o=!1!==t.submit()&&o),o},null,null)),l["\u0275did"](1,16384,null,0,o["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),l["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[[4,o.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,w.b,w.a)),l["\u0275prd"](512,null,P.a,P.a,[F.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,O.a,[P.a,F.b,[8,null],[2,o.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,D,x)),l["\u0275did"](1,180224,null,0,i,[],null,null)],null,null)}var R=l["\u0275ccf"]("formly-app-example",i,_,{},{},[]),S=a("Ip0R"),B=a("M2Lx"),N=a("eDkP"),A=a("Fzqc"),G=a("v9Dh"),U=a("ZYjt"),$=a("Wf4p"),L=a("6LlJ"),E=a("F6kA"),V=a("dWZg"),W=a("lLAP"),J=a("4c35"),Y=a("qAlS"),q=a("La40"),z=a("SMsm"),T=a("UodH"),Z=a("5QwG"),K=a("owZ6"),H=a("DwvE"),X=a("DWV+"),Q=a("3Jkj"),nn=a("dMcW"),sn=a("5m6/"),an=a("Y9SJ"),ln=a("5Knt"),on=a("EvEK"),tn=a("XR12"),en=a("Nsh5"),pn=a("8mMr"),rn=a("mqvi"),mn=a("lYui"),cn=a("nyVy"),dn=a("7BuT"),un=function(){return function(){}}(),hn=a("ZYCi"),fn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return gn});var gn=l["\u0275cmf"](c,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[d.a,u.a,h.a,f.a,g.a,j.a,y.a,b.a,v.a,k.a,C.a,I.a,M.a,R]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[l.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,B.c,B.c,[]),l["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,l.ComponentFactoryResolver,N.h,N.f,l.Injector,l.NgZone,S.DOCUMENT,A.b,[2,S.Location]]),l["\u0275mpd"](5120,N.j,N.k,[N.c]),l["\u0275mpd"](5120,G.b,G.c,[N.c]),l["\u0275mpd"](4608,U.HAMMER_GESTURE_CONFIG,$.c,[[2,$.g],[2,$.l]]),l["\u0275mpd"](4608,L.a,L.a,[]),l["\u0275mpd"](4608,E.a,E.a,[]),l["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),l["\u0275mpd"](4608,o["\u0275angular_packages_forms_forms_j"],o["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,P.a,P.a,[F.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](1073742336,B.d,B.d,[]),l["\u0275mpd"](1073742336,W.a,W.a,[]),l["\u0275mpd"](1073742336,A.a,A.a,[]),l["\u0275mpd"](1073742336,J.g,J.g,[]),l["\u0275mpd"](1073742336,Y.c,Y.c,[]),l["\u0275mpd"](1073742336,N.g,N.g,[]),l["\u0275mpd"](1073742336,$.l,$.l,[[2,$.d],[2,U.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,G.e,G.e,[]),l["\u0275mpd"](1073742336,$.v,$.v,[]),l["\u0275mpd"](1073742336,q.j,q.j,[]),l["\u0275mpd"](1073742336,z.c,z.c,[]),l["\u0275mpd"](1073742336,T.c,T.c,[]),l["\u0275mpd"](1073742336,Z.b,Z.b,[]),l["\u0275mpd"](512,F.b,F.b,[]),l["\u0275mpd"](1024,F.a,function(n){return[{wrappers:[{name:"addons",component:K.a}],extensions:[{name:"addons",extension:{postPopulate:H.a}}]},{types:[{name:"input",component:X.a,wrappers:["form-field"]},{name:"checkbox",component:Q.a,wrappers:["form-field"]},{name:"radio",component:nn.a,wrappers:["form-field"]},{name:"select",component:sn.a,wrappers:["form-field"]},{name:"textarea",component:an.a,wrappers:["form-field"]},{name:"multicheckbox",component:ln.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:on.a}]},tn.b(n),{}]},[F.b]),l["\u0275mpd"](1073742336,tn.a,tn.a,[F.b,[2,F.a]]),l["\u0275mpd"](1073742336,en.h,en.h,[]),l["\u0275mpd"](1073742336,pn.b,pn.b,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,o["\u0275angular_packages_forms_forms_bc"],o["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,un,un,[]),l["\u0275mpd"](1073742336,hn.s,hn.s,[[2,hn.y],[2,hn.p]]),l["\u0275mpd"](1073742336,c,c,[]),l["\u0275mpd"](1024,hn.n,function(){return[[{path:"",component:fn.a,data:m}]]},[])])})},zrqq:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);