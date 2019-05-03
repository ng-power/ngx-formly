(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"6UWd":function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  <button type="button" class="btn btn-default" (click)="options.resetModel()">Reset</button>\n</form>\n'},OHCr:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldCustomInput } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./custom-input.component\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n      ],\n      types: [\n        { name: <span class="hljs-string">\'custom\'</span>, component: FormlyFieldCustomInput, wrappers: [<span class="hljs-string">\'form-field\'</span>] },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldCustomInput,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},ObCE:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyFieldCustomInput } from './custom-input.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n      types: [\n        { name: 'custom', component: FormlyFieldCustomInput, wrappers: ['form-field'] },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyFieldCustomInput,\n  ],\n})\nexport class AppModule { }\n"},QgPX:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FieldType } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-field-custom-input',\n  template: `\n    <input [type]=\"type\" [formControl]=\"formControl\" [formlyAttributes]=\"field\">\n  `,\n})\nexport class FormlyFieldCustomInput extends FieldType {\n  get type() {\n    return this.to.type || 'text';\n  }\n}\n"},TalL:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {\n    formState: {\n      awesomeIsForced: false,\n    },\n  };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'text',\n      type: 'input',\n      templateOptions: {\n        label: 'Text',\n        placeholder: 'Formly is terrific!',\n        required: true,\n      },\n    },\n    {\n      key: 'nested.story',\n      type: 'textarea',\n      templateOptions: {\n        label: 'Some sweet story',\n        placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',\n        description: '',\n      },\n      expressionProperties: {\n        'templateOptions.focus': 'formState.awesomeIsForced',\n        'templateOptions.description': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'And look! This field magically got focus!';\n          }\n        },\n      },\n    },\n    {\n      key: 'awesome',\n      type: 'checkbox',\n      templateOptions: { label: '' },\n      expressionProperties: {\n        'templateOptions.disabled': 'formState.awesomeIsForced',\n        'templateOptions.label': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'Too bad, formly is really awesome...';\n          } else {\n            return 'Is formly totally awesome? (uncheck this and see what happens)';\n          }\n        },\n      },\n    },\n    {\n      key: 'whyNot',\n      type: 'textarea',\n      expressionProperties: {\n        'templateOptions.placeholder': (model, formState) => {\n          if (formState.awesomeIsForced) {\n            return 'Too bad... It really is awesome! Wasn\\'t that cool?';\n          } else {\n            return 'Type in here... I dare you';\n          }\n        },\n        'templateOptions.disabled': 'formState.awesomeIsForced',\n      },\n      hideExpression: 'model.awesome',\n      templateOptions: {\n        label: 'Why Not?',\n        placeholder: 'Type in here... I dare you',\n      },\n    },\n    {\n      key: 'custom',\n      type: 'custom',\n      templateOptions: {\n        label: 'Custom inlined',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},Yxo4:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {\n    formState: {\n      awesomeIsForced: <span class="hljs-literal">false</span>,\n    },\n  };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'text\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Text\'</span>,\n        placeholder: <span class="hljs-string">\'Formly is terrific!\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'nested.story\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Some sweet story\'</span>,\n        placeholder: <span class="hljs-string">\'It allows you to build and maintain your forms with the ease of JavaScript :-)\'</span>,\n        description: <span class="hljs-string">\'\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.focus\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n        <span class="hljs-string">\'templateOptions.description\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'And look! This field magically got focus!\'</span>;\n          }\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'awesome\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'checkbox\'</span>,\n      templateOptions: { label: <span class="hljs-string">\'\'</span> },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.disabled\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n        <span class="hljs-string">\'templateOptions.label\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Too bad, formly is really awesome...\'</span>;\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Is formly totally awesome? (uncheck this and see what happens)\'</span>;\n          }\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'whyNot\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'textarea\'</span>,\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.placeholder\'</span>: <span class="hljs-function">(<span class="hljs-params">model, formState</span>) =&gt;</span> {\n          <span class="hljs-keyword">if</span> (formState.awesomeIsForced) {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Too bad... It really is awesome! Wasn\\\'t that cool?\'</span>;\n          } <span class="hljs-keyword">else</span> {\n            <span class="hljs-keyword">return</span> <span class="hljs-string">\'Type in here... I dare you\'</span>;\n          }\n        },\n        <span class="hljs-string">\'templateOptions.disabled\'</span>: <span class="hljs-string">\'formState.awesomeIsForced\'</span>,\n      },\n      hideExpression: <span class="hljs-string">\'model.awesome\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Why Not?\'</span>,\n        placeholder: <span class="hljs-string">\'Type in here... I dare you\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'custom\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'custom\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Custom inlined\'</span>,\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},aGt6:function(n,s,e){"use strict";e.r(s);var a=e("CcnG"),l=e("gIcY"),o=function(){function n(){this.form=new l.FormGroup({}),this.model={},this.options={formState:{awesomeIsForced:!1}},this.fields=[{key:"text",type:"input",templateOptions:{label:"Text",placeholder:"Formly is terrific!",required:!0}},{key:"nested.story",type:"textarea",templateOptions:{label:"Some sweet story",placeholder:"It allows you to build and maintain your forms with the ease of JavaScript :-)",description:""},expressionProperties:{"templateOptions.focus":"formState.awesomeIsForced","templateOptions.description":function(n,s){if(s.awesomeIsForced)return"And look! This field magically got focus!"}}},{key:"awesome",type:"checkbox",templateOptions:{label:""},expressionProperties:{"templateOptions.disabled":"formState.awesomeIsForced","templateOptions.label":function(n,s){return s.awesomeIsForced?"Too bad, formly is really awesome...":"Is formly totally awesome? (uncheck this and see what happens)"}}},{key:"whyNot",type:"textarea",expressionProperties:{"templateOptions.placeholder":function(n,s){return s.awesomeIsForced?"Too bad... It really is awesome! Wasn't that cool?":"Type in here... I dare you"},"templateOptions.disabled":"formState.awesomeIsForced"},hideExpression:"model.awesome",templateOptions:{label:"Why Not?",placeholder:"Type in here... I dare you"}},{key:"custom",type:"custom",templateOptions:{label:"Custom inlined"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),t={examples:[{title:"Introduction Example",description:"This is a small subset of the things that formly can do :-) See the other examples and the documentation for more.",component:o,files:[{file:"app.component.html",content:e("ltb9"),filecontent:e("6UWd")},{file:"app.component.ts",content:e("Yxo4"),filecontent:e("TalL")},{file:"app.module.ts",content:e("OHCr"),filecontent:e("ObCE")},{file:"custom-input.component.ts",content:e("hvFh"),filecontent:e("QgPX")}]}]},p=function(){return function(){}}(),r=e("NcP4"),i=e("AcC/"),m=e("htty"),c=e("5yjx"),d=e("bg4O"),u=e("1C3p"),f=e("aMyW"),h=e("cD0v"),y=e("FZbr"),g=e("jYRx"),j=e("YBPd"),b=e("gfpZ"),w=e("Ip0R"),k=e("mrSG"),F=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return Object(k.__extends)(s,n),Object.defineProperty(s.prototype,"type",{get:function(){return this.to.type||"text"},enumerable:!0,configurable:!0}),s}(e("HkYz").b),v=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,6,"input",[],[[8,"type",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"name",0],[1,"step",0]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"],[null,"keyup"],[null,"keydown"],[null,"click"],[null,"change"],[null,"keypress"]],function(n,s,e){var l=!0;return"input"===s&&(l=!1!==a["\u0275nov"](n,1)._handleInput(e.target.value)&&l),"blur"===s&&(l=!1!==a["\u0275nov"](n,1).onTouched()&&l),"compositionstart"===s&&(l=!1!==a["\u0275nov"](n,1)._compositionStart()&&l),"compositionend"===s&&(l=!1!==a["\u0275nov"](n,1)._compositionEnd(e.target.value)&&l),"focus"===s&&(l=!1!==a["\u0275nov"](n,6).onFocus(e)&&l),"blur"===s&&(l=!1!==a["\u0275nov"](n,6).onBlur(e)&&l),"keyup"===s&&(l=!1!==(a["\u0275nov"](n,6).to.keyup&&a["\u0275nov"](n,6).to.keyup(a["\u0275nov"](n,6).field,e))&&l),"keydown"===s&&(l=!1!==(a["\u0275nov"](n,6).to.keydown&&a["\u0275nov"](n,6).to.keydown(a["\u0275nov"](n,6).field,e))&&l),"click"===s&&(l=!1!==(a["\u0275nov"](n,6).to.click&&a["\u0275nov"](n,6).to.click(a["\u0275nov"](n,6).field,e))&&l),"change"===s&&(l=!1!==(a["\u0275nov"](n,6).to.change&&a["\u0275nov"](n,6).to.change(a["\u0275nov"](n,6).field,e))&&l),"keypress"===s&&(l=!1!==(a["\u0275nov"](n,6).to.keypress&&a["\u0275nov"](n,6).to.keypress(a["\u0275nov"](n,6).field,e))&&l),l},null,null)),a["\u0275did"](1,16384,null,0,l.DefaultValueAccessor,[a.Renderer2,a.ElementRef,[2,l.COMPOSITION_BUFFER_MODE]],null,null),a["\u0275prd"](1024,null,l.NG_VALUE_ACCESSOR,function(n){return[n]},[l.DefaultValueAccessor]),a["\u0275did"](3,540672,null,0,l.FormControlDirective,[[8,null],[8,null],[6,l.NG_VALUE_ACCESSOR],[2,l["\u0275angular_packages_forms_forms_k"]]],{form:[0,"form"]},null),a["\u0275prd"](2048,null,l.NgControl,null,[l.FormControlDirective]),a["\u0275did"](5,16384,null,0,l.NgControlStatus,[[4,l.NgControl]],null,null),a["\u0275did"](6,933888,null,0,b.a,[a.Renderer2,a.ElementRef,w.DOCUMENT],{field:[0,"field"]},null)],function(n,s){var e=s.component;n(s,3,0,e.formControl),n(s,6,0,e.field)},function(n,s){n(s,0,0,s.component.type,a["\u0275nov"](s,5).ngClassUntouched,a["\u0275nov"](s,5).ngClassTouched,a["\u0275nov"](s,5).ngClassPristine,a["\u0275nov"](s,5).ngClassDirty,a["\u0275nov"](s,5).ngClassValid,a["\u0275nov"](s,5).ngClassInvalid,a["\u0275nov"](s,5).ngClassPending,a["\u0275nov"](s,6).field.name,a["\u0275nov"](s,6).to.step)})}function x(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-field-custom-input",[],null,null,null,C,v)),a["\u0275did"](1,49152,null,0,F,[],null,null)],null,null)}var I=a["\u0275ccf"]("formly-field-custom-input",F,x,{field:"field",model:"model",form:"form",options:"options"},{},[]),O=e("pMnS"),S=e("4o01"),M=e("Dl9q"),_=e("UcnZ"),T=e("DAbo"),R=e("9Glx"),N=a["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,11,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,e){var l=!0,o=n.component;return"submit"===s&&(l=!1!==a["\u0275nov"](n,2).onSubmit(e)&&l),"reset"===s&&(l=!1!==a["\u0275nov"](n,2).onReset()&&l),"ngSubmit"===s&&(l=!1!==o.submit()&&l),l},null,null)),a["\u0275did"](1,16384,null,0,l["\u0275angular_packages_forms_forms_bh"],[],null,null),a["\u0275did"](2,540672,null,0,l.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a["\u0275prd"](2048,null,l.ControlContainer,null,[l.FormGroupDirective]),a["\u0275did"](4,16384,null,0,l.NgControlStatusGroup,[[4,l.ControlContainer]],null,null),(n()(),a["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,M.b,M.a)),a["\u0275prd"](512,null,_.a,_.a,[T.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275did"](7,966656,null,0,R.a,[_.a,T.b,[8,null],[2,l.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),a["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),a["\u0275ted"](-1,null,["Submit"])),(n()(),a["\u0275eld"](10,0,null,null,1,"button",[["class","btn btn-default"],["type","button"]],null,[[null,"click"]],function(n,s,e){var a=!0;return"click"===s&&(a=!1!==n.component.options.resetModel()&&a),a},null,null)),(n()(),a["\u0275ted"](-1,null,["Reset"]))],function(n,s){var e=s.component;n(s,2,0,e.form),n(s,7,0,e.form,e.model,e.fields,e.options)},function(n,s){n(s,0,0,a["\u0275nov"](s,4).ngClassUntouched,a["\u0275nov"](s,4).ngClassTouched,a["\u0275nov"](s,4).ngClassPristine,a["\u0275nov"](s,4).ngClassDirty,a["\u0275nov"](s,4).ngClassValid,a["\u0275nov"](s,4).ngClassInvalid,a["\u0275nov"](s,4).ngClassPending)})}function E(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,A,N)),a["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var D=a["\u0275ccf"]("formly-app-example",o,E,{},{},[]),P=e("M2Lx"),G=e("eDkP"),q=e("Fzqc"),L=e("v9Dh"),U=e("ZYjt"),W=e("Wf4p"),J=e("6LlJ"),B=e("F6kA"),Y=e("dWZg"),Z=e("lLAP"),H=e("4c35"),V=e("qAlS"),z=e("La40"),Q=e("SMsm"),X=e("UodH"),K=e("5QwG"),$=e("vqwi"),nn=e("WJWa"),sn=e("aD/X"),en=e("rxDs"),an=e("bCbW"),ln=e("7yie"),on=e("xWhi"),tn=e("owZ6"),pn=e("DwvE"),rn=e("XR12"),mn=e("Nsh5"),cn=e("8mMr"),dn=e("mqvi"),un=e("lhp3"),fn=e("izcw"),hn=e("z6f/"),yn=e("lYui"),gn=e("QcTH"),jn=e("82Si"),bn=e("cJUE"),wn=e("eqw4"),kn=e("nyVy"),Fn=e("7BuT"),vn=function(){return function(){}}(),Cn=e("ZYCi"),xn=e("cIcG");e.d(s,"ConfigModuleNgFactory",function(){return In});var In=a["\u0275cmf"](p,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,m.a,c.a,d.a,u.a,f.a,h.a,y.a,g.a,j.a,I,O.a,S.a,D]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[a.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,P.c,P.c,[]),a["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,a.ComponentFactoryResolver,G.h,G.f,a.Injector,a.NgZone,w.DOCUMENT,q.b,[2,w.Location]]),a["\u0275mpd"](5120,G.j,G.k,[G.c]),a["\u0275mpd"](5120,L.b,L.c,[G.c]),a["\u0275mpd"](4608,U.HAMMER_GESTURE_CONFIG,W.c,[[2,W.g],[2,W.l]]),a["\u0275mpd"](4608,J.a,J.a,[]),a["\u0275mpd"](4608,B.a,B.a,[]),a["\u0275mpd"](4608,l.FormBuilder,l.FormBuilder,[]),a["\u0275mpd"](4608,l["\u0275angular_packages_forms_forms_j"],l["\u0275angular_packages_forms_forms_j"],[]),a["\u0275mpd"](4608,_.a,_.a,[T.b,a.ComponentFactoryResolver,a.Injector]),a["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),a["\u0275mpd"](1073742336,Y.b,Y.b,[]),a["\u0275mpd"](1073742336,P.d,P.d,[]),a["\u0275mpd"](1073742336,Z.a,Z.a,[]),a["\u0275mpd"](1073742336,q.a,q.a,[]),a["\u0275mpd"](1073742336,H.g,H.g,[]),a["\u0275mpd"](1073742336,V.c,V.c,[]),a["\u0275mpd"](1073742336,G.g,G.g,[]),a["\u0275mpd"](1073742336,W.l,W.l,[[2,W.d],[2,U.HAMMER_LOADER]]),a["\u0275mpd"](1073742336,L.e,L.e,[]),a["\u0275mpd"](1073742336,W.v,W.v,[]),a["\u0275mpd"](1073742336,z.j,z.j,[]),a["\u0275mpd"](1073742336,Q.c,Q.c,[]),a["\u0275mpd"](1073742336,X.c,X.c,[]),a["\u0275mpd"](1073742336,K.b,K.b,[]),a["\u0275mpd"](512,T.b,T.b,[]),a["\u0275mpd"](1024,T.a,function(n){return[{wrappers:[{name:"form-field",component:$.a}]},{types:[{name:"input",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:en.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:an.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:ln.a,wrappers:["form-field"]}]},{types:[{name:"select",component:on.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:tn.a}],extensions:[{name:"addons",extension:{postPopulate:pn.a}}]},rn.b(n),{validationMessages:[{name:"required",message:"This field is required"}],types:[{name:"custom",component:F,wrappers:["form-field"]}]}]},[T.b]),a["\u0275mpd"](1073742336,rn.a,rn.a,[T.b,[2,T.a]]),a["\u0275mpd"](1073742336,mn.h,mn.h,[]),a["\u0275mpd"](1073742336,cn.b,cn.b,[]),a["\u0275mpd"](1073742336,dn.a,dn.a,[]),a["\u0275mpd"](1073742336,l["\u0275angular_packages_forms_forms_bc"],l["\u0275angular_packages_forms_forms_bc"],[]),a["\u0275mpd"](1073742336,l.ReactiveFormsModule,l.ReactiveFormsModule,[]),a["\u0275mpd"](1073742336,un.a,un.a,[]),a["\u0275mpd"](1073742336,fn.a,fn.a,[]),a["\u0275mpd"](1073742336,hn.a,hn.a,[]),a["\u0275mpd"](1073742336,yn.a,yn.a,[]),a["\u0275mpd"](1073742336,gn.a,gn.a,[]),a["\u0275mpd"](1073742336,jn.a,jn.a,[]),a["\u0275mpd"](1073742336,bn.a,bn.a,[]),a["\u0275mpd"](1073742336,wn.a,wn.a,[]),a["\u0275mpd"](1073742336,kn.a,kn.a,[]),a["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),a["\u0275mpd"](1073742336,vn,vn,[]),a["\u0275mpd"](1073742336,Cn.s,Cn.s,[[2,Cn.y],[2,Cn.p]]),a["\u0275mpd"](1073742336,p,p,[]),a["\u0275mpd"](1024,Cn.n,function(){return[[{path:"",component:xn.a,data:t}]]},[])])})},hvFh:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-field-custom-input\'</span>,\n  template: <span class="hljs-string">`\n    &lt;input [type]="type" [formControl]="formControl" [formlyAttributes]="field"&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FormlyFieldCustomInput <span class="hljs-keyword">extends</span> FieldType {\n  <span class="hljs-keyword">get</span> <span class="hljs-keyword">type</span>() {\n    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.to.type || <span class="hljs-string">\'text\'</span>;\n  }\n}\n'},ltb9:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-default"</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"options.resetModel()"</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);