"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  Sliders,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Cpu,
} from "lucide-react";

export default function InteractiveDemoWidget() {
  const [modelType, setModelType] = useState<string>("EdgeTransformer");
  const [learningRate, setLearningRate] = useState<number>(0.001);
  const [qubitsOrLayers, setQubitsOrLayers] = useState<number>(12);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [metrics, setMetrics] = useState({
    accuracy: 94.2,
    latency: "18.5 ms",
    loss: 0.084,
    energySaved: "64%",
  });

  const handleRunSimulation = () => {
    setIsRunning(true);
    setProgress(0);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        // Calculate dynamic results based on sliders
        const accBonus = (qubitsOrLayers / 24) * 4.5;
        const finalAcc = Math.min(99.4, 94.0 + accBonus).toFixed(1);
        const finalLat = Math.max(4.2, 22.0 - qubitsOrLayers * 0.8).toFixed(1);
        const finalLoss = Math.max(0.005, 0.08 - learningRate * 20).toFixed(4);
        
        setMetrics({
          accuracy: parseFloat(finalAcc),
          latency: `${finalLat} ms`,
          loss: parseFloat(finalLoss),
          energySaved: `${Math.round(50 + qubitsOrLayers * 2.5)}%`,
        });
      }
    }, 180);
  };

  return (
    <div className="bg-gradient-to-br from-academic-navy via-slate-900 to-academic-navy text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden my-12">
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-academic-blue/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-academic-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 space-y-6">
        
        {/* Widget Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-academic-gold/20 text-academic-gold text-xs font-bold uppercase tracking-wider border border-academic-gold/30">
              <Sparkles className="w-3.5 h-3.5" />
              Live Interactive Research Simulator
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              AI & Quantum Inference Benchmark Sandbox
            </h3>
            <p className="text-xs text-slate-300">
              Simulate model optimization, pruning efficiency, and circuit execution metrics directly in your browser.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300 shrink-0">
            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>AI-QIS Engine Active</span>
          </div>
        </div>

        {/* Controls & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 p-5 rounded-2xl border border-white/10 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <Sliders className="w-4 h-4 text-academic-gold" />
              Hyperparameter Controls
            </div>

            {/* Model Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Target Model Architecture</label>
              <select
                value={modelType}
                onChange={(e) => setModelType(e.target.value)}
                className="w-full bg-slate-800 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs font-medium text-white focus:outline-none focus:border-academic-gold cursor-pointer"
              >
                <option value="EdgeTransformer">Dynamic Edge Transformer (CS-501)</option>
                <option value="QuantumQAOA">Hybrid Quantum QAOA Circuit (CS-704)</option>
                <option value="RAGMedical">Fact-Aligned RAG LLM (Healthcare AI)</option>
              </select>
            </div>

            {/* Qubits / Layers Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">
                  {modelType === "QuantumQAOA" ? "Qubit Count" : "Transformer Layers"}
                </span>
                <span className="text-academic-gold font-mono font-bold">{qubitsOrLayers}</span>
              </div>
              <input
                type="range"
                min={4}
                max={24}
                value={qubitsOrLayers}
                onChange={(e) => setQubitsOrLayers(Number(e.target.value))}
                className="w-full accent-academic-gold bg-slate-700 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Learning Rate Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Learning Rate (alpha)</span>
                <span className="text-academic-gold font-mono font-bold">{learningRate}</span>
              </div>
              <input
                type="range"
                min={0.0001}
                max={0.01}
                step={0.0005}
                value={learningRate}
                onChange={(e) => setLearningRate(Number(e.target.value))}
                className="w-full accent-academic-gold bg-slate-700 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Run Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              disabled={isRunning}
              onClick={handleRunSimulation}
              className={`w-full inline-flex items-center justify-center gap-2 font-bold text-xs py-3 rounded-xl shadow-lg transition-all ${
                isRunning
                  ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                  : "bg-academic-gold hover:bg-academic-gold-hover text-academic-navy"
              }`}
            >
              {isRunning ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  <span>Executing Optimization Matrix ({progress}%)...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-academic-navy" />
                  <span>Run Live Inference Simulation</span>
                </>
              )}
            </motion.button>

          </div>

          {/* Visualization & Live Output (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Progress Bar */}
            {isRunning && (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono text-slate-300">
                  <span>Simulating Multi-Node Tensor Operations...</span>
                  <span className="text-academic-gold font-bold">{progress}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <motion.div
                    className="bg-gradient-to-r from-academic-blue via-teal-400 to-academic-gold h-full rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
              </div>
            )}

            {/* Live Metrics Output Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Validation Accuracy</div>
                <div className="font-serif text-2xl font-bold text-academic-gold font-mono">
                  {metrics.accuracy}%
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Benchmarked
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Inference Latency</div>
                <div className="font-serif text-2xl font-bold text-white font-mono">
                  {metrics.latency}
                </div>
                <div className="text-[10px] text-blue-300">GPU Hardware</div>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Convergence Loss</div>
                <div className="font-serif text-2xl font-bold text-white font-mono">
                  {metrics.loss}
                </div>
                <div className="text-[10px] text-slate-400">MSE Bounds</div>
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center space-y-1">
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Energy Efficiency</div>
                <div className="font-serif text-2xl font-bold text-teal-300 font-mono">
                  {metrics.energySaved}
                </div>
                <div className="text-[10px] text-teal-400">Power Saved</div>
              </div>
            </div>

            {/* Terminal Live Output Box */}
            <div className="bg-black/60 p-4 rounded-2xl border border-white/10 font-mono text-[11px] space-y-1.5 text-slate-300 overflow-hidden">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2 mb-2 text-[10px]">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-academic-gold" />
                  GPU_CLUSTER_NODE_01 (NVIDIA H100)
                </span>
                <span className="text-emerald-400">STATUS: READY</span>
              </div>
              <p className="text-emerald-400">
                [OK] Loaded dataset parameters: {modelType} | Layers={qubitsOrLayers} | lr={learningRate}
              </p>
              <p className="text-slate-400">
                [INFO] Tensor reduction complete. Precision: FP16. Memory usage: 4.2GB / 80GB VRAM.
              </p>
              <p className="text-academic-gold font-bold">
                [SUCCESS] Optimal weights computed. Accuracy: {metrics.accuracy}% | Latency: {metrics.latency}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
