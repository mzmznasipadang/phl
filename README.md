# README for PT. Pahala Harapan Lestari Website

---

## **Introduction**

Welcome to the official website repository of PT. Pahala Harapan Lestari, a renowned national shipyard company based in Indonesia. This website provides a comprehensive overview of the company's dedication, skills, and achievements in shipbuilding, repair, and manufacturing.

---

## **Website Features & Structure**

### **1. Home**
- **Brief Company Description:** An introduction to PT. Pahala Harapan Lestari and its dominance in the shipyard industry.
- **Navigation Links:** Direct links to the Vessels, Services, and About pages for user convenience.
- **Recent Customer Marquee:** Showcasing some of our esteemed clientele, including Pertamina Trans Kontinental, Kemenhub, Bakamla, Kementerian Kelautan dan Perikanan, Adaro Energy, among others.

### **2. Vessels**
- **Dedication Overview:** A short description showcasing PT. PHL's unwavering commitment to excellence in vessel-making.
- **Boat Production Showcase:** Features a collection of boats produced by PT. PHL including tug boats, barge boats, oil barges, pilot boats, and more.

### **3. Services**
- **Dedication Overview:** A brief description highlighting PT. PHL's dedication to providing top-notch ship-related services.
- **Recent Works Showcase:** Presents a selection of PT. PHL's latest projects in ship services, ranging from component manufacturing to product distribution via ship.

### **4. About**
- **Company Overview:** A succinct presentation of PT. PHL's vast experience, skills, knowledge, and passion in the shipyard industry.
- **Company Principles:** Highlights the company's vision, mission, and QHSE policy.
- **Achievements:** Showcases some of the significant awards and accolades received by PT. PHL.
- **Downloadable Company Profile:** Users can download a detailed company profile for a more in-depth look at PT. PHL.

### **5. Contact**
- **Contact Card:** Displays a Google Maps embed pinpointing PT. PHL's location.
- **Contact Form:** A user-friendly form for visitors to reach out to PT. PHL. The form requires inputs like name, email, company name, phone, and a message, which are then directly forwarded to the PT. PHL team.

---

## **Maintainer Notes**

- **Contact records:** the contact form writes to a Google Sheet through a Google Apps Script. Keep the sheet link out of this repo (the repo and the web host are public). Records can be cleared, but the first row must not change: the script maps form fields to it by name. Do not rename the sheet's page or title.
- **"Services" vs "Repairs":** the Services page is shown to visitors as "Repairs" (Perbaikan / 维修), but file and asset names still say `services`.
- **Vessel specs:** each vessel caption on `vessels.html` (all three languages) has a hidden spec list. Fill in the empty `<dd>` values, then delete `hidden` from the `<dl>` to show it. Spec values are set in IBM Plex Mono automatically.
- **Images:** photos are JPEGs at most ~2400px wide. Shrink large new photos before adding them, e.g. `sips -s format jpeg -s formatOptions 50 -Z 1800 in.jpg --out out.jpg` (leave out `-Z` for photos already smaller than that; it also enlarges).

---

## **Website Development & Design Credits**

- **Built By:** Jessica Lynn & Victor Chandra
- **Technologies Used:** Figma, HTML, CSS, and JS

---

## **Feedback & Support**

For any feedback or support regarding the website, please refer to the contact page or reach out to the developers mentioned above.

---

Thank you for visiting PT. Pahala Harapan Lestari's official website. We hope to provide you with a seamless and informative browsing experience.
