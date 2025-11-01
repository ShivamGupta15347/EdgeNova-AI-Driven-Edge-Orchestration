# Esper Dashboard Clone

A React TypeScript application that replicates the Esper device management dashboard UI with MQTT command functionality.

## Features

- 📊 **Dashboard UI** - Complete replica of the Esper dashboard with charts and statistics
- 🔒 **Device Security Overview** - Risk indicators and security status
- 💻 **OS Type Distribution** - Visual breakdown of device operating systems
- 🗺️ **Device Location Mapping** - Interactive map visualization
- 📱 **Command Prompt Interface** - MQTT integration for sending commands
- 🎨 **Modern UI** - Responsive design matching the original dashboard

## MQTT Integration

The application includes a command prompt interface that connects to:
- **MQTT Broker**: `mqtts://queue-dev.esper.cloud:443`
- **Topic**: `hack-2k25-commands`
- **Protocol**: MQTT over TLS (mqtts)

### Command Prompt Features

- Real-time MQTT connection status
- Secure message publishing
- JSON payload formatting
- Success/error notifications
- Connection retry logic

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Usage

1. **Dashboard Navigation**: Use the sidebar to navigate between different sections (currently Dashboard is active)
2. **Command Prompt**: Click "Command Prompt" in the sidebar to open the MQTT interface
3. **Send Commands**: Type your command and press Enter or click Send
4. **Monitor Status**: View connection status and message logs in real-time

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **MQTT.js** - MQTT client library
- **Recharts** - Chart visualization
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx           # Main dashboard component
│   ├── Sidebar.tsx            # Navigation sidebar
│   ├── CommandPrompt.tsx      # MQTT command interface
│   ├── DeviceLastSeenChart.tsx
│   ├── DeviceSecurityChart.tsx
│   ├── OSTypeChart.tsx
│   ├── DeviceLocationMap.tsx
│   ├── AlertsSection.tsx
│   └── RecentPipelines.tsx
├── App.tsx                    # Main application component
├── App.css                    # Application styles
└── index.css                  # Global styles
```

## License

This project is created for demonstration purposes as part of hack-2k25.

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
