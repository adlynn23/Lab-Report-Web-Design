const projects = [
  { id: 1, name: 'SEO Audit', price: 'RM500' },
  { id: 2, name: 'Web Design', price: 'RM1500' },
  { id: 3, name: 'App Development', price: 'RM3000' }
];

// 1. Cari tapak table tadi guna ID
const tableBody = document.getElementById('project-data');

projects.forEach(project => {
    // Bina baris (row) baru
    let row = `<tr>
        <td>${project.name}</td>
        <td>${project.price}</td>
        <td>
            <button class="btn btn-primary" onclick="scrollToForm()">Request Quote</button>
        </td>
    </tr>`;
    
    // Tambah ke dalam table
    tableBody.innerHTML += row;
});

// Fungsi untuk skrol ke form bila butang diklik
function scrollToForm() {
    document.getElementById('quotation-form').scrollIntoView({behavior: 'smooth'});
}

//Voucher part
function voucher() {
    let code =document.getElementById("voucher").value;


    if (!code.startsWith('DEV')) {
        alert("Invalid voucher code!!")
        return false;
    }
}