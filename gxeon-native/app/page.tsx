"use client";
import { useState } from "react";
import { Activity, Bot, BrainCircuit, CheckCircle2, CircleDot, Command, GitBranch, ShieldCheck, Workflow, Zap, Database, Server, Plug, ArrowUpRight, Menu, Search, Bell, Plus, ChevronRight } from "lucide-react";

const agents = [
  { name: "GXEON Core", role: "Orquestração central", status: "Planejado", color: "gold", icon: BrainCircuit },
  { name: "AgEON Auditor", role: "Auditoria e evidências", status: "Planejado", color: "blue", icon: ShieldCheck },
  { name: "GXEON Developer", role: "Engenharia de APIs", status: "Planejado", color: "violet", icon: Workflow },
];
const modules = [
  { name: "Model Router", desc: "Adaptadores multi-modelo", icon: BrainCircuit },
  { name: "MCP Gateway", desc: "Ferramentas com permissões", icon: Plug },
  { name: "Task Engine", desc: "Filas e execução rastreável", icon: Activity },
  { name: "Evidence Ledger", desc: "Provas e trilha de auditoria", icon: Database },
];
export default function Home() {
  const [tab,setTab] = useState("Visão geral");
  const [query,setQuery] = useState("");
  return <main className="shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Command size={21}/></div><div><b>GXEON</b><small> XPeX SYSTEMS AI</small></div></div>
      <div className="workspace"><span className="dot"/> COMMAND CENTER <span className="chev">⌄</span></div>
      <div className="nav-label">OPERAÇÃO</div>
      {["Visão geral","Agentes","Modelos de IA","Ferramentas MCP","Tarefas","Evidências","Auditoria"].map((n,i)=><button className={tab===n?"nav active":"nav"} onClick={()=>setTab(n)} key={n}><span>{["◈","◎","✳","⌘","≋","⬡","⛨"][i]}</span>{n}</button>)}
      <div className="sidebar-bottom"><div className="secure"><ShieldCheck size={16}/> Evidence-first governance</div><div className="user"><div className="avatar">JS</div><div><b>Operador</b><small>Founder · XPeX Systems AI</small></div><span>•••</span></div></div>
    </aside>
    <section className="content">
      <header><div className="mobile-brand"><Command/> GXEON</div><div className="crumb">Workspace <ChevronRight size={14}/> <b>{tab}</b></div><div className="header-actions"><button className="icon-btn"><Search size={17}/></button><button className="icon-btn"><Bell size={17}/></button><div className="live"><i/> CLOUD CONSOLE</div></div></header>
      <div className="page">
        <div className="eyebrow"><span/> SISTEMA OPERACIONAL DE AGENTES</div>
        <div className="hero-row"><div><h1>{tab === "Visão geral" ? "Centro de comando." : tab + "."}</h1><p>Inteligência conectada. Execução governada. Resultados comprováveis.</p></div><button className="primary" onClick={()=>setTab("Agentes")}><Plus size={16}/> Novo agente</button></div>
        <div className="banner"><div className="banner-icon"><Zap size={20}/></div><div><b>GXEON Native está em construção</b><p>Esta é a primeira interface operacional. Os conectores e runtimes serão ativados após validação de cada serviço.</p></div><span className="tag">FOUNDATION</span></div>
        <div className="section-head"><div><h2>Infraestrutura</h2><p>Camadas previstas para a operação GXEON</p></div><span className="muted">27 NOV 2026</span></div>
        <div className="infra-grid">
          {[{n:"Frontend",v:"Vercel",s:"Interface e cockpit",icon:Activity},{n:"Core API",v:"Railway",s:"Runtime de agentes",icon:Server},{n:"Dados e memória",v:"Supabase",s:"PostgreSQL · pgvector",icon:Database}].map((x)=><div className="infra-card" key={x.n}><div className="infra-top"><x.icon size={18}/><span className="tag">ALVO</span></div><small>{x.n}</small><strong>{x.v}</strong><p>{x.s}</p></div>)}
        </div>
        <div className="section-head"><div><h2>Agentes do ecossistema</h2><p>Perfis iniciais — ainda sem execução habilitada</p></div><button className="text-btn" onClick={()=>setTab("Agentes")}>Ver todos <ArrowUpRight size={14}/></button></div>
        <div className="agent-grid">{agents.map((a)=><div className="agent-card" key={a.name}><div className={"agent-icon "+a.color}><a.icon size={20}/></div><div className="agent-info"><b>{a.name}</b><small>{a.role}</small></div><span className="status">{a.status}</span></div>)}</div>
        <div className="section-head"><div><h2>Camadas de inteligência</h2><p>Componentes da arquitetura modular</p></div></div>
        <div className="module-grid">{modules.map(m=><div className="module" key={m.name}><m.icon size={19}/><div><b>{m.name}</b><small>{m.desc}</small></div><ChevronRight size={16}/></div>)}</div>
        <div className="bottom-grid"><div className="panel"><div className="panel-title"><b>Fila de execução</b><span className="tag">AGUARDANDO BACKEND</span></div><div className="empty"><CircleDot size={24}/><b>Nenhuma tarefa ativa</b><small>As tarefas aparecerão aqui após a conexão da API.</small></div></div><div className="panel"><div className="panel-title"><b>Governança</b><ShieldCheck size={17}/></div><div className="guard"><CheckCircle2/><div><b>Aprovação humana</b><small>Obrigatória para ações críticas</small></div></div><div className="guard"><CheckCircle2/><div><b>Evidence first</b><small>Sem prova, sem conclusão</small></div></div><div className="guard"><CheckCircle2/><div><b>Segredos protegidos</b><small>Variáveis somente no servidor</small></div></div></div></div>
        <footer><span>GXEON · XPeX SYSTEMS AI</span><span>INDEPENDENT AGENT OPERATING SYSTEM · FOUNDATION BUILD</span></footer>
      </div>
    </section>
  </main>;
}