# 🏥 Clinica Collab — Appointments Engine

**Clinica Collab (Appointments Engine)** is a data-driven, real-time medical workspace engineered to centralize, track, and streamline clinical scheduling pipelines. Powered by active cloud streams and strict operational validations, the engine completely replaces legacy static calendars with an optimized, real-time grid designed for maximum daily throughput.

> 🖥️ **Desktop-Exclusive Operational Design:** This production system was explicitly structured for desktop terminals, high-density dashboard monitors, and rapid mouse/keyboard inputs used by medical administrative staffs and clinic operators. It contains no reactive mobile view overrides.

---

## 🌐 Link do Projeto

A versão estável e em produção da aplicação pode ser acedida diretamente através do link abaixo:

🔗 **[Aceder ao Clinica Collab (Appointments Engine)](#)** *(Substitui este texto pelo link real do teu site no Vercel/Netlify/Firebase Hosting)*

---

## 📸 Demonstração da Interface

![Painel de Agendamentos da Clínica Collab](src/assets/screen.png)

---
## 🚀 Core Features

### 📅 Active Medical Grid Orchestration
The primary view maps multi-practitioner schedules into an active spreadsheet matrix with dynamic layout constraints.
* **Dynamic Column Metric Binding:** Column generation calculations auto-scale layout boundaries dynamically (`1 + (doctors.length * 2)`) based on real-time roster changes.
* **Granular Timeline Matrix:** Dissects medical operating shifts into precise, predictable **35-minute operational blocks** running seamlessly from `08:00` to `18:00`.
* **Isolated Matrix Cell Mutation:** Clean identification blocks render visual booking statuses, patient identities, and clinical deletions directly inline.

### 🔥 Real-Time Multi-Terminal Cloud Sinking
Backend orchestration leverages native Firestore snapshot event listeners to preserve systemic state consistency.
* **`onSnapshot` Pipeline Infrastructure:** Established document reference streams maintain absolute data alignments across separate front-office devices simultaneously.
* **Memory Management Cleanup:** Component lifecycles wrap native collection streams to cleanly invoke `unsubscribe()` on layout teardown, blocking memory leaks dead in their tracks.
* **Asynchronous Mutation Handling:** Decoupled execution contexts run data updates (`addDoc`, `deleteDoc`) inside highly resilient `try/catch` wrappers.

### ⏰ Automated Booking Validation Guards
The interactive scheduling block encapsulates a multi-tier protection filter to guard against input failures and overbooking.
* **Cross-Doctor Collision Filters:** Interactive scheduling components read the state matrix to filter out and hide time slots already reserved under specific doctor IDs for chosen calendar days.
* **Past-Time Horizon Guards:** When scheduling items for the current day, boundary calculations split operational timestamps against the browser clock to dynamically block out past slots.
* **Calculated Service Endtimes:** Input fields compute consultation end boundaries by passing string structures through localized minute offset mutations (`minutes + 35`).

---

## 💻 Environment Capabilities

| Client Interface | Support Status | Native Target Workspace Environment |
| :--- | :---: | :--- |
| **Dedicated Desktop Workstations** | ✅ Supported | Front-office medical terminals, administrator desks, reception hubs |
| **Mobile Web Shells (Smartphones)** | ❌ Unsupported | Restricted (Interface requires high-density display fields) |
| **Tablet Viewports** | ❌ Unsupported | Restricted (Interface relies heavily on mouse interaction models) |

---

## 🛠️ Infrastructure Tech Stack

### Frontend Rendering Engine
* **React 19:** Orchestrates fine-grained render passes, localized form states, and declarative conditional element branches.
* **Vite Pipeline:** Manages client-side delivery assets, hot module replacements, and production bundle minification.
* **TypeScript:** Secures data flows via structural typing interfaces, preventing runtime data definition crashes.

### Cloud Data Layer
* **Firebase & Cloud Firestore:** Hosts cloud persistence components, real-time document change dispatchers, and state caching targets.

### Presentation System
* **Tailwind CSS:** Manages exact positioning coordinates, tracking attributes, structural grid allocations, and crisp user interactions.
* **Lucide React:** Yields lightweight, vector-clean SVG visual icons (`Trash2`) tailored for optimized interaction points.

---

## 📐 Architecture & Workspace Layout

The code hierarchy maps directly to the active system folder configurations:

```text
src/
├── 📁 assets/             # Static graphics, corporate media assets, and logos (e.g., logo.png)
├── 📁 components/         # Presentation layers and functional interface components
│   └── AppointmentPanel.tsx  # Interactive booking container featuring contextual slot validations
├── 📁 config/             # Third-party configurations and external service wrappers
│   └── firebase.ts        # Production Firebase instantiation and Firestore engine initialization
├── 📁 types/              # Centralized TypeScript static type contracts
│   └── clinic.ts          # Strictly typed data structures for Doctor and Appointment profiles
├── 📁 utils/              # Pure, isolated helper utility functions
│   ├── dateUtils.ts       # ISO schema conversions (YYYY-MM-DD) vs display formatters (DD-MM-YYYY)
│   └── timeUtils.ts       # 35-minute block generators and operational time boundaries
├── App.tsx                # Main entry orchestration engine syncing Firestore collections to active grid UI
├── index.css              # Global Tailwind CSS utility layers and structural canvas injections
└── main.tsx               # System DOM mounting script
```

---

## 📁 Source Code Blueprint Specifications
Technical Contract Definition `(src/types/clinic.ts)`

```
export interface Doctor {
    id: string;
    name: string;
    specialty: string;
} 

export interface Appointment {
    id: string;
    patientName: string;
    doctorId: string;
    date: string;       // Expected ISO structure format: YYYY-MM-DD
    startTime: string;  // Bound to fixed block limits: HH:MM
    endTime: string;    // Auto-computed offset: HH:MM (+35 mins)
}
```

Pure Validation Systems `(src/utils/timeUtils.ts)`
The scheduling timeline constructs deterministic array matrices through plain mathematical offsets:

```
let currentMinutes = 8 * 60; // Starts at 08:00
const endMinutes = 18 * 60;  // Ends at 18:00
// Increments consistently by +35 minutes per loop iteration
```

---

## 🔧 Installation & Initialization Guide

1. Replicate Project Workspace

```
git clone [https://github.com/your-username/clinica-collab.git](https://github.com/your-username/clinica-collab.git)
cd clinica-collab
```

2. Standard Dependency Deployment

```
npm install
```

3. Review Cloud Infrastructure Integration
The connection layers communicate directly with active Firestore collection channels (medicos and agendamentos) using the cloud app configuration initialized in `src/config/firebase.ts`:

```
const firebaseConfig = {
    apiKey: "AIzaSyDLs1NOU3dkR9L-oNpzlPySD1sw0srSnOs",
    authDomain: "clinica-collab.firebaseapp.com",
    projectId: "clinica-collab",
    storageBucket: "clinica-collab.firebasestorage.app",
    messagingSenderId: "12081009495",
    appId: "1:12081009495:web:9e3655407f0fb1f74ba412"
};
```


4. Boot Up Local Workspace

```
npm run dev
```

Navigate your browser to the local loopback proxy address output in your terminal shell `(http://localhost:5173)`.

## 📝 Licença
Este projeto é um software de código aberto distribuído sob as condições da Licença MIT.

Developed by Rebeca Erdman
