uses java.io.*
uses java.util.regex.*
uses java.util.*
uses java.text.SimpleDateFormat

var piiPatterns = new HashMap<String, String>()
piiPatterns.put("Email", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")
piiPatterns.put("Phone", "\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b")
piiPatterns.put("SSN", "\\b\\d{3}-\\d{2}-\\d{4}\\b")
piiPatterns.put("Credit Card", "\\b\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}[\\s-]?\\d{4}\\b")

var reportLog = new StringBuilder()
var timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date())
reportLog.append("PII Scan Report - ${timestamp}\n")
reportLog.append("=================================================\n\n")

var gsFiles = new File(".").listFiles().where(\ f -> f.Name.endsWith(".gs"))

for (file in gsFiles) {
  reportLog.append("Scanning file: ${file.Name}\n")
  var content = new String(java.nio.file.Files.readAllBytes(file.toPath()))
  var foundPII = false
  
  for (entry in piiPatterns.entrySet()) {
    var pattern = Pattern.compile(entry.Value)
    var matcher = pattern.matcher(content)
    
    while (matcher.find()) {
      if (!foundPII) {
        reportLog.append("  PII DETECTED:\n")
        foundPII = true
      }
      reportLog.append("    ${entry.Key}: ${matcher.group()}\n")
    }
  }
  
  if (!foundPII) {
    reportLog.append("  No PII detected\n")
  }
  reportLog.append("\n")
}

var reportFile = new FileWriter("pii-scan-report.log")
reportFile.write(reportLog.toString())
reportFile.close()

print("PII scan completed. Report saved to: pii-scan-report.log")
print(reportLog.toString())