"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  Calculator,
  Network,
  GraduationCap,
  Heart,
  BarChart3,
  FlaskRoundIcon as Flask,
  Shield,
  Truck,
  Rocket,
  Leaf,
  Gamepad2,
} from "lucide-react"
import IndustryCard from "./industry-card"

type Industry = {
  id: number
  name: string
  icon: React.ReactNode
  problem: string
  solution: string
}

const industries: Industry[] = [
  {
    id: 1,
    name: "Artificial Intelligence & Cognitive Systems",
    icon: <Brain className="h-5 w-5" />,
    problem:
      "Modern AI models like LLMs and neural networks are not inherently interpretable or modular. They struggle with long-term reasoning, context tracking, and aligning outputs with structured logic or verified knowledge.",
    solution:
      "UOR encodes knowledge using identifiable units (Handles), structured containers (Codex), and controlled logic flows (Cortex). This architecture allows AI systems to evolve understanding step-by-step, validate intermediate conclusions, and reason through transparent circuits — supporting hybrid symbolic-connectionist systems with deep traceability.",
  },
  {
    id: 2,
    name: "Mathematics & Scientific Research",
    icon: <Calculator className="h-5 w-5" />,
    problem:
      "Scientific knowledge is often siloed, informal, and lacks traceable structure. Proofs and models are difficult to reuse or recombine, and the process of peer validation is slow and error-prone.",
    solution:
      "UOR allows researchers to represent mathematical objects and scientific concepts as structured, layered circuits. Each concept is grounded in a canonical reference, connected through formal rules, and resolved via coherence criteria. This transforms scientific reasoning into a modular, computable system, enabling faster cross-disciplinary synthesis, verification, and discovery.",
  },
  {
    id: 3,
    name: "Web3 / Web4 & Decentralized Technology",
    icon: <Network className="h-5 w-5" />,
    problem:
      "Blockchain and decentralized systems lack unified semantics — identities, tokens, and assets often exist in isolated formats, making integration and trust verification cumbersome and insecure.",
    solution:
      'UOR introduces ontological clarity to decentralized systems. Every digital object has a defined source (Canon), data container (Codex), and logic interface (Cortex). This enables portable, provable digital identities, composable smart contracts, and secure data lineage — forming a stable, interoperable "reality layer" for Web4 infrastructure.',
  },
  {
    id: 4,
    name: "Education & Learning Systems",
    icon: <GraduationCap className="h-5 w-5" />,
    problem:
      "Current learning platforms deliver content in fragmented ways, with poor personalization. There's no universal structure to represent concepts, track student understanding, or evolve curricula over time.",
    solution:
      "UOR models learning pathways as structured circuits, where each concept (Handle) is logically connected to prior knowledge and future dependencies. This enables adaptive learning maps, recursive curriculum design, and cognitive feedback that evolves with each learner's understanding, providing scalable personalization across domains.",
  },
  {
    id: 5,
    name: "Healthcare & Medical Systems",
    icon: <Heart className="h-5 w-5" />,
    problem:
      "Electronic health records (EHRs) are often incomplete, incompatible across systems, and poorly structured. Clinical decisions rely on fragmented data and ad hoc logic.",
    solution:
      "UOR models clinical data and treatment logic as coherent, modular circuits. Canonical references ground patient facts (labs, symptoms), Codex stores structured records and care plans, and Cortex resolves diagnostic and procedural rules. This enables dynamic, interoperable decision support and precision care planning that adapts to patient history in real time.",
  },
  {
    id: 6,
    name: "Finance & Risk Management",
    icon: <BarChart3 className="h-5 w-5" />,
    problem:
      "Financial institutions manage layered, interdependent instruments with limited transparency and auditability. Regulatory compliance and systemic risk modeling are inefficient and reactive.",
    solution:
      "UOR encodes financial instruments and transactions as traceable, modular circuits. The Cortex layer supports recursive valuation logic, while Codex containers map multi-party interactions. This enables real-time risk aggregation, composable audit trails, and rule-driven compliance monitoring across internal and regulatory boundaries.",
  },
  {
    id: 7,
    name: "Biotech & Life Sciences",
    icon: <Flask className="h-5 w-5" />,
    problem:
      "Mapping biological systems — such as gene expression pathways or protein interactions — is complex, non-linear, and poorly integrated across tools and ontologies.",
    solution:
      "UOR represents biomolecular data as recursive circuits where each gene, protein, or pathway step is a stable Handle. The Cortex governs biological logic (e.g., gene regulation), while Codex captures system states (e.g., expression levels, phenotypes). This makes it easier to model disease mechanisms, simulate intervention outcomes, and design synthetic biology workflows.",
  },
  {
    id: 8,
    name: "Cybersecurity & Identity",
    icon: <Shield className="h-5 w-5" />,
    problem:
      "Digital identity systems are fragmented, static, and easy to spoof. Authentication and access control mechanisms are often brittle or over-reliant on centralized authorities.",
    solution:
      "UOR establishes dynamic, decentralized identities with verifiable lineage. Canonical identity primitives (keys, credentials) are linked to structured roles or claims (Codex), governed by programmable logic (Cortex). This supports zero-trust architectures, secure delegation, and self-sovereign identity models with built-in auditability.",
  },
  {
    id: 9,
    name: "Supply Chain & Logistics",
    icon: <Truck className="h-5 w-5" />,
    problem:
      "Multi-party logistics networks lack visibility, coherence, and real-time traceability. Paperwork, platform incompatibility, and fraud disrupt trust and efficiency.",
    solution:
      "UOR enables verifiable asset tracking across each supply chain step. Each item or batch is represented by a Canon reference, current state is stored in the Codex, and shipping logic is defined in the Cortex. Recursive endpoints support end-to-end tracking, automatic discrepancy resolution, and compliance reporting without manual reconciliation.",
  },
  {
    id: 10,
    name: "Aerospace & Systems Engineering",
    icon: <Rocket className="h-5 w-5" />,
    problem:
      "Complex aerospace systems integrate dozens of subsystems (navigation, propulsion, telemetry) that require precise synchronization. Fault propagation is difficult to predict.",
    solution:
      "UOR models each component and its control logic as a circuit within a larger, hierarchical system. Canonical primitives (e.g., sensor inputs) are tracked to Codex containers (subsystem states), while Cortex governs control flow. This supports model-based design, predictive diagnostics, and system coherence under dynamic conditions.",
  },
  {
    id: 11,
    name: "Environmental Science & Sustainability",
    icon: <Leaf className="h-5 w-5" />,
    problem:
      "Ecological systems are chaotic and interconnected, yet current models often fail to reflect causality across multiple scales. Data is fragmented, and policy simulations lack systemic feedback.",
    solution:
      "UOR creates scalable ecological models that represent species, ecosystems, and climate variables as recursive, coherent circuits. It connects local actions to global impacts through layered mapping — allowing scientists and planners to simulate feedback loops, assess sustainability thresholds, and prioritize interventions with systemic awareness.",
  },
  {
    id: 12,
    name: "Game Design & Simulation",
    icon: <Gamepad2 className="h-5 w-5" />,
    problem:
      "As games grow in complexity, managing story logic, player states, and dynamic world behavior becomes error-prone and inconsistent. Branching narratives often break or contradict themselves.",
    solution:
      "UOR treats all game mechanics — story branches, character states, environmental conditions — as structured, layered logic. Handles represent in-game entities or events; Codex stores their current form; Cortex controls how they evolve. This ensures world coherence, supports emergent gameplay, and simplifies debugging of complex interactive systems.",
  },
]

