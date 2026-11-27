/* Estado local da demonstração. Nada é enviado para servidor. */
(function () {
  const KEY = 'aura-demo-v4';
  const TEAM = [
    {id:'p-carolina',name:'Carolina Melo',role:'Profissional',specialties:['Cabelos'],category:'Cabelos',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-renata',name:'Renata Dias',role:'Profissional',specialties:['Unhas e pés'],category:'Unhas e pés',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-juliana',name:'Juliana Rocha',role:'Profissional',specialties:['Rosto','Corpo e bem-estar'],category:'Rosto',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-patricia',name:'Patrícia Nunes',role:'Profissional',specialties:['Corpo e bem-estar'],category:'Corpo e bem-estar',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-julia',name:'Júlia Cardoso',role:'Profissional',specialties:['Corpo e bem-estar','Rosto'],category:'Corpo e bem-estar',contract:'CLT',shift:'Ter–sáb · 10h–19h'},
    {id:'p-helena',name:'Helena Costa',role:'Profissional',specialties:['Rosto'],category:'Rosto',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-bruna',name:'Bruna Lopes',role:'Profissional',specialties:['Corpo e bem-estar'],category:'Corpo e bem-estar',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-luiza',name:'Luiza Monteiro',role:'Profissional',specialties:['Rosto'],category:'Rosto',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-ana',name:'Ana Ferreira',role:'Profissional',specialties:['Unhas e pés'],category:'Unhas e pés',contract:'CLT',shift:'Ter–sáb · 10h–19h'},
    {id:'p-sofia',name:'Sofia Martins',role:'Profissional',specialties:['Cabelos'],category:'Cabelos',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-camila',name:'Camila Melo',role:'Profissional',specialties:['Cabelos','Rosto'],category:'Cabelos',contract:'CLT',shift:'Ter–sáb · 09h–18h'},
    {id:'p-leticia',name:'Letícia Barros',role:'Profissional',specialties:['Unhas e pés'],category:'Unhas e pés',contract:'CLT',shift:'Ter–sáb · 09h–18h'}
  ];
  const ROLES = {
    admin:{label:'Administradora',name:'Mariana Costa',home:'dashboard',permissions:['dashboard','agenda','clientes','servicos','equipe','financeiro','pacotes','relatorios','configuracoes','balcao','fila','profissional']},
    recepcao:{label:'Recepção',name:'Fernanda Lima',home:'balcao',permissions:['dashboard','agenda','clientes','balcao','fila']},
    profissional:{label:'Profissional',name:'Carolina Melo',employeeId:'p-carolina',home:'minha-agenda',permissions:['minha-agenda','disponibilidade']},
    gerente:{label:'Gerência',name:'Mariana Costa',home:'agenda',permissions:['dashboard','agenda','clientes','equipe','relatorios','fila']},
    marketing:{label:'Marketing',name:'Equipe de Marketing',home:'pacotes',permissions:['pacotes','relatorios','servicos']},
    ti:{label:'TI',name:'Suporte técnico',home:'configuracoes',permissions:['configuracoes','relatorios']}
  };
  const pad = n => String(n).padStart(2,'0');
  const ymd = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  const parseDate = s => { const [y,m,d]=String(s).split('-').map(Number); return new Date(y,m-1,d,12,0,0); };
  const addDays = (d,n) => { const x=new Date(d); x.setDate(x.getDate()+n); return x; };
  const business = d => [2,3,4,5,6].includes(d.getDay());
  const nextBusiness = (base, offset=0) => { let d=new Date(base); d.setHours(12,0,0,0); let found=0; while(found<=offset){if(business(d)){if(found===offset)return d;found++;}d=addDays(d,1);}return d; };
  const fmtDate = s => parseDate(s).toLocaleDateString('pt-BR',{weekday:'short',day:'2-digit',month:'short'}).replace('.','');
  const today = () => ymd(new Date());
  const minutes = t => {const [h,m]=String(t).split(':').map(Number);return h*60+m;};
  const time = n => `${pad(Math.floor(n/60))}:${pad(n%60)}`;
  const money = n => Number(n||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  const escape = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dateRange = (count=14) => {let out=[],now=new Date(),d=new Date(now);d.setHours(12,0,0,0);if(business(now)&&now.getHours()*60+now.getMinutes()>=1140)d=addDays(d,1);while(out.length<count){if(business(d) && ymd(d)>=today())out.push(ymd(d));d=addDays(d,1);}return out;};
  const firstBookableDate = () => dateRange(1)[0] || ymd(nextBusiness(addDays(new Date(),1),0));
  const seedAppointments = () => {
    const ds = firstBookableDate();
    const samples = [
      ['demo-1','Beatriz Oliveira','corte-feminino','p-carolina','09:00','confirmado'],
      ['demo-2','Laura Ribeiro','esmalte-maos','p-renata','09:15','confirmado'],
      ['demo-3','Luiza Monteiro','revitalizacao-facial','p-juliana','10:30','confirmado'],
      ['demo-4','Bruna Lopes','massagem-relaxante','p-patricia','11:00','confirmado'],
      ['demo-5','Isabela Martins','limpeza-profunda','p-juliana','13:00','confirmado'],
      ['demo-6','Mariana Alves','escova-modelada','p-camila','14:00','confirmado'],
      ['demo-7','Ana Ferreira','unha-gel','p-ana','15:00','confirmado'],
      ['demo-8','Clara Gomes','peeling-ultrassonico','p-helena','16:00','confirmado']
    ];
    const cat=window.AURA_CATALOG.services;
    return samples.map((s,i)=>{const service=cat.find(x=>x.id===s[2]);return {id:s[0],bookingId:s[0],customer:s[1],cpf:'',phone:'',email:'',date:ds,start:s[4],services:[{serviceId:s[2],professionalId:s[3],professionalMode:'chosen',start:s[4],duration:service?.duration||60}],total:service?.price||0,paymentMethod:i%2?'Cartão de crédito':'Pix',paymentStatus:'Aprovado',status:s[5],source:'site',isDemo:true,createdAt:new Date().toISOString(),notes:'Reserva fictícia para demonstrar a agenda.'};});
  };
  const defaultState = () => ({
    version:4,
    customer:null,
    appointments:seedAppointments(),
    queue:[
      {id:'q-demo-1',name:'Camila Rodrigues',serviceId:'esmalte-maos',preferredProfessional:'p-renata',arrivalAt:'10:08',status:'aguardando',isDemo:true},
      {id:'q-demo-2',name:'Fernanda Lima',serviceId:'escova-lisa',preferredProfessional:'',arrivalAt:'10:16',status:'aguardando',isDemo:true},
      {id:'q-demo-3',name:'Bianca Almeida',serviceId:'sobrancelhas',preferredProfessional:'',arrivalAt:'10:24',status:'aguardando',isDemo:true}
    ],
    credits:[],
    packages:[],
    team:TEAM,
    customServices:[],
    serviceOverrides:{},
    inactiveServices:[],
    config:{open:'09:00',close:'19:00',days:[2,3,4,5,6],grid:15,cleaning:15,delay:15,cancellationHours:24,noShowPercent:50,creditDays:7,assignment:'menor-agenda',maxBookings:30,minAdvanceHours:null,slotHoldMinutes:null},
    fidelity:{enabled:false,description:'Proposta didática de cashback por consumo; regras ainda dependem de aprovação.'},
    lastUpdated:new Date().toISOString()
  });
  const load = () => {try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&s.version===4)return {...defaultState(),...s,config:{...defaultState().config,...(s.config||{})}};}catch(e){}return defaultState();};
  let state = load();
  const save = () => {state.lastUpdated=new Date().toISOString();try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){console.warn('Não foi possível salvar a demonstração no navegador.',e);}window.dispatchEvent(new CustomEvent('aura:state',{detail:state}));};
  const get = () => state;
  const update = fn => {fn(state);save();return state;};
  const reset = () => {state=defaultState();save();return state;};
  const staff = () => state.team;
  const service = id => {const base=[...window.AURA_CATALOG.services,...state.customServices].find(x=>x.id===id);return base?{...base,...(state.serviceOverrides?.[id]||{})}:null;};
  const pro = id => state.team.find(x=>x.id===id);
  const activeServices = () => [...window.AURA_CATALOG.services,...state.customServices].map(x=>({...x,...(state.serviceOverrides?.[x.id]||{})})).filter(x=>!state.inactiveServices.includes(x.id) && x.active!==false);
  const role = id => ROLES[id]||ROLES.admin;
  const setSession = s => {try{sessionStorage.setItem('aura-session',JSON.stringify(s));}catch(e){};};
  const session = () => {try{return JSON.parse(sessionStorage.getItem('aura-session')||'null');}catch(e){return null;}};
  const clearSession = () => {try{sessionStorage.removeItem('aura-session');}catch(e){};};
  const activeCredit = cpf => state.credits.filter(c=>c.cpf===cpf && c.amount>0 && c.expiresAt>=today()).reduce((a,c)=>a+c.amount,0);
  const addCredit = (cpf,amount,reason) => {if(!cpf||amount<=0)return null;const c={id:'cred-'+Date.now(),cpf,amount,reason,createdAt:today(),expiresAt:ymd(addDays(new Date(),state.config.creditDays)),transferable:false};state.credits.push(c);save();return c;};
  const consumeCredit = (cpf,amount) => {let left=amount;for(const c of state.credits.filter(x=>x.cpf===cpf&&x.expiresAt>=today()&&x.amount>0)){const used=Math.min(left,c.amount);c.amount-=used;left-=used;if(left<=0)break;}save();return amount-left;};
  window.Aura = {KEY,TEAM,ROLES,pad,ymd,parseDate,addDays,business,nextBusiness,firstBookableDate,fmtDate,today,dateRange,minutes,time,money,escape,get,update,save,reset,staff,service,pro,activeServices,role,setSession,session,clearSession,activeCredit,addCredit,consumeCredit};
})();
