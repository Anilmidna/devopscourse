/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Cloud, 
  Cpu, 
  Terminal, 
  Server, 
  Shield, 
  Code, 
  Database, 
  Layers, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Clock, 
  Award,
  ChevronRight,
  BookOpen,
  Zap,
  Globe,
  BarChart3
} from "lucide-react";

const modules = [
  {
    title: "Module 1: Basics of IT Infrastructure",
    items: ["Introduction to IT Infrastructure and Components", "Virtualization Concepts", "Traditional Computing and Cloud Computing"]
  },
  {
    title: "Module 2: Essential Skills for DevOps",
    items: ["Basics of Git and Github Account Creation", "Introduction to Networking", "Basics of Unix/Linux Operating System"]
  },
  {
    title: "Module 3: Overview of Cloud Computing",
    items: ["Overview of AWS, Azure and GCP", "Deep dive of Popular AWS Services and Their Application", "Setting Up AWS Free Account and Basic Services"]
  },
  {
    title: "Module 4: Cloud Networking and Security",
    items: ["IAM - Authorization and Authentication", "VPC, Security Groups, Subnets", "Cloud Security"]
  },
  {
    title: "Module 5: Introduction to DevOps",
    items: ["DevOps Principles and Practices", "Overview of DevOps Concepts—CI/CD, DevSecOps", "Introduction & Setup DevOps Tools (Jenkins, Ansible, ArgoCD)"]
  },
  {
    title: "Module 6: Set Up Our First Pipeline in AWS",
    items: ["CI/CD Tools on AWS (Code Build, Code Deploy, and Code Pipeline)", "End-to-End DevOps Pipeline with AWS Services"]
  },
  {
    title: "Module 7: Infrastructure as a Code (IaC)",
    items: ["Introduction to IaC and Features", "Terraform and Cloud Formation Basics", "Hands-on Terraform and Cloud Formation"]
  },
  {
    title: "Module 8: Containerization and Orchestration",
    items: ["Docker Fundamentals and Architecture", "Working with Docker Images and Containers", "Kubernetes Core Concepts and Architecture", "Setting Up and Managing Kubernetes Clusters"]
  },
  {
    title: "Module 9: Build End-to-End DevOps CI/CD Pipeline",
    items: ["Designing a CI/CD Pipeline Framework", "Configuring Various Tools and Connections", "Multi-stage End-to-End DevOps Project", "Capstone Project Announcement"]
  },
  {
    title: "Module 10: Advanced DevOps",
    items: ["Argo CD & Ansible Handson", "GenAI for DevOps (AI-powered code generation, log analysis, auto-remediation)", "Intro to FinOps, MLOps, AIOps, DevSecOps"]
  },
  {
    title: "Module 11: Monitoring, Logging, and Security",
    items: ["Introduction to Monitoring and Logging Concepts", "Monitoring and Alerting with AWS CloudWatch", "Introduction to Open-Source Tools (Prometheus, Grafana)", "Centralized Logging with ELK Stack"]
  },
  {
    title: "Module 12: Project Review and Assessment",
    items: ["End-of-the-Course Assessment", "Review of Capstone Project", "Interview Preparation"]
  }
];

const highlights = [
  "Hands-on training with industry-relevant tools",
  "Capstone project simulating real-world DevOps pipeline",
  "Joint certification with IITM Pravartak",
  "Dedicated support and mentoring throughout the course",
  "Interview preparation and guidance"
];

