import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import XLSX from "xlsx";
import fs from "fs";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = "./demoRequests.xlsx";

app.post("/api/demo", (req, res) => {
  const { name, businessName, phone, city, consent } = req.body;

  // If file exists, read it; else create new
  let workbook;
  let worksheet;
  if (fs.existsSync(FILE_PATH)) {
    workbook = XLSX.readFile(FILE_PATH);
    worksheet = workbook.Sheets["Requests"];
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Requests");
  }

  // Convert sheet to JSON, append new record
  const data = XLSX.utils.sheet_to_json(worksheet);
  data.push({
    Name: name,
    BusinessName: businessName,
    Phone: phone,
    City: city,
    Consent: consent ? "Yes" : "No",
    Date: new Date().toLocaleString(),
  });

  // Write back to file
  const newSheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets["Requests"] = newSheet;
  XLSX.writeFile(workbook, FILE_PATH);

  res.status(200).json({ message: "Data added successfully" });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