export default function IndustryApplications() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(industries[0])

  // Memoize the click handler for better performance
  const handleIndustryClick = useCallback((industry: Industry) => {
    setActiveIndustry(industry)
  }, [])

  return (
    <div className="w-full py-4">
      <h3 className="text-xl font-medium mb-6 text-center">Industry Applications</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-8">
        {industries.map((industry) => (
          <IndustryCard
            key={industry.id}
            icon={industry.icon}
            name={industry.name}
            isActive={activeIndustry.id === industry.id}
            onClick={() => handleIndustryClick(industry)}
          />
        ))}
      </div>

      <motion.div
        className="bg-black-200 rounded-xl overflow-hidden border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={activeIndustry.id}
      >
        <div className="flex items-center justify-center gap-3 p-3 sm:p-4 border-b border-white/10 bg-black-300">
          <div className="bg-gradient-to-br from-revolut-blue-500 to-revolut-purple-500 p-2 sm:p-3 rounded-lg">
            {activeIndustry.icon}
          </div>
          <h4 className="font-medium text-sm sm:text-base text-white">{activeIndustry.name}</h4>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-4 sm:mb-6">
            <h5 className="font-medium text-xs sm:text-sm uppercase tracking-wider text-white/50 mb-2 text-center">
              Problem
            </h5>
            <p className="text-white text-sm sm:text-base">{activeIndustry.problem}</p>
          </div>

          <div>
            <h5 className="font-medium text-xs sm:text-sm uppercase tracking-wider text-white/50 mb-2 text-center">
              UOR Solution
            </h5>
            <p className="text-white text-sm sm:text-base">{activeIndustry.solution}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
