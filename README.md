# SecureUs

SecureUs is a web platform that provides real-time safety scores for locations in Bangalore, with a focus on helping women make more informed decisions about where to live, work, and travel.

Using a combination of open crime datasets, live incident reports (via a news API), and geospatial data from the Google Maps API, SecureUs computes a location-specific safety score and explains why an area is rated the way it is.

> Deployed project / demo: [SecureUs](<add-demo-or-video-link-here>)  
> GitHub repo: [SecureUs](<add-this-repo-url-here>)

---

## Features

- Interactive map interface  
  - Search by address or drop a pin anywhere in India.  
  - View color-coded regions by safety score.

- Safety score for each location  
  - Aggregates multiple signals:  
    - Incident frequency and density  
    - Type/severity of crimes  
    - Time-of-day effects  
  - Outputs a single, easy-to-understand numeric score plus a qualitative label (e.g., Low / Medium / High risk).

- Scoring model and explanation  
  - Weighted model combines historical and near real-time data.  
  - Users see why an area is considered safe/unsafe (for example: “High incident density of theft at night in the last X months”).

- Data-driven backend  
  - Pipelines to periodically pull and clean crime/incident data.  
  - Integration with a news API to capture recent safety-related events.  
  - Geocoding and reverse geocoding via Google Maps API.

- Built with real stakeholders  
  - Piloted and iterated with feedback from local organizations and the Office of the Director General of Police (Karnataka).

---

## High-Level Architecture

SecureUs is structured around three main components:

1. **Data Layer**  
   - Ingests crime and incident data from:
     - Government / public crime datasets  
     - News API (safety-related incidents)  
   - Cleans and normalizes data.  
   - Persists to a database (e.g., PostgreSQL / MongoDB).  
   - (Adjust this to your actual database.)

2. **Backend API**  
   - Exposes REST endpoints for:
     - `/score?lat=...&lng=...` – compute safety score for a given coordinate  
     - `/explain?lat=...&lng=...` – return factors contributing to the score  
     - `/heatmap` – return aggregated data to render a heatmap  
   - Handles:
     - Scoring logic  
     - Time-of-day and incident weighting  
     - Rate limiting and input validation

3. **Frontend Web App**  
   - Interactive map (Google Maps or similar mapping library).  
   - Search bar, pin-drop interaction, and location selection.  
   - Visual display of:
     - Safety score  
     - Explanation and recent incidents  
     - Color-coded risk visualization.

Note: Update the tech stack and API routes above to exactly match your implementation.

---

## Tech Stack

Update this section to match your actual codebase. Example:

- **Frontend:** `<React / Vue / plain JS + HTML/CSS>`  
- **Backend:** `<Flask / Django / Node.js / Express / etc.>`  
- **Database:** `<PostgreSQL / MongoDB / SQLite / etc.>`  
- **APIs:**
  - Google Maps API (geocoding, maps)
  - News API for incident reports
- **Other:**
  - `<Any libraries for charts, mapping (Leaflet, Mapbox, etc.)>`

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url-here>
cd secureus
