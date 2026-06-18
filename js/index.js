import { getSalesCoffee } from "./requirements.js";

const processSalesCoffee = async () => {
    try {
        const xmlString = await getSalesCoffee();

        const parser = new DOMParser();
        const data = parser.parseFromString(xmlString, "application/xml");

        const rows = data.getElementsByTagName("row");

        const tableContainer = document.getElementById("example");

        tableContainer.innerHTML = `
            <thead>
                <tr>
                    <th class="px-4 py-2">Hour of Day</th>
                    <th class="px-4 py-2">Cash Type</th>
                    <th class="px-4 py-2">Money</th>
                    <th class="px-4 py-2">Coffee Name</th>
                    <th class="px-4 py-2">Time of Day</th>
                    <th class="px-4 py-2">Weekday</th>
                    <th class="px-4 py-2">Month</th>
                    <th class="px-4 py-2">Weekday Sort</th>
                    <th class="px-4 py-2">Month Sort</th>
                    <th class="px-4 py-2">Date</th>
                    <th class="px-4 py-2">Time</th>
                </tr>
            </thead>
            <tbody id="sales-tbody"></tbody>
        `;

        const tbody = document.getElementById("sales-tbody");

        let html = "";

        for (let row of rows) {
            const hourOfDay  = row.getElementsByTagName("hour_of_day")[0].textContent;
            const cashType   = row.getElementsByTagName("cash_type")[0].textContent;
            const money      = row.getElementsByTagName("money")[0].textContent;
            const coffeeName = row.getElementsByTagName("coffee_name")[0].textContent;
            const timeOfDay  = row.getElementsByTagName("Time_of_Day")[0].textContent;
            const weekday    = row.getElementsByTagName("Weekday")[0].textContent;
            const monthName  = row.getElementsByTagName("Month_name")[0].textContent;
            const weekdaySort = row.getElementsByTagName("Weekdaysort")[0].textContent;
            const monthSort  = row.getElementsByTagName("Monthsort")[0].textContent;
            const date       = row.getElementsByTagName("Date")[0].textContent;
            const time       = row.getElementsByTagName("Time")[0].textContent;

            html += `<tr>
                <td class="border px-4 py-2">${hourOfDay}</td>
                <td class="border px-4 py-2">${cashType}</td>
                <td class="border px-4 py-2">${money}</td>
                <td class="border px-4 py-2">${coffeeName}</td>
                <td class="border px-4 py-2">${timeOfDay}</td>
                <td class="border px-4 py-2">${weekday}</td>
                <td class="border px-4 py-2">${monthName}</td>
                <td class="border px-4 py-2">${weekdaySort}</td>
                <td class="border px-4 py-2">${monthSort}</td>
                <td class="border px-4 py-2">${date}</td>
                <td class="border px-4 py-2">${time}</td>
            </tr>`;
        }

        tbody.innerHTML = html;

        $("#example").DataTable({ "order": [] });

    } catch (error) {
        alert(error.message);
    }
};

window.addEventListener("load", processSalesCoffee);