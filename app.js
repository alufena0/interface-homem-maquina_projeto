const SV=[{id:1,n:"Corte feminino",e:"Cabeleireiro(a)",m:45,p:120,i:"scissors"},{id:2,n:"Escova",e:"Cabeleireiro(a)",m:40,p:80,i:"scissors"},{id:3,n:"Manicure",e:"Manicure",m:45,p:50,i:"polish"},{id:4,n:"Pedicure",e:"Manicure",m:50,p:60,i:"polish"},{id:5,n:"Limpeza de pele",e:"Esteticista",m:60,p:150,i:"sparkle"},{id:6,n:"Massagem relaxante",e:"Massagista",m:50,p:130,i:"leaf"},{id:7,n:"Maquiagem social",e:"Maquiador(a)",m:60,p:140,i:"sparkle"},{id:8,n:"Depilação com cera",e:"Depiladora",m:30,p:70,i:"sparkle"}];
const PR={"Cabeleireiro(a)":["Carla","Renata"],"Manicure":["Bia","Dani"],"Esteticista":["Marina"],"Massagista":["Letícia"],"Maquiador(a)":["Helena"],"Depiladora":["Joana"]};
const PK=[{id:"p1",n:"Cabelo e unha de terça",d:"Corte e manicure, terça à tarde",s:[1,3],p:150},{id:"p2",n:"Dia de spa",d:"Limpeza de pele e massagem",s:[5,6],p:240},{id:"p3",n:"Noiva em um dia",d:"Escova, maquiagem e manicure",s:[2,7,3],p:230}];
const DAYS=["ter 1/12","qua 2/12","qui 3/12","sex 4/12","sáb 5/12"],BUSY=["10:00","11:30","14:00","15:30","16:00"];
const K="lume";let S=null;try{S=JSON.parse(localStorage.getItem(K))}catch(e){}
S=S||{sel:[],pack:null,pro:{},day:0,slot:null,pay:"card",user:false,res:[]};
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
const $=s=>document.querySelector(s),brl=v=>"R$ "+v.toFixed(2).replace(".",","),ic=n=>`<svg class="i"><use href="#${n}"/></svg>`;
const hm=t=>{const[h,m]=t.split(":").map(Number);return h*60+m},fm=x=>String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0");
const pk=()=>PK.find(k=>k.id==S.pack),list=()=>S.pack?SV.filter(s=>pk().s.includes(s.id)):SV.filter(s=>S.sel.includes(s.id));
const total=()=>S.pack?pk().p:list().reduce((a,s)=>a+s.p,0),mins=()=>list().reduce((a,s)=>a+s.m+15,0);
const toast=m=>{const t=$("#ts");t.textContent=m;t.className="toast on";setTimeout(()=>t.className="toast",2600)};
function cta(){const n=list().length,g=$("#go");if(!g)return;$("#tt").innerHTML=n?`<b>${brl(total())}</b> <small>${S.pack?pk().n:n+" serviço(s)"}</small>`:"<small>Escolha um serviço ou pacote</small>";
 const ok=document.body.dataset.p=="horario"?S.slot:n;g.classList.toggle("off",!ok)}
