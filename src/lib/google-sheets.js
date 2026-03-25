import Papa from "papaparse";

const CSV_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CSV_URL;

export async function getCafes() {
  try {
    // Fetch fresh data always (cache disabled)
    const response = await fetch(CSV_URL, { next: { revalidate: 0 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.status} ${response.statusText}`);
    }

    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          // Normalize data keys (e.g., "Jam Operasional" -> "jam_operasional")
          const normalizedData = results.data.map((item, index) => {
            const normalized = { id: index.toString() };
            for (const key in item) {
              const cleanKey = key.trim().toLowerCase().replace(/ /g, "_");
              normalized[cleanKey] = item[key] ? item[key].trim() : "";
            }
            return normalized;
          });
          resolve(normalizedData);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    console.error("Error fetching cafes from Google Sheets:", error);
    return [];
  }
}
