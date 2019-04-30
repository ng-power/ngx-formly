(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"/39o":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'checked',\n      type: 'checkbox',\n      templateOptions: {\n        label: 'Required?',\n      },\n    },\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Moehahah',\n        placeholder: 'Formly is terrific!',\n      },\n      validation: {\n        show: true,\n      },\n      expressionProperties: {\n        'templateOptions.required': 'model.checked',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},DdkP:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},Q4Ps:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'checked\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Required?\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Moehahah\'</span>,\n        placeholder: <span class="hljs-string">\'Formly is terrific!\'</span>,\n      },\n      validation: {\n        show: <span class="hljs-literal">true</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.required\'</span>: <span class="hljs-string">\'model.checked\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},Tl64:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},kPer:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},"q+6m":function(n,s,o){"use strict";o.r(s);var a=o("CcnG"),l=o("gIcY"),e=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={},this.fields=[{key:"checked",type:"checkbox",templateOptions:{label:"Required?"}},{key:"text",type:"input",templateOptions:{label:"Moehahah",placeholder:"Formly is terrific!"},validation:{show:!0},expressionProperties:{"templateOptions.required":"model.checked"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),p={examples:[{title:"Toggle required field",description:"\n              This is an example of how to toggle <code>required</code> of a field. It uses:\n              <ul>\n                <li><code>expressionProperties</code>: to have formly add <code>required</code> to the input field</li>\n                <li><code>validation.show</code>: to show validation errors even when they the field has not been touched</li>\n                <li><code>validationMessages</code>: to add a globally available validation message</li>\n              </ul>\n            ",component:e,files:[{file:"app.component.html",content:o("DdkP"),filecontent:o("zsD9")},{file:"app.component.ts",content:o("Q4Ps"),filecontent:o("/39o")},{file:"app.module.ts",content:o("kPer"),filecontent:o("Tl64")}]}]},t=function(){return function(){}}(),r=o("NcP4"),m=o("AcC/"),i=o("htty"),c=o("YBPd"),d=o("zBy/"),u=o("Fcep"),f=o("Pg8L"),h=o("tXyE"),g=o("bv0N"),y=o("JotH"),j=o("YET7"),b=o("pMnS"),k=o("4o01"),v=o("Dl9q"),w=o("UcnZ"),F=o("DAbo"),C=o("9Glx"),M=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,o){var l=!0,e=n.component;return"submit"===s&&(l=!1!==a["\u0275nov"](n,2).onSubmit(o)&&l),"reset"===s&&(l=!1!==a["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==e.submit()&&l),l},null,null)),a["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),a["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,v.b,v.a)),a["\u0275prd"](512,null,w.a,w.a,[F.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,C.a,[w.a,F.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"]))],function(n,s){var o=s.component;n(s,2,0,o.form),n(s,7,0,o.form,o.model,o.fields,o.options)},function(n,s){n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending)})}function _(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,x,M)),a["\u0275did"](1,49152,null,0,e,[],null,null)],null,null)}var R=a["\u0275ccf"]("formly-app-example",e,_,{},{},[]),q=o("Ip0R"),O=o("M2Lx"),S=o("eDkP"),N=o("Fzqc"),P=o("v9Dh"),A=o("ZYjt"),D=o("Wf4p"),G=o("6LlJ"),E=o("F6kA"),L=o("dWZg"),T=o("lLAP"),I=o("4c35"),B=o("qAlS"),J=o("La40"),U=o("SMsm"),Y=o("UodH"),z=o("5QwG"),Z=o("owZ6"),H=o("DwvE"),W=o("DWV+"),Q=o("3Jkj"),V=o("dMcW"),K=o("5m6/"),X=o("Y9SJ"),$=o("5Knt"),nn=o("EvEK"),sn=o("XR12"),on=o("Nsh5"),an=o("8mMr"),ln=o("mqvi"),en=o("lYui"),pn=o("nyVy"),tn=o("7BuT"),rn=function(){return function(){}}(),mn=o("ZYCi"),cn=o("cIcG");o.d(s,"ConfigModuleNgFactory",function(){return dn});var dn=a["\u0275cmf"](t,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,h.a,g.a,y.a,j.a,b.a,k.a,R]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,q.NgLocalization,q.NgLocaleLocalization,[a.LOCALE_ID,[2,q["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,O.c,O.c,[]),a["\u0275mpd"](4608,S.c,S.c,[S.i,S.e,a.ComponentFactoryResolver,S.h,S.f,a.Injector,a.NgZone,q.DOCUMENT,N.b,[2,q.Location]]),a["\u0275mpd"](5120,S.j,S.k,[S.c]),a["\u0275mpd"](5120,P.b,P.c,[S.c]),a["\u0275mpd"](4608,A.HAMMER_GESTURE_CONFIG,D.c,[[2,D.g],[2,D.l]]),a["\u0275mpd"](4608,G.a,G.a,[]),a["\u0275mpd"](4608,E.a,E.a,[]),a["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),a["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,w.a,w.a,[F.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](1073742336,q.CommonModule,q.CommonModule,[]),a["\u0275mpd"](1073742336,L.b,L.b,[]),a["\u0275mpd"](1073742336,O.d,O.d,[]),a["\u0275mpd"](1073742336,T.a,T.a,[]),a["\u0275mpd"](1073742336,N.a,N.a,[]),a["\u0275mpd"](1073742336,I.g,I.g,[]),a["\u0275mpd"](1073742336,B.c,B.c,[]),a["\u0275mpd"](1073742336,S.g,S.g,[]),a["\u0275mpd"](1073742336,D.l,D.l,[[2,D.d],[2,A.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,P.e,P.e,[]),a["\u0275mpd"](1073742336,D.v,D.v,[]),a["\u0275mpd"](1073742336,J.j,J.j,[]),a["\u0275mpd"](1073742336,U.c,U.c,[]),a["\u0275mpd"](1073742336,Y.c,Y.c,[]),a["\u0275mpd"](1073742336,z.b,z.b,[]),a["\u0275mpd"](512,F.b,F.b,[]),a["\u0275mpd"](1024,F.a,function(n){return[{wrappers:[{name:"addons",component:Z.a}],extensions:[{name:"addons",extension:{postPopulate:H.a}}]},{types:[{name:"input",component:W.a,wrappers:["form-field"]},{name:"checkbox",component:Q.a,wrappers:["form-field"]},{name:"radio",component:V.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:X.a,wrappers:["form-field"]},{name:"multicheckbox",component:$.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:nn.a}]},sn.b(n),{validationMessages:[{name:"required",message:"This field is required"}]}]},[F.b]),a["\u0275mpd"](1073742336,sn.a,sn.a,[F.b,[2,F.a]]),a["\u0275mpd"](1073742336,on.h,on.h,[]),a["\u0275mpd"](1073742336,an.b,an.b,[]),a["\u0275mpd"](1073742336,ln.a,ln.a,[]),a["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,en.a,en.a,[]),a["\u0275mpd"](1073742336,pn.a,pn.a,[]),a["\u0275mpd"](1073742336,tn.a,tn.a,[]),a["\u0275mpd"](1073742336,rn,rn,[]),a["\u0275mpd"](1073742336,mn.s,mn.s,[[2,mn.y],[2,mn.p]]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](1024,mn.n,function(){return[[{path:"",component:cn.a,data:p}]]},[])])})},zsD9:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'}}]);