const P={
index(){$("#packs").innerHTML=PK.map(k=>`<button class="pack ${S.pack==k.id?"on":""}" data-pk="${k.id}">${ic("tag")}<b>${k.n}</b><span>${k.d}</span><strong>${brl(k.p)}</strong></button>`).join("");
 $("#svs").innerHTML=SV.map(s=>`<button class="item ${!S.pack&&S.sel.includes(s.id)?"on":""}" data-sv="${s.id}">${ic(s.i)}<span class="gr"><b>${s.n}</b><small>${s.e} · ${s.m} min</small></span><b>${brl(s.p)}</b>${ic("check")}</button>`).join("");cta()},
profissionais(){$("#pros").innerHTML=list().map(s=>`<div class="card"><b>${s.n}</b><div class="chips" style="margin-top:8px"><button class="chip ${!S.pro[s.id]?"on":""}" data-pr="${s.id}|"><span class="av">?</span>Sem preferência</button>${PR[s.e].map(p=>`<button class="chip ${S.pro[s.id]==p?"on":""}" data-pr="${s.id}|${p}"><span class="av">${p[0]}</span>${p}</button>`).join("")}</div></div>`).join("")||"<p class='muted'>Volte ao início e escolha um serviço.</p>";cta()},
horario(){$("#days").innerHTML=DAYS.map((d,i)=>`<button class="slot ${S.day==i?"on":""}" data-d="${i}">${d}</button>`).join("");
 $("#dur").textContent=`Duração total: ${mins()} min (15 min de folga por serviço). Serviços em sequência.`;
 let h="";for(let x=540;x<=1080;x+=30){const t=fm(x);h+=`<button class="slot ${S.slot==t?"on":""}" data-t="${t}" ${BUSY.includes(t)||(S.day+x/30)%7==0?"disabled":""}>${t}</button>`}$("#slots").innerHTML=h;
 const s=$("#sm");s.hidden=!S.slot;if(S.slot)s.textContent=`Atendimento das ${S.slot} às ${fm(hm(S.slot)+mins())}.`;cta()},
cadastro(){$("#fm").onsubmit=e=>{e.preventDefault();S.user=true;save();location.href=list().length?"pagamento.html":"index.html"}},
pagamento(){if(!S.user)return location.replace("cadastro.html");
 $("#sum").innerHTML=list().map(s=>`<div class="r"><span>${s.n} · ${S.pro[s.id]||"menor agenda"}</span><span>${S.pack?"":brl(s.p)}</span></div>`).join("")+`<div class="r t"><span>${S.slot?DAYS[S.day]+" às "+S.slot:"Escolha um horário"}</span><span>${brl(total())}</span></div>`;
 $("#pm").innerHTML=[["card","Cartão"],["pix","Pix"]].map(([k,l])=>`<button class="chip ${S.pay==k?"on":""}" data-pay="${k}" style="padding:8px 16px">${l}</button>`).join("");
 $("#pf").innerHTML=S.pay=="card"?`<label>Número do cartão<input value="123456"></label><label>Parcelas<select><option>1x de ${brl(total())}</option>${total()>200?`<option>2x de ${brl(total()/2)} sem juros</option>`:""}</select></label>`:`<div class="note">QR Code Pix simulado. Toque em pagar para confirmar.</div>`;
 $("#pg").textContent="Pagar "+brl(total());$("#pg").classList.toggle("off",!S.slot||!list().length);
 $("#pg").onclick=()=>{S.res.push({n:list().map(s=>s.n).join(" + "),d:S.day,t:S.slot,v:total(),h:12+S.day*24,st:"ativa"});S.sel=[];S.pack=null;S.pro={};S.slot=null;save();location.href="confirmacao.html"}},
confirmacao(){const r=S.res[S.res.length-1];$("#cf").innerHTML=r?`<b>${DAYS[r.d]} às ${r.t}</b><br>${r.n}<br>${brl(r.v)} pagos. Aviso enviado por e-mail e WhatsApp.`:"Nenhuma reserva ainda."},
reservas(){$("#rs").innerHTML=S.res.map((r,i)=>{const f=r.h>24?1:.5,v=r.v*f;
 const a=r.st=="ativa"?`<button class="btn sec" data-c="${i}">Cancelar</button>`:r.st=="pedindo"?`<div class="note">Faltam ${r.h} h: devolução de ${f*100}% (${brl(v)}).<div class="row" style="margin-top:8px"><button class="btn" data-r="${i}|din">Receber em dinheiro</button><button class="btn sec" data-r="${i}|cre">Virar crédito (7 dias)</button></div></div>`:`<b class="ok">${r.st}</b>`;
 return `<div class="card"><b>${DAYS[r.d]} às ${r.t}</b><br>${r.n}<br><small>${brl(r.v)} · faltam ${r.h} h</small><div style="margin-top:10px">${a}</div></div>`}).join("")||`<div class="note">Nenhuma reserva ainda. <a href="index.html"><b>Reservar agora</b></a></div>`},
balcao(){$("#bs").innerHTML=SV.map(s=>`<option>${s.n}</option>`).join("")},
pacotes(){$("#ap").innerHTML=PK.map(k=>`<div class="card"><b>${k.n}</b><br><small>${k.d}</small><br><b>${brl(k.p)}</b></div>`).join("");const o=[1,3];
 const d=()=>{$("#chips").innerHTML=SV.map(s=>`<button class="chip ${o.includes(s.id)?"on":""}" data-ps="${s.id}" style="padding:8px 14px">${s.n}</button>`).join("");$("#pt").textContent="Preço de tabela: "+brl(SV.filter(s=>o.includes(s.id)).reduce((a,s)=>a+s.p,0))};d();
 document.addEventListener("click",e=>{const b=e.target.closest("[data-ps]");if(!b)return;const i=+b.dataset.ps;o.includes(i)?o.splice(o.indexOf(i),1):o.push(i);d()})}};
document.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const d=b.dataset,p=document.body.dataset.p;
 if(d.toast)return toast(d.toast);
 if(d.pk){S.pack=S.pack==d.pk?null:d.pk;S.sel=[]}else if(d.sv){S.pack=null;const i=+d.sv;S.sel=S.sel.includes(i)?S.sel.filter(x=>x!=i):[...S.sel,i]}
 else if(d.pr){const[i,n]=d.pr.split("|");S.pro[i]=n}else if(d.d){S.day=+d.d;S.slot=null}else if(d.t)S.slot=d.t;else if(d.pay)S.pay=d.pay;
 else if(d.c)S.res[+d.c].st="pedindo";else if(d.r){const[i,m]=d.r.split("|");S.res[+i].st=m=="din"?"Cancelada: devolução em dinheiro":"Cancelada: virou crédito de 7 dias"}else return;
 save();P[p]&&P[p]()});
const th=()=>{const b=$("#th");if(!b)return;const dk=document.documentElement.dataset.theme?document.documentElement.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches;b.innerHTML=ic(dk?"sun":"moon")};
try{const t=localStorage.getItem("lume-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}
$("#th")&&($("#th").onclick=()=>{const dk=document.documentElement.dataset.theme?document.documentElement.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches,n=dk?"light":"dark";document.documentElement.dataset.theme=n;try{localStorage.setItem("lume-theme",n)}catch(e){}th()});
th();const pg=document.body.dataset.p;P[pg]&&P[pg]();
