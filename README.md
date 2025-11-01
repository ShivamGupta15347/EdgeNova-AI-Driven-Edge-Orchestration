Got it! You want a **concise, clean README** that represents your **EdgeNova project**, combining all three components, without overwhelming step-by-step instructions. Here’s a polished version based on your references:

---

# EdgeNova: AI-Driven Edge Device Orchestration Platform

**EdgeNova** is an intelligent platform for managing edge devices by modeling their behavior and dynamically executing AI-generated commands. It unifies device orchestration, AI-powered shell execution, and dashboard monitoring in a single AI-driven ecosystem.

---

## Overview

EdgeNova solves the challenges of traditional device management:

* **Cross-platform complexity:** Eliminates hardcoded OS-specific logic.
* **Dynamic execution:** AI generates device-specific commands in real-time.
* **Minimal disruption:** Reduces frequent agent updates.
* **Unified monitoring:** Centralized dashboard with real-time MQTT command interface.

---

## Core Components

### 1. MQTT-AI Shell Executor

A Go-based Dockerized service that:

* Listens to MQTT messages (`{"prompt": "command"}`).
* Generates shell scripts via a local AI model.
* Executes scripts on the device and reports output.
* Fully containerized for cross-platform deployment.

### 2. Esper Dashboard Clone

A React TypeScript dashboard that:

* Replicates the Esper device management UI.
* Provides real-time device stats, security overview, and location mapping.
* Sends MQTT commands to devices via an integrated command prompt.
* Built with React, TypeScript, Vite, and MQTT.js.

### 3. Shell Script Generator API

A Go REST API using Ollama (Llama 3.2:1B) that:

* Converts user prompts into executable shell scripts.
* Supports Docker deployment for easy setup.
* Optimized for minimal explanation, safe execution, and persistent model storage.

---

## Architecture

```
+------------------+         +------------------+         +----------------+
|   Esper Cloud    |  ---->  | EdgeNova Agent   |  ---->  | Device OS/     |
|  (High-level     |         | (Orchestration) |         | Hardware       |
|   commands)      |         |  + AI Executor) |         +----------------+
+------------------+         +------------------+
                                    |
                                    v
                        +-------------------------+
                        | Private LLM (Device Model)|
                        | Generates platform-specific |
                        | commands dynamically      |
                        +-------------------------+
```

* **Orchestration Layer:** Collects device context, executes AI-generated instructions, sends telemetry.
* **Device Model Layer:** Private hosted LLM generates optimized instructions for any OS/platform.

---

## Key Features

* **AI-Powered Command Execution:** Dynamically generate and execute shell commands.
* **Cross-Platform Compatibility:** Works across Android, Linux, Windows, and more.
* **Real-Time Monitoring:** Dashboard shows device stats, command status, and alerts.
* **Secure & Extensible:** MQTT messages are encrypted; modular architecture for future expansion.

---

## Technology Stack

* **Backend:** Go, Docker, Ollama LLM
* **Frontend:** React, TypeScript, Vite, MQTT.js
* **Communication:** MQTT over TLS
* **Visualization:** Recharts, Lucide React

---

## Usage (High-Level)

1. Run the **AI Shell Executor** to listen for MQTT commands.
2. Start the **Shell Script Generator API** for prompt-to-script conversion.
3. Launch the **Dashboard** to monitor devices and send commands.
4. EdgeNova dynamically generates and executes commands, updating device state in real-time.

---

## Impact

* Faster feature delivery for new OS versions.
* Reduced code complexity and maintenance burden.
* Unified approach to edge device management using AI.
* Scalable, secure, and future-proof architecture.

---

## License

This project is for demonstration purposes as part of **Esper Spark 2K25: AI Edition**.

---

If you want, I can also create a **shorter “one-screen” version** that’s even more concise for GitHub, keeping it **under ~200 lines** but still clearly shows **all three modules and AI integration**.

Do you want me to do that?
