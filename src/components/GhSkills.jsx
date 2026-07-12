import { skillGroups } from '../data'
import {
  Nodejs, Express, SocketIO, MongoDB, Postgres, MySQL, Redis, RabbitMQ,
  AWS, Docker, JavaScript, Python, Cpp,
  AiSpark, ChainMark, GraphMark, VectorMark, LayersMark, BracesMark, DbMark,
  GatewayMark, CpuMark, RestMark,
} from '../logos'
import { RepoIcon } from './GhIcons'

const logoMap = [
  ['LangGraph', GraphMark],
  ['LangChain', ChainMark],
  ['LLM', AiSpark],
  ['RAG', LayersMark],
  ['Prompt', BracesMark],
  ['Qdrant', VectorMark],
  ['Node', Nodejs],
  ['Express', Express],
  ['REST', RestMark],
  ['Microservices', CpuMark],
  ['API Gateway', GatewayMark],
  ['Socket', SocketIO],
  ['MongoDB', MongoDB],
  ['PostgreSQL', Postgres],
  ['MySQL', MySQL],
  ['Redis', Redis],
  ['RabbitMQ', RabbitMQ],
  ['BullMQ', RabbitMQ],
  ['S3', AWS],
  ['Lambda', AWS],
  ['CloudFront', AWS],
  ['AWS', AWS],
  ['Docker', Docker],
  ['JavaScript', JavaScript],
  ['Python', Python],
  ['C++', Cpp],
  ['SQL', DbMark],
  ['DSA', BracesMark],
  ['System Design', CpuMark],
]

function logoFor(label) {
  const hit = logoMap.find(([key]) => label.toLowerCase().includes(key.toLowerCase()))
  return hit ? hit[1] : null
}

const groupIcon = {
  'Agentic / AI': '🤖',
  Backend: '⚙️',
  'Data & Messaging': '🗄️',
  'Cloud & DevOps': '☁️',
  'Languages & Core': '💻',
}

export default function GhSkills() {
  return (
    <section className="gh-readme" id="stack">
      <div className="gh-readme-head">
        <RepoIcon />
        <b>tech-stack</b>&nbsp;/&nbsp;skills.md
      </div>
      <div className="gh-readme-body">
        <h1 style={{ fontSize: 20 }}>🛠️ Tech Stack</h1>
        <p className="sub">Tools and technologies I build with, by area.</p>

        <div className="stack-groups">
          {skillGroups.map((g) => (
            <div className="stack-group" key={g.title}>
              <div className="stack-group-h">
                <span className="sg-emoji" aria-hidden>{groupIcon[g.title] || '▹'}</span>
                {g.title}
                <span className="sg-count">{g.items.length}</span>
              </div>
              <div className="stack-items">
                {g.items.map((it) => {
                  const Logo = logoFor(it)
                  return (
                    <span className="stack-chip" key={it}>
                      {Logo && <span className="stack-mark"><Logo /></span>}
                      {it}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
