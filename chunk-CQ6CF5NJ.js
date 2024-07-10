import{a as P}from"./chunk-IWSNWGAY.js";import{b as N,c as d,d as w,e as x,g as L,h as k,i as M,j as q,l as D}from"./chunk-TF6NDRWN.js";import{j as E,k as b,m as I}from"./chunk-TP7WERXT.js";import{$a as m,Ka as a,U as g,Z as h,Za as f,ac as y,bb as _,cb as t,db as i,eb as v,ec as C,jb as S,sb as r,zb as F}from"./chunk-SKGLYFGY.js";function R(o,n){o&1&&(t(0,"div",11),r(1,"*Enter Valid Email"),i())}function T(o,n){o&1&&(t(0,"div",11),r(1,"*Email is required"),i())}function G(o,n){o&1&&(t(0,"div",11),r(1,"*Password is required"),i())}var Q=(()=>{let n=class n{constructor(){this.fb=g(q),this.authService=g(P),this.router=g(E)}ngOnInit(){this.loginForm=this.fb.group({email:["",d.compose([d.required,d.email])],password:["",d.required]})}login(){this.authService.loginService(this.loginForm.value).subscribe({next:l=>{alert(l.message),localStorage.setItem("access_token",l.access_token),localStorage.setItem("user_id",l.data._id),localStorage.setItem("userName",l.data.userName),localStorage.setItem("payload",JSON.stringify(l.data)),this.authService.isLoggedIn$.next(!0),this.router.navigate(["/dashboard"]),this.loginForm.reset()}})}};n.\u0275fac=function(u){return new(u||n)},n.\u0275cmp=h({type:n,selectors:[["app-login"]],standalone:!0,features:[F],decls:19,vars:7,consts:[[1,"container","mt-3"],[1,"card","p-3"],[3,"formGroup"],[1,"text-center",2,"font-weight","bold"],[1,"mt-3","mb-2"],["formControlName","email","type","email","placeholder","Email",1,"form-control"],["Class","text-danger mt-2",4,"ngIf"],["formControlName","password","type","password","placeholder","Password",1,"form-control"],[1,"btn","btn-primary",3,"click","disabled"],[1,"mt-2"],["routerLink","/register",1,"ml-2","cursor-pointer"],["Class","text-danger mt-2"]],template:function(u,e){if(u&1&&(t(0,"div",0)(1,"div",1)(2,"form",2)(3,"h1",3),r(4,"Login"),i(),t(5,"div",4),v(6,"input",5),f(7,R,2,0,"div",6)(8,T,2,0,"div",6),i(),t(9,"div",4),v(10,"input",7),f(11,G,2,0,"div",6),i(),t(12,"button",8),S("click",function(){return e.login()}),r(13,"Login"),i()(),t(14,"div",9)(15,"span"),r(16,"Don't have an Account?"),i(),t(17,"a",10),r(18,"Register"),i()()()()),u&2){let s,p,c;a(2),m("formGroup",e.loginForm),a(5),m("ngIf",((s=e.loginForm.get("email"))==null?null:s.touched)&&((s=e.loginForm.get("email"))==null?null:s.hasError("email"))),a(),m("ngIf",((p=e.loginForm.get("email"))==null?null:p.touched)&&((p=e.loginForm.get("email"))==null?null:p.hasError("required"))),a(3),m("ngIf",((c=e.loginForm.get("password"))==null?null:c.touched)&&((c=e.loginForm.get("password"))==null?null:c.hasError("required"))),a(),_("disabled",e.loginForm.invalid),m("disabled",e.loginForm.invalid)}},dependencies:[C,y,I,b,D,L,N,w,x,k,M],styles:[".card[_ngcontent-%COMP%]{width:400px}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}"]});let o=n;return o})();export{Q as a};