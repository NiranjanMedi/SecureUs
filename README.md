# SecureUs

SecureUs is a web platform that provides real-time-style safety scores for locations in Bangalore, with a focus on helping women make more informed decisions about where to live, work, and travel.

Using a combination of open crime datasets, incident reports (including data originally gathered via a news API), and geospatial information from the Google Maps API, SecureUs computes a location-specific safety score and explains why an area is rated the way it is. All data is preprocessed offline in Python (Pandas, NumPy) and stored in a static database that the React frontend loads at runtime.

> Deployed project / demo: [SecureUs](<add-demo-or-video-link-here>)  
> GitHub repo: [SecureUs](<add-this-repo-url-here>)

---

## Features

- Interactive map interface  
  - Built with React and the Google Maps JavaScript API.  
  - Search by address or pan/zoom the map over Bangalore.  
  - View color-coded regions by safety score.

- Safety score for each location  
  - Aggregates multiple signals from preprocessed data, including:  
    - Incident frequency and density  
    - Type and severity of crimes  
    - Time-of-day effects (captured in the preprocessing stage)  
  - Outputs a single, easy-to-understand numeric score plus a qualitative label (for example, Low / Medium / High risk).

- Scoring model and explanation  
  - Weighted model combines historical and relatively recent incident data.  
  - Users see why an area is considered safe or unsafe (for example: “High density of reported theft at night in the last X months”).

- Static, data-driven design  
  - All heavy data processing and cleaning is done offline using Python (Pandas, NumPy).  
  - The React app loads static JSON/GeoJSON data files, so the deployed site does not depend on a live backend service.

- Built with real stakeholders  
  - Piloted and iterated with feedback from local organizations and the Office of the Director General of Police (Karnataka).

---

## High-Level Architecture

SecureUs is structured around two main pieces:

1. **Offline Data Processing (Python)**  
   - Collects and merges:
     - Public/government crime datasets  
     - Incident data originally gathered via a news API or similar feeds  
   - Cleans, aggregates, and geocodes incidents.  
   - Computes or precomputes the metrics needed for scoring (density, recency, incident types, time-of-day buckets, etc.).  
   - Outputs static files (for example, JSON/GeoJSON/CSV) that are checked into the repository or deployed with the frontend.

2. **React Frontend (Static Web App)**  
   - React.js app that:
     - Renders a Google Map (Google Maps JavaScript API).  
     - Loads the preprocessed static data files at runtime.  
     - Computes or looks up the safety score for a selected location (for example, by interpolating from nearby grid cells or regions).  
     - Displays:
       - Safety score  
       - Qualitative label (Safe / Moderate / Risky)  
       - Short explanation and relevant incident summaries  