const features = [
  { icon: <Globe className="w-5 h-5 text-emerald-400" />, text: "100% online instructor-led sessions" },
  { icon: <Users className="w-5 h-5 text-emerald-400" />, text: "Live interactive classes" },
  { icon: <Terminal className="w-5 h-5 text-emerald-400" />, text: "Hands-on labs and assignments" },
  { icon: <BarChart3 className="w-5 h-5 text-emerald-400" />, text: "Weekly assessments and progress tracking" },
  { icon: <Award className="w-5 h-5 text-emerald-400" />, text: "Final capstone project with mentoring" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Cloud className="text-black w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight">CloudDevOps<span className="text-emerald-500">.AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#curriculum" className="hover:text-white transition-colors">Curriculum</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#faculty" className="hover:text-white transition-colors">Faculty</a>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2.5 rounded-full transition-all font-semibold">
              Register Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-emerald-500/10 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4 fill-emerald-400" />
            <span>Powered by Generative AI</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Cloud Engineering (AWS) <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              & DevOps Mastery (Powered by GenAI)
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed"
          >
            Master the future of infrastructure with our comprehensive program. 
            Jointly certified by <span className="text-white font-medium">IITM Pravartak</span> and <span className="text-white font-medium">Qbend</span>.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              Enroll in Program
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all">
              Download Brochure
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Joint Certification By</span>
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                  <img src="https://picsum.photos/seed/iitm/100/100" alt="IITM Pravartak" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="font-bold text-lg">IITM Pravartak</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                  <img src="https://picsum.photos/seed/qbend/100/100" alt="Qbend" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="font-bold text-lg">Qbend Digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stats */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clock className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">1 Month Duration</h3>
            <p className="text-zinc-400">24 Hours ILT + 16 Hours Project & Lab Practice</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calendar className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Weekly Schedule</h3>
            <p className="text-zinc-400">3 Live ILT Sessions per week (2 hours each)</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="text-emerald-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Gen AI Powered</h3>
            <p className="text-zinc-400">AI-powered code generation, log analysis & remediation</p>
          </div>
        </div>
      </section>

      {/* Features & Highlights */}
      <section id="features" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Program Highlights</h2>
              <div className="space-y-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="text-lg text-zinc-300">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/10">
                <h4 className="font-bold text-emerald-400 mb-4 uppercase tracking-wider text-sm">On successful completion:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Equipped for roles like DevOps Engineer, Cloud Engineer, CI/CD Specialist</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Jointly issued certificate from IITM Pravartak and Qbend</span>
                  </li>
                  <li className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Completed capstone project demonstrating applied skills</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/devops/800/800" 
                  alt="DevOps Dashboard" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-[#111] border border-white/10 shadow-xl max-w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Learning Outcome</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  "Master Git, Docker, Jenkins, Kubernetes, Ansible, and Terraform through real-world scenarios."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Curriculum</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">12 intensive modules designed to take you from basics to advanced DevOps engineering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-all"
              >
                <h3 className="font-bold text-lg mb-4 text-emerald-400">{mod.title}</h3>
                <ul className="space-y-2">
                  {mod.items.map((item, j) => (
                    <li key={j} className="text-sm text-zinc-400 flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-emerald-500/50 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segment & Eligibility */}
      <section className="py-24 px-6 bg-emerald-500/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-emerald-400" />
              Who is this for?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500/50" />
                Engineering and science graduates
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500/50" />
                Final-year students seeking DevOps roles
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500/50" />
                Entry-level professionals seeking transition
              </li>
            </ul>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="text-emerald-400" />
              Prerequisites
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Basic knowledge of IT (OS, Networking, Cloud, Linux, etc.) and basic coding skills at a beginner level.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
              <Shield className="w-6 h-6 text-emerald-400" />
              <span className="text-sm font-medium">No prior cloud experience required.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Expert Faculty</h2>
              <p className="text-zinc-400">Learn from industry veterans and dedicated mentors.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-500">
                Industry Experts
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-500">
                24/7 Support
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img src="https://picsum.photos/seed/faculty1/400/500" alt="Lead Instructor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-1">Lead Instructor</p>
                  <h4 className="text-xl font-bold">Industry Expert</h4>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">Specializing in Cloud Architecture and DevOps at scale.</p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img src="https://picsum.photos/seed/faculty2/400/500" alt="Assistant Trainer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-1">Lab Mentor</p>
                  <h4 className="text-xl font-bold">Assistant Trainer</h4>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">Dedicated to lab sessions and doubt resolution.</p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img src="https://picsum.photos/seed/faculty3/400/500" alt="Capstone Mentor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-1">Project Mentor</p>
                  <h4 className="text-xl font-bold">Capstone Expert</h4>
                </div>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">Guiding you through real-world pipeline simulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-500/5 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to transform your career?</h2>
          <p className="text-zinc-400 text-lg mb-12">
            Join the next cohort and master Cloud Engineering & DevOps with the power of Generative AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black px-10 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Register for the Course
            </button>
            <div className="flex items-center gap-2 text-zinc-500 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Limited seats available
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Cloud className="text-black w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">CloudDevOps<span className="text-emerald-500">.AI</span></span>
          </div>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-sm text-zinc-600">
            © 2026 CloudDevOps.AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
