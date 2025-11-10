🧩 1. Project Overview
----------------------

**Challenge:** FSD Intern Assignment — CSV Runner Dashboard

What I Built:A responsive and interactive web app where users can:

*   Upload a .csv file of running data (date, person, miles run).
    
*   Automatically validate headers and data format.
    
*   Display overall and per-person running metrics (average, min, max).
    
*   Visualize results with clean, green-themed bar and line charts.
    
*   Handle invalid or empty CSV uploads gracefully with alerts.
    

**Tech Stack:**

*   **Next.js 14** (App Router)
    
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

| Tool    | Version              | Purpose                 |
| ------- | -------------------- | ----------------------- |
| Node.js | ≥ 18.x               | Required to run Next.js |
| npm     | ≥ 9.x                | For package management  |
| Git     | Optional             | For version control     |
| Browser | Latest Chrome / Edge | For viewing app         |


🪜 4. Setup Instructions
------------------------

### 🔹 Installation

* `git clone https://github.com/<your-username>/csv-runner-dashboard.git`.
* `cd csv-runner-dashboard`.
* `npm install`.
* `npm run dev`.

### 🔹 Seeding Data 

You can test using sample CSV files provided in the /public folder:

*   sample.csv — valid data
    
*   invalid\_headers.csv — wrong header test
    
*   empty.csv — empty file test
    

▶️ 5. Run & Verify
------------------

### Start the development server:

` npm run dev`

Visit:👉 http://localhost:3000

### ✅ Test Each Acceptance Item

TaskHow to Verify**CSV Upload & Validation**Upload sample.csv → data and charts display. Upload invalid\_headers.csv → red alert.**Error Handling**Try uploading an empty CSV → error alert appears.**Overall Metrics**Check that Average, Min, Max show correctly.**Per-person Metrics & Charts**Bar chart shows each person’s total miles.**Line Chart**Shows miles run per date.**Responsive Layout**Resize window — layout adjusts automatically.

🌟 6. Features & Limitations
----------------------------

### ✅ Features

*   CSV upload & parsing via **Papaparse**
    
*   Validation for incorrect or empty files
    
*   Clean UI built with **shadcn/ui** components (Button, Input, Alert, Card)
    
*   Responsive design for all screen sizes
    

### ⚠️ Limitations
    
*   Only handles small CSV files (not optimized for very large datasets)
    
*   Currently single-user (no login system)
    

### 💡 Future Improvements

*   Add user authentication and CSV history storage
    
*   Allow exporting analytics to PDF or Excel
    
*   Add more charts (e.g., weekly totals, comparison trends)
    
*   Integrate database (MongoDB or Supabase) for storing records
    

🧠 7. Notes on Architecture
---------------------------


### 🧩 State & Data Flow

*   CsvUploader parses CSV → sends parsed data to page.tsx.
    
*   page.tsx computes metrics and passes them to MetricsCard & ChartsSection.
    
*   Components are **client-side** for interactivity ("use client").
    

♿ 8. Accessibility & UI
-----------------------

| Feature                  | Description                                                         |
| ------------------------ | ------------------------------------------------------------------- |
| **Focus Management**     | All inputs and buttons are keyboard-accessible                      |
| **Labels**               | Buttons and alerts use clear text labels                            |
| **Contrast**             | Faint green tones but with sufficient contrast in dark/light themes |
| **Spacing & Typography** | Used Tailwind’s `space-y` and `text-lg` for clean layout            |
| **Responsiveness**       | Grid + Flexbox ensure smooth scaling                                |
| **Alert Feedback**       | Error alerts appear clearly when invalid CSV is uploaded            |


🖼️ UI Preview 
---------------------------

<img width="1896" height="1109" alt="image" src="https://github.com/user-attachments/assets/1bc48bbf-d52b-48c7-9d8c-3d4dc18e6634" />


💚 Credits
----------

Built with ❤️ using:

*   [Next.js](https://nextjs.org/)
    
*   [shadcn/ui](https://ui.shadcn.com/)
    
*   Recharts
    
*   [Papaparse](https://www.papaparse.com/)
    
*   [Tailwind CSS](https://tailwindcss.com/)
