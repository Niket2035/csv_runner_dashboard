🧩 1. Project Overview
----------------------

**Challenge:** FSD Intern Assignment — CSV Runner Dashboard

**What I Built:**A responsive and interactive web app where users can:

*   Upload a .csv file of running data (date, person, miles run).
    
*   Automatically validate headers and data format.
    
*   Display overall and per-person running metrics (average, min, max).
    
*   Visualize results with clean, green-themed bar and line charts.
    
*   Handle invalid or empty CSV uploads gracefully with alerts.
    

**Tech Stack:**

*   **Next.js 14** (App Router)
    
*   **TypeScript**
    
*   **shadcn/ui** for UI components
    
*   **Tailwind CSS** for styling
    
*   **Papaparse** for CSV parsing
    
*   **Recharts** (integrated with shadcn chart UI) for visualization
    

⚙️ 2. Assumptions
-----------------

*   date,person,miles run
    
*   Dates are treated as simple strings; no timezone conversions.
    
*   “Miles run” values are numeric (no text values).
    
*   Only admin (single-user) upload is supported — no auth required.
    
*   No database persistence (in-memory data display only).
    

🧰 3. Prerequisites
-------------------

ToolVersionPurposeNode.js≥ 18.xRequired to run Next.jsnpm≥ 9.xFor package managementGitOptionalFor version controlBrowserLatest Chrome / EdgeFor viewing app

🪜 4. Setup Instructions
------------------------

### 🔹 Installation

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com//csv-runner-dashboard.git  cd csv-runner-dashboard  npm install   `

### 🔹 Environment Variables

No external API keys are needed for this project.Still, you can create a placeholder file:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cp .env.example .env   `

### 🔹 Seeding Data (Optional)

You can test using sample CSV files provided in the /public folder:

*   sample.csv — valid data
    
*   invalid\_headers.csv — wrong header test
    
*   empty.csv — empty file test
    

▶️ 5. Run & Verify
------------------

### Start the development server:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run dev   `

Visit:👉 http://localhost:3000

### ✅ Test Each Acceptance Item

TaskHow to Verify**CSV Upload & Validation**Upload sample.csv → data and charts display. Upload invalid\_headers.csv → red alert.**Error Handling**Try uploading an empty CSV → error alert appears.**Overall Metrics**Check that Average, Min, Max show correctly.**Per-person Metrics & Charts**Bar chart shows each person’s total miles.**Line Chart**Shows miles run per date.**Responsive Layout**Resize window — layout adjusts automatically.

🌟 6. Features & Limitations
----------------------------

### ✅ Features

*   CSV upload & parsing via **Papaparse**
    
*   Validation for incorrect or empty files
    
*   Clean UI built with **shadcn/ui** components (Button, Input, Alert, Card)
    
*   Faint green theme for a relaxing visual experience
    
*   Responsive design for all screen sizes
    
*   Accessibility support (keyboard focus, proper contrast)
    
*   Light/Dark mode supported automatically
    

### ⚠️ Limitations

*   No data persistence (refresh clears uploaded data)
    
*   Only handles small CSV files (not optimized for very large datasets)
    
*   Currently single-user (no login system)
    

### 💡 Future Improvements

*   Add user authentication and CSV history storage
    
*   Allow exporting analytics to PDF or Excel
    
*   Add more charts (e.g., weekly totals, comparison trends)
    
*   Integrate database (MongoDB or Supabase) for storing records
    

🧠 7. Notes on Architecture
---------------------------

### 📁 Folder Structure

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   csv-runner-dashboard/  │  ├── app/  │   ├── page.tsx                # Main dashboard page  │   ├── components/  │   │   ├── CsvUploader.tsx     # Upload + validation logic  │   │   ├── MetricsCard.tsx     # Displays overall metrics  │   │   └── ChartsSection.tsx   # Renders shadcn-styled charts  │  ├── components/ui/              # shadcn/ui reusable components  │   ├── button.tsx  │   ├── input.tsx  │   ├── alert.tsx  │   ├── card.tsx  │   └── chart.tsx  │  ├── public/  │   ├── sample.csv  │   ├── invalid_headers.csv  │   └── empty.csv  │  ├── .env.example  ├── README.md  ├── package.json  └── tailwind.config.js   `

### 🧩 State & Data Flow

*   CsvUploader parses CSV → sends parsed data to page.tsx.
    
*   page.tsx computes metrics and passes them to MetricsCard & ChartsSection.
    
*   Components are **client-side** for interactivity ("use client").
    

♿ 8. Accessibility & UI
-----------------------

FeatureDescription**Focus Management**All inputs and buttons are keyboard-accessible**Labels**Buttons and alerts use clear text labels**Contrast**Faint green tones but with sufficient contrast in dark/light themes**Spacing & Typography**Used Tailwind’s space-y and text-lg for clean layout**Responsiveness**Grid + Flexbox ensure smooth scaling**Alert Feedback**Error alerts appear clearly when invalid CSV is uploaded

🖼️ UI Preview (Light Mode)
---------------------------

🟢 Faint green gradient background🟩 Upload section centered with glass-card style📊 Bar & Line charts with pastel green theme⚠️ Red alert for invalid CSV

💚 Credits
----------

Built with ❤️ using:

*   [Next.js](https://nextjs.org/)
    
*   [shadcn/ui](https://ui.shadcn.com/)
    
*   Recharts
    
*   [Papaparse](https://www.papaparse.com/)
    
*   [Tailwind CSS](https://tailwindcss.com/)
